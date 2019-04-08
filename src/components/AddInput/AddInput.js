import React, { Component } from 'react'

import styles from './AddInput.module.css';
import DetailCard from '../DetailCard/DetailCard';

class AddInput extends Component {
    state = {
        inputValue: null,
        addCardlog: [
            {
            id: 0,
            date: '08-04-2019',
            log: null
            },
        ]
    }


    updatelogAsWeType = (e) => {
        this.setState({inputValue: e.target.value})
    }

    addLogOnClick = () => {
        this.setState(prevState => ({
            addCardlog: [...prevState.addCardlog, 
                        {id: prevState.addCardlog.map(el => console.log(el)), 
                            date: '08-04-2019', log: prevState.inputValue}]
        }))

    }

    deleteLogHandler = (event) => {
        // const logIndex = this.state.addCardlog.findIndex(log => {
        //     console.log(log === 1)

        // })

        const logs = [...this.state.addCardlog];
        const updatedLogs = logs.splice(2, 1)
        console.log(updatedLogs)
        this.setState({addCardlog: logs})
        // return updatedLogs
    }
      
    render () {

        let detailCard = (
            this.state.addCardlog.map((el, i) => {
               return <DetailCard 
                        delete={this.deleteLogHandler}
                        logdetails={el.log}
                        date={el.date}
                        key={i}/>
            })
        )

        return (
            <div>
                <div className={styles.AddInput}>
                   <div className={styles.Flex}>
                        <textarea
                            onChange={this.updatelogAsWeType}
                            type="text" 
                            placeholder='Add Details' 
                            />
                        <button type='button' onClick={this.addLogOnClick}>Add</button>
                   </div>
                </div>
                {detailCard}
            </div>
            )
    }

}

export default AddInput;