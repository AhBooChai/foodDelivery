import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import axios from "axios";

interface ProductProvider {
  children: ReactNode;
}

interface Product {
  id: number;
  category?: string;
  img: string;
  name: string;
  price: number;
}

interface ProductContext {
  products: Product[];
  filteredProducts: Product[];
  search: string;
  loading: boolean;
  showFood: () => void;
  showDrinks: () => void;
  showAll: () => void;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addProduct: (newProduct: Product) => void;
}

const ProductContext = createContext({} as ProductContext);

export function useProducts() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }: ProductProvider) {
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

  const addProduct = (newProduct: Product) => {
    setProducts((prev) => [...prev, newProduct]);
    setFilteredProducts((prev) => [...prev, newProduct]);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        search,
        loading,
        showFood,
        showDrinks,
        showAll,
        handleSearch,
        addProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
