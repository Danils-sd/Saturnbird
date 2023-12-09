import style from "./DiscriptBlock.css";

function DiscriptBlock(){
    return(
        <div className="discript-container">
            <div className="disc-left-cont">
                <div className="disc-img-row">
                    <img className="disc-img-left-content-first" src="./assests/Rectangle 7.png"/>
                    <img className="disc-img-left-content-second" src="./assests/Rectangle 8.png"/>
                </div>
                <span className="disc-text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
            <div className="disc-right-cont">
                <span className="disc-right-top-text">Premium Drinking Water <img src="./assests/Rectangle 7 (1).png"/> Bottles</span><br/>
                <span className="disc-right-bottom-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ultricies posuere morbi et. Sit pharetra augue ut diam felis nulla morbi. Sed nunc tellus neque, id a fermentum dui. A, aliquet non lorem id. Est nunc orci placerat fringilla nulla. Pellentesque lorem duis at commodo massa eros, blandit dui. Vestibulum, odio phasellus maecenas pharetra, mauris magna massa. Pharetra at a dignissim maecenas est sit. Quis dictum nulla pharetra phasellus consequat habitant donec odio. Integer fermentum tristique lacinia morbi porttitor leo ut faucibus nisi.</span>
            </div>
        </div>
    )
}

export default DiscriptBlock;