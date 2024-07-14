package com.tammy.identityservice.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tammy.identityservice.enums.Status;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    double id;
    String name;
    String description;
    Status state;
    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore
    User user;
}
