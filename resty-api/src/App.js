import React  from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      resultBody: undefined,
      resultHeaders: undefined,
    }
  }
  

   handleResults = results => {
     this.setState({
       count: results.body.length,
       resultBody: results.body,
       resultHeaders: results.headers
     });
   }
  
  render() {
    return (
     <div className="App">
       <Header/>
       <Form handleResults={this.handleResults}/>
      <Footer/>
     </div>
    );
  }
}
export default App;
