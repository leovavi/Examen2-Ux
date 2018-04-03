import React, {Component} from 'react';
import axios from 'axios';
import Tweet from './Tweet';
import update from 'immutability-helper';
import TweetForm from './TweetForm';

class TweetsContainer extends Component{
	constructor(props){
		super(props);
		this.state = {
			tweets: []
		};
	}

	componentDidMount(){
		axios.get('https://examen2-ux-api.herokuapp.com/api/v1/tweets')
			 .then(response => {
			 	console.log(response);
			 	this.setState({tweets: response.data})
			 }).catch(err => console.log(err));
	}

	addNewTweet = (tweet) => {
		axios.post(
			'https://examen2-ux-api.herokuapp.com/api/v1/tweets',
			tweet
		).then(response => {
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
				<div>
					<TweetForm onSubmit={this.addNewTweet}/>
				</div>
				<div>
					{this.state.tweets.map((twt) => {
						return (<Tweet tweet={twt} key={twt.id} />);
					})}
				</div>
			</div>
		)
	}
}

export default TweetsContainer;