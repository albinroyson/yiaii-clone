import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Profileslider({profile,setProfile}) {
    const renderclose=()=>{
        setProfile(!profile)
    }
  return (
    <Slidercontainer className={profile? "active" :""}>
        <Sliderwrapper>
            <Top>
                <Arrowdiv onClick={renderclose}>
                    <Arrow src={require("../../assests/images/back.svg").default}  alt="arrrow" />
                </Arrowdiv>
                <Title>Profile</Title>
            </Top>
            <Namesection>
                <Propiccontianer>
                    <Propic src={require("../../assests/images/pro.png")} alt="pro" />
                </Propiccontianer>
                <Name>Albin Royson</Name>
                <Phone>9526907757</Phone>
            </Namesection>
            <Schooldetails>
                <Campus>
                    <Campusimgcontainer>
                        <Campusimage src={require("../../assests/images/school.svg").default} alt="school" />
                    </Campusimgcontainer>
                    <Campusname>
                        <Heading>Campus</Heading>
                        <School>Lekshmi Vilasom High School</School>
                    </Campusname>
                </Campus>
                <Class>
                    <Classimgcontainer>
                        <Campusimage src={require("../../assests/images/book.svg").default} alt="book" />
                    </Classimgcontainer>
                    <Classname>
                        <Heading>Class</Heading>
                        <School>9</School>
                    </Classname>
                </Class>
                <Division>
                    <Divisionimgcontainer>
                        <Campusimage src={require("./../../assests/images/cap.svg").default} alt="cap" />
                    </Divisionimgcontainer>
                    <Divisionname>
                        <Heading>Division</Heading>
                        <School>A</School>
                    </Divisionname>
                </Division>
            </Schooldetails>
            <Bottom to="/">
                <Logoutimgconatiner>
                    <Logooutimg src="" alt="" />
                </Logoutimgconatiner>
                <Logout>Logout</Logout>
            </Bottom>
        </Sliderwrapper>
    </Slidercontainer>
  )
}

const Slidercontainer=styled.section`
    width:30%;
    height:100vh;
    position: fixed;
    height:100vh;
    padding-top: 5%;
    top:0;
    right:-100%;
    z-index: 500;
    animation: 0.4s ease 0s 1 normal none running slide-box;
    background: #fff;

    &.active{
    right: 0;
        moz-transition: all .4s ease-in-out;
      -o-transition: all .4s ease-in-out;
      -webkit-transition: all .4s ease-in-out;
      transition: all .4s ease-in-out;
      background: #fff;
    }`
const Sliderwrapper=styled.section`
    width:90%;
    margin:0 auto;`
const Top=styled.div`
        display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: space-between;
    margin-bottom: 20%;
`
const Arrowdiv=styled.div`
    width:10%;`
const Arrow=styled.img`
    cursor: pointer;
    margin-right: 0px;`
const Title=styled.h4`
    color: rgb(155, 153, 153);
    margin: auto 6px;`
const Namesection=styled.div`
    width:65%;
    align-items:center;
    margin:20px auto;`
const Propiccontianer=styled.div`
    width: 17%;
    margin: 0 auto;
    `
const Propic=styled.img``
const Name=styled.span`
    font-size:20px;
    color:#000;
    display:block;
    text-align:center;`
const Phone=styled.span`
    display:block;
    text-align:center;`
const Schooldetails=styled.div``
const Campus=styled.div`
    background: rgb(249, 249, 251);
    border-radius: 6px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 9px 11px;
    margin-bottom: 10px;
    border: 1px solid rgb(245, 243, 243);
    justify-content: space-between;
    width:92%;
`
const Campusimgcontainer=styled.div`
    width:12%;`
const Campusimage=styled.img``
const Campusname=styled.h4``
const Heading=styled.h3`
    font-size: 16px;
    color: grey;`
const School=styled.h3`
    font-size: 19px;
    font-weight:200 ;
`
const Bottom=styled(Link)`
    text-decoration:none;
`

const Class=styled.div`
    background: rgb(249, 249, 251);
    border-radius: 6px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 9px 11px;
    margin-bottom: 10px;
    border: 1px solid rgb(245, 243, 243);
    justify-content: space-between;
    width:36%;`
const Classimgcontainer=styled.div`
    width:30%;`
const Divisionimgcontainer=styled.div`
    width:30%;`
const Division=styled.div`
    background: rgb(249, 249, 251);
    border-radius: 6px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 9px 11px;
    margin-bottom: 10px;
    border: 1px solid rgb(245, 243, 243);
    justify-content: space-between;
    width:40%;`
const Divisionname=styled.div``
const Classname=styled.div``
const Logoutimgconatiner=styled.div``
const Logooutimg=styled.div``
const Logout=styled.h4`
    color:red;
    margin-top:80px;
    cursor: pointer;
    `