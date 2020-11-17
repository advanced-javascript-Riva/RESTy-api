import React  from 'react'
import './Form.css';
export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //displayed value will be this.state.value
            //displayed value will update as user types
            url: '',
            method: ''
        }
        this.onSubmit = e => {
            console.log(this.state);
            e.preventDefault();
            
        }
        //Event handler will update state object
        // Using handler for all the methods below
        this.changeHandler = e => {
            // When some input calls changeHandler, get the name and value
            // Use name as state prop I am setting, and set value to inputs value
            this.setState({[e.target.name]: e.target.value});
        }
    }
    render() {
        return (
            <div className="formSection">
            <form>
                <div className="urlContainer">
                    <label for="url">Enter URL here</label>
                    <input type="text" name="url" value= {this.state.url} onChange= {this.changeHandler}/>
                    <button onClick={()=> this.onSubmit()} id="goButton">Go</button>
                </div>
                <div className="methodButtonContainer">
                    <input type="radio" id="formButton" name="method" value='get' onChange= {this.changeHandler}/>
                    <label for="get">GET</label><br></br>
                    <input type="radio" id="formButton" name="method" value='post' onChange= {this.changeHandler}/>
                    <label for="post">POST</label><br></br>
                    <input type="radio" id="formButton" name="method" value="put" onChange= {this.changeHandler}/>
                    <label for="put">PUT</label><br></br>
                    <input type="radio" id="formButton" name="method" value="delete" onChange= {this.changeHandler}/>
                    <label for="delete">DELETE</label><br></br>
                </div>
            </form>
            <div className= "displayedResults">
                 url: {this.state.url}<br/>
                 method: {this.state.method}
            </div>
            </div>
       )
    }
}
