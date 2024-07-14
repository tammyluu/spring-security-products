package org.example.spring_security.repository;

import org.example.spring_security.entity.Role;
import org.example.spring_security.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByMail(String mail);
    User findFirstByRole(Role role);
}
