import React  from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Result from './Components/Result';
import HistoryList from './Components/HistoryList'
import HistoryPage from './HistoryPage';
import HelpPage from './HelpPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
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

  // Called when the this component renders for the first time
  componentDidMount() {
    this.getHistoryFromStorage();
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
     // Saving history to localStorage
     this.saveHistoryToStorage(this.state.historyItems);

     this.setState({
       // Telling React that there is a new change and it needs to render again
       resultBody:data.resultBody,
       resultHeaders:data.resultHeaders,
       historyItems: this.state.historyItems
     });
   }

   saveHistoryToStorage(historyItems) {
      localStorage.setItem('historyItems', JSON.stringify(historyItems));
  }
  getHistoryFromStorage() {
    const historyItems = localStorage.getItem('historyItems');
    if(historyItems !== null) {
      this.setState({historyItems: JSON.parse(historyItems)});
    }
  }
  render() {
    // Using destructuring to set vars whose values equal properties of this.state
    const {count, resultHeaders, resultBody, historyItems} = this.state;
    return (
      <Router>
     <div className="App">
       <Header/>
       <Switch>
          <Route path="/history">
            <HistoryPage history={ historyItems } />
          </Route>
          <Route path="/help">
            <HelpPage/>
          </Route>
          <Route>
            {/* handleResults is a prop that is passed to form*/}
            <Form handleResults={this.handleResults}/>
            <div className="resultsContainer">
            <HistoryList history={ historyItems }/>
            {this.state.resultBody !== undefined && (
            <Result count={ count } headers={ resultHeaders } body={ resultBody } />
          )}
          </div>
       </Route>
       </Switch>
      <Footer/> 
     </div>
     </Router>
    );
  }
}
export default App;
