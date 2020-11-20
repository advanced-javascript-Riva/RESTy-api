import React from 'react'
import '../Components/HistoryList.css'

class HistoryList extends React.Component {
    render() {
        return (
            <div className="historyList">
                <div className="historyText" id="history">Your History</div>
                <ul>
                    {/* {.map((item, i) => {
                        return <li key={i}> {item.method} {item.url}</li>
                    })} */}
                </ul>
            </div>
        )
    }
}
export default HistoryList;
