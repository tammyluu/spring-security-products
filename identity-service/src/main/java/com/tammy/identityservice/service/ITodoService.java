package com.tammy.identityservice.service;

import com.tammy.identityservice.entity.Todo;

import java.util.List;
import java.util.Optional;

public interface ITodoService {
    Todo save(Todo todo);

    List<Todo> getAllTodo();


    Optional<Todo> getTodoById(long id);

    Todo updateTodo(Todo todo);

    void removeTodo(long id);

    List<Todo> getAllTodoByUser(String mail);
}
