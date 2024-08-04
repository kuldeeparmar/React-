import React,{memo, useEffect} from 'react'

const Text = memo((props) => {
 
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  )
})

export default Text
