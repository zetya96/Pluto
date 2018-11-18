package hu.elte.alkfejl.pluto.controller;

import hu.elte.alkfejl.pluto.model.User;
import hu.elte.alkfejl.pluto.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("")
    @Secured({ "ROLES_USER" })
    public Iterable<User> getAll() {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    @Secured({ "ROLES_USER" })
    public ResponseEntity<User> get(@PathVariable Integer id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @PostMapping("")
    public ResponseEntity<User> create(@RequestBody User user) {
        Optional<User> oUser = userRepository.findByUserName(user.getUserName());
        if (oUser.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
      //  user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(User.Role.ROLE_STUDENT);
        return ResponseEntity.ok(userRepository.save(user));
    }
}
