import React, { forwardRef } from 'react'
import WithDeminsion from './WithDeminsion'

const Comp1 = forwardRef((props,ref) => {

    return <>
    <div ref={ref} className='comp1'>I am comp1 : {props.num} {props.width}</div>
    </>
})

export default WithDeminsion(Comp1);