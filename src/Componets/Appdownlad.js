import React from 'react'
import app from "../assests/images/grey-app-play.svg"
import google from "../assests/images/grey-and-play.svg"
import styled from 'styled-components'
import mobile from "../assests/images/app.png"

export default function Appdownlad() {
  return (
    <Appcontainer>
        <Appwrapper>
            <Leftcontainer>
                <Tittle>
                    ടാൽറോപിന്റെ OTT കമ്മ്യൂണിറ്റി പ്ലാറ്റ്‌ഫോമായ യായിലൂടെ തികച്ചും സൗജന്യമായി ഇപ്പോൾ തന്നെ പഠനം ആരംഭിക്കൂ
                </Tittle>
                <Discription>
                    Tefun-ലൂടെ ടെക്ക്‌നോളജിയുടെ വിസ്മയലോകം ഇനിയിതാ നിങ്ങളിലേക്ക്. ടെക്ക്-പഠനം ഇനി കൂടുതൽ 
                    എളുപ്പമാക്കാൻ yia.ai മൊബൈൽ ആപ്പ് ഡൗൺലോഡ് ചെയ്യൂ.
                </Discription>
                <Downloadimages>
                    <Appstorecontaier>
                        <Appimage src={app} alt="app" />
                    </Appstorecontaier>
                    <Googlecontaier>
                        <Googleimage src={google} alt="google" />
                    </Googlecontaier>
                </Downloadimages>
            </Leftcontainer>
            <Rightcontainer>
                <Mobile src={mobile} alt="mobile" />
            </Rightcontainer>
        </Appwrapper>
    </Appcontainer>
  )
}


const Appcontainer =styled.section`
        padding: 50px 0px;`
const Appwrapper =styled.section`
    display:flex;
    justify-content:space-between;
    background:#f3f9eb;
    border-radius:35px;
    width:90%;
    margin:0 auto;
    padding: 80px;
    position:relative;
    align-items: center;`
const Leftcontainer =styled.div`
        width: 50%;`
const Tittle =styled.h3`
    font-size: 30px;
    width: 99%;
    font-family: EGGIndulekhaUni;
    margin-bottom: 35px;
    font-weight: 300;`
const Discription =styled.p`
        width: 79%;
    font-size: 20px;
    color: rgb(100,101,99);
    margin-bottom: 30px;
    line-height: 1.3em;`
const Downloadimages =styled.div`
    display:flex;`
const Appstorecontaier =styled.div`
    display: block;
    margin-right: 10px;
    width: 150px;`
const Appimage =styled.img``
const Googlecontaier =styled.div`
     width: 150px;`
const Googleimage =styled.img``
const Rightcontainer =styled.div`
    width: 50%;`
const Mobile =styled.img`
    position: absolute;
    display: block;
    width: 57%;
    bottom: -20%;
    height: 130%;
    `