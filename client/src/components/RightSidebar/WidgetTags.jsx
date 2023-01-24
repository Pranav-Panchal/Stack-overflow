import React from 'react'

const WidgetTags = () => {

  const tags = ['c', 'css', 'express', 'firebase', 'html', 'java', 'javascript', 'mongodb', 'mysql', 'next.js', 'node.js', 'php', 'python', 'reactjs']
  return (
    <div className='widget-tags'>
      <h3>Watched tags</h3>
      <div className='widget-tags-div'>
        {
          tags.map((tag) => (<p key={tag}>{tag}</p>))  // map function use kriyu che tag(array) ne pass krva and tag je che e single element che string nu. key e map fuction ma lakhvu pade su  return krye chie
        }
      </div>
        
    </div>
  )
}

export default WidgetTags