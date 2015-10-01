import React from 'react';
import talks from './talks';
import CardTalk from './card-talk';

export default class CardList extends React.Component {

	render () {
		return (
			<div>
				{talks.map((talk) => {
					return <CardTalk key={ talk.id }
									 name = { talk.name } 
									 description = { talk.description } 
									 conf = { talk.conf }
									 date = { talk.date }
									 image = { talk.image }
									 local = { talk.local }
									 slides = { talk.slides }
									 video = { talk.video } />;
				})}
			</div>
		);
	}
};