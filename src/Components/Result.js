import React from 'react';
import './Result.css'
export default class Result extends React.Component {
    render() {
        return (
            <div className="jsonSection">
            <div className="jsonTitle"> Results</div>
            <div className="jsonText">
            <div className="headers json" >
                {/*making json pretty*/}
                {JSON.stringify(this.props.headers, null, 2)}
            </div>
            <div className="body json" >
                {/*making json pretty*/}
                {JSON.stringify(this.props.body, null, 2)}
            </div>
            </div>
            </div>
        )
    }
}
