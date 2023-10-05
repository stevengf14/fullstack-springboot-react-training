package ec.com.learning.backend.usersapp.models.request;

import ec.com.learning.backend.usersapp.models.IUser;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

public class UserRequest implements IUser{

	@NotEmpty
	@Size(min = 4, max = 10)
	private String username;

	@NotEmpty
	@Email
	private String email;
	
	private boolean admin;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public boolean isAdmin() {
		return admin;
	}

	public void setAdmin(boolean admin) {
		this.admin = admin;
	}

}
