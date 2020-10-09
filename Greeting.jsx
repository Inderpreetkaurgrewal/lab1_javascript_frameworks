import React, { Component } from 'react'

export default class Greeting extends Component {
    render() {
        return (
           
        <div className='design'>
         <h4>Hi ! its  {this.props.name ? this.props.name : '___'} here. How are you?</h4>
             </div>
           
        )
    }
}