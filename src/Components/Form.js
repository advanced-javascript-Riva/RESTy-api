import React  from 'react'
import './Form.css';
export default class Form extends React.Component {
    constructor(props) {
        super(props);
        //talks to the React Component'this'
        this.state = {
            // Displayed value will be this.state.url or method
            // Displayed value will update as user types
            // Hardcoding inital values so I don't have to keep filling it in
            url: 'https://api-server-rd.herokuapp.com/products',
            method: 'GET'
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

  async fetchData() {
    const url = this.state.url;
    try {
      const response = await fetch(url, {
        method: this.state.method,
        isLoaded: true,
        mode: 'cors',
      })
      const result = await response.json();
      const data = {
        count: result.count,
        resultBody: result.results,
        resultHeaders: response.headers
      }
      this.props.handleResults(data);
    } catch (err) {
        console.log(err);
    }
  }
  
    render() {
        return (
            <div className="formSection">
            <div>
                <div className="urlContainer">
                    <label for="url" id="urlBlock">Enter URL here</label>
                    <input type="text" name="url" value= {this.state.url} onChange= {this.changeHandler}/>
                    <button onClick={()=> this.fetchData()} id="goButton">Go</button>
                </div>
                <div className="methodButtonContainer">
                    <input type="radio" id="formButton" name="method" value='GET' onChange= {this.changeHandler}/>
                    <label for="get">GET</label><br></br>
                    <input type="radio" id="formButton" name="method" value='POST' onChange= {this.changeHandler}/>
                    <label for="post">POST</label><br></br>
                    <input type="radio" id="formButton" name="method" value="PUT" onChange= {this.changeHandler}/>
                    <label for="put">PUT</label><br></br>
                    <input type="radio" id="formButton" name="method" value="DELETE" onChange= {this.changeHandler}/>
                    <label for="delete">DELETE</label><br></br>
                </div>
            </div>
            <div className= "displayedResults">
                 url: {this.state.url}<br/>
                 method: {this.state.method}
            </div>
            </div>
       )
    }
}
