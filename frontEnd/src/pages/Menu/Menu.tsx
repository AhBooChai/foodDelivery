import { useEffect, useState } from "react";
import axios from "axios";
import "./Menu.scss";
import Card from "../../components/Card";

interface Product {
  id: number;
  category?: string;
  img: string;
  name: string;
  price: number;
}

const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [food, setFood] = useState<Product[]>([]);
  const [drinks, setDrinks] = useState<Product[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://food-delivery-app-five-gamma.vercel.app/api/dishes"
        );
        console.log(response.data);
        setProducts(response.data);
        setFood(
          response.data.filter((item: Product) => item.category === "food")
        );
        setDrinks(
          response.data.filter((item: Product) => item.category === "beverages")
        );
        setLoading(false);
      } catch (error) {
        console.log(error);
        console.log("Something went wrong");
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return loading ? (
    <p>Loading..........</p>
  ) : (
    <div className="menu__container">
      <h1 className="menu__title">Menu</h1>
      <div className="menu__grid">
        {products.map((product) => (
          <Card
            key={product.id}
            imgSrc={product.img}
            title={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
