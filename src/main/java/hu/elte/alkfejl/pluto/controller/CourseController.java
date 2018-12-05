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
        Optional<Course> course = courseRepository.findById(id);
        if (course.isPresent()) {
            return ResponseEntity.ok(course.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PostMapping("/{id}")
    public ResponseEntity<String> addUser(@PathVariable Integer id) {
        Optional<Course> oCourse = courseRepository.findById(id);
        if(!oCourse.isPresent()) {
            System.out.print("No such course");
            return ResponseEntity.notFound().build();
        }


        User user = GetAuthenticatedUser();
        Course course = oCourse.get();
        if(course.getStudents().contains(user) || course.getTeacher() == user) {
            System.out.print("already joined");
            return ResponseEntity
                    .status(HttpStatus.FORBIDDEN)
                    .body("Már jelentkeztél!");
        }
        System.out.print("joined");
        course.getStudents().add(user);

        courseRepository.save(course);
        return ResponseEntity.ok().build();

    }
    @PostMapping("")
    public ResponseEntity<Course> create(@RequestParam String name, @RequestParam int roomId, @RequestParam String date ) {
        Course course = new Course(name,date);
        if (course.getId() != null && courseRepository.existsById(course.getId())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }

        //Teacher regisztrálása (éppen belépett felhasználó

        User user = GetAuthenticatedUser();
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
    @GetMapping("/mycourses")
    public ResponseEntity<List<Course>> getMyCourses() {
        User user = GetAuthenticatedUser();
        return ResponseEntity.ok(user.getCourses_S());
    }
    private User GetAuthenticatedUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        return userRepository.findByUsername(currentPrincipalName).get();
    }
}
