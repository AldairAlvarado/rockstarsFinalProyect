import React, { useState,useEffect } from 'react'

function FetchAPI() {

   const [data, setData] = useState([]);
    
    const apiGet = () => {
        fetch('http://localhost:4000/albums')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            setData(json);
        });

        
    };
        useEffect(() => {
            apiGet();
        }, [])


    return ( 
        <div>
            My API <br/>

            <button onClick={apiGet}> Fetch API</button>
            <br />  
        </div>
    )
}

export default FetchAPI