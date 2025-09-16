package com.bookstore.config;
import com.bookstore.model.Book;
import com.bookstore.repository.BookRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
@Configuration
public class DataInitializer {
    @Bean
    CommandLineRunner init(BookRepository repo) {
        return args -> {
            repo.save(new Book("Clean Code", "Robert C. Martin", 30.0));
            repo.save(new Book("Effective Java", "Joshua Bloch", 45.0));
            repo.save(new Book("Refactoring", "Martin Fowler", 40.0));
        };
    }
}