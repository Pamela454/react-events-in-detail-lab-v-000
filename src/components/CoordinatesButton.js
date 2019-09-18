// Code CoordinatesButton Component Here
import React, { Component } from 'react';
import DelayedButton from './DelayedButton';


export default class CoordinatesButton extends Component {


handleClick = (event) => {
	event.persist();
	const mouseCoordinates = [];
	mouseCoordinates.push(event.clientX, event.clientY);  //event pooling 
}

render() {
    return (
    	<button onClick={this.props.onReceiveCoordinates(mouseCoordinates)}></button>
    	)
    }
}