package ec.com.learning.backend.usersapp.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import ec.com.learning.backend.usersapp.models.entities.Role;

public interface RoleRepository extends CrudRepository<Role, Long> {

	Optional<Role> findByName(String name);

}
