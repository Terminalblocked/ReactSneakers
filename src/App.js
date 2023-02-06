import { useEffect, useState } from "react";
import Card from "./Components/Card";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import "./index.scss";
import "./reset.scss";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch("https://63e0f6ecdd7041cafb3d7f0c.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);


  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  }
  console.log(cartItems);
  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Cart items={cartItems} closeCart={() => setCartOpened(false)} />
      )}

      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <img width={14} height={14} src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-column justify-center align-center">
          <div className="d-flex flex-wrap">
            {items.map((item) => (
              <Card
                title={item.title}
                imageUrl={item.imageUrl}
                price={item.price}
                onFavorite={() => console.log("Добавили в закладки")}
                onPlus={obj => onAddToCart(obj)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
