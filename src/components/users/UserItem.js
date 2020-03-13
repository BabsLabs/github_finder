import React, { Component } from 'react'

class UserItem extends Component {
	state = {
		id: "id",
		login: "babslabs",
		avatar_url: "https://avatars1.githubusercontent.com/u/38663414?v=4",
		html_url: "https://github.com/BabsLabs"
	};

	render() {
		return (
			<div className="card text-center">
				<img
					src={this.state.avatar_url}
					alt="avatar"
					style={{ width: "60px" }}
				/>
				<h3>{this.state.login}</h3>
				<div>
					<a href={this.state.html_url} className="btn btn-dark btn-sm my-1">
						More
					</a>
				</div>
			</div>
		);
	}
}

export default UserItem
