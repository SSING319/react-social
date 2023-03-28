import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
                <img src="assets/post/4.jpeg" alt="" className="profileCoverImg" />
                <img src="assets/post/5.jpeg" alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Sahil</h4>
                <span className="profileInfoDesc">Hey itz meee</span>
            </div>
            
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
