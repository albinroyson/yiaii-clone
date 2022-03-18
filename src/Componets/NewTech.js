import React from 'react'
import styled from 'styled-components'
import ai from "../assests/images/ai.jpg" 

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
                </Techitem>
            </Techlist>
        </NewWrapper>
    </Newcontainer>
  )
}
const Newcontainer=styled.section`
    padding-top:50px;`
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
    justify-content: center;
    flex-wrap:wrap;
    align-items: center;`
const Techitem=styled.li`
    width:30%;
    margin:10px 10px;
    background:#e3f4e6;`
const Techimagecontainer=styled.div`
    width:60%;
`
const Techimage=styled.img``
const TectTitle=styled.h3``