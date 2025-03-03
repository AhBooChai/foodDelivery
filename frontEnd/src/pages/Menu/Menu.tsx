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
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://food-delivery-app-five-gamma.vercel.app/api/dishes"
        );
        console.log(response.data);
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        console.log("Something went wrong");
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const showFood = () => {
    setFilteredProducts(products.filter((item) => item.category === "food"));
  };

  const showDrinks = () => {
    setFilteredProducts(
      products.filter((item) => item.category === "beverages")
    );
  };

  const showAll = () => {
    setFilteredProducts(products);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearch(value);

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(value)
    );

    setFilteredProducts(filtered);
  };

  return loading ? (
    <p>Loading..........</p>
  ) : (
    <div className="menu__container">
      <h1 className="menu__title">Menu</h1>

      <div className="menu__search">
        <input
          type="text"
          placeholder="Mutton Varuval..."
          value={search}
          onChange={handleSearch}
        />
      </div>

      <div className="menu__buttons">
        <button onClick={showAll}>Show All</button>
        <button onClick={showFood}>Food</button>
        <button onClick={showDrinks}>Drinks</button>
      </div>
      <div className="menu__grid">
        {filteredProducts.map((product) => (
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
