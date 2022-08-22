import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../interfaces/home/product-interfaces";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { product_id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:1337/api/products/${product_id}?populate=images,reviews`,
    }).then((res) => {
      const { data } = res.data;
      setProduct(data);
    });
  }, []);

  return (
    <div className="container">
      {!product ? (
        <span>Loading...</span>
      ) : (
        <div className="product-detail-container">
          <h1>{product.attributes.name}</h1>
          <div className="product-img-container">
            <img
              src={`http://localhost:1337${product.attributes.images.data[0].attributes.url}`}
            />
          </div>
          <p>{product.attributes.createdAt}</p>
          <div className="product-reviews">
            <h2>Reviews ({product.attributes.reviews.data.length})</h2>
            {product.attributes.reviews.data.map((review) => (
              <div key={review.id} className="product-review">
                <h3>{review.attributes.reviewer_name}</h3>
                <p>{review.attributes.review}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
