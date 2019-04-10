import React, { Component } from 'react'

import styles from './AddInput.module.css';
import DetailCard from '../DetailCard/DetailCard';

class AddInput extends Component {
    state = {
        inputValue: '',
        addCardlog: [
            {
            id: 0,
            date: '08-04-2019',
            log: 'this is a dummy text'
            },
        ],
        isEditing: false
    }


    updatelogAsWeType = (e) => {
        this.setState({inputValue: e.target.value})
    }

    //Create New Log
    addLogOnClick = (index) => {
        this.setState(prevState => ({
            addCardlog: [...prevState.addCardlog, 
                        { id: index,
                          date: '08-04-2019', 
                          log: prevState.inputValue}]
        }))

    }

    //Deletes the Log
    deleteLogHandler = (index) => {
        const logs = [...this.state.addCardlog];
        logs.splice(index, 1)
        this.setState({addCardlog: logs})
    }

    //Edit the Log
    editLogHandler = (index) => {
       this.setState({inputValue: this.state.addCardlog[index].log })



        }

    render () {

        let detailCard = (
            this.state.addCardlog.map((el, index) => {
               return <DetailCard 
                        editing={this.state.isEditing}
                        delete={this.deleteLogHandler}
                        edit={this.editLogHandler}
                        logdetails={el.log}
                        index={index}
                        date={el.date}
                        key={index}/>
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
                            value={this.state.inputValue}
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