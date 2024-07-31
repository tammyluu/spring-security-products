import React, { useEffect, useState } from 'react';
import { productService } from '../services/productService';
import UpdateProductModal from './UpdateProductModal';


function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [userDetails, setUserDetails] = useState(null); 
 
  const loadUserDetails = () => {
      setUserDetails({ role: 'ROLE_USER' });
  };
  useEffect(() => {
    loadUserDetails();
  }, []);

  useEffect(() => {
    productService.getAllProducts()
      .then(response => {
        console.log(response)
        setProducts(response.data);
      })
      .catch(error => {
        setError('Erreur lors de la récupération des produits.');
      });
  }, []);

  const loadProducts = () => {
    productService.getAllProducts()
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        setError('Erreur lors de la récupération des produits.');
      });
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  const updateProduct = (productData) => {
    console.log("product " + productData.name)
    productService.updateProduct(productData)
      .then(() => {
        loadProducts();
        setSelectedProduct(null);
      })
      .catch(error => {
        setError('mise à jour.');
      });
  };
  const isAdmin = () => {
    return userDetails && (userDetails.role === 'ROLE_ADMIN' || userDetails.role === 'ROLE_USER');
  };

  const deleteProduct = (productId) => {
    productService.deleteProduct(productId)
      .then(() => {
        loadProducts();
      })
      .catch(error => {
        setError('bien .');
      });
  };


  return (
    <div className="container mt-5">
      <h2>Product List</h2>
      {error && <div className="alert alert-danger" role="alert">
        {error}
      </div>}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col" className='center'>Actions</th>

          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <th scope="row">{index + 1}</th>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
              {isAdmin && ( 
                <>
                <button className="btn btn-danger mr-4" onClick={() => deleteProduct(product.id)}>Supprimer</button>
                <button className='btn btn-warning' onClick={() => setSelectedProduct(product)}>Update</button>
                </>
              )}
              </td>
            </tr>
          ))}
           {selectedProduct && (
                  <UpdateProductModal
                    product={selectedProduct}
                    onSave={updateProduct}
                    onCancel={() => setSelectedProduct(null)}
                  />
                )}
        </tbody>
      </table>

    </div>
  );
}

export default ProductList;
