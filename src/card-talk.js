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

class ArrowExpand extends React.Component {
	constructor() {
		super();
	  this.expanded = false;
	}

	info(e) {
		// Get the element container
		let elem = e.target.parentNode.parentNode;

		// Toggle
		if (!this.expanded) {
			elem.style.maxHeight = '500px';
			this.expanded = true;
		} else {
			elem.style.maxHeight = '40px';
			this.expanded = false;
		}
	}

	render() {
		return (
			<div className="expand">
				<i className="material-icons" onClick={ this.info.bind(this) }>keyboard_arrow_up</i>
			</div>
		)
	}
}

class ConfList extends React.Component {
		render() {
				return (
						<table className="talks-table">
						    <tr>
									<td>Data</td>
						      <td>Evento</td>
						      <td>Local</td>
						    </tr>
								{this.props.confs.map((talk) => {
										return (
											<tr>
												<td>{ talk.date }</td>
												<td>{ talk.name }</td>
												<td>{ talk.local }</td>
											</tr>
										);
								})}
						</table>
				);
		}
}

class TalkInfo extends React.Component {
		render() {
				return (
						<div className="mdl-card__supporting-text">
							{ this.props.info.description }
							<ConfList confs= { this.props.info.conf }/>
							<ArrowExpand />
						</div>
				);
		}
}

export default class CardTalk extends React.Component {

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

				<TalkInfo info= { this.props } />

				<div className="mdl-card__actions mdl-card--border">
					{ slides }
					{ video }
				</div>
			</div>
		);
	}
};
