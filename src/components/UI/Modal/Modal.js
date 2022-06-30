import React from 'react'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import Auxil from '../../../hoc/Auxil'

const Modal = (props) => {
  return (
    <Auxil>
      <Backdrop show = {props.show} clicked={props.modalClosed}/>
    <div className={classes.Modal}
    style={{
        transform:props.show?'translateY(0)' :'translateY(-100vh)',
        opacity: props.show? '1':'0'
    }}>
        {props.children}
    </div>
    </Auxil>
  )
}


export default Modal 