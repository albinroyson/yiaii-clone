import React from 'react'
import Appdownlad from '../screens/Appdownlad';
import Campus from '../screens/Campus';
import Certificate from '../screens/Certificate';
import Header from '../includes/Header';
import NewTech from '../screens/NewTech';
import Spotlight from '../screens/Spotlight';
import Tefun from '../screens/Tefun';
import Tefunprogram from '../screens/TefunProgram';
import Wishessection from '../screens/WishesSection';
import Question from '../screens/Question';
import Footer from '../screens/Footer';

export default function Landingpage() {
  return (
    <>
      <Header />
      <Spotlight />
      <Wishessection />
      <Campus />
      <NewTech />
      <Certificate />
      <Tefun />
      <Tefunprogram />
      <Appdownlad />
      <Question />
      <Footer />
    </>
  )
}
