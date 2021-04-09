import React from 'react'
import Product from './Product'
import "../styles/Home.css"

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2021/TV/BRND/BRND_MTH21_00000_GWBleedingHero_3000x1200_Final_en-CA_FT_PVD6656._CB656951988_.jpg"
                    alt="" />
            

            <div className="home__row">
                <Product
                    id={1} 
                    title="Gorilla Micro Precise Super Glue, 5 Gram, Clear, (Pack of 1)"
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/815pPJVBqML._AC_SL1500_.jpg"
                    rating={4}
                />
                <Product 
                    id={2} 
                    title="Large Cotton Rope Storage Basket - Woven Blanket Basket in Living Room Pillows Storage Bins with Handles for Toys Plant Basket Home Decor Warm Mix Brown White"
                    price={28.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/61IBGiHNXgL._AC_SL1000_.jpg"
                    rating={4}
                />
            </div>

            <div className="home__row">
                <Product 
                    id={3} 
                    title="Speed Reading: Learn to Read a 200+ Page"
                    price={11.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/71TyWBi+vzL.jpg"
                    rating={3}
                />

                <Product 
                    id={4} 
                    title="HP Elite Desktop Computer, Intel Core i5 3.2 GHz, 8 GB RAM, 500 GB HDD, Keyboard & Mouse, Wi-Fi, 19inch LCD"
                    price={282.23}
                    image="https://images-na.ssl-images-amazon.com/images/I/71bQ00BLNwL._AC_SL1500_.jpg"
                    rating={4}
                />

                <Product 
                    id={5} 
                    title="SONGMICS 2-Level Stainless Steel Clothes Drying Rack, Bonus Sock Clips Easy Storage Laundry Rack"
                    price={79.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/71fIfLKYQoL._AC_SL1500_.jpg"
                    rating={5}
                />
            </div>

            <div className="home__row">
                <Product 
                    id={6} 
                    title="TAOCOCO Sectional Couch Covers 2pcs L-Shaped Sofa Covers Softness Furniture Slipcovers with 2pcs Pillowcases L-Type Polyester Fabric Stretch Sofa Covers 3 Seats + 3 Seats (Light Gray)"
                    price={104.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51i-srxmb5L._AC_SL1500_.jpg"
                    rating={3}
                />
            </div>
            </div>
        </div>
    )
}

export default Home
