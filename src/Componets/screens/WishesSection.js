import React,{useState} from 'react'
import styled from 'styled-components'
import img from "../../assests/images/jayasurya.jpg" 
import img1 from "../../assests/images/Antony.jpg" 
import img2 from "../../assests/images/img3.jpg" 
import img3  from "../../assests/images/img4.jpg" 
import playimg from "../../assests/images/play.svg"
import Video from '../includes/modals/Video';


export default function Wishessection() {
  const[Actors,setActors]=useState([
    {
      id:1,
      image:img,
      name:"Jayasurya",
      role:"Actor"
    },
   {
      id:2,
      image:img1,
      name:"Antony Varghese",
      role:"Actor"
    },
    {
      id:3,
      image:img2,
      name:"Major Ravi",
      role:"Actor"
    },
    {
      id:4,
      image:img3,
      name:"Niranjana Anoop",
      role:"Actor"
    },
    {
      id:5,
      image:img,
      name:"Jayasurya",
      role:"Actor"
    },
   {
      id:6,
      image:img1,
      name:"Antony Varghese",
      role:"Actor"
    },
    {
      id:7,
      image:img2,
      name:"Major Ravi",
      role:"Actor"
    },
    {
      id:8,
      image:img3,
      name:"Niranjana Anoop",
      role:"Actor"
    },
    {
      id:9,
      image:img2,
      name:"Major Ravi",
      role:"Actor"
    },
    {
      id:10,
      image:img3,
      name:"Niranjana Anoop",
      role:"Actor"
    }
  ]);
  const [play, setPlay] = useState(false);
  const renderplay=()=>{
    setPlay(!play)
  }
  const renderItems = ()=>(
    Actors.map(actor=>{
      return(
        <Listitems className='Namehover'>
            <Picturecontainer >
                <Blur></Blur>
                <Picture src={actor.image} alt="profile" />  
            </Picturecontainer>
            <Namecontaier >
                <Name>{actor.name}</Name>
                <Role>{actor.role}</Role>
                <Buttondiv className='buttonhover' onClick={renderplay}>
                    <Playimagecontainer>
                        <Play src={playimg} alt="image"/>
                    </Playimagecontainer>
                    <Watchbutton >WATCH STORY</Watchbutton>
                </Buttondiv>
            </Namecontaier>
            

              
            
        </Listitems>
        )
    })
  )
  return (
    <Wishescontainer>
      <Video play={play} setPlay={setPlay}/>
        <Wisheswrapper className='wrapper'>
            <Top>
                <Title>
                    TEFUN-ന്
                </Title>
                <Head>
                   ആശംസകളോടെ
                </Head>
            </Top>
            <Profilelist>
              {renderItems()}
            </Profilelist>
        </Wisheswrapper>
    </Wishescontainer>  
    )
}



const Wishescontainer =styled.section`
    padding-top:100px;
    position: relative;

`
const Wisheswrapper =styled.section`
`
const Top =styled.div`
    margin-bottom: 40px;
`
const Title =styled.h3`
    text-align:center;
    color: rgb(15, 167, 111);
    font-size: 30px;
`
const Head =styled.h3`
    text-align:center;
    font-size: 30px;
    font-weight:400;
`
const Profilelist =styled.ul`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    width:90%;
    margin:0 auto;
`
const Listitems =styled.li`
    width: calc(23% - 20px);
    margin-left:20px;
    border-radius:8px;
    overflow:hidden;
    margin:10px 10px;
    position:relative;
`
const Picturecontainer=styled.div`

`
const Picture =styled.img``

const Namecontaier=styled.div`
    position: absolute;
    bottom:10px;
    right:0;
    left:0;
    align-items: center;
` 
const Name=styled.h3`
    color: #fff;
    text-align: center;
    font-size: 28px;
    font-weight: 200;
`
const Role=styled.p`
    color:#fff;
    text-align:center;
`
const Watchbutton=styled.button`
   
`
const Blur=styled.div`
    position: absolute;
    width: 100%;
    top: 0px;
    left: 0px;
    height: 100%;
    z-index: 0;
    background: linear-gradient(rgba(248, 248, 248, 0) 0%, rgb(0, 0, 0) 100%);
    opacity: 0.4;
`
const Buttondiv=styled.div`
    background:#fff;
    text-align:center;
    align-items:center;
    opacity: 0;
    width: 70%;
    height: 0;
    margin: 0 auto;
    padding: 0 25px ;
    display: flex;
    justify-content: space-between;
    border-radius: 5px;`
const Playimagecontainer=styled.div`
    width:8%;`
const Play=styled.img``