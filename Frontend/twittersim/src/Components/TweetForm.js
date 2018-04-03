import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class TweetForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			user: '',
			tweet: ''
		};
	}

	handleInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleBlur = () => {
		const tweet = {
			user: this.state.user,
			tweet: this.state.tweet
		};

		axios.put(
			'http://localhost:3001/api/v1/tweets/'+this.props.tweet.id,
			{
				tweet: tweet
			}
		).then(response => {
			console.log(response);
			this.props.updateTweet(response.data);
		}).catch(err => console.log(err));
	}

	render() {
		return (
			<div className="tile">
				<form onBlur={this.handleBlur}>
					<h4 className="text-primary">New Tweet </h4>
					<input className="input" type="text" name="User" placeholder="User..." value={this.state.user} onChange={this.handleInput} />
					<textarea className="input" name="Tweet about Something..." value={this.state.tweet} onChange={this.handleInput} />
				</form>
			</div>
		);
	}
}

export default TweetForm;