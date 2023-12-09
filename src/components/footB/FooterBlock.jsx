import style from "./FooterBlock.css";

function FooterBlock(){
    return(
        <div className="footer-container">
            <div className="footer-top-content">
                <span className="footer-text-main">Saturnbird.</span>
                <div className="footer-cat-manu">
                    <span className="footer-cat-it">Home</span>
                    <span className="footer-cat-it">Category</span>
                    <span className="footer-cat-it">Shop</span>
                    <span className="footer-cat-it">Product</span>
                </div>
            </div>
            <div className="footer-bottom-content">
                <span className="fotter-bottom-left-content">©Saturnbird. 2022 All Rights Reserved.</span>
                <div className="fotter-bottom-right-content">
                    <img className="footer-ic" src="./assests/Group 2131.svg"/>
                    <img className="footer-ic" src="./assests/Group 2130.svg"/>
                    <img className="footer-ic" src="./assests/Group 2129.svg"/>
                    <img className="footer-ic" src="./assests/Group 2128.svg"/>
                </div>
            </div>
        </div>
    )
}

export default FooterBlock;