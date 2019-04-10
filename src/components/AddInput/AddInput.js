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
            log: 'this is a dummy text',
            isEditing: false
            },
        ],
        
    }


    updatelogAsWeType = (e) => {
        this.setState({inputValue: e.target.value})
    }

    //Add log on press of enter key
    addLogOnEnter = (event) => {
        if(event.keyCode === 13) {
            this.addLogOnClick()
        }
    }

    //Create New Log on click
    addLogOnClick = (index) => {
        this.setState(prevState => ({
            addCardlog: [...prevState.addCardlog, 
                        { id: index,
                          date: '08-04-2019', 
                          log: prevState.inputValue}]
        }))
        this.setState({inputValue: ''})

    }

    //Deletes the Log
    deleteLogHandler = (index) => {
        const logs = [...this.state.addCardlog];
        logs.splice(index, 1)
        this.setState({addCardlog: logs})
    }

    
    //Toggle 'isEditing'
    isEditingToggleHandler = (index) => {
       const logs = [...this.state.addCardlog]
       logs[index].isEditing = !this.state.addCardlog[index].isEditing;
       this.setState({addCardlog: logs})
    }

    //Edits the Log
    editLogHandler = (index, editedText) => {
       this.isEditingToggleHandler(index)

       const logs = [...this.state.addCardlog]
       logs[index].log = editedText.value
       this.setState({addCardlog: logs})
          console.log(editedText.value);
    }


    render () {
        let detailCard = (
            this.state.addCardlog.map((el, index) => {
               return <DetailCard 
                        editing={this.state.addCardlog[index].isEditing}
                        delete={this.deleteLogHandler}
                        toggleedit={this.isEditingToggleHandler}
                        conformedit={this.editLogHandler}
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
                        onKeyUp={this.addLogOnEnter}
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