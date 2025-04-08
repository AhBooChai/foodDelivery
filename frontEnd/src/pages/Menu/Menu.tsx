import { useProducts } from "../../context/ProductsContext";
import "./Menu.scss";
import Card from "../../components/Card";
import { useState } from "react";

const Menu = () => {
  const {
    filteredProducts,
    search,
    loading,
    showFood,
    showDrinks,
    showAll,
    handleSearch,
    addProduct,
  } = useProducts();

  interface newItemProps {
    name: string;
    price: number;
    img: File | null;
    category?: string;
  }

  const [isAdmin] = useState<boolean>(true);
  const [newItem, setNewItem] = useState<newItemProps>({
    name: "",
    price: 0,
    img: null,
    category: "",
  });

  const handleAddItem = () => {
    if (newItem.name && newItem.price && newItem.img && newItem.category) {
      const imageUrl = URL.createObjectURL(newItem.img);
      const newProduct = {
        id: Date.now(),
        name: newItem.name,
        price: newItem.price,
        img: imageUrl,
        category: newItem.category,
      };
      addProduct(newProduct);
      console.log("Added:", newProduct);
      setNewItem({ name: "", price: 0, img: null });
    } else {
      alert("Please fill in all fields");
    }
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

      {/* Admin Add Item Form*/}
      {isAdmin && (
        <div className="menu__admin-form">
          <h3>Add New Items</h3>
          <input
            type="text"
            placeholder="Item Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price"
            value={newItem.price}
            onChange={(e) =>
              setNewItem({ ...newItem, price: parseInt(e.target.value) })
            }
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0] || null;
              setNewItem({ ...newItem, img: file });
            }}
          />

          <select
            value={newItem.category || ""}
            onChange={(e) =>
              setNewItem({ ...newItem, category: e.target.value })
            }
          >
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="beverages">Beverages</option>
          </select>
          <button onClick={handleAddItem}>Add Item</button>
        </div>
      )}
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
