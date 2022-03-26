import React, {useState} from 'react'
import styled from 'styled-components'
import Tefonlogo from "../../assests/images/Tefun.svg"
import Media from "../../assests/images/640.svg"
import Main  from "../../assests/images/spot-min.jpeg"
import app from "../../assests/images/grey-app-play.svg"
import google from "../../assests/images/grey-and-play.svg"
import arrow from "../../assests/images/arrow.svg"
import Joinnow from '../includes/modals/Joinnow';

export default function Spotlight() {
    const [join, setJoin] = useState(false);
    const renderjoin=()=>{
        setJoin(!join)
      }

  return (
    <Spotlightcontainer>
        <Spotlightwrapper className='wrapper'>
            <Leftcontainer>
                <Tefoncontainer>
                  <Tefon src={Tefonlogo} />
                </Tefoncontainer>
                <Head>Technology Fundamental Program</Head>
                <Title>കേരളത്തിലെ <span>20 ലക്ഷം</span> സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് സൗജന്യമായി ടെക്ക്നോളജി പഠിക്കാം!</Title>
                <Discription>
                    ടാൽറോപ്പിന്റെ OTT കമ്യൂണിറ്റി പ്ലാറ്റ്ഫോമായ 'യായ്'-ലൂടെ തികച്ചും സൗജന്യമായി ഇപ്പോൾ തന്നെ പഠനം ആരംഭിക്കൂ.
                    Tefun-ലൂടെ ടെക്ക്നോളജിയുടെ വിസ്മയലോകം ഇനിയിതാ നിങ്ങളിലേക്ക്. ടെക്ക്-പഠനം ഇനി കൂടുതൽ എളുപ്പമാക്കാൻ 'yiaai' മൊബൈൽ ആപ്പ് ഡൗൺലോഡ് ചെയ്യൂ.
                </Discription>
                <Mediacontainer>
                  <Medialogo src={Media}/>
                </Mediacontainer>
                <Buttoncontainer>
                    <Joinbutton  onClick={renderjoin}>Join For Free</Joinbutton>
                    <Registerbutton>Register school</Registerbutton>
                </Buttoncontainer>
            </Leftcontainer>
            <Rightcontainer>
                <Mainimagecontainer>
                    <Mainimage src={Main} alt="main" />
                </Mainimagecontainer>
                <Arrowcontainer>
                    <Arrow src={arrow} alt="arrow" />
                </Arrowcontainer>
                <Downloadimages>
                    <Appstorecontaier>
                        <Appimage src={app} alt="app" />
                    </Appstorecontaier>
                    <Googlecontaier>
                        <Googleimage src={google} alt="google" />
                    </Googlecontaier>
                </Downloadimages>
            </Rightcontainer>
        </Spotlightwrapper>
        <Joinnow join={join} setJoin={setJoin}/>
    </Spotlightcontainer>
  )
}
const Spotlightcontainer=styled.section`
    padding:130px 0 0 0;
  `
const Spotlightwrapper=styled.section`
    display:flex;
    justify-content:space-between;
    background:#f3f9eb;
    background-image: url("https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/tefun/28-01-2022/lines-bg.svg");
    border-radius:35px;
    padding: 5% 50px;
    `
const Leftcontainer=styled.div`
    width:45%;
    `
const Tefoncontainer=styled.div`
    width: 46%;
    margin-bottom: 20px;
    `
const Tefon=styled.img`
    `
const Head=styled.h1`
    font-size: 30px;
    font-weight: 400;
    color:#333;
    margin-bottom: 20px;
    `
const Title=styled.h3`
    font-size: 39px;
    width: 100%;
    font-weight: 600;
    color: #333;
    margin-bottom: 30px;`
const Discription=styled.p`
    font-size: 18px;
    font-family: gordita_regular;
    color: rgb(84, 84, 84);
    width: 90%;
    line-height: 1.3em;
    margin-bottom: 40px;
`
const Mediacontainer=styled.div`
    width: 81%;`
const Medialogo=styled.img`
    display:block;
    width:100%;`
const Buttoncontainer=styled.div`
    display:flex;
    margin-top:4%;
    width: 100%;`
const Joinbutton=styled.button`
    display: block;
    cursor: pointer;
    font-size: 20px;
    border-radius: 10px;
    border: none;
    background-image: linear-gradient(to right, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 51%, rgb(99, 187, 76) 100%);
    color: #fff;
    margin-right: 20px;
    padding: 26px 63px;
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
const Registerbutton=styled.button`
    display: block;
    font-size: 20px;
    padding: 26px 63px;
    border-radius: 10px;
    border: 1px solid #72c1c5;
    background: white;
    color: #68c8a4;
    cursor: pointer;
`
const Rightcontainer=styled.div`
    width: 53%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    position:relative;
`
const Mainimagecontainer=styled.div`
    border:10px;
`
const Mainimage=styled.img`
    display:block;
    width:100%;
    border-radius: 30px;
    transform: rotate(2deg);
`
const Arrowcontainer=styled.div`
    position: relative;
    bottom: 91px;
    left: -93px;
    width: 25%;
`
const Arrow=styled.img``
const Downloadimages=styled.div`
    display:flex;
    justify-content:end;
`
const Appstorecontaier=styled.div`
    width:28%;
    margin-right: 10px;
`
const Appimage=styled.img`
    cursor: pointer;`
const Googlecontaier=styled.div`
    width:28%;
`
const Googleimage=styled.img`
    cursor:pointer;`