import React  from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Result from './Components/Result';

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
     this.setState(results);
   }

  render() {
    //using spread operator to set vars whose values equal properties of this.state
    const {count, resultHeaders, resultBody} = this.state;
    return (
     <div className="App">
       <Header/>
       <Form handleResults={this.handleResults}/>
       <Result count={count} headers={resultHeaders} body={resultBody}/>
      <Footer/>
     </div>
    );
  }
}
export default App;
