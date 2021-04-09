import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import {useStateValue} from "../stateManagement/StateProvider";
import { auth } from '../firebase';
import '../styles/Header.css';

function Header() {

    const [{basket, user}] = useStateValue();

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
            <img 
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon"
                />
               
            </Link>

            <div className="header__search">
                <input
                    className="header__searchInput"
                    type="text" />
                <SearchIcon 
                    className="header__searchIcon"
                />   
            </div>

            <div className="header__nav">
                <Link to={!user ? "/" : "/login"}>
                <div className="header__option" onClick={handleAuthentication}>
                    <span className="header__optionLineOne">Hello {user ? user?.email : "Guest"}</span>
                    <span className="header__optionLineTwo">Sign {user ? "Out" : "In"}</span>
                </div>
                </Link>
                
                <Link to={"/orders"}>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span> {/* optional ? will end gracfulley if no value found */}
                    </div>
                </Link>
            </div>

        </div>

       
    )
}

export default Header

