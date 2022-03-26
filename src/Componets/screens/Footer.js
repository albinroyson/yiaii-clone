import React from 'react'
import styled from 'styled-components'
import logo from "../../assests/images/logo-grey.svg"
import insta from "../../assests/images/instagram.svg"
import facebook from "../../assests/images/facebook.svg"
import twitter from "../../assests/images/twitter.svg"
import linkedin from "../../assests/images/linkedin.svg"
import youtube from "../../assests/images/youtube.svg"
import grayinsta from "../../assests/images/insta-gray.svg"
import grayfb from "../../assests/images/facebook(1).svg"
import graytwitter from "../../assests/images/twitter(1).svg"
import graylinkedin from "../../assests/images/linkedin(1).svg"
import grayyoutube from "../../assests/images/youtube(1).svg"





export default function Footer() {
  return (
    <Footercontainer>
        <Footerwrapper className='wrapper'>
            <Logocontainer>
                <Logo src={logo} alt="logo" />
            </Logocontainer>
            <Logoiconlist>
                <Itemlist>
                    <Link href="#"><Social className='color' src={insta}  alt="instagram"/></Link>
                    <Link href="#"><Social className='gray' src={grayinsta}  alt="instagram"/></Link>
                </Itemlist>
                <Itemlist>
                    <Link href="#"><Social className='color' src={facebook} alt="facebook"/></Link>
                    <Link href="#"><Social className='gray' src={grayfb}  alt="instagram"/></Link>
                </Itemlist>
                <Itemlist>
                    <Link href="#"><Social className='color' src={twitter} alt="Twitter"/></Link>
                    <Link href="#"><Social className='gray' src={graytwitter}  alt="instagram"/></Link>
                </Itemlist>
                <Itemlist>
                    <Link href="#"><Social className='color' src={linkedin} alt="linkedin"/></Link>
                    <Link href="#"><Social className='gray' src={graylinkedin}  alt="instagram"/></Link>
                </Itemlist>
                <Itemlist>
                    <Link href="#"><Social className='color' src={youtube}  alt="youtube"/></Link>
                    <Link href="#"><Social className='gray' src={grayyoutube}  alt="instagram"/></Link>
                </Itemlist>
            </Logoiconlist>
            <Contact>
                <Phone>+91 858 999 8744</Phone>
                <Email>yiaai@talrop.com</Email>
            </Contact>
            <Maindiv>
                <Company>© 2022, Talrop Private Limited</Company>
                <Termsprivacy>
                    <Term>Terms of service</Term>
                    <Privacy>Privacy Policy</Privacy>
                </Termsprivacy>
            </Maindiv>
        </Footerwrapper>
    </Footercontainer>
  )
}


const Footercontainer=styled.section`
    background-color: rgb(30, 30, 30);
    padding:80px;`
const Footerwrapper=styled.section``
const Logocontainer=styled.div`
    width:8%;
    margin:0 auto;`
const Logo=styled.img``
const Logoiconlist=styled.ul`
    width:16%;
    display:flex;
    margin:25px auto;`
const Itemlist=styled.li`
    margin-left:20px;
    &:hover .color{
        display: block;
    }
    &:hover .gray{
        display: none;
    }

    &:first-child{
        margin-left:0;
    }`
const Link=styled.a`
    color: #333;`
const Social=styled.img``
const Contact=styled.div`
    display:flex;
    justify-content: space-between;
    width:26%;
    margin:0 auto;`
const Phone=styled.small`
    display: block;
    margin-bottom: 10px;
    color: rgb(170, 170, 170);
    font-size: 19px;
    cursor:pointer;
    `
const Email=styled.small`
    display: block;
    margin-bottom: 10px;
    color: rgb(170, 170, 170);
    font-size: 19px;
    cursor:pointer;`
const Maindiv=styled.div`
    display:flex;
    justify-content: space-between;
    width:50%;
    margin: 0 auto;
    margin-top:50px;`
const Company=styled.h2`
    margin-right: 40px;
    font-size: 17px;
    font-weight: 300;
    color: rgb(170, 170, 170);
    cursor:pointer;`
const Termsprivacy=styled.div`
    display:flex;`
const Term=styled.h2`
    font-size: 17px;
    font-weight: 300;
    color: rgb(170, 170, 170);
    margin-right:20px;
    cursor:pointer`
const Privacy=styled.h2`
    font-size: 17px;
    font-weight: 300;
    color: rgb(170, 170, 170);
    cursor: pointer;
    `