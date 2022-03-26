import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import logo from "../../../src/assests/images/logo.svg"
import Joinnow from '../includes/modals/Joinnow';

export default function Header() {

  const[navbar,setNavbar]=useState(false);
  const [join, setJoin] = useState(false);


const changeBackground = () => {
  if(window.scrollY >=100){
    setNavbar(true)
  }else{
    setNavbar(false);
  }
};
  useEffect(() =>{
    window.addEventListener('scroll',changeBackground);

  })
  const renderjoin=()=>{
    setJoin(!join)
  }


  return (
    <Headercontainer className={`${navbar && "activebackground"}`}>
      <Headerwrapper className='wrapper'>
          <Leftcontainer>
            <h1><Logo src={logo}></Logo></h1>
          </Leftcontainer>
          <Rightcontaier>
            <Joinbutton onClick={renderjoin}>Join Now</Joinbutton>
          </Rightcontaier>
      </Headerwrapper>  
      <Joinnow join={join} setJoin={setJoin}/>
    </Headercontainer>
  )
}
const Headercontainer=styled.section` 
    padding: 10px 0;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 1;

`
const Headerwrapper=styled.section`
    display:flex;
    justify-content:space-between;
    align-items: center;
`
const Leftcontainer=styled.div`
    width: 121px;
    margin-left: 60px;
  `
const Logo=styled.img`
    display:block;
    width:100%;
    cursor: pointer;
  `
const Rightcontaier=styled.div`
    align-items: center;
    width: 15%;
    display: flex;
    justify-content:center;
`
const Joinbutton=styled.button`
    cursor: pointer;
    display: block;
    color: #fff;
    font-size: 16px;
    padding: 18px 35px;
    border-radius: 5px;
    background-size: 200%;
    background-image: linear-gradient(to right, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 51%, rgb(99, 187, 76) 100%);
    &:hover{
      background-position: 100% 0;
      moz-transition: all .4s ease-in-out;
      -o-transition: all .4s ease-in-out;
      -webkit-transition: all .4s ease-in-out;
      transition: all .4s ease-in-out;
    }
`