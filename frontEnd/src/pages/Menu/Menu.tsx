import { useProducts } from "../../context/ProductsContext";
import "./Menu.scss";
import Card from "../../components/Card";

const Menu = () => {
  const {
    filteredProducts,
    search,
    loading,
    showFood,
    showDrinks,
    showAll,
    handleSearch,
  } = useProducts();

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
            id={product.id}
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
