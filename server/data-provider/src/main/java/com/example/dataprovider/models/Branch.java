package com.example.dataprovider.models;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "_branch")
public class Branch {
    @Id
    @GeneratedValue
    private long id;
    private String city;
    private String area;
    private int numEmployees;
    private String manager;
}
