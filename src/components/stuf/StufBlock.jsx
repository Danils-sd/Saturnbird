import style from "./StufBlock.css";
import DATA from "../../prodData";
import StafCard from "./stafC/StafCard";
function StufBlock(){
    return(
        <div className="stuf-container">
            <span className="stuf-main-text">Our Showcase</span>
            <div className="stuf-menu">
                <span className="staf-menu-el glass-bottels">Glass Bottels</span>
                <span className="staf-menu-el plastic-bottels">Plastic Bottels</span>
                <span className="staf-menu-el glass-jar">Glasse Jar</span>
                <span className="staf-menu-el plastic-jar">Plastic Jar</span>
            </div>
            <div className="staf-catal">
                {(
                    DATA.map(obj => {
                        return(
                            <StafCard img={obj.img} disc={obj.name} price={obj.price}/>
                        )
                    })
                )}
            </div>
            <span className="staf-block-btn">View All Items +</span>
        </div>
    )
}

export default StufBlock;