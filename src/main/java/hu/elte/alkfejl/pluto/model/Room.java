package hu.elte.alkfejl.pluto.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    private String name;
}
