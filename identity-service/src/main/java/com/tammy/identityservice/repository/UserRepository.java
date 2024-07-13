package com.tammy.identityservice.repository;

import com.tammy.identityservice.entity.Role;
import com.tammy.identityservice.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository <User, String> {
    Optional<User> findByEmail(String email);
    //User findFirstByRoles(Role role);
    boolean existsByUsername(String username);
    Optional<User> findByUsername(String username);
}
