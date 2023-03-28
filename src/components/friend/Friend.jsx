import React from "react";
import "./friend.css";

export default function Friend({ friend }) {
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={friend.profilePicture} />
      <span className="sidebarFriendName">{friend.username}</span>
    </li>
  );
}
