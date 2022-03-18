import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import logo from "../../src/assests/images/logo.svg"

export default function Header() {

  const[navbar,setNavbar]=useState(false);

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


  return (
    <Headercontainer className={`${navbar && "activebackground"}`}>
      <Headerwrapper>
          <Leftcontainer>
            <h1><Logo src={logo}></Logo></h1>
          </Leftcontainer>
          <Rightcontaier>
            <Joinbutton>Join Now</Joinbutton>
          </Rightcontaier>
      </Headerwrapper>  
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
  width:85%;
  margin:0 auto;
  display:flex;
  justify-content:space-between;
  align-items: center;
`
const Leftcontainer=styled.div`
  width: 11%;`
const Logo=styled.img`
  display:block;
  width:100%;
  `
const Rightcontaier=styled.div`
  align-items: center;
  width: 14%;
  display: flex;
  justify-content:end;
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