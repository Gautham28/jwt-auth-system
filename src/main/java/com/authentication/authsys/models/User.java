package com.authentication.authsys.models;

import jakarta.persistence.*;

@Entity //this tells that this is a table in the db
@Table(name = "users") //sets name of the table
public class User {

    @Id //tells ki the variable below is the primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) //this tells the db to automatically handle counting of the primary key
    private Long id; //private since we don't want other parts accessing this

    @Column(unique = true, nullable = false) //db rules
    private String username;

    @Column(nullable = false)
    private String password;

    public User() {} //empty constructor required

    //getter and setters
    public Long getId() { return id; } //get method
    //Long = make sure to , getId() = name of a method, { return id } = grabs the value of id and hands it back
    public void setId(Long id) { this.id = id; } //set method

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    //void= wont hand back any data,
    // setUsername(String username) = this method requires u to hand it some info...its like 'if u want to use me, u must give me a string and i will temp call it username
    // { this.username = username; } = this takes the new value hander over (username) and saves it into the private vault


    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}
