package ec.com.learning.backend.usersapp.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ec.com.learning.backend.usersapp.models.entities.Role;
import ec.com.learning.backend.usersapp.models.entities.User;
import ec.com.learning.backend.usersapp.models.request.UserRequest;
import ec.com.learning.backend.usersapp.repositories.RoleRepository;
import ec.com.learning.backend.usersapp.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository repository;

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	@Transactional(readOnly = true)
	public List<User> findAll() {
		return (List<User>) repository.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public Optional<User> findById(Long id) {
		return repository.findById(id);
	}

	@Override
	@Transactional
	public User save(User user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));

		Optional<Role> o = roleRepository.findByName("ROLE_USER");
		List<Role> roles = new ArrayList<>();
		if (o.isPresent()) {
			roles.add(o.orElseThrow());
		}
		user.setRoles(roles);
		return repository.save(user);
	}

	@Override
	@Transactional
	public Optional<User> update(UserRequest user, Long id) {
		Optional<User> optional = this.findById(id);
		User userOptional = null;
		if (optional.isPresent()) {
			User userDb = optional.orElseThrow();
			userDb.setUsername(user.getUsername());
			userDb.setEmail(user.getEmail());
			// return Optional.of(this.save(userDb));
			userOptional = this.save(userDb);
		}
		return Optional.ofNullable(userOptional);
	}

	@Override
	@Transactional
	public void remove(Long id) {
		repository.deleteById(id);
	}

}
