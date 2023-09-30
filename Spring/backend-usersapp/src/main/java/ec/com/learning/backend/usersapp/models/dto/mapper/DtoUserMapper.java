package ec.com.learning.backend.usersapp.models.dto.mapper;

import ec.com.learning.backend.usersapp.models.dto.UserDto;
import ec.com.learning.backend.usersapp.models.entities.User;

public class DtoUserMapper {

	private User user;

	private DtoUserMapper() {
	}

	public static DtoUserMapper builder() {
		return new DtoUserMapper();
	}

	public DtoUserMapper setUser(User user) {
		this.user = user;
		return this;
	}

	public UserDto build() {
		if (user == null) {
			throw new RuntimeException("You must use user entity!");
		}
		return new UserDto(this.user.getId(), user.getUsername(), user.getEmail());
	}

}
