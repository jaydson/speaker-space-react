import talks from './talks';
import CardTalk from './card-talk';

const CardList = React.createClass({
	render: function() {
		return (
			<div>
				{talks.map((talk) => {
					return <CardTalk name= { talk.name } 
									 conf= { talk.conf }
									 date= { talk.date }
									 image= { talk.image }
									 local= { talk.local }
									 slides= { talk.slides }
									 video= { talk.video } />;
				})}
			</div>
		);
	}
});

export default CardList;