package com.finsight.runner;

import com.finsight.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;

//@Configuration
public class UserDebugRunner {

    //@Bean
    CommandLineRunner run(UserRepository userRepository) {
        return args -> {
            System.out.println("Users count: " + userRepository.findAll().size());
        };
    }
}
