package hu.elte.alkfejl.pluto.repository;

import hu.elte.alkfejl.pluto.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    Optional<User> findByUserName(String username);
}
