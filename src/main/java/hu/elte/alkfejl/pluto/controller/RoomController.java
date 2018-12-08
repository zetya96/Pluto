package hu.elte.alkfejl.pluto.controller;

import hu.elte.alkfejl.pluto.model.Room;
import hu.elte.alkfejl.pluto.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/rooms")
@Secured({ "ROLE_USER","ROLE_ADMIN" })
public class RoomController {

    @Autowired
    private RoomRepository roomRepository;

    @GetMapping("")

    public Iterable<Room> getAll() {
        return roomRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Room> getById(@PathVariable Integer id) {
        Optional<Room> room = roomRepository.findById(id);
        if (room.isPresent()) {
            return ResponseEntity.ok(room.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    @Secured({"ROLE_ADMIN"})
    public ResponseEntity<Room> create(@RequestBody Room room) {
        if (room.getId() != null && roomRepository.existsById(room.getId())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
        return ResponseEntity.ok(roomRepository.save(room));


    }
    @DeleteMapping("/{id}")
    @Secured({"ROLE_ADMIN"})
    public ResponseEntity delete(@PathVariable Integer id) {
        Optional<Room> oSong = roomRepository.findById(id);
        if (oSong.isPresent()) {
            roomRepository.delete(oSong.get());
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
