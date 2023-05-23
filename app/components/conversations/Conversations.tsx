import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Messages from './messages/Messages'

const Conversations = () => {
  return (
    <div className='flex flex-col justify-between items-center h-full'>
      {/* Header */}
      <div className='w-full h-16 bg-violet-100'>
<Header/>
      </div>
      {/* Messages */}
      <div className='flex-grow bg-violet-50 w-[100%] h-[100%] overflow-y-auto'>
        <Messages menu = {false}/>
      </div>
      {/* Footer */}
      <div className='w-full bg-violet-100 h-16'>
        <Footer/>
      </div>
    </div>
  )
}

export default Conversations
