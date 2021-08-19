import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggle } from '../../../store/favoriteSlice';

const Products = () => {
  const dispatch = useDispatch();
  const [listProducts, setListProducts] = useState([
    {
      id: 1,
      title: 'Potato',
      price: 40,
      url: 'https://static.seattletimes.com/wp-content/uploads/2021/02/02192021_grow7_090114-780x569.jpg',
      favorite: false
    },
    {
      id: 2,
      title: 'Penut',
      price: 90,
      url: 'http://cdn.tgdd.vn/Files/2019/08/27/1192119/peanut-la-gi-tac-dung-cua-peanut-doi-voi-suc-khoe-201908271050316909.jpg',
      favorite: false
    },
    {
      id: 3,
      title: 'Coconut',
      price: 50,
      url: 'https://www.asarbrothers.com/wp-content/uploads/2020/08/coconut-white-balsamic-condimento.jpg',
      favorite: false
    },
    {
      id: 4,
      title: 'Lemon',
      price: 80,
      url: 'https://media.healthyfood.com/wp-content/uploads/2017/03/In-season-August-Lemons.jpg',
      favorite: false
    },
    {
      id: 6,
      title: 'Banana',
      price: 90,
      url: 'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg',
      favorite: false
    },
  ]);

  const handleFavorite = (e, id) => {
    e.preventDefault();
    const listProductsNew = listProducts.map(x => {
      if (x.id === id) {
        x.favorite = !x.favorite;
      }
      return x;
    })
    setListProducts(listProductsNew);
    dispatch(toggle(id));
  }

  return (
    <div className="products-page">
      <div className="container">
        <h2>List Products</h2>
        <div className="row d-flex flex-wrap">
          { 
            listProducts.map((product) =>
            <div className="col-3" key={product.id}>
              <div className="product-item">
                <Link to={`/products/${product.id}`}>
                  <span className={`product-favorite ${product.favorite ? 'active' : ''}`} onClick={(e) => handleFavorite(e, product.id)}><i className="fa fa-heart"></i></span>
                  <img src={product.url} alt="product-img" className="product-img"/>
                  <div className="product-info">
                    <h5 className="product-title">{product.title}</h5>
                    <p className="product-price">{product.price}$</p>
                  </div>
                </Link>
              </div>
            </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
export default Products;
