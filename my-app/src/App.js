import React from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import FollowerList from "./components/FollowerList";
import axios from "axios";

class App extends React.Component {
	state = {
		user: []
	};

	componentDidMount() {
		axios
			.get("https://api.github.com/users/NickAlicaya")
			.then(res => {
				console.log("THIS IS THE RES", res.data);
				this.setState({
					pic: res.data.avatar_url,
					name: res.data.name,
					login: res.data.login,
					location: res.data.location,
					bio: res.data.bio
				});
			})
			.catch(err => console.log("ERROR", err));
	}

	render() {
		return (
			<div className="App">
				<div className="userCont">
					<h1 className="welcome">Welcome Github User!</h1>
					<UserCard
						pic={this.state.pic}
						name={this.state.name}
						login={this.state.login}
						location={this.state.location}
						bio={this.state.bio}
						key={this.state.id}
					/>
				</div>
				{/* <hr /> */}
				<h3>Followers</h3>
				<div className="followerCont">
					{/* <h2>Followers</h2> */}
					<FollowerList />
				</div>
			</div>
		);
	}
}

export default App;
