import React, { Component } from 'react';
import Reboot from 'material-ui/Reboot';

import Home from './components/home';

class App extends Component {
	render() {
		return (
			<div>
				<Reboot />
				<Home></Home>
			</div>
		);
	}
}

export default App;
