package ec.com.learning.backend.usersapp.services;

import java.util.List;
import java.util.Optional;

import ec.com.learning.backend.usersapp.models.entities.User;
import ec.com.learning.backend.usersapp.models.request.UserRequest;

public interface UserService {

	List<User> findAll();

	Optional<User> findById(Long id);

	User save(User user);

	Optional<User> update(UserRequest user, Long id);

	void remove(Long id);

}
