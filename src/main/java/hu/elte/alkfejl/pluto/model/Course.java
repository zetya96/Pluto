package hu.elte.alkfejl.pluto.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    @ManyToOne
    @JsonIgnoreProperties(value="courses_T")
    private User teacher;

    @ManyToMany
    @JsonIgnore
    private List<User> students;

    @ManyToOne
    private Room room;

    private String date;
    public Course(String name,String date) {
        this.name = name;
        this.date = date;
    }


    public Integer getId() {
        return id;
    }

    public void setTeacher(User teacher) {
        this.teacher = teacher;
    }

    public List<User> getStudents() {
        return students;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public User getTeacher() {
        return teacher;
    }
}
