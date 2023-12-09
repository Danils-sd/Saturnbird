import style from "./InfoBlock.css";

function InfoBlock(){
    return(
        <div className="info-container">
            <div className="info-left-cont">
                <span className="info-text-main">A Reusable Way of Living</span>
                <span className="info-text-disc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc turpis arcu nisl cursus rutrum sapien nulla. Volutpat mi vulputate a nullam sollicitudin in elementum, urna at.</span>
                <div className="info-more-info-block">
                    <div className="more-info">
                        <img src="./assests/Group.svg"/>
                        <span className="top-text-more-info">Renewable</span>
                        <span className="disc-text-more-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est consequat aenean diam risus.</span>
                        <span className="link-text-more-info">See Ofters</span>
                    </div>
                    <div className="more-info">
                        <img src="./assests/Vector.svg"/>
                        <span className="top-text-more-info">Refreshing</span>
                        <span className="disc-text-more-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est consequat aenean diam risus.</span>
                        <span className="link-text-more-info">See Ofters</span>
                    </div>
                </div>
            </div>
            <img className="info-right-cont" src="./assests/Rectangle 18.png"/>
        </div>
    )
}

export default InfoBlock;