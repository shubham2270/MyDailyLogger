import React, { Component } from 'react'

import styles from './DetailCard.module.css';

class DetailCard extends Component {
  render() {

    let logValue = this.props.logdetails
    if (this.props.editing) {
      return logValue = <input type="text"></input>
    }
    // this.props.editing ? logValue = <input type="text"></input> : logValue

    return (
      <div className={styles.wrapper}>
        <div className={styles.card}>
            <div className={styles.date}>{this.props.date}</div>
           <div className={styles.desc}>
            {logValue}
           </div>
           <div className={styles.editWrap}>
               <div style={{color:'#57A4FF'}}
                onClick={() => this.props.edit(this.props.index)}><i className="fas fa-pen"></i></div>
               <div style={{color:'red'}} 
                 onClick={() => this.props.delete(this.props.index)}><i className="fas fa-trash"></i></div>
           </div>
        </div>
      </div>
    )
  }
}

export default DetailCard;
