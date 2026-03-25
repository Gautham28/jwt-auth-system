package com.authentication.authsys.repositories;

import com.authentication.authsys.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);
}

//public interface UserRepository extends JpaRepository<User, Long>
// extends JpaRepository -> this means inherit all the features from the builtin jpa repository
// <User, Long> -> User = tells that u r mananging the User table
// <User, Long> -> Long = tells that the primary key for this table is Long data type

//Optional<User> findByUsername(String username);
// findByUsername -> This is pure Spring Boot magic. You don't have to write the SQL query for this.
// Because you named the method exactly findBy followed by the exact variable name Username, Spring Boot automatically understands you want it to run the SQL: SELECT * FROM users WHERE username = ?.

// (String username) -> "Go find the user whose username matches this exact text."

// Optional<User> -> "Is there actually a user inside this box?"