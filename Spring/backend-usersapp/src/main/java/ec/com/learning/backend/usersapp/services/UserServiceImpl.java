package ec.com.learning.backend.usersapp.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ec.com.learning.backend.usersapp.models.IUser;
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
		return repository.findById(id).map(user -> DtoUserMapper.builder().setUser(user).build());
	}

	@Override
	@Transactional
	public UserDto save(User user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		user.setRoles(getRoles(user));
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
			userDb.setRoles(getRoles(user));
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

	private List<Role> getRoles(IUser user) {
		Optional<Role> optionalUser = roleRepository.findByName("ROLE_USER");
		List<Role> roles = new ArrayList<>();
		if (optionalUser.isPresent()) {
			roles.add(optionalUser.orElseThrow());
		}
		if (user.isAdmin()) {
			Optional<Role> optionalAdmin = roleRepository.findByName("ROLE_ADMIN");
			if (optionalAdmin.isPresent()) {
				roles.add(optionalAdmin.orElseThrow());
			}

		}
		return roles;
	}

	@Override
	@Transactional(readOnly = true)
	public Page<UserDto> findAll(Pageable pageable) {
		return repository.findAll(pageable).map(user -> DtoUserMapper.builder().setUser(user).build());
	}

}
