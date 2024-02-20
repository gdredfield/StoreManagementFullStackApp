package com.yoruProj.storeManagement.model;

import java.time.LocalDate;
import java.time.Period;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;

@Entity
@Table(name = "user_mst")
public class User {

    @Id
    @SequenceGenerator(name = "user_sequence", sequenceName = "user_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_sequence")
    @Column(name = "user_id", length = 11)
    private Long userId;

    @Column(name = "username", length = 60, nullable = false)
    private String userName;

    @Column(name = "user_email", length = 120, nullable = false)
    private String userEmail;

    @Column(name = "user_password", length = 120)
    private String userPassword;

    @Column(name = "user_birthdate", length = 120, nullable = false)
    private LocalDate userBirthDate;

    @Column(name = "user_firstname", length = 60)
    private String userFirstName;

    @Column(name = "user_lastname", length = 60)
    private String userLastName;

    @Transient
    private int userAge;

    public User() {

    }

    public User(Long userId, String userName, String userEmail, String userPassword, LocalDate userBirthDate,
            String userFirstName, String userLastName) {
        this.userId = userId;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.userBirthDate = userBirthDate;
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
    }

    public User(String userName, String userEmail, String userPassword, LocalDate userBirthDate,
            String userFirstName, String userLastName) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.userBirthDate = userBirthDate;
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public LocalDate getUserBirthDate() {
        return userBirthDate;
    }

    public void setUserBirthDate(LocalDate userBirthDate) {
        this.userBirthDate = userBirthDate;
    }

    public String getUserFirstName() {
        return userFirstName;
    }

    public void setUserFirstName(String userFirstName) {
        this.userFirstName = userFirstName;
    }

    public String getUserLastName() {
        return userLastName;
    }

    public void setUserLastName(String userLastName) {
        this.userLastName = userLastName;
    }

    public int getUserAge() {
        return Period.between(this.userBirthDate, LocalDate.now()).getYears();
    }

    public void setUserAge(int userAge) {
        this.userAge = userAge;
    }

    @Override
    public String toString() {
        return "User [userId=" + userId + ", userName=" + userName + ", userEmail=" + userEmail + ", userPassword="
                + userPassword + ", userBirthDate=" + userBirthDate + ", userFirstName=" + userFirstName
                + ", userLastName=" + userLastName + ", userAge=" + userAge + "]";
    }

}
