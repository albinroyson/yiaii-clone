import React,{useState} from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import Profileheader from '../includes/Profileheader'
import Profileslider from '../includes/Profileslider'

export default function StartinPage() {
    const [selectedid,setselectedid] =useState()
    const [clicked,setClicked] =useState(false)
    const [courses,setCourses]=useState([
        {
            id:1,
            name:"Introduction to Technology",
            subheads:[
                {
                    id:20,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:21,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {   id:22,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
            ]
        },
        {
            id:2,
            name:"Current Technologies",
            subheads:[
                {
                    id:23,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:24,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {   id:25,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
            ]
        },
        {
            id:3,
            name:"Possibilities of Technology",
            subheads:[
                {
                    id:26,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:27,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {   id:28,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {   
                    id:29,
                    head:"What is technology ?",
                    Time:"2:24"   
                }

            ]
        },
        {
            id:4,
            name:"Transportation",
            subheads:[
                {
                    id:30,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:31,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:32,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:33,
                    head:"What is technology ?",
                    Time:"2:24"   
                }

            ]
        },
        {
            id:5,
            name:"Devices",
            subheads:[
                {
                    id:34,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:35,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:36,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:37,
                    head:"What is technology ?",
                    Time:"2:24"   
                }

            ]
        },
        {
            id:6,
            name:"Operating Systems",
            subheads:[
                {
                    id:34,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:35,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:36,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:37,
                    head:"What is technology ?",
                    Time:"2:24"   
                }

            ]
        },
        {
            id:7,
            name:"Internet",
            subheads:[
                {
                    id:34,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:35,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:36,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:37,
                    head:"What is technology ?",
                    Time:"2:24"   
                }

            ]
        },
        {
            id:8,
            name:"Web 3.0 and Metaverse",
            subheads:[
                {
                    id:34,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:35,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:36,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:37,
                    head:"What is technology ?",
                    Time:"2:24"   
                }

            ]
        },
        {
            id:9,
            name:"Browsers",
            subheads:[
                {
                    id:34,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:35,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:36,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:37,
                    head:"What is technology ?",
                    Time:"2:24"   
                }

            ]
        },
        {
            id:10,
            name:"Websites", subheads:[
                {
                    id:34,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:35,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:36,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:37,
                    head:"What is technology ?",
                    Time:"2:24"   
                }

            ]
        },
        {
            id:11,
            name:"Search Engines",
            subheads:[
                {
                    id:34,
                    head:"What is technology ?",
                    Time:"2:24"  
                },
                {
                    id:35,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:36,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:37,
                    head:"What is technology ?",
                    Time:"2:24"   
                }

            ]
        },
        {
            id:12,
            name:"Coding", subheads:[
                {
                    id:34,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:35,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:36,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:37,
                    head:"What is technology ?",
                    Time:"2:24"   
                }

            ]
        },
        {
            id:13,
            name:"What can we do with coding?",
            subheads:[
                {
                    id:34,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:35,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:36,
                    head:"What is technology ?",
                    Time:"2:24"   
                },
                {
                    id:37,
                    head:"What is technology ?",
                    Time:"2:24"   
                }

            ]

        },
    ])
    const [background,setBackground]=useState(20)
    
    const renderCoures =()=>(
        courses.map(item=>{
            return(
                <Mapping>
                    <Listitem onClick={()=>{
                        setClicked(!clicked)
                        if (selectedid===item.id){
                            setselectedid("")
                        }
                        else{
                            setselectedid(item.id)
                        }
                        }}> 
                        <Coursename>{item.name}</Coursename>
                        <Arrowdiv  className={selectedid === item.id? "down" : "up"}>
                            <Arrow src={require("../../assests/images/down-arrow.svg").default} alt="arrow" />
                        </Arrowdiv>
                    </Listitem>
                    {
                        item.subheads.map((subhead)=>(
                            <Subitemlist className={selectedid === item.id? "down" : ""}>
                                 <Subitem style={{cursor:subhead.id>background ? "not-allowed" :"pointer"}} className={ subhead.id === background ? "background  play" : ""}
                                    onClick={()=>{
                                        if(subhead.id<=background){
                                            setBackground(subhead.id)
                                        }
                                        else{}
                                    }}>
                                    <Tickcontainer  >
                                        {
                                            subhead.id=== background ?(
                                                <Play src={require("../../assests/images/playicon.svg").default} alt="play" className="play"/>
                                            ):subhead.id<=background?(
                                                <Tick src={require("../../assests/images/green-tick.svg").default} alt="tick"  className="tick" />
                                            ):subhead.id>=background?(
                                                <Tick src={require("../../assests/images/lock.svg").default} alt="lock"  className="tick" />
                                            ):""
                                        }
                                    </Tickcontainer>
                                    <SubName>
                                        {subhead.head}
                                    </SubName>
                                    <Time>
                                        {subhead.Time}
                                    </Time>
                                </Subitem>
                            </Subitemlist>
                        ))
                    }
                </Mapping>
            )
        })
    )
    const changingbackground=()=>{
        setBackground(background+1)

    }

 return (
    <>
        <Profileheader />
        <Pagecontainer>
            <Pagewrapper className='wrapper'>
                <Leftcontainer>
                    <Videoportion>
                        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width="100%" height="100%"/>
                    </Videoportion>
                    <Mark>
                        <Techodiv>
                            <Head>
                                Technology Fundamentals
                            </Head>
                            <Title>
                                What is technology?
                            </Title>
                        </Techodiv>
                        <Markbutton onClick={changingbackground}>Mark as Complete</Markbutton>
                    </Mark>
                    <Addiv>
                        <Ad src={require("../../assests/images/ad.svg").default} alt="ad" />
                    </Addiv>
                    <Mediadiv>
                        <Media src={require("../../assests/images/media.svg").default} alt="media" /> 
                    </Mediadiv>
                </Leftcontainer>
                <Rightcontainer>
                    <Courselist>
                        {renderCoures()}
                    </Courselist>
                </Rightcontainer>
            </Pagewrapper>
    
        </Pagecontainer>
    </>
  )
}


const Pagecontainer=styled.section`
    padding-top:100px;
    z-index:10;`
const Pagewrapper=styled.section`
    display:flex;
    justify-content:space-between;`
const Leftcontainer=styled.div`
    width:70%;`
const Videoportion=styled.div`
   
    margin: 0 auto;
    height: 500px;
    `
const Techodiv=styled.div``
const Head=styled.h3`
    font-size: 15px;
    color: rgba(21, 35, 46, 0.49);
`
const Title=styled.p`
    line-height: 1.2;
    font-size: 25px;
    color: rgb(0, 0, 0);
    margin-top: 10px;`
const Addiv=styled.div`
    height:200px;
    width:100%;
    margin: 27px 0;`
const Ad=styled.img``
const Mediadiv=styled.div``
const Media=styled.img``
const Rightcontainer=styled.div`
    width:30%;
    margin:0 auto;`
const Markbutton=styled.button`
        opacity: 1;
    transition: all 0.4s ease 0s;
    min-width: 250px;
    font-size: 15px;
    cursor: pointer;
    background: linear-gradient(272deg, rgb(34, 193, 195) 0%, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 100%);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 12px;
    border-radius: 7px;
    color: rgb(255, 255, 255);
    height: 45.92px;
`
const Mark=styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 23px 0px 0px;`
const Courselist=styled.div``
const Listitem=styled.div`
    cursor: pointer;
    background-color: rgb(245, 245, 245);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 15px 19px;
    width: 100%;
    margin:0 0 20px 20px;
    border-radius: 9px;`
const Coursename=styled.h4`
    font-weight:200;`
const Arrowdiv=styled.div`
    &.down{
        transform: rotate(180deg);
        transition: all .4s ease-in-out;
        width:5%;
    }
    &.up{
        transform: rotate(0deg);
        transition: all .4s ease-in-out;
        width:5%;
    }`
const Arrow=styled.img``
const Subitem=styled.div`
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 15px 19px;
    width: 100%;
    margin:0 0 20px 20px;
    border-radius: 9px;
    display: flex;
    &.down{
        display: block;
        -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 15px 19px;
    width: 100%;
    margin:0 0 20px 20px;
    border-radius: 9px;
    display: flex;
    cursor: pointer;
    }
    &.background{
        display: block;
        -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 15px 19px;
    width: 100%;
    margin:0 0 20px 20px;
    border-radius: 9px;
    display: flex;
    cursor: pointer;
    background: linear-gradient(272deg, rgb(34, 193, 195) 0%, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 100%);
    color: rgb(255, 255, 255);
    transition: all 0.4s ease 0s;
    }
    `
const Tickcontainer=styled.div`
    width:5%;
    `
const Tick=styled.img`
`
const SubName=styled.h4`
    font-weight:200;`
const Time=styled.h5``
const Mapping=styled.div``
const Subitemlist=styled.div`
 display:none;
 &.down{
        display: block;
    }
`
const Play=styled.img``