import React from 'react'
import styles from './css/restaurantMenu.module.css';


const RestaurantMenu = ({ restaurants }) => {

    return (
        <div className={styles.container}>{restaurants.menu.map(({ name, price, desc, image }, i) => {
            return <div className={styles.card} key={i}>
                <img src={image} />
                <div className={styles.info}>
                    <h1>{name}</h1>
                    <h2>{price} $</h2>
                    <p>{desc}</p>
                    <button>Sipariş et</button>
                </div>
            </div>
        })}</div>
    )
}

export default RestaurantMenu