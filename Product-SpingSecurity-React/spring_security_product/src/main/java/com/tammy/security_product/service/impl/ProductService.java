package com.tammy.security_product.service.impl;


import com.tammy.security_product.entity.Product;
import com.tammy.security_product.repository.ProductRepository;
import com.tammy.security_product.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ProductService implements IProductService {



        @Autowired
        private ProductRepository productRepository;

        public Product saveProduct(Product product) {
            return productRepository.save(product);
        }

        public List<Product> getAllProducts() {
            return productRepository.findAll();
        }

        public Optional<Product> getProductById(Long id) {
            return productRepository.findById(id);
        }

        public Product updateProduct(Product product) {

            return productRepository.save(product);
        }

        public void deleteProduct(Long id) {
            productRepository.deleteById(id);
        }
    }

