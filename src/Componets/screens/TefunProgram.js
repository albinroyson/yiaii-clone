import React, { useState } from 'react'
import styled from 'styled-components'
import join from "../../assests/images/join.png"

export default function Tefunprogram() {
  const [Programs,setPrograms]=useState([
    {
      id:1,
      number:"01",
      Discription:"Tefun പ്രോഗ്രാം സ്കൂളിൽ ഉദ്ഘാടനം ചെയ്തതിനുശേഷം വിദ്യാർത്ഥികൾക്ക് Tefun-ൽ ജോയിൻ ചെയ്യാവുന്നതാണ്.",
      background:"#fef7ec"
    },
    {
      id:2,
      number:"02",
      Discription:"Talrop-ന്റെ Web, Android, iOS പ്ലാറ്റ്ഫോമുകളിലൂടെ (yia.ai) ഓൺലൈനായി Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാം..",
      background:"#eaf3fc"

    },
    {
      id:3,
      number:"03",
      Discription:"വിദ്യാർത്ഥികളുടെ മൊബൈൽ നമ്പർ നൽകിയതിനുശേഷം പ്രൊഫൈൽ തിരഞ്ഞെടുത്ത് Tefun പ്രോഗ്രാം സ്റ്റാർട്ട് ചെയ്യാം..", 
      background:"#dff6e6"
    },
    {
      id:4,
      number:"04",
      Discription:"വിദ്യാർത്ഥികൾക്ക് Virtual Schooling-ലൂടെ ഇഷ്ടമുള്ള സമയത്ത് പഠിക്കാൻ സാധിക്കും...",
      background:"#e0f0ff"
    },
    {
      id:5,
      number:"05",
      Discription:"Tefun പ്രോഗ്രാമിന്റെ അവസാനഘട്ടമായി സ്കൂൾ നിശ്ചയിക്കുന്ന ദിവസങ്ങളിൽ ഓൺലൈൻ എക്സാം ഉണ്ടായിരിക്കുന്നതാണ്",
      background:"#fef7ec"
    },
    {
      id:6,
      number:"06",
      Discription:"വിദ്യാർത്ഥികളുടെ മൊബൈൽ നമ്പർ നൽകിയതിനുശേഷം പ്രൊഫൈൽ തിരഞ്ഞെടുത്ത് Tefun പ്രോഗ്രാം സ്റ്റാർട്ട് ചെയ്യാം..",
      background:"#fef7ec"
    },
    {
      id:7,
      number:"07",
      Discription:"Tefun പ്രോഗ്രാം വിജയകരമായി പൂർത്തീകരിക്കുന്ന വിദ്യാർത്ഥികൾക്ക് സ്കൂൾ മുഖേന ടാൽറോപ് സർട്ടിഫിക്കറ്റ് നൽകുന്നു...", 
      background:"#fef7ec"
    },
  ])

  const renderlistitems = ()=>(
    Programs.map(program=>{
      return(
        <Listitem style={{backgroundColor:program.background}}>
            <Number>{program.number}</Number>
            <Discription>{program.Discription}</Discription>
        </Listitem>
      )
    })
  )
  return (
    <Tefunprogramcontainer>
        <Tefunwrapper className='wrapper'>
            <Leftcontainer>
                <Title>
                വിദ്യാർത്ഥികൾക്ക്<small>  Tefun </small><br />
                പ്രോഗ്രാമിന്റെ ഭാഗമാകാം
                </Title>
                <Programlist>
                    {renderlistitems()}
                </Programlist>
            </Leftcontainer>
            <Rightcontainer>
                <Imagecontainer>
                    <Photo src={join}  alt="image"/>
                </Imagecontainer>
            </Rightcontainer>
        </Tefunwrapper>
    </Tefunprogramcontainer>
  )
}


const Tefunprogramcontainer=styled.section`
    padding: 50px 0px;
`
const Tefunwrapper=styled.section`
    display: flex;
    justify-content: space-between;
`
const Leftcontainer=styled.div`
    width: 52%;
    padding-left: 3%;`
const Title=styled.h3`
    color: rgb(15, 167, 111);
    font-size: 40px;
    font-weight:400;
    width: 70%;`
const Programlist=styled.ul``
const Rightcontainer=styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    width: 40%;`
const Imagecontainer=styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 104px;
    width:90%;`
const Photo=styled.img``
const Listitem=styled.li`
    margin-bottom: 20px;
    padding: 15px 14px 16px 24px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 80%;
    height: 130px;
    border-radius: 20px;
    position: relative;
    &:first-child small::before{
      border: 0;
      width: 0;
      height: 0;
    }
`
const Discription=styled.p`
    font-size: 18px;
    font-family: gordita_regular;
    line-height: 1.4em;`
const Number=styled.small`
    font-size: 23px;
    font-weight: 300;
    height: 59px;
    border-radius: 50%;
    background-color: rgb(255,255,255);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 11px;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    left: -41px;
    border: 3px solid rgb(15,167,111);
    align-items: center;
    &:before{
        content: "";
        width: 150px;
        -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
        position: absolute;
        border-top: 2px dashed rgb(15,167,111);
        top: -23px;
        left: -54px;
        z-index: -1;
        height: 9px;
    }
`