import React, { useEffect, useState } from 'react'

const FetchData = ({adressType}) => {

    const [adress , setAdress] = useState('');
   
    function fetchApi(){
        if(adressType === 'ipv4'){
            fetch("https://api.ipify.org?format=json")
            .then(res => res.json())
            .then(res => setAdress(res.ip))
        }
        else if(adressType === 'ipv6'){
            fetch("https://api64.ipify.org?format=json")
            .then(res => res.json())
            .then(res => setAdress(res.ip))
        }
    }

    useEffect(()=>{
        fetchApi();
    },[]);

  return (
    <>
        <p>User's {adressType} : {adress} </p>
    </>
  )
}

export default FetchData