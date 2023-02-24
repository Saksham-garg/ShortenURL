import React from 'react'

function Cards(props) {
  return (
    <div className='cards'> 
        <img src={require(`../images/${props.img}`)} alt="Logo"></img>
        <h2>{props.info.title}</h2>
        <p>{props.info.content}</p>  
    </div>
  )
}

export default Cards;