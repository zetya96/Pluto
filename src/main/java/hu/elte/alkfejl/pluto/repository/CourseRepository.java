package hu.elte.alkfejl.pluto.repository;

import hu.elte.alkfejl.pluto.model.Course;
import org.springframework.data.repository.CrudRepository;

public interface CourseRepository extends CrudRepository<Course, Integer> {
}
