import React  from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Result from './Components/Result';
import HistoryList from './Components/HistoryList'
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultBody: undefined,
      resultHeaders: undefined,
      historyItems: []
    }
  }
  //App.js will pass this function to Form, so Form can call it
   handleResults = results => {
     this.setState(results);
   }
  render() {
    //using destructuring to set vars whose values equal properties of this.state
    const {count, resultHeaders, resultBody, historyItems} = this.state;
    return (
     <div className="App">
       <Header/>
       {/* handleResults is a prop that is passed to form*/}
       <Form handleResults={this.handleResults}/>
       <HistoryList history={ historyItems }/>
       {this.state.resultBody !== undefined && (
       <Result count={ count } headers={ resultHeaders } body={ resultBody } />
       )}
      <Footer/> 
     </div>
    );
  }
}
export default App;
