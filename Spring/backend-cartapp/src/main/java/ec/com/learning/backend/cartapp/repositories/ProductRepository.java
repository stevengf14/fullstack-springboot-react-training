package ec.com.learning.backend.cartapp.repositories;

import org.springframework.data.repository.CrudRepository;

import ec.com.learning.backend.cartapp.models.entities.Product;

public interface ProductRepository extends CrudRepository<Product, Long>{
	
}
