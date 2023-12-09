import style from "./PredBottom.css";

function PredBottom(){
    return (
        <div className="pred-bot-container">
            <img className="pred-bot-left-img" src="./assests/Rectangle 18 (1).png"/>
            <div className="pred-bot-right0cont">
                <span className="pred-bot-line">Subscribe </span>
                <span className="pred-bot-line">Newsletter & Get</span>
                <span className="pred-bot-line"> Letest News</span>
                <input className="pred-bot-input" type="text"/>
                <span className="pred-bot-input-plesh">Enter your E-mail Address</span>
                <img className="pred-bot-input-arrow" src="./assests/Arrow 1.svg"/>
            </div>
        </div>
    )
}

export default PredBottom;