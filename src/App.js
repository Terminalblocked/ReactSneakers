import "./index.scss"; 
import "./reset.scss"; 


function App() { 
  return (
  <div className="wrapper clear">
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img
          className="mr-20"
          width={40}
          height={40}
          src="/img/logo.png"
          alt="logo"
        />
        <div className="headerInfo">
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
          <img className="mr-10" src="/img/cart.svg" alt="Cart" />
          <span>1205 руб.</span>
        </li>
        <li className="mr-30">
          <img src="/img/like.svg" alt="Like" />
        </li>
        <li>
          <img src="/img/user.svg" alt="User" />
        </li>
      </ul>
    </header>
    <div className="content p-40">
      <h1>Все кроссовки</h1>
  
      <div className="d-flex">
        <div className="card">
          <img
            width={133}
            height={112}
            className="mb-15"
            src="/img/1.jpg"
            alt="Sneakers"
          />
          <h5 className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex align-center justify-between">
            <div>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img
            width={133}
            height={112}
            className="mb-15"
            src="/img/2.jpg"
            alt="Sneakers"
          />
          <h5 className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex align-center justify-between">
            <div>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img
            width={133}
            height={112}
            className="mb-15"
            src="/img/3.jpg"
            alt="Sneakers"
          />
          <h5 className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex align-center justify-between">
            <div>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img
            width={133}
            height={112}
            className="mb-15"
            src="/img/4.jpg"
            alt="Sneakers"
          />
          <h5 className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex align-center justify-between">
            <div>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="card">
          <img
            width={133}
            height={112}
            className="mb-15"
            src="/img/5.jpg"
            alt="Sneakers"
          />
          <h5 className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex align-center justify-between">
            <div>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img
            width={133}
            height={112}
            className="mb-15"
            src="/img/6.jpg"
            alt="Sneakers"
          />
          <h5 className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex align-center justify-between">
            <div>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img
            width={133}
            height={112}
            className="mb-15"
            src="/img/7.jpg"
            alt="Sneakers"
          />
          <h5 className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex align-center justify-between">
            <div>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img
            width={133}
            height={112}
            className="mb-15"
            src="/img/8.jpg"
            alt="Sneakers"
          />
          <h5 className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex align-center justify-between">
            <div>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="card">
          <img
            width={133}
            height={112}
            className="mb-15"
            src="/img/9.jpg"
            alt="Sneakers"
          />
          <h5 className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex align-center justify-between">
            <div>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img
            width={133}
            height={112}
            className="mb-15"
            src="/img/10.jpg"
            alt="Sneakers"
          />
          <h5 className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex align-center justify-between">
            <div>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img
            width={133}
            height={112}
            className="mb-15"
            src="/img/11.jpg"
            alt="Sneakers"
          />
          <h5 className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex align-center justify-between">
            <div>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img
            width={133}
            height={112}
            className="mb-15"
            src="/img/12.jpg"
            alt="Sneakers"
          />
          <h5 className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex align-center justify-between">
            <div>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="card">
          <img
            width={133}
            height={112}
            className="mb-15"
            src="/img/1.jpg"
            alt="Sneakers"
          />
          <h5 className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex align-center justify-between">
            <div>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img
            width={133}
            height={112}
            className="mb-15"
            src="/img/2.jpg"
            alt="Sneakers"
          />
          <h5 className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex align-center justify-between">
            <div>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img
            width={133}
            height={112}
            className="mb-15"
            src="/img/3.jpg"
            alt="Sneakers"
          />
          <h5 className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex align-center justify-between">
            <div>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img
            width={133}
            height={112}
            className="mb-15"
            src="/img/4.jpg"
            alt="Sneakers"
          />
          <h5 className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex align-center justify-between">
            <div>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  ); 
} 

export default App;