package com.tammy.security_product.repository;

import com.tammy.security_product.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role,Long> {
    Role findFirstByName(String name);
}
