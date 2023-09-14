import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <>
      <div className='live-msg-container'>
        <div className='author-pic'>
        <img alt="img" height="24" width="24" src="https://yt4.ggpht.com/ytc/AOPolaShSdtazpm2McEtq2zH-ZQzAJu8tsZQUWHN8A=s32-c-k-c0x00ffffff-no-rj"/>
        </div>
        <div className='content'>
            <span className='author-name'>{name}</span>
            <span className='author-msg'> { message} </span>
        </div>
      </div>
    
    </>
  )
}

export default ChatMessage
