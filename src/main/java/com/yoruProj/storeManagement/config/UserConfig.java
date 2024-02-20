package com.yoruProj.storeManagement.config;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.yoruProj.storeManagement.model.User;
import com.yoruProj.storeManagement.repository.UserRepository;

@Configuration
public class UserConfig {
    @Bean
    CommandLineRunner commandLineRunner(UserRepository userRepository) {
        return args -> {
            User adminAccount = new User(
                    1L
                    , "sa"
                    , "adminAccountTestEmail@jv.com"
                    , ""
                    , LocalDate.of(2024, 01, 01)
                    , "systemAdmin"
                    , "sysAd");

            userRepository.saveAll(
                    List.of(adminAccount));
        };
    }
}