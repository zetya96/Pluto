package hu.elte.alkfejl.pluto.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String userName;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    private String name;


    @OneToMany(mappedBy = "teacher", cascade = CascadeType.REMOVE)
    private List<Course> courses_T; // amikor ő tart

    @ManyToMany(mappedBy = "students", cascade = CascadeType.REMOVE)
    private List<Course> courses_S; // amikre ő jelentkezett

}
