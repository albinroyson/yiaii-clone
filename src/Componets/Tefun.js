import React from 'react'
import styled from 'styled-components'
import call from "../assests/images/call.svg" 

export default function Tefun() {
  return (
    <Tefuncontainer>
        <Tefunwrapper>
            <Top>
                <Tittle>സ്കൂളുകൾക്ക് <small>Tefun</small> പ്രോഗ്രാമിന്റെ ഭാഗമാകാം</Tittle>
            </Top>
            <Tefunlist>
                <Tefunitem>
                    <Square>
                        <Iconcontainer>
                            <Icon src={call} alt="call" />
                        </Iconcontainer>
                    </Square>
                    <Bottom>
                        <Discription>
                            Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാൻ ആഗ്രഹിക്കുന്ന സ്കൂളുകൾക്ക് 
                            Talrop-ന്റെ ടീമുമായി 858 999 8744 എന്ന നമ്പറിൽ കോൺടാക്ട് ചെയ്യാവുന്നതാണ്.
                        </Discription>
                    </Bottom>
                </Tefunitem>
                <Tefunitem>
                    <Square>
                        <Iconcontainer>
                            <Icon src={call} alt="call" />
                        </Iconcontainer>
                    </Square>
                    <Bottom>
                        <Discription>
                            Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാൻ ആഗ്രഹിക്കുന്ന സ്കൂളുകൾക്ക് Talrop-ന്റെ 
                            ടീമുമായി 858 999 8744 എന്ന നമ്പറിൽ കോൺടാക്ട് ചെയ്യാവുന്നതാണ്.
                        </Discription>
                    </Bottom>
                </Tefunitem>
                <Tefunitem>
                    <Square>
                        <Iconcontainer>
                            <Icon src={call} alt="call" />
                        </Iconcontainer>
                    </Square>
                    <Bottom>
                        <Discription>
                            Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാൻ ആഗ്രഹിക്കുന്ന സ്കൂളുകൾക്ക് 
                            Talrop-ന്റെ ടീമുമായി 858 999 8744 എന്ന നമ്പറിൽ കോൺടാക്ട് ചെയ്യാവുന്നതാണ്.
                        </Discription>
                    </Bottom>
                </Tefunitem>
                <Tefunitem>
                    <Square>
                        <Iconcontainer>
                            <Icon src={call} alt="call" />
                        </Iconcontainer>
                    </Square>
                    <Bottom>
                        <Discription>
                            Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാൻ ആഗ്രഹിക്കുന്ന സ്കൂളുകൾക്ക്
                            Talrop-ന്റെ ടീമുമായി 858 999 8744 എന്ന നമ്പറിൽ കോൺടാക്ട് ചെയ്യാവുന്നതാണ്.
                        </Discription>
                    </Bottom>
                </Tefunitem>
                <Tefunitem>
                    <Square>
                        <Iconcontainer>
                            <Icon src={call} alt="call" />
                        </Iconcontainer>
                    </Square>
                    <Bottom>
                        <Discription>
                            Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാൻ ആഗ്രഹിക്കുന്ന സ്കൂളുകൾക്ക് Talrop-ന്റെ ടീമുമായി 858 999 8744 എന്ന 
                            നമ്പറിൽ കോൺടാക്ട് ചെയ്യാവുന്നതാണ്.
                        </Discription>
                    </Bottom>
                </Tefunitem>
                <Tefunitem>
                    <Square>
                        <Iconcontainer>
                            <Icon src={call} alt="call" />
                        </Iconcontainer>
                    </Square>
                    <Bottom>
                        <Discription>
                        Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാൻ ആഗ്രഹിക്കുന്ന സ്കൂളുകൾക്ക് Talrop-ന്റെ ടീമുമായി 858 999 8744 എന്ന നമ്പറിൽ കോൺടാക്ട് ചെയ്യാവുന്നതാണ്.
                        </Discription>
                    </Bottom>
                </Tefunitem>
            </Tefunlist>
            <Joinbutton>Join For Free</Joinbutton>
        </Tefunwrapper>
    </Tefuncontainer>
  )
}


const Tefuncontainer=styled.section`
    padding: 50px 0px;`
const Tefunwrapper=styled.section`
    width:80%;
    margin:0 auto;`
const Top=styled.div`
    text-align: center;
    margin-bottom: 80px;
    `
const Tittle=styled.h3`
    font-size: 35px;
    text-align:center;
    color: rgb(15, 167, 111);
    width: 33%;
    margin:0 auto;
    font-weight:500;`
const Tefunlist=styled.ul`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    `
const Tefunitem=styled.li`
    width: 27%;
    position: relative;
    z-index: 0;
    margin: 40px 0;`
const Square=styled.div`
    width: 150px;
    height: 150px;
    margin: 0px auto 50px;
    border-radius: 30px;
    transform: rotate(45deg);
    position: relative;
    background: rgb(0, 154, 102) !important;`
const Iconcontainer=styled.div`
    width: 54%;
    position: absolute;
    top: 31px;
    right: -30px;
    background: #fff;
    border: 1px solid green;
    border-radius: 50%;
    padding: 16%;
 `
const Icon=styled.img`
    transform: rotate(-45deg);`
const Bottom=styled.div`
    margin: 0px auto;
    font-family: gordita_regular;
    font-size: 18px;`
const Discription=styled.p``
const Joinbutton=styled.button`
    display: block;
    cursor: pointer;
    font-size: 20px;
    border-radius: 10px;
    border: none;
    background-image: linear-gradient(to right, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 51%, rgb(99, 187, 76) 100%);
    color: #fff;
    margin:30px auto 0;
    padding: 17px 43px;
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
