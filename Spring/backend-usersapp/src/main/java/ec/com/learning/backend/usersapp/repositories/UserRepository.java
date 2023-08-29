package ec.com.learning.backend.usersapp.repositories;

import org.springframework.data.repository.CrudRepository;

import ec.com.learning.backend.usersapp.models.entities.User;

public interface UserRepository extends CrudRepository<User, Long> {

}
