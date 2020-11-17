import React, { Component } from 'react'

class Form extends React.Component() {
    constructor(props) {
        super(props);
        this.state = {
            //displayed value will be this.state.value
            //displayed value will update as user types
            value: ''
        }
        sumitHandler = e => {
            e.preventDefault();
            
        }
        //event handler will update state object
        changeHandler = e => {
            this.setState({value: e.target.value});
        }
    }
    render() {
        return (
            <form onSubmit ={this.handleSubmit}>
                <label for="url">Enter URL here</label>
                <input type="text" value= {this.state.value} onChange= {this.changeHandler}/>
                <button className="go-button">GO </button>
                <input type="radio" id="get" name="formButton" value="get"/>
                <label for="get">GET</label><br></br>
                <input type="radio" id="post" name="formButton" value="post"/>
                <label for="post">POST</label><br></br>
                <input type="radio" id="put" name="formButton" value="put"/>
                <label for="put">PUT</label><br></br>
                <input type="radio" id="delete" name="formButton" value="delete"/>
                <label for="delete">DELETE</label><br></br>
                <input type="submit" value="Submit"/>
            </form>
       )
    }
}
export default Form;