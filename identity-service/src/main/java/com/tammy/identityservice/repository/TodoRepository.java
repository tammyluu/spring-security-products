package com.tammy.identityservice.repository;

import com.tammy.identityservice.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TodoRepository  extends JpaRepository<Todo, Long> {
    List<Todo> findAllByUser_Mail(String username);
    Optional<Todo> findById(Long id);
}
