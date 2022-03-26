import React,{useState} from 'react'
import styled from 'styled-components'
import india from "../../../assests/images/india.jpeg"
import arrow from "../../../assests/images/down-arrow.svg"
import phone from "../../../assests/images/phone.svg"
import Country from './Country'
export default function Joinnow({join,setJoin}) {
    const [selected,setSelected]=useState("")
    const closejoin=()=>{
        setJoin(!join)
        setCode(false)
      }

    const [code, setCode] = useState(false);
    const rendercode=()=>{
        setCode(!code)
      }
  return (
    
    <Joinnowcontainer className={join?"active" :""}>
        <Joinwrapper >
            <Left>
               
            </Left>
            <Right>
                <Closecontainer onClick={closejoin}>
                    <Close src={require("../../../assests/images/close.svg").default} alt="close" />
                </Closecontainer>
                <Logintitle>
                    Login to your account
                </Logintitle>
                <Enter>
                    Enter your registered phone number
                </Enter>
                <Inputdiv>
                    <Countrydiv>
                        <Countryimagecontainer>
                            <Countryimage src={selected.flag ? selected.flag : india } alt="countryimage" />
                        </Countryimagecontainer>
                        <Arrowcontainer>
                            <Arrow src={arrow} onClick={rendercode}  alt="arrow" />
                        </Arrowcontainer>
                    </Countrydiv>
                    <Inputfeild>
                        <Phoneimagecontainer>
                            <Phone src={phone} alt="phone" />
                        </Phoneimagecontainer>
                        <Digit>{selected.phone_code ? selected.phone_code : +91 }</Digit>
                        <Input type="number"  name="name" placeholder="Enter your  Phonenumber"/>
                    </Inputfeild>       
                </Inputdiv>
                <Button>Next</Button>
                <Newdiv>
                    <New>New to Yiaai? </New>
                    <Link >Create an account</Link>
                </Newdiv>
                <Terms>
                    <Link2>Terms of service</Link2>
                </Terms>
            </Right>
           <Country code={code} setCode={setCode} selected={selected} setSelected={setSelected} />
        </Joinwrapper>
    </Joinnowcontainer>
  )
}


const Joinnowcontainer=styled.section`
    position: fixed;
    height:100vh;
    width: 100%;
    top:0;
    right:-100%;
    z-index: 10;
    animation: 0.4s ease 0s 1 normal none running slide-box;
    &.active{
        right: 0;
         moz-transition: all .4s ease-in-out;
      -o-transition: all .4s ease-in-out;
      -webkit-transition: all .4s ease-in-out;
      transition: all .4s ease-in-out;
    }`
const Joinwrapper=styled.section`
    width: 100%;
    margin: 0 auto;
    display: flex;
    /* flex-direction: column; */
    -webkit-box-pack: justify;
    justify-content: space-between;
   `
const Left=styled.div`
    width:60%;
    background:#000;
    height: 100vh;
    position:relative;
    background: transparent;
    background-color: rgba(0,0,0,0.5); 
    z-index: 2;
    `
const Closecontainer=styled.div`
   border-radius: 50%;
    padding: 6px;
    background: rgb(255, 255, 255);
    width: 23px;
    height: 23px;
    position: absolute;
    top: 4px;
    left:52%;
    cursor: pointer;
    z-index: 501;
    `
const Close=styled.img``
const Right=styled.div`
    width:50%;
    background: url(https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/auth/decorator.svg) 0% 0% / contain no-repeat;
    background-repeat: no-repeat;
    background-size:contain;
    height:100%;
    padding:100px 60px;
    background-color: rgb(255, 255, 255);
   `
const Logintitle=styled.h3`
    margin-top: 50px;
    font-weight: 100;
    font-size: 28px;`
const Enter=styled.h2`
    font-size:18px;
    font-weight:300;
    margin-top:30px;
    color:#333333;`
const Inputdiv=styled.div`
    display:flex;
    align-items: center;
    margin-top: 40px;

    `
const Countrydiv=styled.div`
    display:flex;
    align-items: center;
    `
const Countryimagecontainer=styled.div`
    height: 42px;
    width: 42px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    margin-right: 7px;`
const Countryimage=styled.img`
    object-fit: cover;`
const Arrowcontainer=styled.div`
    width:20%;`
const Arrow=styled.img``
const Inputfeild=styled.div`
    font-family: gordita_medium;
    position: relative;
    border: 1px solid;
    border-radius: 7px;
    padding: 15px 18px;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(0, 0, 0);
    font-size: 17px;
    margin-left: 10px;
    width: 80%;`
const Phoneimagecontainer=styled.div`
    width: 4%;
    margin-right: 20px;`
const Phone=styled.img``
const Digit=styled.h3``
const Input=styled.input`
    width: 81%;
    color: rgb(0, 0, 0);
    font-size: 17px;
    padding-left: 5px;
    caret-color: rgb(92, 198, 106);
    &:focus{
        outline: none;
    }`
const Button=styled.button`
    cursor: pointer;
    background: linear-gradient(272deg, rgb(34, 193, 195) 0%, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 100%);
    border-radius: 6px;
    height: 58px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin: 40px auto;
    width:100%;
    color: rgb(255, 255, 255);
    min-height: 50px;`
const Newdiv=styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin: 14px 0px 70px;`
const New=styled.h3`
    font-size: 16px;
    font-weight: 300;
`
const Link=styled.a`
    color: rgb(92, 198, 106);
    font-size: 16px;
    margin-left: 7px;
    cursor: pointer;`
const Terms=styled.div`
    text-align: center;
    border-top: 1px solid rgb(209, 219, 218);
    padding: 22px 0px;`
const Link2=styled.a`
    font-weight:200;
    `
