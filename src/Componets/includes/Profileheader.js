import React,{useState} from 'react'
import styled from 'styled-components'
import Profileslider from './Profileslider';

export default function Profileheader() {
    const [profile, setProfile] = useState(false);
    const renderslider=()=>{
        setProfile(!profile)
        console.log("hiiii");
      }
  return (
    <Profileheadercontainer>
        <Profileheaderwrapper>
            <Left>
                <h1><Logo src={require("../../assests/images/logo.svg").default} alt="logo" /></h1>
            </Left>
            <Right onClick={renderslider}>
                <Name>Albin Royson</Name>
                <Downarrowcontainer>
                    <Downarrow src={require("../../assests/images/polygon.svg").default} alt="downarrow" /> 
                </Downarrowcontainer>
            </Right>
        </Profileheaderwrapper>
        <Profileslider  profile={profile} setProfile={setProfile}/>
    </Profileheadercontainer>
  )
}


const Profileheadercontainer=styled.section`
    padding:10px 0;
    background:#fff;
    position:fixed;
    width:100%;
    z-index:30;`
const Profileheaderwrapper=styled.section`
    display:flex;
    justify-content:space-between;
    width:98%;
    margin:0 auto;`
const Left=styled.div`
    width:6%;
    cursor: pointer;`
const Logo=styled.img``
const Right=styled.div`
    width:11%;
    display:flex;
    float:right; 
    align-items:center;
    cursor: pointer;`
const Name=styled.h2`
    font-weight:200;
    font-size:20px;`
const Downarrowcontainer=styled.div`
    width:8%;
    margin-left:10px;`
const Downarrow=styled.img``