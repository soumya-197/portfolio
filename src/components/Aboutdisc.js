import React from 'react'
import Socialprofiles from './Socialprofiles'
const Aboutdisc = () => {
  return (
    <div className="">
        <h1 className="cursive text-5xl text-cyan-500">Hello, I am Soumya Sethi</h1>
        <h1 className=' pt-4 text-cyan-500'>FRONTEND DEVELOPER || COMPETITIVE PROGRAMMER</h1>
        <p className='pt-4 text-justify'>I am currently pursuing a B.Tech in Computer Science and Engineering at Madhav Institute of Technology and Science, Gwalior. My aggregate CGPA is 8.78. My interests lie in Competitive Programming, DSA, and Web Development. I've achieved a 2-star rating on LeetCode and a 3-star rating on CodeChef. In addition, I've completed two full-stack projects—an e-commerce site and an employee management system—along with various frontend projects. My web development tech stack includes HTML, CSS, JavaScript, React.js, MySQL, and PHP. I'm proficient in programming with C and C++, and I also possess a foundational understanding of Python. I consider myself an enthusiastic learner and always strive to excel in any assigned task.</p>
        <Socialprofiles/>
        <button className='underlineanim mt-5 bg-cyan-500 p-3 rounded-3xl w-56 hover:bg-gray-700 hover:w-72 duration-500'><a className=' font-bold text-xl' href=''>RESUME</a></button>
    </div>
  )
}

export default Aboutdisc
