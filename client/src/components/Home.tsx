import axios from "axios";
import { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Product } from "../interfaces/home/product-interfaces";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:1337/api/products?populate=images",
    }).then((res) => {
      const { data } = res.data;

      setProducts(data);
    });
  }, []);

  return (
    <div className="container">
      <h1>Products</h1>
      <div className="products-container">
        {products.map((product) => (
          <Link key={product.id} className="product" to={`/${product.id}`}>
            <img
              src={`http://localhost:1337${product.attributes.images.data[0].attributes.url}`}
            />
            <h2 className="product-name">{product.attributes.name}</h2>
            <p className="product-desc">{product.attributes.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
