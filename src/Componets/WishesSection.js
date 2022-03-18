import React from 'react'
import styled from 'styled-components'
import profilepic from "../assests/images/jayasurya.jpg" 

export default function Wishessection() {
  return (
    <Wishescontainer>
      <Wisheswrapper>
        <Top>
          <Title>
            TEFUN-ന്
          </Title>
          <Head>
            ആശംസകളോടെ
          </Head>
        </Top>
        <Profilelist>
          <Listitems>
              <Picture src={profilepic} alt="profile" />
              <Namecontaier className='Namehover'>
                <Name>Jayasurya</Name>
                <Role>Actor</Role>
                <Watchbutton className='buttonhover'>WATCH STORY</Watchbutton>
              </Namecontaier>
          </Listitems>
          <Listitems>
              <Picture src={profilepic} alt="profile" />
              <Namecontaier className='Namehover'>
                <Name>Jayasurya</Name>
                <Role>Actor</Role>
                <Watchbutton className='buttonhover'>WATCH STORY</Watchbutton>
              </Namecontaier>
          </Listitems>
          <Listitems>
              <Picture src={profilepic} alt="profile" />
              <Namecontaier className='Namehover'>
                <Name>Jayasurya</Name>
                <Role>Actor</Role>
                <Watchbutton className='buttonhover'>WATCH STORY</Watchbutton>
              </Namecontaier>
          </Listitems>
          <Listitems>
              <Picture src={profilepic} alt="profile" />
              <Namecontaier className='Namehover'>
                <Name>Jayasurya</Name>
                <Role>Actor</Role>
                <Watchbutton className='buttonhover'>WATCH STORY</Watchbutton>
              </Namecontaier>
          </Listitems>
          <Listitems>
              <Picture src={profilepic} alt="profile" />
              <Namecontaier className='Namehover'>
                <Name>Jayasurya</Name>
                <Role>Actor</Role>
                <Watchbutton className='buttonhover'>WATCH STORY</Watchbutton>
              </Namecontaier>
          </Listitems>
          <Listitems>
              <Picture src={profilepic} alt="profile" />
              <Namecontaier className='Namehover'>
                <Name>Jayasurya</Name>
                <Role>Actor</Role>
                <Watchbutton className='buttonhover'>WATCH STORY</Watchbutton>
              </Namecontaier>
          </Listitems>
        </Profilelist>
      </Wisheswrapper>
    </Wishescontainer>
      
  )
}
const Wishescontainer =styled.section`
  padding-top:100px;`
const Wisheswrapper =styled.section`
  width:80%;
  margin:0 auto;`
const Top =styled.div`
  margin-bottom: 40px;
`
const Title =styled.h3`
  text-align:center;
  color: rgb(15, 167, 111);
  font-size: 30px;`
const Head =styled.h3`
  text-align:center;
  font-size: 30px;
  font-weight:400;`
const Profilelist =styled.ul`
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  width:100%;
  `
const Listitems =styled.li`
    width: calc(25% - 20px);
  margin-left:20px;
  border-radius:8px;
  height:100%;
  overflow:hidden;
  margin:10px 10px;
  position:relative;
  `
const Picture =styled.img``
const Namecontaier=styled.div`
  position: absolute;
  bottom:10px;
  right:0;
  left:0;
  align-items: center;

` 
const Name=styled.h3`
    color: #fff;
    text-align: center;
    font-size: 31px;
    font-weight: 200;
`
const Role=styled.p`
  color:#fff;
  text-align:center;`
const Watchbutton=styled.button`
  background:#fff;
  text-align:center;
  align-items:center;
  opacity: 0;
  width: 80%;
  margin: 0 auto;
  padding: 0;
  display: block;
  border-radius: 5px;
  `