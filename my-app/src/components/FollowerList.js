import React from "react";
import axios from "axios";
import FollowerCard from "./FollowerCard";

class FollowerList extends React.Component {
	state = {
		followers: [{}]
	};

	componentDidMount() {
		axios
			.get("https://api.github.com/users/NickAlicaya/followers")
			.then(res => {
				console.log("User's followers", res.data);
				this.setState({ followers: res.data });
			})
			.catch(err => console.log("NO Followers", err));
	}

	render() {
		return (
			<div className="followerList">
				{this.state.followers.map((follower,index) => (
					<FollowerCard
						key={index}
						pic={follower.avatar_url}
						login={follower.login}
						url={follower.html_url}
					/>
				))}
			</div>
		);
	}
}

export default FollowerList;
