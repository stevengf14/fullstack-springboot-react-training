package ec.com.learning.backend.usersapp.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ec.com.learning.backend.usersapp.models.dto.UserDto;
import ec.com.learning.backend.usersapp.models.entities.User;
import ec.com.learning.backend.usersapp.models.request.UserRequest;
import ec.com.learning.backend.usersapp.services.UserService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/users")
@CrossOrigin(originPatterns = "*")
public class UserController {

	@Autowired
	private UserService service;

	@GetMapping
	public List<UserDto> list() {
		return service.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> show(@PathVariable Long id) {
		Optional<UserDto> userOptional = service.findById(id);
		if (userOptional.isPresent()) {
			return ResponseEntity.ok(userOptional.orElseThrow());
		}
		return ResponseEntity.notFound().build();
	}

	/*
	 * @PostMapping
	 * 
	 * @ResponseStatus(HttpStatus.CREATED) public User create(@RequestBody User
	 * user) { return service.save(user); }
	 */

	@PostMapping
	public ResponseEntity<?> create(@Valid @RequestBody User user, BindingResult result) {
		if (result.hasErrors()) {
			return validation(result);
		}
		return ResponseEntity.status(HttpStatus.CREATED).body(service.save(user));
	}

	/*
	 * @PutMapping("/{id}") public ResponseEntity<?> update(@RequestBody User
	 * user, @PathVariable Long id) { Optional<User> optional =
	 * service.findById(id); if (optional.isPresent()) { User userDb =
	 * optional.orElseThrow(); userDb.setUsername(user.getUsername());
	 * userDb.setEmail(user.getEmail()); return
	 * ResponseEntity.status(HttpStatus.CREATED).body(service.save(userDb)); }
	 * return ResponseEntity.notFound().build(); }
	 */

	@PutMapping("/{id}")
	public ResponseEntity<?> update(@Valid @RequestBody UserRequest user, BindingResult result, @PathVariable Long id) {
		if (result.hasErrors()) {
			return validation(result);
		}
		Optional<UserDto> optional = service.update(user, id);
		if (optional.isPresent()) {
			return ResponseEntity.status(HttpStatus.CREATED).body(optional.orElseThrow());
		}
		return ResponseEntity.notFound().build();
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> remove(@PathVariable Long id) {
		Optional<UserDto> optional = service.findById(id);
		if (optional.isPresent()) {
			service.remove(id);
			return ResponseEntity.noContent().build(); // 204
		}
		return ResponseEntity.notFound().build();
	}

	private ResponseEntity<?> validation(BindingResult result) {
		Map<String, String> errors = new HashMap<>();
		result.getFieldErrors().forEach(error -> {
			errors.put(error.getField(), "The field " + error.getField() + " " + error.getDefaultMessage());
		});
		return ResponseEntity.badRequest().body(errors);
	}

}
