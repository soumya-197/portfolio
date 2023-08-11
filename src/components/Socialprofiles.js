import React from 'react'

const Socialprofiles = () => {
  return (
    <div className=' flex flex-row mt-4'>
        <a className=' sociallinks bg-white hover:bg-cyan-500 hover:h-7 hover:w-7 hover:mt-3 duration-500 w-9 rounded-full h-9 flex justify-center items-center m-2' href='https://www.linkedin.com/in/soumya-sethi/'><img className=' socialimg w-4' src={require('../image/linkedin.png')}></img></a>
        <a className=' sociallinks bg-white hover:bg-cyan-500 hover:h-7 hover:w-7 hover:mt-3 duration-500 w-9 rounded-full h-9 flex justify-center items-center m-2' href='https://www.codechef.com/users/mi0901cs88so'><img className=' socialimg w-6' src={require('../image/CodeChef (1).png')}></img></a>
        <a className=' sociallinks bg-white hover:bg-cyan-500 hover:h-7 hover:w-7 hover:mt-3 duration-500 w-9 rounded-full h-9 flex justify-center items-center m-2' href='https://auth.geeksforgeeks.org/user/soumyasepszj'><img className=' socialimg w-6' src={require('../image/gfg.png')}></img></a>
        <a className=' sociallinks bg-white hover:bg-cyan-500 hover:h-7 hover:w-7 hover:mt-3 duration-500 w-9 rounded-full h-9 flex justify-center items-center m-2' href='https://github.com/soumya-197'><img className=' socialimg w-6' src={require('../image/git.png')}></img></a>
        <a className=' sociallinks bg-white hover:bg-cyan-500 hover:h-7 hover:w-7 hover:mt-3 duration-500 w-9 rounded-full h-9 flex justify-center items-center m-2' href='https://leetcode.com/soumya197/'><img className=' socialimg w-6' src={require('../image/leetcode.png')}></img></a>
    </div>
  )
}

export default Socialprofiles