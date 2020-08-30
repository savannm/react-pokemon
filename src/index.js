import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import * as serviceWorker from './serviceWorker';




// ReactDOM.render(
// 	<React.StrictMode>
// 	<App />
// 	</React.StrictMode>,
// 	document.getElementById('header')
// 	);



	// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


ReactDOM.render(
	<div>
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<Header />
					</div>
				</div>
			</div>
	</div>,
	document.getElementById('header')
);

ReactDOM.render(
	<div>
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
							<Content />
					</div>
				</div>
			</div>
	</div>,
	document.getElementById('content')
);




ReactDOM.render(
	<div>
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
							<Footer />
					</div>
				</div>
			</div>
	</div>,
	document.getElementById('footer')
);




