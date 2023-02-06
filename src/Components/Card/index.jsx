import { useState } from 'react';
import styles from './Card.module.scss'

function Card({ title, imageUrl, price, onFavorite, onPlus }) {

  const [isAdded, setIsAdded] = useState(false);
  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  }


  return ( 
        <div className={styles.card}>
          <div className={styles.favorite}>
            <img src="/img/heart-unliked.svg" alt="Unliked" />
          </div>
          
          <img
            width={133}
            height={112}
            className="mb-15"
            src={imageUrl}
            alt="Sneakers"
          />
          <h5 className="mb-15">{title}</h5>
          <div className="d-flex align-center justify-between">
            <div>
              <span>Цена:</span>
              <b>{price}</b>
            </div>
            
            <img className="cu-p"  src={isAdded ? "/img/btn-cheked.svg": "/img/btn-plus.svg"} alt="Plus" onClick={onClickPlus} />
            
          </div>
        </div>
  );
}

export default Card;