import React from "react";

const UserCard = ({ pic, name, login, location, bio }) => {
	return (
		<div className="userCard">
			<img className="userPic" src={pic} alt="the user" />
			<h5>Name: {name}</h5>
			<p>Login handle: {login}</p>
			<p>Location: {location}</p>
			<p className="bio">Bio: {bio}</p>
		</div>
	);
};
export default UserCard;
