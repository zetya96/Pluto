package hu.elte.alkfejl.pluto.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;

    public String name;

    public Integer getId() {
        return id;
    }
}
