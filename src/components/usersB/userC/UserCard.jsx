import style from "./UserCard.css";

function UserCard({img, disc, name, inst}){
    return(
        <div className="user-card-container">
            <img className="user-card-zap" src="./assests/Group (1).svg"/>
            <img className="user-card-ava" src={img}/>
            <span className="user-card-disc">{disc}</span>
            <span className="user-card-name">{name}</span>
            <span className="user-card-inst"><img src="./assests/Group 17.svg"/>{inst}</span>
        </div>
    )
}
export default UserCard;