package ec.com.learning.backend.usersapp.auth;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public abstract class SimpleGrantedAuthorityJsonCreator {

	@JsonCreator
	public SimpleGrantedAuthorityJsonCreator(@JsonProperty("authority") String role) {

	}

}
