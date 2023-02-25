import React, { useEffect, useState } from 'react'
import {w3cwebsocket } from 'websocket'
const client = new w3cwebsocket('ws://localhost:55455');

const DisplayLatency = () => {
 const [latency , setLatency] = useState(null)

    useEffect(()=>{
      client.onmessage = (message) => {
        setLatency(new Date().getTime() - message.data)
      }
    },[])
       
  return (
    <>
      <p>{latency}</p>
    </>
  )
}

export default DisplayLatency