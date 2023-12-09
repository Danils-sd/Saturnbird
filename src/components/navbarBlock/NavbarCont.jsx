import style from "./NavbarCont.css";

function NavbarCont(){
    return(
        <div className="navbar-container">
            <span className="nav-logo">Saturnbird.</span>
            <div className="nav-puncts">
                <span className="pun-home pun-chil">Home</span>
                <span className="pun-category pun-chil">Category<img className="cat-ic" src="./assests/Vector1.svg"/></span>
                <span className="pun-shop pun-chil">Shop</span>
                <span className="pun-product pun-chil">Product</span>
            </div>
            <img className="search-ic" src="./assests/Search.svg"/>
            <span className="nav-search">Search</span>
            <img className="buy-ic" src="./assests/Buy.svg"/>
        </div>
    )
}

export default NavbarCont;