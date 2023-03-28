import React from 'react'
import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from '../online/Online'

export default function Rightbar({ profile }) {

  const HomeRightbar = () => {
    return(
      <>
          <div className="birthdayContainer">
            <img src="assets/gift.png" alt="" className="birthdayImg" />
            <span className="birthdayText"><b>Modi Ji</b> and <b>2 other friends</b> have birthday today</span>
          </div>
          <img src="assets/ad.png" alt="" className="rightbarAd" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map(u =>(
              <Online key={u.id} user={u} />
            ))}
          </ul>
      </>
    )
  }
  const ProfileRightbar = () =>{
    return(<h1>hey itz profile</h1>)
  }
  return (
    <div className='rightbar'>
        <div className="rightbarWrapper">
          <ProfileRightbar />
        </div>
    </div>
  )
}
