import React from 'react'
import WebSocket from 'websocket'

const DisplayLatency = () => {
    const ws = new WebSocket('ws://localhost:55455');

        ws.addEventListener('open' , ()=>{
            console.log('Connected');
        })
        ws.onopen = () => {
            console.log('WebSocket connected');
        }
  return (
    <>
       <div className='card '>
      <h2>{/* data */}</h2>
      <div className='ExhibitContent'>
        {/* timestamp when this message was sent */}
      {/* current date - yuxardaki timestamp() == latency
       latency-ni display ele */}
      </div>
    </div>
    
    </>
  )
}

export default DisplayLatency