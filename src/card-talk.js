const SlideLink = React.createClass({
	render: function() {
		return (
			<a target="_blank" href={`${this.props.link}`} >
				<img src="/img/slides-icon.png" alt="Slides" />
			</a>
		);
	}
});

const VideoLink = React.createClass({
	render: function() {
		return (
			<a target="_blank" href={`${this.props.link}`}>
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
			<div className="talk-card mdl-card mdl-shadow--2dp" style={{ background:`url(${this.props.image});background-size: cover` }}>
				<div className="mdl-card__title mdl-card--expand">
					<h2 className="mdl-card__title-text"></h2>
				</div>
				<div className="mdl-card__supporting-text">
					{ this.props.name } <br />
					{ this.props.date }, { this.props.conf }<br />
					{ this.props.local }<br />
				</div>

				<div className="icon">
					{ slides }
					{ video }
				</div>
			</div>
		);
	}
});

export default CardTalk;