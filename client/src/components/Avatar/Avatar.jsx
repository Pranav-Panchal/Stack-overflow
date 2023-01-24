import React from 'react'

const Avatar = ({ children,  backgroundColor, py, px, color, borderRadius, fontSize, cursor }) => {  //a je lakhiyu che e props kevay 
  const style = { // aaiya je const style che e objet che
    backgroundColor,
    padding: `${py} ${px}`,
    color: color || 'black',
    borderRadius,
    fontSize,
    textAlign:'center',
    cursor: cursor || null,
    textDecoration: "none"
  }

  return (
    <div style={style}>
      { children }  {/* children is a value */}
    </div>
  )
}

export default Avatar