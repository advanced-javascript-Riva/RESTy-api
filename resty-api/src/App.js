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
  async componentDidMount() {
    const url = 'https://swapi.co/api/people'
    const response = await fetch(url);
    const data = await response.json();
    this.setState({person: data.results[0]})
    console.log(data.results[0]);
  }
   
  
  render() {
    return (
     <div className="App">
       <Header/>
       <Form />
      <Footer/>
     </div>
    );
  }
}
export default App;
