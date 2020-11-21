import React  from 'react'
import './Form.css';
import * as ReactBootStrap from 'react-bootstrap';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        // Talks to the React Component'this'
        this.state = {
            // Displayed value will be this.state.url or method
            // Displayed value will update as user types
            url: 'https://swapi.dev/api/people',
            method: 'GET',
            isLoading: false
        }
        // this.onSubmit = e => {
        //   // const {url, method} = this.state;
        //   // localStorage.setItem('url', url);
        //   // localStorage.setItem('GET', method)
        //     console.log(this.state);
        //     e.preventDefault();
            
        // }
        //Event handler will update state object
        // Using handler for all the methods below
        this.changeHandler = e => {
            // When some input calls changeHandler, get the name and value
            // Use name as state prop I am setting, and set value to inputs value
            this.setState({[e.target.name]: e.target.value});
        }
    }

  async fetchData() {
    this.setState({ isLoading: true });
    const url = this.state.url;
    try {
      const response = await fetch(url, {
        method: this.state.method,
        mode: 'cors',
      })
      const result = await response.json();
      const data = {
        resultBody: result,
        resultHeaders: response.headers,
        url: this.state.url,
        method: this.state.method
      }
      this.props.handleResults(data);
    } catch (err) {
        console.log(err);
    }
    this.setState({isLoading: false })
  }
  // componentDidMount() {
  //   const url = localStorage.getItem('url' === 'true');
  //   const method = 'GET' ? localStorage.getItem('method') : '';
  //   this.setState({url, method});
  // }
 
    render() {
        return (
            <div className="formSection">
            <div>
                <div className="urlContainer">
                    <label htmlFor="url" id="urlBlock">Enter URL here</label>
                    {/*removed value for input type from this.state.url*/}
                    <input type="text" name="url" id="textBar"  onChange={this.changeHandler}/>
                    <button onClick={()=> this.fetchData()} id="goButton">Go</button>
                </div>
                <div className="methodButtonContainer">
                    <input type="radio" id="formButton" name="method" value='GET' onChange={this.changeHandler}/>
                    <label htmlFor="get">GET</label><br></br>
                    <input type="radio" id="formButton" name="method" value='POST' onChange= {this.changeHandler}/>
                    <label htmlFor="post">POST</label><br></br>
                    <input type="radio" id="formButton" name="method" value="PUT" onChange= {this.changeHandler}/>
                    <label htmlFor="put">PUT</label><br></br>
                    <input type="radio" id="formButton" name="method" value="DELETE" onChange= {this.changeHandler}/>
                    <label htmlFor="delete">DELETE</label><br></br>
                </div>
            </div>
            <div className= "displayedResults">
                 url: {this.state.url}<br/>
                 method: {this.state.method}<br/><br/>
                 {this.state.isLoading === true && (
                   // If isLoading is false, ternary will return false
                   // If React gets a falsy value, it ignores it
                   // If isLoading is true, ternary returns LAST truthy thingy (in this case, the html content)
                 <ReactBootStrap.Spinner animation="border" variant="light"/>
                 )}
            </div>
            </div>
       )
    }
}
