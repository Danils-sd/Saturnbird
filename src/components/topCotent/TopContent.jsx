import style from "./TopContent.css";

function TopContent(){
    return(
        <div className="top-content-container">
            <div className="left-cont">
                <div className="top-line">
                    <span className="first-text-top-line">Lorem ipsum dolor sit<br/> amet, consectetur<br/> adipiscing elit.<br/></span>
                    <span className="second-text-top-line">Bottle which</span>
                </div>
                <div className="bottom-line">
                    <span className="text-bottom-line">Needed Daily.</span>
                    <div className="img-bottom-line-dash"></div>
                </div>
            </div>
            <div className="right-cont">
                <img src="./assests/Rectangle 3.png"/>
            </div>
        </div>
    )
}

export default TopContent;