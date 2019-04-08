import React, { Component } from 'react'

import styles from './DetailCard.module.css';

class DetailCard extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.card}>
            <div className={styles.date}>{this.props.date}</div>
           <div className={styles.desc}>
            {this.props.logdetails} 
           </div>
           <div className={styles.editWrap}>
               <div style={{color:'#57A4FF'}}><i className="fas fa-pen"></i></div>
               <div style={{color:'red'}} onClick={this.props.delete}><i className="fas fa-trash"></i></div>
           </div>
        </div>
      </div>
    )
  }
}

export default DetailCard;
