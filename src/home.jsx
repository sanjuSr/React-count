import React, {useEffect, useState} from 'react'
import styled from  "styled-components"

const Container=styled.div`
       
`;

const Home = () => {

  const [first, setfirst] = useState(1)

  useEffect(()=>{
    console.log("useEffect ; ",first);},[first])

  return (
  
    <Container>
     
     <input type="text" onChange={(e)=>console.log(e.target.value)} />
     <button class="btn" conClick={()=>console.log(first)}>SUBMIT</button>
     <button onClick={()=>{setfirst(first+1)
          console.log("usestate : ",first)}}>CHANGE</button>
          <div className='count'>
           <h1>COUNT:{first}</h1> 
          </div>
    </Container>
  
  )
}

export default Home