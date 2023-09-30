package ec.com.learning.backend.usersapp.models.dto.mapper;

import ec.com.learning.backend.usersapp.models.dto.UserDto;
import ec.com.learning.backend.usersapp.models.entities.User;

public class DtoUserMapper {

	private static DtoUserMapper mapper;

	private User user;

	private DtoUserMapper() {
	}

	public static DtoUserMapper getInstance() {
		return new DtoUserMapper();
	}

	public DtoUserMapper setUser(User user) {
		this.user = user;
		return mapper;
	}

	public UserDto build() {
		if (user == null) {
			throw new RuntimeException("You must use user entity!");
		}
		return new UserDto(user.getId(), user.getUsername(), user.getEmail());
	}

}
