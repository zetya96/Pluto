package hu.elte.alkfejl.pluto.controller;

import hu.elte.alkfejl.pluto.model.Course;
import hu.elte.alkfejl.pluto.repository.CourseRepository;
import hu.elte.alkfejl.pluto.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/courses")
@Secured({ "ROLES_STUDENT" })
public class CourseController {

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private RoomRepository roomRepository;

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

    @PostMapping("/")
    public ResponseEntity<Course> create(@RequestBody Course course) {
        if (course.getId() != null && courseRepository.existsById(course.getId())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
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
