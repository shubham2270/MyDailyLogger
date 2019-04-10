import React, { Component } from 'react'

import styles from './DetailCard.module.css';




class DetailCard extends Component {



  render() {
    let logValue = this.props.logdetails
    let editIcon = (<div style={{color:'#57A4FF'}}
                    onClick={() => this.props.toggleedit(this.props.index)}><i className="fas fa-pen"></i>
                  </div>)
   

    if (this.props.editing) {
       logValue = <input type="text" ref={(value) => {this.editedValue = value}} defaultValue={this.props.logdetails}></input>
       editIcon = (<div style={{color:'#29d150'}} //Sets the conform-edit tick icon
                  onClick={() => this.props.conformedit(this.props.index, this.editedValue)}><i className="fas fa-check"></i>
                </div>
                   )
                  
    }

    return (
      <div className={styles.wrapper}>
        <div className={styles.card}>
            <div className={styles.date}>{this.props.date}</div>
           <div className={styles.desc}>
            {logValue} 
           </div>
           <div className={styles.editWrap}>
               {editIcon}
               <div style={{color:'red'}} 
                 onClick={() => this.props.delete(this.props.index)}><i className="fas fa-trash"></i>
                </div>
           </div>
        </div>
      </div>
    )
  }
}

export default DetailCard;
