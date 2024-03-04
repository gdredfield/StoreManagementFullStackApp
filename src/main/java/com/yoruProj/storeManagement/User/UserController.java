package com.yoruProj.storeManagement.User;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@CrossOrigin
@RequestMapping("/userPortal")
public class UserController {

    @Autowired
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/newUserSave")
    public String newUserSave(@RequestBody User user) {
        userService.newUserSave(user);
        return "New User" + user.getUserName() + " is Added.";
    }

    @GetMapping("/fetchUsers")
    public List<User> fetchUsers() {
        return userService.fetchUsers();
    }

    @PutMapping("/updateUser/{userId}")
    public String updateUser(@PathVariable Long userId, @RequestBody User user){
        userService.updateUser(userId, user);
        return "User" + user.getUserName() + " is Succesfully Updated.";
    }

    @DeleteMapping("/deleteUser/{UserId}")
    public String deleteUser(@PathVariable Long userId){
        userService.deleteUser(userId);
        return "User has been succesfully deleted."; 
    }

}
