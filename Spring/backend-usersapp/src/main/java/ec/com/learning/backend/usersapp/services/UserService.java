package ec.com.learning.backend.usersapp.services;

import java.util.List;
import java.util.Optional;

import ec.com.learning.backend.usersapp.models.entities.User;

public interface UserService {

	List<User> findAll();

	Optional<User> findById(Long id);

	User save(User user);

	void remove(Long id);

}
