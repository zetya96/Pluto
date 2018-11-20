package hu.elte.alkfejl.pluto.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    private String name;

    @ManyToOne
    private User teacher;

    @ManyToMany
    private List<User> students;

   // @ManyToOne
   // private Room room;
}
