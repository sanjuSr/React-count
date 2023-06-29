import React, {useEffect, useState} from 'react'
import styled from  "styled-components"
import spotify from './assets/spo.png';
import img from './assets/spotify_md.png';

const Container=styled.div`
    box-size: cover;
    margin:0;
    padding:0;
    width:1000px;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
  
  
  a {
    color: #000;
    text-decoration: none;
  
  }
  ul {
    list-style: none;
  }
  .container {
    margin: auto;
  }
  /* Navigations */
  .main-nav {
    display: flex;
    flex-direction:row;
    background-color: rgba(25, 20, 20, 0.65);
    align-items: center;
    height:80px;
    padding: 20px;
    position: fixed;
    z-index: 3;
    width: 100%;
    
  }
  .main-nav ul {
    display: flex;
   
  }
  .main-nav ul.nav-options li {
    margin-bottom: 1px;
    margin-left: 20px;
  
  }
  .main-nav ul.nav-options {
    flex: 1;
    margin-left: 600px;
    font-family: 'lineto-black';
    width: 100px;
    font-size: 16px;
    letter-spacing: -0.8px;
    margin-top: 1px;
    font-weight: bold;
    flex-direction:row;
  }
  .white-text {
    color: #fff;
    margin-right: 20px;
  }
  .grey-text {
    color: #dcdcdc;
  }
  img.spotify-logo {
    margin-left: 50px;
    width: 8%;
  }
  .line {
    border: 0.5px solid white;
    margin-top: 1.8px;
    height: 16px;
    
  }
  .card2-text-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    height: 35em;
  }
 
  a.green:hover {
    color: #1db954;
  } 
  .spotify-logo-sidebar {
    display: none;
  }
  .count {
   
    width:300px;
    height:200px;
    font-size:30px;
    font-weight:bold;
    font-style:italic;
}
  .bt{
    margin-top:300px;
    width:200px;
    height:50px;
    background-color:green;
    font-size:30px;
    font-weight:bold;
    border-color:black;
    border-width:3px;
    border-radius:20px 20px;
    font-family:monospace;
  }
  .count h1 {
    
{
   text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #61c2d3 0%,
    #44107a 29%,
    #ff1361 67%,
    #23dd0a 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
}
@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
  }
  
  @media only  screen and (max-width: 768px) {
    
    
    .main-nav ul.nav-options {
      margin-left:150px ;
      margin-top:20px;
      font-size: 15px;
      display : flex ;
      flex-direction: column;
    }
    .line {
    border: 0.5px solid white;
    margin-top: 1.8px;
    height: 16px;
    width: 1px;
  }

    
    img.spotify-logo {
      margin-left: 0;
      width: 15%;
    }
    
    .count {
      width: 100%;
      height: 150px;
      font-size: 20px;
    }
    
    .bt {
      margin-top: 100px;
      width: 150px;
      height: 40px;
      font-size: 20px;
    }
    
  }
  
`;

export const Spotify = () => {
    const [first, setfirst] = useState(0)

    useEffect(()=>{
      console.log("useEffect ; ",first);},[first])
  
  return (
    <>
    <Container>
   <div class="nav-btn">
      <i class="fa fa-bars fa-2x"></i>
      <i class="fa fa-close fa-2x"></i>
    </div>
    <div class="container">
      <nav class="main-nav">
        <img class="spotify-logo" src={spotify} alt="" />
        <ul class="nav-options">
          <li><a href="#" class="white-text green">Premium</a></li>
          <li><a href="#" class="white-text green">Help</a></li>
          <li><a href="#" class="white-text green">Download</a></li>
          <li><div class="line"></div></li>
          <li><a href="#" class="grey-text green">Sign up</a></li>
          <li><a href="login" class="grey-text green">Log In</a></li>
          <img class="spotify-logo-sidebar display" src="src/assets/Spotify_logo.png"/>
        </ul>
      </nav>
      <div class="cards">
        <div class="card-2">
          <div class="card2-text-container">
            <button className='bt' onClick={()=>{setfirst(first+1)
            console.log("usestate : ",first)}}>CLICK</button>
            <div className='count'>
            <h1 className='cn'>COUNT:{first}</h1> 
          </div>
          </div>
        </div>
      </div>
    </div>
    </Container>
        
    </>
  )
}

export default Spotify