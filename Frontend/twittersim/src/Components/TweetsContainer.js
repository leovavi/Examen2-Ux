import React, {Component} from 'react';
import axios from 'axios';
import Tweet from './Tweet';
import update from 'immutability-helper';

class TweetsContainer extends Component{
	constructor(props){
		super(props);
		this.state = {
			tweets: []
		};
	}

	componentDidMount(){
		axios.get('http://localhost:3001/api/v1/tweets')
			 .then(response => {
			 	console.log(response);
			 	this.setState({tweets: response.data})
			 }).catch(err => console.log(err));
	}

	addNewTweet = () => {
		axios.post(
			'http://localhost:3001/api/v1/tweets',
			{
				tweet: {
					user: '',
					tweet: ''
				}
			}
		).then(response => {
			console.log(response);
			const tweets = update(this.state.tweets, {
				$splice: [[0, 0, response.data]]
			});
			this.setState(
				{	
					tweets: tweets
				}
			)
		}).catch(err => console.log(err));
	}

	render() {
		return (
			<div>
				{this.state.tweets.map((twt) => {
					return (<Tweet tweet={twt} key={twt.id} />);
				})}
			</div>
		)
	}
}

export default TweetsContainer;