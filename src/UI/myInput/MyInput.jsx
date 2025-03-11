import React from 'react'
import styles from './MyInput.module.css'

const MyInput = React.forwardRef((props, ref) => {
  return (

    <input className={styles.myInput} ref={ref} {...props}>

    </input>
  )
})

export default MyInput
