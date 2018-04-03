import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class TweetForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			user: props.tweet ? props.tweet.user : '',
			tweet: props.tweet ? props.tweet.tweet : ''
		};
	}

	onChangeUser = (e) =>{
		let user = e.target.value;
		this.setState({user});
	}

	onChangeTweet = (e) => {
		let tweet = e.target.value;
		this.setState({tweet});
	}

	onSubmit = (e) => {
		e.preventDefault();
		const tweet = {
			user: this.state.user,
			tweet: this.state.tweet
		};
		this.props.addNewTweet(tweet);
	}

	render() {
		return (
			<div className="tile">
				<form onBlur={this.handleBlur}>
					<h4 className="text-primary text-center">New Tweet </h4>
					<input 
						className="input" 
						type="text" 
						name="User" 
						placeholder="User..." 
						value={this.state.user} 
						onChange={this.onChangeUser} 
					/>
					<input 
						className="textarea" 
						name="Tweet" 
						placeholder="Tweet about Something..." 
						value={this.state.tweet} 
						onChange={this.onChangeTweet} 
					/>
					<button 
						className="btn btn-primary" 
						type="submit" 
						onClick={this.onSubmit}
					>
						Post Tweet
					</button>
				</form>
			</div>
		);
	}
}

export default TweetForm;