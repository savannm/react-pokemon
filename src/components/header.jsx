import React, {Component} from 'react';

class Header extends Component {
	render(){
		return(
			<div className="container">
			<section className="row">
			<div className="col-sm-12">
			<h1>This is your header</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id leo tempus risus sollicitudin rutrum quis eget elit. Curabitur pretium congue sodales. Fusce facilisis sapien rutrum, posuere tortor a, vulputate nunc. Praesent tempus rhoncus sapien eget fringilla. Maecenas ex quam, aliquam a fermentum non, dignissim eu lorem. Curabitur posuere lorem et tristique rutrum. Nunc lacinia at est porttitor consequat.
			</p>
			<p>
			Sed sem lectus, varius a arcu a, sollicitudin pretium leo. Sed ornare velit vel libero pellentesque, et aliquet massa dignissim. Sed ac velit fermentum, venenatis dui vel, gravida arcu. Ut eleifend volutpat porttitor. Fusce suscipit justo non commodo pellentesque. Pellentesque lobortis ullamcorper varius. Phasellus sit amet diam at mauris sagittis finibus. Donec dictum laoreet erat, nec placerat sapien porttitor nec. Ut elementum elit vitae consectetur sollicitudin. Nullam et sollicitudin urna. Nunc scelerisque scelerisque sollicitudin.
			</p>
			<button>EXPLORE</button>
			</div>
			</section>
			</div>
			)

	}
}

export default Header;