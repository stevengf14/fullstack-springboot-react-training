package ec.com.learning.backend.usersapp.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ec.com.learning.backend.usersapp.models.dto.UserDto;
import ec.com.learning.backend.usersapp.models.dto.mapper.DtoUserMapper;
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
	public List<UserDto> findAll() {
		List<User> users = (List<User>) repository.findAll();
		return users.stream().map(user -> DtoUserMapper.builder().setUser(user).build()).collect(Collectors.toList());
	}

	@Override
	@Transactional(readOnly = true)
	public Optional<UserDto> findById(Long id) {
		Optional<User> optional = repository.findById(id);
		if (optional.isPresent()) {
			return Optional.of(DtoUserMapper.builder().setUser(optional.orElseThrow()).build());
		}
		return Optional.empty();
	}

	@Override
	@Transactional
	public UserDto save(User user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));

		Optional<Role> o = roleRepository.findByName("ROLE_USER");
		List<Role> roles = new ArrayList<>();
		if (o.isPresent()) {
			roles.add(o.orElseThrow());
		}
		user.setRoles(roles);
		return DtoUserMapper.builder().setUser(repository.save(user)).build();
	}

	@Override
	@Transactional
	public Optional<UserDto> update(UserRequest user, Long id) {
		Optional<User> optional = repository.findById(id);
		User userOptional = null;
		if (optional.isPresent()) {
			User userDb = optional.orElseThrow();
			userDb.setUsername(user.getUsername());
			userDb.setEmail(user.getEmail());
			// return Optional.of(this.save(userDb));
			userOptional = repository.save(userDb);
		}
		return Optional.ofNullable(DtoUserMapper.builder().setUser(userOptional).build());
	}

	@Override
	@Transactional
	public void remove(Long id) {
		repository.deleteById(id);
	}

}
