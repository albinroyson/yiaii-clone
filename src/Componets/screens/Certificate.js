import React from 'react'
import styled from 'styled-components'
import medal from "../../assests/images/medal.svg" 
import certificate from "../../assests/images/certificate.png"
import arrow from "../../assests/images/arrow.svg"

export default function Certificate() {
  return (
    <Maincontainer>
        <Mainwrapper className='wrapper'>
            <Leftcontainer>
                <Head>
                    Certification
                </Head>
                <Discription>
                    പ്രോഗ്രാം പൂർത്തിയാക്കുന്ന എല്ലാ വിദ്യാർത്ഥികൾക്കും സ്കൂൾ ലോഗോയോടു കൂടിയ കംപ്ലീഷൻ സർട്ടിഫിക്കറ്റുകൾ.
                </Discription>
                <Medalcontainer>
                    <Medal src={medal} alt="medal" />
                </Medalcontainer>
            </Leftcontainer>
            <Rightcontianer>
                <Mainimagecontaier>
                    <Certi src={certificate} alt="certificate" />
                </Mainimagecontaier>
                <Arrowcontainer>
                    <Arrows src={arrow} alt="arrow" />
                </Arrowcontainer>
            </Rightcontianer>
        </Mainwrapper>
    </Maincontainer>
  )
}


const Maincontainer=styled.section`
    padding: 80px 0px;
`
const Mainwrapper=styled.section`
    background-image: linear-gradient(to right, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 100%);
    display:flex;
    border-radius: 20px;
    align-items: center;
`
const Leftcontainer=styled.div`
    width:40%;
    margin: 85px 50px;
    position:relative;
`
const Head=styled.h3`
    color: rgb(255, 255, 255);
    font-size: 35px;`
const Discription=styled.p`
    width: 93%;
    color: rgb(255, 255, 255);
    font-size: 20px;
    margin-top: 20px;
`
const Medalcontainer=styled.div`
    width: 7%;
    position: absolute;
    top: -80px;
`
const Medal=styled.img``
const Rightcontianer=styled.div`
    width:45%;
    position:relative;
`
const Mainimagecontaier=styled.div`
    position: absolute;
    display: block;
    width: 550px;
    bottom: -216px;
    right: 7%;
`
const Certi=styled.img``
const Arrowcontainer=styled.div`
    width: 39%;
    position: absolute;
    bottom: -279px;
    left: -157px;
`
const Arrows=styled.img`
`