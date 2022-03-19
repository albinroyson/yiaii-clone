import React from 'react'
import styled from 'styled-components'
import ai from "../assests/images/ai.jpg" 
import card from "../assests/images/card.svg"

export default function NewTech() {
  return (
    <Newcontainer>
        <NewWrapper>
            <Topcontianer>
                <Head>പുതിയ ടെക്ക്നോളജികൾ മനസ്സിലാക്കാം</Head>
                <Title>ടെക്ക്-പഠനം വേറിട്ടതും, ക്രിയാത്മകവുമാക്കാൻ കഴിയുന്ന സിലബസ്.</Title>
            </Topcontianer>
            <Techlist>
                <Techitem>
                    <Techimagecontainer>
                        <Techimage src={ai} alt="ai" />
                    </Techimagecontainer>
                    <TectTitle>Artificial Intelligence</TectTitle>
                </Techitem>
                <Techitem>
                    <Techimagecontainer>
                        <Techimage src={ai} alt="ai" />
                    </Techimagecontainer>
                    <TectTitle>Artificial Intelligence</TectTitle>
                </Techitem>
                <Techitem>
                    <Techimagecontainer>
                        <Techimage src={ai} alt="ai" />
                    </Techimagecontainer>
                    <TectTitle>Artificial Intelligence</TectTitle>
                </Techitem>
                <Techitem>
                    <Techimagecontainer>
                        <Techimage src={ai} alt="ai" />
                    </Techimagecontainer>
                    <TectTitle>Artificial Intelligence</TectTitle>
                </Techitem>
                <Techitem>
                    <Techimagecontainer>
                        <Techimage src={ai} alt="ai" />
                    </Techimagecontainer>
                    <TectTitle>Artificial Intelligence</TectTitle>
                </Techitem>
                <Techitem>
                    <Techimagecontainer>
                        <Techimage src={ai} alt="ai" />
                    </Techimagecontainer>
                    <TectTitle>Artificial Intelligence</TectTitle>
                </Techitem>
                <Techitem>
                    <Techimagecontainer>
                        <Techimage src={ai} alt="ai" />
                    </Techimagecontainer>
                    <TectTitle>Artificial Intelligence</TectTitle>
                </Techitem>
                <Techitem>
                    <Techimagecontainer>
                        <Techimage src={ai} alt="ai" />
                    </Techimagecontainer>
                    <TectTitle>Artificial Intelligence</TectTitle>
                    <Cardcontainer className='cards'>
                        <Card src={card} alt="card" />
                    </Cardcontainer>
                </Techitem>
            </Techlist>
        </NewWrapper>
    </Newcontainer>
  )
}
const Newcontainer=styled.section`
    padding: 50px 0px;`
const NewWrapper=styled.section`
    width:85%;
    margin:0 auto;`
const Topcontianer=styled.div``
const Head=styled.span`
    text-align:center;
    display:block;
    font-size: 45px;
    margin-bottom: 30px;
    color: rgb(15, 167, 111);`
const Title=styled.h3`
    text-align:center;
    max-width: 500px;
    margin: 0 auto;
    font-size: 22px;
    font-weight:400;`
const Techlist=styled.ul`
    display:flex;
    justify-content: space-between;
    width:100%;
    flex-wrap:wrap;
    align-items: center;
    margin-top: 40px;`
const Techitem=styled.li`
    width: calc(25% - 20px);
    border-radius: 10px;
    margin: 0px 10px 20px;
    padding: 15px;
    background: #000;
    position: relative;
    &:nth-child(1n){
        background: #e3f4e6;
    }
    &:nth-child(2n){
        background: #fff8e4;
    }
    &:nth-child(3n){
        background: #efeafa;
    }
    &:nth-child(4n){
        background: #ebf2fa;
    }
    &:last-child {
        
    }
    `
const Techimagecontainer=styled.div`
    width:100%;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 10px; 
`
const Techimage=styled.img``
const TectTitle=styled.h3`
    text-align:center;
    padding:20px;`
const Cardcontainer=styled.div`
    width: 100%;
    position: absolute;
    right: -133px;
    bottom: -42%;`
const Card=styled.img``