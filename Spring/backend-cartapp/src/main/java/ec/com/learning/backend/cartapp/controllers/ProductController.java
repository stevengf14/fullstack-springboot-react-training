package ec.com.learning.backend.cartapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import ec.com.learning.backend.cartapp.models.entities.Product;
import ec.com.learning.backend.cartapp.services.ProductService;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5173")
public class ProductController {

	@Autowired
	private ProductService service;

	@GetMapping("/products")
	public List<Product> list() {
		return service.findAll();
	}

}
