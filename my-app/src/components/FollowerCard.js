import React from "react";

const FollowerCard = props => {
	console.log("PROPS", props);
	return (
		<div className="followerCard">
			<img className="followerPic" src={props.pic} alt="follower pic" />
			<h5>{props.login}</h5>
			<a className="url" href={props.url}>
				Github Profile Link
			</a>
		</div>
	);
};

export default FollowerCard;
