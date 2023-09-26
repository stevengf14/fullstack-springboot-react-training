package ec.com.learning.backend.usersapp.auth;

import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.security.Key;

public class TokenJwtConfig {

	// public final static String SECRET_KEY = "some_secret_token";
	public final static Key SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256);
	public final static String PREFIX_TOKEN = "Bearer ";
	public final static String HEADER_AUTHORIZATION = "Authorization";

	// SecretKey key = Jwts.SIG.HS256.key().build();
}
