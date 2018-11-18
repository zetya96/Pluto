package hu.elte.alkfejl.pluto.repository;

import hu.elte.alkfejl.pluto.model.Room;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends CrudRepository<Room, Integer> {
}
