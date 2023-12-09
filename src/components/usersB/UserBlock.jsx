import DATAUsers from "../../prodDataUsers";
import style from "./UserBlock.css";
import UserCard from "./userC/UserCard";

function UserBlock(){
    return(
        <div className="user-bloc-container">
            <span className="user-block-main-text">What Our Client Say</span>
            <div className="user-users--list">
                {
                    DATAUsers.map(u => {
                        return (
                        <UserCard img={u.img} disc={u.disc} name={u.name} inst={u.inst}/>
                        )
                    })
                }
            </div>
            <img className="user-block-list-bottom" src="./assests/Group 23.png"/>
        </div>
    )
}

export default UserBlock;