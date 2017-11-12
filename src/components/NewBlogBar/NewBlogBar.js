import React from 'react';
import Button from 'muicss/lib/react/button';
import Textarea from "react-textarea-autosize";
import './NewBlogBar.scss'

class NewBlogBar extends React.Component {

	// onSubmit(ev) {
	//     ev.preventDefault();  // prevent form submission
	//     alert(this.input.controlEl.value);
	// }

	// render(){
	// 	return (
	// 		<div className='newblog'>
	// 			<form className='height' onSubmit={this.onSubmit.bind(this)}>
 //        			<Textarea ref={el => { this.input = el; }} defaultValue="Value on load" />    
	// 				<Button className='hello' size="large" color="primary">Write a new Blog</Button>
	// 			</form>
	// 		</div>
	// 	);
	// }

	render(){
		return (
			<div className='newblog'> 
				<Textarea className='textarea'/>
				<Button className='btn' size="large" color="primary">Post a new Blog</Button>
			</div>
		);
	}
}

export default NewBlogBar;