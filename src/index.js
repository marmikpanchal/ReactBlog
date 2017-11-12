import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import TitleBar from './components/TitleBar/TitleBar'
import NewBlogBar from './components/NewBlogBar/NewBlogBar'

class Home extends React.Component {

	render(){
		return(
			<div>
				<TitleBar />
				<NewBlogBar />
			</div>

		);
	}
}


ReactDOM.render(<Home />, document.getElementById('root'));