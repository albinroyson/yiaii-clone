import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import axios from "axios"


export default function Country({code,setCode,selected, setSelected}) {
    const [phone,setphone] =useState([])
    useEffect(()=>{
        axios.get("https://accounts.steyp.com/api/v1/users/settings/countries/")
        .then((res)=>{
            setphone(res.data.data)
            console.log(phone);
        })
        .catch((error)=>{
            console.log(error);

        })
    },[])

    const closecode=()=>{
        setCode(!code)
    }
    const [search,setSearch]=useState("")

    const onChange = (event) =>{
        setSearch(event.target.value);
    }

    const renderphone =()=>{
            return phone.filter(item => {
                if (search==""){
                    return item
                }
                else{
                    const searchterm=search.toLowerCase();
                    const name=item.name.toLowerCase();

                    return searchterm && name.startsWith(searchterm)}
            }).map(item=>(
            <Listitem>
                    <Flagdiv>
                        <Flag src={item.flag} />
                    </Flagdiv>
                    <Nation onClick={()=>{
                        setSelected(item)
                        closecode()
                        
                    }}>{item.name}</Nation>
                </Listitem>
            ))
    }

  
  return (
    <Countrycontainer className={code?"active" :""}>
        <Countrydiv>
            <Countryinput>
                <Input type="text"  name="name" placeholder="Select your country"
                 onChange={onChange}/> 
            </Countryinput>
            <Countrylist>
               {renderphone()}
            </Countrylist>
        </Countrydiv>
    </Countrycontainer>
  )
}

const Countrycontainer=styled.section`
    width:45%;
    position:fixed;
    top:0;
    right:0  ;
    backdrop-filter: blur(1px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    height: 100vh;
    transform: scale(0,0);
    &.active{
    transform: scale(1,1);
  }`
const Countrydiv=styled.div`
    background: rgb(255, 255, 255);
    border-radius: 7px;
    width: 327px;
    padding: 28px 21px 10px;
    `
const Countryinput=styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 7px 15px;
    border: 1px solid rgb(218, 227, 237);
    border-radius: 6px;
    overflow: hidden;`
const Input=styled.input`
    font-size: 17px;
    caret-color: rgb(67, 200, 131);
      &:focus{
        outline: none;
    }`
const Countrylist=styled.ul`
    margin-top:20px;
    overflow-y: scroll;
    margin-top: 20px;
    overflow-y: scroll;
    height: 50vh;`
const Listitem=styled.li`
    display: flex;
    padding: 10px 12px;
    cursor: pointer;
    align-items: center;
    `
const Flagdiv=styled.div`
    width:15%;
    margin-right:10px;`
const Flag=styled.img``
const Nation=styled.h3``

