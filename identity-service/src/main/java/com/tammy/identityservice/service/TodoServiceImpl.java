package com.tammy.identityservice.service;

import com.tammy.identityservice.entity.Todo;
import com.tammy.identityservice.repository.TodoRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class TodoServiceImpl implements ITodoService{
    TodoRepository repository;

    @Override
    public Todo save(Todo todo) {
        repository.save(todo);
        return todo;
    }

    @Override
    public List<Todo> getAllTodo() {
        return repository.findAll();
    }

    @Override
    public Optional<Todo> getTodoById(long id) {
        return repository.findById(id);
    }

    @Override
    public Todo updateTodo(Todo todo) {
        return repository.save(todo);
    }

    @Override
    public void removeTodo(long id) {
        repository.deleteById(id);
    }

    @Override
    public List<Todo> getAllTodoByUser(String mail) {
        return repository.findAllByUser_Mail(mail);
    }
}
