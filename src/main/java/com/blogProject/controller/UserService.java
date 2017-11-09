package com.blogProject.controller;

import com.blogProject.dao.UserRepository;
import com.blogProject.model.UserEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class UserService {

  @Autowired
  UserRepository userRepository;

  @RequestMapping(value = "/api/users", method = RequestMethod.GET)
  public @ResponseBody
  List<UserEntity> getUsers() {
    List<UserEntity> userList = userRepository.findAll();
    return userList;
  }

  @RequestMapping(value = "/api/users/{username}", method = RequestMethod.POST)
  public @ResponseBody UserEntity findUserByUsername(@PathVariable("username") String username) {
    UserEntity userEntity = userRepository.findUserByUsername(username);
    return userEntity;
  }

  @RequestMapping(value = "/api/users/add", method = RequestMethod.POST)
  public @ResponseBody UserEntity addUser(@RequestBody UserEntity user) {
    System.out.println(user.getRole());
    userRepository.saveAndFlush(user);
    return findUserByUsername(user.getUsername());
  }


  @RequestMapping(value = "/api/users/{userId}", method = RequestMethod.GET)
  public @ResponseBody UserEntity showUser(@PathVariable("userId") Integer userId) {
    UserEntity userEntity = userRepository.findOne(userId);
    return userEntity;
  }

  @RequestMapping(value = "/api/users/update", method = RequestMethod.PUT)
  public @ResponseBody UserMessage updateUser(@RequestBody UserEntity user) {
    userRepository.updateUser(user.getUsername(), user.getPassword(),  user.getRole(), user.getId());
    userRepository.flush();
    UserMessage userMessage = new UserMessage();
    userMessage.setMessage("success");
    return userMessage;
  }

  @RequestMapping(value = "/api/users/delete/{id}", method = RequestMethod.DELETE)
  public @ResponseBody UserMessage deleteUser(@PathVariable("id") Integer userId) {
    userRepository.delete(userId);
    userRepository.flush();
    UserMessage userMessage = new UserMessage();
    userMessage.setMessage("success");
    return userMessage;
  }
}
