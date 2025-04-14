import { useState, ChangeEvent } from "react";
import { useProducts } from "../../context/ProductsContext";

import "./AddItem.scss";

const AddItem = () => {
  const { addProduct } = useProducts();
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImgFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        setPreview(reader.result.toString());
      }
    };
    reader.readAsDataURL(file);
  };

  const handleAdd = () => {
    if (!name || !price || !preview) {
      alert("Please fill in all fields and upload an image.");
      return;
    }

    addProduct({
      id: Date.now(),
      name,
      price,
      img: preview,
    });

    alert("Item added!");
    setName("");
    setImgFile(null);
    setPreview("");
  };

  return (
    <div className="add__item-form">
      <h2>Add Menu Item</h2>
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="file" accept="image/*" onChange={handleImageChange} />

      {preview && (
        <div style={{ margin: "1rem 0" }}>
          <p>Image preview:</p>
          <img
            src={preview}
            alt="Preview"
            style={{ width: "200px", borderRadius: "8px" }}
          />
        </div>
      )}
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddItem;
