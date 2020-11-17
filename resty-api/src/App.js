import React  from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import './App.css';


class App extends React.Component {
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
