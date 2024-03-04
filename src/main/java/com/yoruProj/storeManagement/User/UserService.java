package com.yoruProj.storeManagement.User;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
public class UserService {

    @Autowired
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User newUserSave(User user){
        return userRepository.save(user);
    }

    public List<User> fetchUsers(){
        return userRepository.findAll();
    }

    @Transactional
    public void updateUser(Long userId, User user){
        User userToUpdate = userRepository.getReferenceById(userId);
        if (userToUpdate.getUserId() != null){
            userToUpdate.setUserFirstName(user.getUserFirstName());
            userToUpdate.setUserLastName(user.getUserLastName());
            userToUpdate.setUserBirthDate(user.getUserBirthDate());
            userToUpdate.setUserEmail(user.getUserEmail());
            userToUpdate.setUserName(user.getUserName());
            userToUpdate.setUserPassword(user.getUserPassword());
        }
        else{
            throw new IllegalStateException("Student does not exist.");
        }

    }

    public void deleteUser(Long userId){
        if(userRepository.findById(userId).isPresent()){
            userRepository.deleteById(userId);
        }
    }
}
