import React, { Component } from 'react'

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //displayed value will be this.state.value
            //displayed value will update as user types
            url: '',
            get: '',
            post: '',
            put:'',
            delete: '',
        }
        this.submitHandler = e => {
            e.preventDefault();
            
        }
        //event handler will update state object
        this.changeHandler = e => {
            this.setState({value: e.target.value});
        }
    }
    render() {
        return (
            <form onSubmit ={this.submitHandler}>
                <label for="url">Enter URL here</label>
                <input type="text" value= {this.state.url} onChange= {this.changeHandler}/>
                <button className="go-button">GO </button><br></br>
                <input type="radio" id="formButton" name="get" value= {this.state.get} onChange= {this.changeHandler}/>
                <label for="get">GET</label><br></br>
                <input type="radio" id="formButton" name="formButton" value="post"/>
                <label for="post">POST</label><br></br>
                <input type="radio" id="formButton" name="formButton" value="put"/>
                <label for="put">PUT</label><br></br>
                <input type="radio" id="formButton" name="formButton" value="delete"/>
                <label for="delete">DELETE</label><br></br>
                <input type="submit" value="Submit"/>
            </form>
       )
    }
}
