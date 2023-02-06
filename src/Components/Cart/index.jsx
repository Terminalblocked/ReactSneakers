import "./Cart.scss";
function Cart({ closeCart, items = [] }) {
  return (
    <div className="overlay">
      <div className="rightSide d-flex flex-column">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img
            onClick={closeCart}
            className="closeBtn"
            width={32}
            height={32}
            src="/img/close.svg"
            alt="Close"
          />
        </h2>

        <div className="items">
          {
            items.map((obj) => (
              <div className="cartItem d-flex align-center">
              <div
                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                className="cartItemImg"
              ></div>
              <div className="d-flex flex-column mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price}</b>
              </div>
                <img
                  className="closeBtn"
                  width={32}
                  height={32}
                  src="/img/close.svg"
                  alt="Close"
                />
              </div>  
        
            ))
          }
        </div>  
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div className="dashed-line"></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div className="dashed-line"></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenButton d-flex align-center justify-center">
            Оформить заказ
            <img src="/img/arrow-right.svg" alt="ArrowRight" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
