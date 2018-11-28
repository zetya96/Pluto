package hu.elte.alkfejl.pluto.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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

   // @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String username;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    private String fullname;

    private String email;


    @OneToMany(mappedBy = "teacher", cascade = CascadeType.REMOVE)
    private List<Course> courses_T; // amikor ő tart



    @ManyToMany(mappedBy = "students", cascade = CascadeType.REMOVE)
    private List<Course> courses_S; // amikre ő jelentkezett


    @Enumerated(EnumType.STRING)
    private Role role;

    public void setUserRole() {
        this.role = Role.ROLE_USER;
    }

    public enum Role {
        ROLE_GUEST, ROLE_USER, ROLE_ADMIN
    }

    public Integer getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getFullname() {
        return fullname;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }
}
