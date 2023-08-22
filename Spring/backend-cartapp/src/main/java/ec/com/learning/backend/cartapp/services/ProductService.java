package ec.com.learning.backend.cartapp.services;

import java.util.List;

import ec.com.learning.backend.cartapp.models.entities.Product;

public interface ProductService {
	
	List<Product> findAll();
	

}
