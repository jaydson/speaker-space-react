const SlideLink = React.createClass({
	render: function() {
		return (
			<a target="_blank" href={`${this.props.link}`} alt="Slides">
				<img src="/img/slides-icon.png" alt="Slides" />
			</a>
		);
	}
});

const VideoLink = React.createClass({
	render: function() {
		return (
			<a id="speaker-video" target="_blank" href={`${this.props.link}`} alt="Video">
				<img src="/img/video-icon.png" alt="Video" />
			</a>
		);
	}
});

const CardTalk = React.createClass({
	render: function() {

		let slides = this.props.slides ? <SlideLink link={ this.props.slides } /> : false;
		let video = this.props.video ? <VideoLink link={ this.props.video } /> : false;

		return (
			
			<div className="demo-card-square mdl-card mdl-shadow--2dp">
				<div className="mdl-card__title mdl-card--expand" style={{ background:`url(${this.props.image});background-size: cover` }}>
					<div>	
						<h2 className="mdl-card__title-text">{ this.props.name }</h2>
					</div>
				</div>
				<div className="mdl-card__supporting-text">
				    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				    Aenan convallis.
				</div>
				<div className="mdl-card__actions mdl-card--border">
					{ slides }
					{ video }
				</div>
			</div>
		);
	}
});

export default CardTalk;
