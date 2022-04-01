import React from 'react'
import Header from '../includes/Header'
import styled from 'styled-components'

export default function Register() {
  return (
    <Registercontainer>
        <Registerwrapper className='wrapper'>
            <Logocontainer>
                <h1><Logo src={require("../../assests/images/logo.svg").default}  /></h1>
            </Logocontainer>
            <Maincontianer>
                <Leftcontainer>
                    <MainImage src={require("../../assests/images/register.svg").default} alt="register" />
                </Leftcontainer>
                <Rightcontainer>
                    <Form>
                        <Title>
                            Register your school on our technology platform
                        </Title>
                        <Fristinput>
                            <Label>Name of school*</Label>
                            <Frist type="name" name="name" placeholder="Enter your name" />
                        </Fristinput>
                        <Inputlist>
                            <Listitem>
                                <Label>Address*</Label>
                                <Input type="name" name="name" placeholder="place/street" />
                            </Listitem>
                            <Listitem>
                                <Label>Pincode*</Label>
                                <Input type="name" name="name" placeholder="Enter your pincode" />
                            </Listitem>
                            <Listitem>
                                <Label>Name of contact person*</Label>
                                <Input type="name" name="name" placeholder="Enter your name" />
                            </Listitem>
                            <Listitem>
                                <Label>Email*</Label>
                                <Input type="email" name="name" placeholder="Enter your Email" />
                            </Listitem>
                            <Listitem>
                                <Label>Phone number*</Label>
                                <Input type="number" name="name" placeholder="Enter your Number" />
                            </Listitem>
                            <Listitem>
                                <Label>Total student count*</Label>
                                <Input type="name" name="name" placeholder="Enter your Count" />
                            </Listitem>
                            <Listitem>
                                <Label>School category*</Label>
                                <Input type="name" name="name" placeholder="Enter your name" />
                            </Listitem>
                            <Listitem>
                                <Label>School logo*</Label>
                                <Input type="name" name="name" placeholder="Upload logo" />
                            </Listitem>
                        </Inputlist>
                        <Label>
                            Select class*
                        </Label>
                        <Checkboxitems>
                            <Checkboxcontainer>
                                
                                <Checkboxes>
                                    <Fristtickcontainer>
                                        <Span>
                                            Lower Primary
                                        </Span>
                                        <Tickboxlist>
                                            <Tickitem>
                                                <Squarediv>
                                                </Squarediv>
                                                <Number>
                                                    1st
                                                </Number>
                                            </Tickitem>
                                            <Tickitem>
                                                <Squarediv>
                                                </Squarediv>
                                                <Number>
                                                    2st
                                                </Number>
                                            </Tickitem>
                                            <Tickitem>
                                                <Squarediv>
                                                </Squarediv>
                                                <Number>
                                                    3st
                                                </Number>
                                            </Tickitem>
                                            <Tickitem>
                                                <Squarediv>

                                                </Squarediv>
                                                <Number>
                                                    4st
                                                </Number>
                                            </Tickitem>
                                        </Tickboxlist>
                                    </Fristtickcontainer>
                                </Checkboxes>
                            </Checkboxcontainer>
                            <Checkboxcontainer>
                                <Checkboxes>
                                    <Fristtickcontainer>
                                        <Span>
                                            Upper Primary
                                        </Span>
                                        <Tickboxlist>
                                            <Tickitem>
                                                <Squarediv>
                                                </Squarediv>
                                                <Number>
                                                    5st
                                                </Number>
                                            </Tickitem>
                                            <Tickitem>
                                                <Squarediv>
                                                </Squarediv>
                                                <Number>
                                                    6st
                                                </Number>
                                            </Tickitem>
                                            <Tickitem>
                                                <Squarediv>
                                                </Squarediv>
                                                <Number>
                                                    7st
                                                </Number>
                                            </Tickitem>
                                        </Tickboxlist>
                                    </Fristtickcontainer>
                                </Checkboxes>
                            </Checkboxcontainer>
                            <Checkboxcontainer>
                                <Checkboxes>
                                    <Fristtickcontainer>
                                        <Span>
                                            HighSchool
                                        </Span>
                                        <Tickboxlist>
                                            <Tickitem>
                                                <Squarediv>
                                                </Squarediv>
                                                <Number>
                                                    8st
                                                </Number>
                                            </Tickitem>
                                            <Tickitem>
                                                <Squarediv>
                                                </Squarediv>
                                                <Number>
                                                    9st
                                                </Number>
                                            </Tickitem>
                                            <Tickitem>
                                                <Squarediv>
                                                </Squarediv>
                                                <Number>
                                                    10st
                                                </Number>
                                            </Tickitem>
                                        </Tickboxlist>
                                    </Fristtickcontainer>
                                </Checkboxes>
                            </Checkboxcontainer>
                            <Checkboxcontainer>
                                <Lastcheckbox>
                                    <Fristtickcontainer>
                                        <Span>
                                            HigherSecondary
                                        </Span>
                                        <Tickboxlist>
                                            <Tickitem>
                                                <Squarediv>
                                                </Squarediv>
                                                <Number>
                                                    11st
                                                </Number>
                                            </Tickitem>
                                            <Tickitem>
                                                <Squarediv>
                                                </Squarediv>
                                                <Number>
                                                    12st
                                                </Number>
                                            </Tickitem>
                                        </Tickboxlist>
                                    </Fristtickcontainer>
                                    <Fristtickcontainer>
                                        <Span>
                                            VHSE
                                        </Span>
                                        <Tickboxlist>
                                            <Tickitem>
                                                <Squarediv>
                                                </Squarediv>
                                                <Number>
                                                    11st
                                                </Number>
                                            </Tickitem>
                                            <Tickitem>
                                                <Squarediv>
                                                </Squarediv>
                                                <Number>
                                                    12st
                                                </Number>
                                            </Tickitem>
                                        </Tickboxlist>
                                    </Fristtickcontainer>
                                </Lastcheckbox>
                            </Checkboxcontainer>
                        </Checkboxitems>
                        <Button>Submit</Button>
                    </Form>
                </Rightcontainer>
            </Maincontianer>
        </Registerwrapper>
    </Registercontainer>
   
  )
}
const Registercontainer=styled.section`
    padding:20px 0;`
const Registerwrapper=styled.section`
`
const Maincontianer=styled.div`
    display: flex;
    padding: 25px 0px 0px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;`
const Leftcontainer=styled.div`
    width:30%;
    display:flex;
    flex-direction:end;`
const MainImage=styled.img``
const Rightcontainer=styled.div`
    width: 56%;` 
const Form=styled.form``
const Title=styled.h3`
    font-size: 33px;
    max-width: 70%;
    margin-bottom: 40px;
    font-weight: 200;
`
const Fristinput=styled.div`
`
const Frist=styled.input`
    width: 100%;
    background: rgb(252, 252, 252);
    border: 1px solid rgb(217, 217, 217);
    padding: 0px 25px;
    height: 50px;
    border-radius: 6px;
    font-size: 14px;
    outline-color: #5eb953;`
const Label=styled.label`
    display: block;
    color: rgb(170, 170, 170);
    display: block;
    color: rgb(170,170,170);
    font-size: 20px;
`
const Input=styled.input`
    background: rgb(252, 252, 252);
    border: 1px solid rgb(217, 217, 217);
    padding: 0px 25px;
    height: 50px;
    border-radius: 6px;
    width: 100%;
    font-size: 14px;
    outline-color: #5eb953;
    &:focus{
        border-color:green;
    }
`
const Inputlist=styled.ul`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 25px;`
const Listitem=styled.li`
    width: 45%;
    margin: 39px 0px 0 0;
    `
const Checkboxcontainer=styled.div`
    width:50%;`
const Checkboxes=styled.div``
const Fristtickcontainer=styled.div``
const Squarediv=styled.div`
    width: 25px;
    border: 1px solid rgb(217, 217, 217);
    height: 25px;
    border-radius: 3px;
    margin-right: 5px;
    overflow: hidden;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    cursor: pointer;`
const Tickboxlist=styled.ul`
    display:flex;`
const Tickitem=styled.li`
    display:flex;
    margin-right:20px;
    `
const Number=styled.div``
const Span=styled.p`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: flex-start;
    -webkit-box-align: flex-start;
    -ms-flex-align: flex-start;
    align-items: flex-start;
    font-size: 18px;
    margin: 17px 0;
    font-weight: 100;
    color: #dfdfdf;  `
const Checkboxitems=styled.div`
    display:flex;
    flex-wrap:wrap;`
const Lastcheckbox=styled.div`
    display:flex;
    width:50%;`
const Button=styled.button`
        width: 100%;
    height: 50px;
    display: flex;
    cursor: pointer;
    font-size: 15px;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background-image: linear-gradient(to right, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 100%);
    color: rgb(255, 255, 255);
    border-radius: 5px;
    margin-top: 50px;
`
const Logocontainer=styled.div`
    width:10%;`
const Logo=styled.img``