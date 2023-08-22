package ec.com.learning.backend.cartapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ec.com.learning.backend.cartapp.models.entities.Product;
import ec.com.learning.backend.cartapp.repositories.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepository repository;

	@Override
	public List<Product> findAll() {
		return (List<Product>) repository.findAll();
	}

}
