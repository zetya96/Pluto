package hu.elte.alkfejl.pluto.controller;

import hu.elte.alkfejl.pluto.model.User;
import hu.elte.alkfejl.pluto.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
    @Secured({ "ROLE_USER","ROLE_ADMIN" })
    public Iterable<User> getAll() {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    @Secured({ "ROLE_USER","ROLE_ADMIN" })
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
    public ResponseEntity create(@RequestBody User user) {
        Optional<User> oUser = userRepository.findByUsername(user.getUsername());
        if (oUser.isPresent()) {
            return ResponseEntity
                    .status(HttpStatus.FORBIDDEN)
                    .body("Már van ilyen felhasználó!");
        }
        user.setUserRole();
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        System.out.println("user " + user.getUsername() + " created!");
        System.out.println((user.getPassword()));
        return ResponseEntity.ok(userRepository.save(user));
    }
}
