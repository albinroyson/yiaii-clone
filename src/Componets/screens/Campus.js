import React,{useState} from 'react'
import styled from 'styled-components'
import campuslogo2 from '../../assests/images/jammiya.jpeg';
import campuslogo3 from '../../assests/images/kerala.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function Campus() {
    const[Campuses,setCampuses]=useState([
        {
            id:1,
            logo:campuslogo2,
            campusname:"Jamia nadwiyya arts & Science college",
            place:"Malappuram"
        },
        {
            id:2,
            logo:campuslogo3,
            campusname:"Jamia nadwiyya arts & Science college",
            place:"Thrissur"
        },
        {
            id:3,
            logo:campuslogo2,
            campusname:"Jamia nadwiyya arts & Science college",
            place:"Palakkad"
        },
        {
            id:4,
            logo:campuslogo3,
            campusname:"Jamia nadwiyya arts & Science college",
            place:"Thrissur"
        },
        {
            id:5,
            logo:campuslogo2,
            campusname:"Jamia nadwiyya arts & Science college",
            place:"Malappuram"
        },
        {
            id:6,
            logo:campuslogo3,
            campusname:"Jamia nadwiyya arts & Science college",
            place:"Palakkad"
        },
        {
            id:7,
            logo:campuslogo2,
            campusname:"Jamia nadwiyya arts & Science college",
            place:"Malappuram"
        },
        {
            id:8,
            logo:campuslogo3,
            campusname:"Jamia nadwiyya arts & Science college",
            place:"Thrissur"
        },
        {
            id:9,
            logo:campuslogo2,
            campusname:"Jamia nadwiyya arts & Science college",
            place:"Palakkad"
        },
        {
            id:10,
            logo:campuslogo3,
            campusname:"Jamia nadwiyya arts & Science college",
            place:"Thrissur"
        },
        {
            id:11,
            logo:campuslogo2,
            campusname:"Jamia nadwiyya arts & Science college",
            place:"Malappuram"
        },
        {
            id:12,
            logo:campuslogo3,
            campusname:"Jamia nadwiyya arts & Science college",
            place:"Palakkad"
        },
       
    ]);

    const renderCampus = ()=>(
        Campuses.map(campus=>{
            return(
                <Listitem>
                    <Campuslogo>
                        <Logo src={campus.logo} alt="logo" />
                        </Campuslogo>
                        <Campusname>{campus.campusname}</Campusname>
                    <Campusplace>{campus.place}</Campusplace>
                </Listitem>
            )
        })
    )

  return (
    <Campuscontainer>
        <Campuswrapper className='wrapper'>
            <Top>
                <Head><span>Associated</span> Campuses</Head>
                <Discription>
                    Various institutions have joined hands with us, to train their students and improve their employability skills, 
                    along with moulding them to be future entrepreneurs.
                </Discription>
            </Top>
            <Campuslist>
                {renderCampus()}
            </Campuslist>
            <Bottom>
                <Title>
                    And <span>300</span> More Campus All Our Kerala
                </Title>
            </Bottom>
        </Campuswrapper>
    </Campuscontainer>
  )
}

const Campuscontainer=styled.section`
    padding:80px 0;`
const Campuswrapper=styled.section`
`
const Top=styled.div``
const Head=styled.h3`
    text-align:center;
    font-size: 30px;
    font-weight: 400;`
const Discription=styled.p`
    width:60%;
    text-align:center;
    margin:0 auto;
    padding-top:10px;
    color:#8e908a;
`
const Logo=styled.img`
`
const Campuslist=styled.ul`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    margin-top:80px;
    justify-content:center;
`
const Listitem=styled.li`
    width:12%;
    align-items:center;
    margin:10px 20px;
`
const Campuslogo=styled.div`
    width:20%;
    margin:0 auto;
    margin-bottom:5px;
`
const Campusname=styled.h3`
    text-align:center;
    font-weight:500;
    font-size:15px;
`
const Campusplace=styled.span`
    text-align:center;
    display:block;
    font-size:15px;
`
const Bottom=styled.div`
    margin-top:50px;`
const Title=styled.h3`
    text-align:center;`

