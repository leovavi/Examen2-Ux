import React from 'react';

const Tweet = ({tweet}) =>
	<div key={tweet.id}>
		<h4>{tweet.user}</h4>
		<p>{tweet.tweet}</p>
	</div>

export default Tweet;