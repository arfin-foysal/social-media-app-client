import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="righbarWrapper">
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Ok badol</b> and<b> other friends</b> hav a birth today
          </span>
        </div>
        <img src="assets/ad.png" className="rightbarAd" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
