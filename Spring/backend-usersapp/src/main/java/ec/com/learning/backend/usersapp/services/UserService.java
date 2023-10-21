package ec.com.learning.backend.usersapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import ec.com.learning.backend.usersapp.models.dto.UserDto;
import ec.com.learning.backend.usersapp.models.entities.User;
import ec.com.learning.backend.usersapp.models.request.UserRequest;

public interface UserService {

	List<UserDto> findAll();

	Page<UserDto> findAll(Pageable pageable);

	Optional<UserDto> findById(Long id);

	UserDto save(User user);

	Optional<UserDto> update(UserRequest user, Long id);

	void remove(Long id);

}
