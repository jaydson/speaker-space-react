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
					description: talk.description,
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
			{ target: "_blank", href: "" + this.props.link, alt: "Slides" },
			React.createElement("img", { src: "/img/slides-icon.png", alt: "Slides" })
		);
	}
});

var VideoLink = React.createClass({
	displayName: "VideoLink",

	render: function render() {
		return React.createElement(
			"a",
			{ id: "speaker-video", target: "_blank", href: "" + this.props.link, alt: "Video" },
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
			{ className: "demo-card-square mdl-card mdl-shadow--2dp" },
			React.createElement(
				"div",
				{ className: "mdl-card__title mdl-card--expand", style: { background: "url(" + this.props.image + ");background-size: cover" } },
				React.createElement(
					"div",
					null,
					React.createElement(
						"h2",
						{ className: "mdl-card__title-text" },
						this.props.name
					)
				)
			),
			React.createElement(
				"div",
				{ className: "mdl-card__supporting-text" },
				this.props.description
			),
			React.createElement(
				"div",
				{ className: "mdl-card__actions mdl-card--border" },
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
	"name": "Futuro do Subjuntivo - Quando vós programardes JavaScript",
	"description": "O JavaScript é fácil perto do português e do Java. Palestra sobre ES2015 e ES2016.",
	"conf": "Webbr, FrontEndCarioca",
	"date": "2015-09-01",
	"image": "/img/programardes.png",
	"local": "São Paulo, Brasil",
	"slides": "https://docs.google.com/presentation/d/1EbmnOHf1WwnBrdOQ0WnlGp1Q7UaDqY3wQvPW6XNMSqA/pub?start=false&loop=false&delayms=3000"
}, {
	"name": "BrazilJS Conf 2015 - Abertura",
	"description": "Apresentação feita na abertura da BrazilJS Conf 2015.",
	"conf": "BrazilJS Conf",
	"date": "2015-08-01",
	"image": "/img/braziljs-2015.png",
	"local": "Porto Alegre, Brasil",
	"slides": "https://speakerdeck.com/jaydson/braziljs-conf-2015-abertura",
	"video": "https://www.youtube.com/watch?v=9wuagUIaHzY"
}, {
	"name": "Say my name",
	"description": "A deeply analysis on the modern JavaScript (ES6 - ES2015/ES7 - ES2016).",
	"conf": "JSConf UY",
	"date": "2015-05-01",
	"image": "/img/say-my-name.png",
	"local": "Montivedeo, Uruguai",
	"slides": "https://speakerdeck.com/jaydson/say-my-name"
}, {
	"name": "Template Engines",
	"description": "Treinamento no Terra sobre template engines e Nunjucks.",
	"conf": "Treinamento Terra",
	"date": "2015-04-01",
	"image": "/img/template-engines.png",
	"local": "Porto Alegre, Brasil",
	"slides": "https://speakerdeck.com/jaydson/template-engines"
}, {
	"name": "ES6 Rocks!",
	"description": "ES6 é a sexta versão do JavaScript. Nessa palestra mostrei as features e sintaxe do ES6.",
	"conf": "JSConf AR",
	"date": "2014-11-01",
	"image": "/img/js-rocks.png",
	"local": "Buenos Aires, Argentina",
	"slides": "https://speakerdeck.com/jaydson/es6rocks-jsconf-argentina-2014",
	"video": "https://www.youtube.com/watch?v=7g_6hfG0stc"
}, {
	"name": "Uma palestra sobre o futuro",
	"description": "A palestra aborda uma visão de mercado e de tecnologia e onde o JavaScript está inserido.",
	"conf": "EATI",
	"date": "2014-11-01",
	"image": "/img/2025.png",
	"local": "Frederico Westphalen, RS, Brasil",
	"slides": "https://speakerdeck.com/jaydson/2025-uma-palestra-sobre-o-futuro"
}, {
	"name": "And ES6 For All",
	"description": "O JavaScript, assim como algumas boas bandas de Rock, foi subestimado por muito tempo.",
	"conf": "FrontInAracaju",
	"date": "2014-08-01",
	"image": "/img/es6-for-all.png",
	"local": "Aracaju, SE, Brasil",
	"slides": "https://speakerdeck.com/jaydson/and-es6-for-all"
}, {
	"name": "Pessoas fazem coisas",
	"description": "Palestra sobre pessoas que fazem coisas que mudam o mundo.",
	"conf": "Evento na UFSM",
	"date": "2014-06-01",
	"image": "/img/pessoas.png",
	"local": "Frederico Westphalen, RS, Brasil",
	"slides": "https://speakerdeck.com/jaydson/pessoas-fazem-coisas"
}, {
	"name": "ES6 Rocks!",
	"description": "ES6 é a sexta versão do JavaScript. Nessa palestra mostrei as features e sintaxe do ES6.",
	"conf": "RSJS",
	"date": "2014-05-01",
	"image": "/img/es6-rocks-rsjs.png",
	"local": "Porto Alegre, Brasil",
	"slides": "https://speakerdeck.com/jaydson/es6-rocks"
}, {
	"name": "JavaScript do futuro no presente",
	"description": "A palestra aborda a versão futura do JavaScript e mostra como usa-la nos dias atuais.",
	"conf": "Evento Locaweb",
	"date": "2014-04-01",
	"image": "/img/js-future.png",
	"local": "Belo Horizonte, MG, Brasil",
	"slides": "https://speakerdeck.com/jaydson/javascript-do-futuro-no-presente",
	"video": "https://www.eventials.com/locaweb/javascript-do-futuro-no-presente/"
}, {
	"name": "JavaScript do futuro no presente",
	"description": "O mundo muda constantemente. Na tecnologia isso é mais evidente, o avanço é exponêncial...",
	"conf": "FrontInPoa",
	"date": "2013-11-01",
	"image": "/img/processo-des-fe.png",
	"local": "Porto Alegre, Brasil",
	"slides": "https://speakerdeck.com/jaydson/processo-de-desenvolvimento-frontend-do-caos-ao-sublime",
	"video": "https://www.youtube.com/watch?v=tDGoXFM9afE"
}, {
	"name": "O nosso amigo iFrame",
	"description": "Palestra apresentada no 7Masters, evento do IMasters, sobre o nosso velho amigo iFrame!",
	"conf": "7Masters",
	"date": "2013-09-01",
	"image": "/img/amigo-iframe.png",
	"local": "São Paulo, Brasil",
	"slides": "https://speakerdeck.com/jaydson/o-nosso-amigo-iframe",
	"video": "https://www.youtube.com/watch?v=jsyP1HU-g4I"
}, {
	"name": "JavaScript Everywhere",
	"description": "Palestra apresentada em diversos eventos como FISL, RIOJS, RSJS, TDC Floripa.",
	"conf": "FISL, RIOJS, RSJS, TDC",
	"date": "2013-07-01",
	"image": "/img/js-everywhere.png",
	"local": "Porto Alegre, Brasil",
	"slides": "https://speakerdeck.com/jaydson/javascript-everywhere",
	"video": "http://hemingway.softwarelivre.org/fisl14/high/41d/sala41d-high-201307041000.ogg"
}, {
	"name": "Controle Remoto com NodeJS e WebSockets",
	"description": "A palestra conta a história do controle remoto e apresenta uma solução Web-based",
	"conf": "Webbr e EATI",
	"date": "2012-11-01",
	"image": "/img/remote-control.png",
	"local": "Frederico Westphalen, RS, Brasil",
	"slides": "https://speakerdeck.com/jaydson/controle-remoto-com-nodejs-e-websockets"
}, {
	"name": "MDN - Translate and Beer",
	"description": "O objetivo da palestra foi apresentar features da MDN e gerar conteúdo em português da documentação do JavaScript.",
	"conf": "Code and Beer",
	"date": "2012-10-01",
	"image": "/img/mdn-beer.png",
	"local": "Porto Alegre, Brasil",
	"slides": "https://speakerdeck.com/jaydson/mdn-translate-and-beer"
}, {
	"name": "Extreme Web Performance",
	"description": "A palestra abordará técnicas, práticas e tecnologias para reduzir o tempo de carregamento de um site.",
	"conf": "RSJS, PernambucoJS, EATI",
	"date": "2012-03-01",
	"image": "/img/extreme-web-performance.png",
	"local": "Porto Alegre, Brasil",
	"slides": "https://speakerdeck.com/jaydson/extreme-web-performance",
	"video": "https://www.youtube.com/watch?v=o73xH52pFPY"
}, {
	"name": "JavaScript levado a sério",
	"description": "A palestra conta um pouco da história do Javascript e o porque da imcompreensão da linguagem.",
	"conf": "FISL",
	"date": "2011-07-01",
	"image": "/img/js-levado-a-serio.png",
	"local": "Porto Alegre, Brasil",
	"slides": "https://speakerdeck.com/jaydson/javascript-levado-a-serio-2011",
	"video": "http://jaydson.org/javascript-levado-a-serio-fisl-12-video-parte-01/"
}, {
	"name": "Criando Aplicações .Net com o The WebMind",
	"description": "O TheWebMind é uma plataforma livre desenvolvida em PHP que possui a capacidade de interpretar o conhecimento humano.",
	"conf": "Teched",
	"date": "2010-09-01",
	"image": "/img/mind-net.png",
	"local": "São Paulo, Brasil",
	"slides": "https://speakerdeck.com/jaydson/criando-aplicacoes-net-com-o-the-webmind"
}, {
	"name": "Como fazer mais em aplicações RIA escrevendo menos",
	"description": "A palestra aborda conceitos básicos e avançados de jQuery além de mostrar um pouco do histórico e sua origem.",
	"conf": "Evento Target Trust",
	"date": "2009-11-01",
	"image": "/img/jquery.png",
	"local": "Porto Alegre, Brasil",
	"slides": "https://speakerdeck.com/jaydson/como-fazer-mais-em-aplicacoes-ria-escrevendo-menos"
}, {
	"name": "Um novo paradigma no desenvolvimento de sotware",
	"description": "Palestra ministrada pelos 2 criadores do TheWebMind no Tche Linux 2009.",
	"conf": "Tche Linux",
	"date": "2009-10-01",
	"image": "/img/mind-sw.png",
	"local": "Porto Alegre, Brasil",
	"slides": "https://speakerdeck.com/jaydson/the-webmind-um-novo-paradigma-no-desenvolvimento-de-sotware"
}, {
	"name": "JavaScript levado a sério",
	"description": "A palestra conta um pouco da história do Javascript e o porque da imcompreensão da linguagem.",
	"conf": "Mostra Científica do Senac-RS",
	"date": "2009-10-01",
	"image": "/img/js-levado-a-serio-1.png",
	"local": "Porto Alegre, Brasil",
	"slides": "https://speakerdeck.com/jaydson/javascript-levado-a-serio"
}, {
	"name": "JSON",
	"description": "Apresentação feita em 2008 para a banca do meu TCC. Apresentei o projeto que desenolvi na época, o RichBlocks.",
	"conf": "Banca TCC",
	"date": "2008-11-01",
	"image": "/img/richblocks.png",
	"local": "Porto Alegre, Brasil",
	"slides": "https://speakerdeck.com/jaydson/richblocks-um-framework-para-implantar-interfaces-ria-em-sistemas-web"
}, {
	"name": "JSON",
	"description": "Palestra sobre JSON que apresentei em algum lugar que não lembro.",
	"conf": "Desconhecido",
	"date": "2008-01-01",
	"image": "/img/json.png",
	"local": "Porto Alegre, Brasil",
	"slides": "https://speakerdeck.com/jaydson/json"
}];

exports["default"] = talks;
module.exports = exports["default"];

},{}]},{},[3]);
