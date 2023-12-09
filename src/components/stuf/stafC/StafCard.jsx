import style from "./StafCard.css";

function StafCard({img, disc, price}){
    return(
        <div className="staf-card-container">
            <div className="staf-card-hov-menu">
                <img className="st-ic" src="./assests/Group 2117.svg"/>
                <img className="st-ic" src="./assests/Group 2116.svg"/>
                <img className="st-ic" src="./assests/Group 2115.svg"/>
            </div>
            <img className="staf-card-img" src={img}/>
            <span className="staf-card-disc">{disc}</span>
            <span className="staf-card-price">{price}$</span>
            <span className="staf-card-price-alt">Add to Cart</span>
        </div>
    )
}

export default StafCard;