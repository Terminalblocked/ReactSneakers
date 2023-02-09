import { useEffect, useState } from "react";
import axios from "axios"
import Card from "./Components/Card";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import "./index.scss";
import "./reset.scss";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  
  useEffect(() => {
    axios.get("https://63e0f6ecdd7041cafb3d7f0c.mockapi.io/items").then(res => {
      setItems(res.data)
    });
    axios.get("https://63e0f6ecdd7041cafb3d7f0c.mockapi.io/cart").then(res => {
      setCartItems(res.data)
    });
  }, []);


  const onAddToCart = (obj) => {
    axios.post("https://63e0f6ecdd7041cafb3d7f0c.mockapi.io/cart", obj);
    setCartItems(prev => [...prev, obj]);
  }

  const onRemoveItem = (id) => {
    console.log(id);
    axios.delete(`https://63e0f6ecdd7041cafb3d7f0c.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  const onAddToFavorite = () => {
    
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  const clearInputValue = () => {
    setSearchValue('');
  }

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Cart items={cartItems} closeCart={() => setCartOpened(false)} onRemove={onRemoveItem} />
      )}

      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between">
          <h1>{searchValue ? `Поиск по запросу '${searchValue}'` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex align-center">
            <img width={14} height={14} src="/img/search.svg" alt="Search" />
            {searchValue && <img onClick={clearInputValue} className="closeBtn cu-p clear" width={18}height={18}src="/img/close.svg" alt="Clear"/>}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-column justify-center align-center">
          <div className="d-flex flex-wrap">
            {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
              <Card
                title={item.title}
                imageUrl={item.imageUrl}
                price={item.price}
                onFavorite={() => console.log("Добавили в закладки")}
                onPlus={obj => onAddToCart(obj)}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
