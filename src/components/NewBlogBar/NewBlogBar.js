import React from 'react';
import Button from 'muicss/lib/react/button';
import './NewBlogBar.scss'

class NewBlogBar extends React.Component {
	render(){
		return (
			<div className='newblog'>
				<Button className='hello' size="large" color="primary">Write a new Blog</Button>
			</div>
		);
	}
}

export default NewBlogBar;