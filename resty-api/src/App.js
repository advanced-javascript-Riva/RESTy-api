import React  from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
    }
  }
  //executes at render of component
  async componentDidMount() {
   
    const url = 'https://swapi.co/api/people'
    try {
      const response = await fetch(url, {
        headers: {'Content-Type': 'application/json'}
      });
      const data = await response.json();
      console.log(data);
      this.setState({people: data[0]})
    } catch (err) {
      console.log(err);
    }
  }
   
  
  render() {
    return (
     <div className="App">
       <Header/>
       <Form/>
      <Footer/>
     </div>
    );
  }
}
export default App;
