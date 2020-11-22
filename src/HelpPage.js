import React  from 'react';
import './HelpPage.css';

export default class HelpPage extends React.Component {
    render() {
        return (
            <div className="helpText">
              <p> Welcome to RESTy-Api. This application provides a convenient interface for calling public API's.</p>
              <p> To use this app, enter a URL in the URL box on the homepage and select an HTTP method for your query.</p>
              <p> When you click 'Go' the query will be sent and the response will be displayed on the right side of the page.</p>
              <p> Your complete history of searches is displayed on the left side of the homepage as well as on the History page.</p>
            </div>
        )
    }
}
