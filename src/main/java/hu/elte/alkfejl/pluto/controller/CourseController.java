package hu.elte.alkfejl.pluto.controller;

import hu.elte.alkfejl.pluto.model.Course;
import hu.elte.alkfejl.pluto.model.Room;
import hu.elte.alkfejl.pluto.model.User;
import hu.elte.alkfejl.pluto.repository.CourseRepository;
import hu.elte.alkfejl.pluto.repository.RoomRepository;
import hu.elte.alkfejl.pluto.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/courses")
@Secured({ "ROLE_USER", "ROLE_ADMIN" })
public class CourseController {

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("")
    public Iterable<Course> getAll() {
        return courseRepository.findAll();
    }

    @GetMapping("/{id}")

    public ResponseEntity<Course> get(@PathVariable Integer id) {
        Optional<Course> playlist = courseRepository.findById(id);
        if (playlist.isPresent()) {
            return ResponseEntity.ok(playlist.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PostMapping("/{id}")
    public ResponseEntity<List<User>> addUser(@PathVariable Integer id) {
        Optional<Course> oCourse = courseRepository.findById(id);
        if(!oCourse.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        User user = userRepository.findByUsername(currentPrincipalName).get();


        Course course = oCourse.get();

        course.getStudents().add(user);

        courseRepository.save(course);
        return ResponseEntity.ok(course.getStudents());

    }
    @PostMapping("")
    public ResponseEntity<Course> create(@RequestParam String name, @RequestParam int roomId, @RequestParam String date ) {
        Course course = new Course(name,date);
        if (course.getId() != null && courseRepository.existsById(course.getId())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }

        //Teacher regisztrálása (éppen belépett felhasználó
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        User user = userRepository.findByUsername(currentPrincipalName).get();
        course.setTeacher(user);

        //Szoba regisztrálása (ID alapján)
        Optional<Room> oRoom = roomRepository.findById(roomId);
        if(!oRoom.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        course.setRoom(oRoom.get());
        return ResponseEntity.ok(courseRepository.save(course));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Integer id) {
        Optional<Course> oPlaylist = courseRepository.findById(id);
        if (oPlaylist.isPresent()) {
            courseRepository.delete(oPlaylist.get());
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
