import React from 'react';

class SlideLink extends React.Component {
	render() {
		return (
			<a target="_blank" href={`${this.props.link}`} alt="Slides">
				<img src="/img/slides-icon.png" alt="Slides" />
			</a>
		);
	}
};

class VideoLink extends React.Component {
	render() {
		return (
			<a id="speaker-video" target="_blank" href={`${this.props.link}`} alt="Video">
				<img src="/img/video-icon.png" alt="Video" />
			</a>
		);
	}
};

export default class CardTalk extends React.Component {
	info() {
		console.log(this.props);
	}

	render() {

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
					{ this.props.description }
				</div>
				<div className="mdl-card__actions mdl-card--border">
					{ slides }
					{ video }
					<div className="expand" onClick={ this.info.bind(this) }><i className="material-icons">keyboard_arrow_down</i></div>
				</div>
			</div>
		);
	}
};
