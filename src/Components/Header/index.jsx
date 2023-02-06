import styles from './Header.module.scss'

function Header(props) {
    return ( 
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
            <img
            className="mr-20"
            width={40}
            height={40}
            src="/img/logo.png"
            alt="logo"
            />
            <div className={styles.headerInfo}>
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
            </div>
        </div>
        <ul className="d-flex">
            <li onClick={props.onClickCart} className="mr-30 cu-p">
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
     );
}

export default Header;