package ec.com.learning.backend.usersapp.models.dto.mapper;

public class DtoUserMapper {

	private static DtoUserMapper mapper;

	private DtoUserMapper() {
	}

	public static DtoUserMapper getInstance() {
		return new DtoUserMapper();
	}

}
