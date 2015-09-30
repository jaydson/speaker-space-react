(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _talks = require('./talks');

var _talks2 = _interopRequireDefault(_talks);

var _cardTalk = require('./card-talk');

var _cardTalk2 = _interopRequireDefault(_cardTalk);

var CardList = React.createClass({
	displayName: 'CardList',

	render: function render() {
		return React.createElement(
			'div',
			null,
			_talks2['default'].map(function (talk) {
				return React.createElement(_cardTalk2['default'], { name: talk.name,
					conf: talk.conf,
					date: talk.date,
					image: talk.image,
					local: talk.local,
					slides: talk.slides,
					video: talk.video });
			})
		);
	}
});

exports['default'] = CardList;
module.exports = exports['default'];

},{"./card-talk":2,"./talks":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var SlideLink = React.createClass({
	displayName: "SlideLink",

	render: function render() {
		return React.createElement(
			"a",
			{ target: "_blank", href: "" + this.props.link },
			React.createElement("img", { src: "/img/slides-icon.png", alt: "Slides" })
		);
	}
});

var VideoLink = React.createClass({
	displayName: "VideoLink",

	render: function render() {
		return React.createElement(
			"a",
			{ target: "_blank", href: "" + this.props.link },
			React.createElement("img", { src: "/img/video-icon.png", alt: "Video" })
		);
	}
});

var CardTalk = React.createClass({
	displayName: "CardTalk",

	render: function render() {

		var slides = this.props.slides ? React.createElement(SlideLink, { link: this.props.slides }) : false;
		var video = this.props.video ? React.createElement(VideoLink, { link: this.props.video }) : false;

		return React.createElement(
			"div",
			{ className: "talk-card mdl-card mdl-shadow--2dp", style: { background: "url(" + this.props.image + ");background-size: cover" } },
			React.createElement(
				"div",
				{ className: "mdl-card__title mdl-card--expand" },
				React.createElement("h2", { className: "mdl-card__title-text" })
			),
			React.createElement(
				"div",
				{ className: "mdl-card__supporting-text" },
				this.props.name,
				" ",
				React.createElement("br", null),
				this.props.date,
				", ",
				this.props.conf,
				React.createElement("br", null),
				this.props.local,
				React.createElement("br", null)
			),
			React.createElement(
				"div",
				{ className: "icon" },
				slides,
				video
			)
		);
	}
});

exports["default"] = CardTalk;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _cardList = require('./card-list');

var _cardList2 = _interopRequireDefault(_cardList);

React.render(React.createElement(_cardList2['default'], null), document.getElementById('cardlist'));

},{"./card-list":1}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var talks = [{
	"name": "Say my name",
	"conf": "JSConf UY",
	"date": "2015-05-01",
	"image": "/img/say-my-name.png",
	"local": "Montivedeo, Uruguai",
	"slides": "https://speakerdeck.com/jaydson/say-my-name"
}, {
	"name": "ES6 Rocks!",
	"conf": "JSConf AR",
	"date": "2014-11-01",
	"image": "/img/js-rocks.png",
	"local": "Buenos Aires, Argentina",
	"slides": "https://speakerdeck.com/jaydson/es6rocks-jsconf-argentina-2014",
	"video": "https://www.youtube.com/watch?v=7g_6hfG0stc"
}, {
	"name": "2025 - Uma palestra sobre o futuro",
	"conf": "EATI",
	"date": "2014-11-01",
	"image": "/img/2025.png",
	"local": "Frederico Westphalen, RS, Brasil",
	"slides": "https://speakerdeck.com/jaydson/2025-uma-palestra-sobre-o-futuro"
}, {
	"name": "And ES6 For All",
	"conf": "FrontInAracaju",
	"date": "2014-08-01",
	"image": "/img/es6-for-all.png",
	"local": "Aracaju, SE, Brasil",
	"slides": "https://speakerdeck.com/jaydson/and-es6-for-all"
}, {
	"name": "Pessoas fazem coisas",
	"conf": "Evento na UFSM",
	"date": "2014-06-01",
	"image": "/img/pessoas.png",
	"local": "Frederico Westphalen, RS, Brasil",
	"slides": "https://speakerdeck.com/jaydson/pessoas-fazem-coisas"
}, {
	"name": "JavaScript do futuro no presente",
	"conf": "Evento Locaweb",
	"date": "2014-05-01",
	"image": "/img/js-future.png",
	"local": "Belo Horizonte, MG, Brasil",
	"slides": "https://speakerdeck.com/jaydson/javascript-do-futuro-no-presente",
	"video": "https://www.eventials.com/locaweb/javascript-do-futuro-no-presente/"
}];

exports["default"] = talks;
module.exports = exports["default"];

},{}]},{},[3]);
