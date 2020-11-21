import React from 'react'
import '../Components/HistoryList.css'

class HistoryList extends React.Component {
    render() {
        return (
            <div className="historyList">
                <div className="historyText">Your History</div>
                <ul className="historyItems">
                    {this.props.history && this.props.history.map((item, i) => {
                        // When iterating over a list, a key is needed so React can track items
                        return <li key={i}> {item.method} {item.url}</li>
                    })}
                </ul>
            </div>
        )
    }
}
export default HistoryList;
