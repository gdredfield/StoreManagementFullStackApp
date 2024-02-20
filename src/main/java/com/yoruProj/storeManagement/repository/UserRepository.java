package com.yoruProj.storeManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yoruProj.storeManagement.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
