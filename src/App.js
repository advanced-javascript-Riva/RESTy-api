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
  // App.js will pass this function to Form, so Form can call it
  // React only rerenders component if props or state change
  // this.setState is setting new values to the App component's state
  // Setting two values in state based on what Form (the child component) sent up
   handleResults = data => {
     const historyEntry = {
       url: data.url,
       method:data.method,
       result:data.resultBody
     }
     this.state.historyItems.push(historyEntry);

     this.setState({
       // Telling React that there is a new change and it needs to render again
       resultBody:data.resultBody,
       resultHeaders:data.resultHeaders,
       historyItems: this.state.historyItems
     });
   }

  render() {
    // Using destructuring to set vars whose values equal properties of this.state
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
