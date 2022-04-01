import React,{useState} from 'react'
import styled from 'styled-components'
import downarrow from "../../assests/images/down-arrow.svg"

export default function Question() {
    const [clicked,setClicked] =useState(false)
    const [selectedid,setselectedid] =useState()
    const Qstns=[
        {
            id:1,
            Question:"Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാവാൻ സാധിക്കുന്നത് ആർക്കെല്ലാം?",
            Answer:"LP, UP, HS, HSE, VHSE സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്."
        },
        {
            id:2,
            Question:"എങ്ങനെയാണ് സ്കൂളുകൾക്ക് Tefun പ്രോഗ്രാമിൽ പങ്കെടുക്കുവാൻ സാധിക്കുക?",
            Answer:"LP, UP, HS, HSE, VHSE സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്."
        },
        {
            id:3,
            Question:"Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാവാൻ സാധിക്കുന്നത് ആർക്കെല്ലാം?",
            Answer:"LP, UP, HS, HSE, VHSE സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്."
        },
        {
            id:4,
            Question:"എന്താണ് Tefun ലൂടെ വിദ്യാർത്ഥികൾക്ക് ലഭിക്കുന്ന നേട്ടം?",
            Answer:"അക്കാദമിക് പഠനത്തിന് ശേഷം ഒഴിവുസമയങ്ങളിൽ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിൽ പങ്കെടുക്കാവുന്നതാണ്. പത്തു മണിക്കൂറിൽ താഴെയാണ് പ്രോഗ്രാം ഡ്യൂറേഷൻ വരുന്നത്. ഒരു ദിവസം 15 മിനിറ്റ് മാറ്റിവെച്ചാൽ പ്രോഗ്രാം നിശ്ചയിച്ച കാലയളവിൽ പൂർത്തിയാക്കാവുന്നതാണ്."
        },
        {
            id:5,
            Question:"വിദ്യാർത്ഥികൾക്ക് ഡയറക്ട് Tefun പ്രോഗ്രാമിൽ പങ്കെടുക്കുവാൻ സാധിക്കുമോ?",
            Answer:"Tefun പ്രോഗ്രാം സ്കൂളുകൾ മുഖേനയാണ് നടപ്പിലാക്കുന്നത്. അതുകൊണ്ട് തന്നെ വിദ്യാർത്ഥികൾക്ക് സ്കൂൾ മുഖാന്തരം മാത്രമേ പങ്കെടുക്കാൻ സാധിക്കുകയുള്ളൂ. നിങ്ങളുടെ സ്കൂൾ ഇതിൽ ഭാഗമായിട്ടില്ലെങ്കിൽ സ്കൂൾ അധികൃതരുമായി ബന്ധപ്പെട്ട ശേഷം നിങ്ങളുടെ സ്കൂൾ Tefun-ൽ രജിസ്റ്റർ ചെയ്ത് പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്."
        }
        
    ]

    const renderQsnts = ()=>(
        Qstns.map(qstn=>{
            return(
                <Listitem>
                    <Questionsection onClick={()=>{
                        setClicked(!clicked)
                        if (selectedid===qstn.id){
                            setselectedid("")
                        }
                        else{
                            setselectedid(qstn.id)
                        }
                        }}> 
                        <Questions>{qstn.Question}</Questions>
                        <Arrowcontainer className={selectedid === qstn.id? "down" : "up"}>
                            <Arrow src={downarrow} alt="downarrow" />
                        </Arrowcontainer>
                    </Questionsection>
                    <Answer className={selectedid === qstn.id? "down" : ""} >{qstn.Answer}</Answer>
                </Listitem>
            )
        })
        
    )
  return (
    <Questioncontainer>
        <Questionwrapper className='wrapper'>
            <Top>
                <Head>
                    Frequently
                </Head>
                <Headtwo>
                    Asked Questions
                </Headtwo>
            </Top>
            <Questionlist>
                {renderQsnts()}
            </Questionlist>
        </Questionwrapper>
    </Questioncontainer>
  )
}

const Questioncontainer=styled.section`
    padding:80px 0;
`
const Questionwrapper=styled.section`
`
const Top=styled.div`
    margin-bottom:70px;`
const Head=styled.h3`
    text-align: center;
    color: #4ea870;
    font-size: 42px;
    font-weight: 200;`
const Headtwo=styled.h3`
    text-align:center;
    font-size: 40px;
    font-weight: 200;
    color:#2d2d2d;
    `
const Questionlist=styled.ul`
    `
const Listitem=styled.li`
    width: 69%;
    margin:20px auto;
    background-color: rgb(243, 249, 235);
    padding: 20px; 
`
const Questionsection=styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom: 20px;
`
const Questions=styled.h3`
    font-weight:200;
`
const Arrowcontainer=styled.div`
    &.down{
        transform: rotate(180deg);
        transition: all .4s ease-in-out;

    }
    &.up{
        transform: rotate(0deg);
        transition: all .4s ease-in-out;

    }
`

const Arrow=styled.img``
const Answer=styled.p`
    display:none;
    &.down{
        display: block;
    }
    `