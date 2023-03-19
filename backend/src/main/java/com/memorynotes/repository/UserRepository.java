package com.memorynotes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.memorynotes.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
    //public User findUserByEmailAndPassword(String email, String password);
}
