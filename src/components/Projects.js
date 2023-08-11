import React from 'react'
import Card from './Card'
import GitHubIcon from '@mui/icons-material/GitHub';
const Projects = () => {
  return (
    <div className=" min-h-screen py-10 text-white flex justify-center items-center flex-col">
      <div className="heading">
        <h1 className="cursive text-7xl vsm:text-5xl">My Projects</h1>
        <div className="underlineanim border-cyan-500 border w-64 duration-500 mt-3 vsm:w-60"></div>
      </div>
      <div className=' mt-10 flex flex-wrap mx-28 gap-5 justify-center items-center'>
        <Card
          img="https://tse1.mm.bing.net/th?id=OIP.tuS84JuUQ1BfBLsM1wm6qAHaFX&pid=Api&P=0&h=180"
          h="Solar System Animation"
          skills="HTML | CSS | JavaScript "
          link='https://soumya-197.github.io/solarsystem.github.io/'
          gitlink='https://github.com/soumya-197/solarsystem.github.io'
        />
        <Card
          img="https://i0.wp.com/ednep.com/wp-content/uploads/2020/06/Employee-Management.png?w=860&ssl=1"
          h="Employee Management System"
          skills="HTML | CSS | JavaScript | PHP | MySQL"
          link="https://drive.google.com/file/d/1ZR5U35Z880TMS16LaNf2mOVyavWIjeUE/view"
          gitlink=''
        />
        <Card
          img="https://www.wallpapers-for-phone.com/phone/strawberries-bucket-fruits.jpg"
          h="Organic"
          skills="HTML | CSS | JavaScript | PHP | MySQL | BootStrap"
          link="https://drive.google.com/file/d/1q8Gqyt6Wu2X1pyLyO9iIV2V8s7Z7XUAH/view"
          gitlink=''
        />
        {/* <Card
          img="spacex.jpg"
          h="SpaceX Clone"
          p="In this project, I have recreated the visual design and layout of SpaceX website."
          link="https://drive.google.com/file/d/1Ge0scj1zrX1sqWTnAMfnnAscqayUxY25/view"
        />
        <Card
          img="todo.jpg"
          h="ToDo list"
          p=" "
          link="https://soumya-197.github.io/todo.github.io/"
        />
        <Card
          img="calculator.png"
          h="Calculator"
          link="https://soumya-197.github.io/calculator.github.io/"
        /> */}
      </div>
      <div className=' mt-10 flex flex-row justify-center items-center gap-4'>
      <p className='cursive text-2xl'>For more, check out my github </p>
      <a href='https://github.com/soumya-197'><GitHubIcon/></a>
      </div>
    </div>
  )
}

export default Projects
