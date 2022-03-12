import { FaGithub , FaUserAstronaut ,FaMeteor , FaLinkedin} from 'react-icons/fa';


function NavBar () {
    return (
        <nav className=''>
 <div className="flex justify-around items-center text-5xl">

<ul className='flex  hover:scale-125 hover:bg-white duration-500 rounded-full '><FaUserAstronaut/></ul>
<ul className='flex  hover:scale-125 hover:bg-white duration-500 rounded-full'><a href='https://github.com/DevSnippy'><FaGithub/></a></ul>
<ul className='flex  hover:scale-125 hover:bg-white duration-500 rounded-full'><FaMeteor/></ul>
<ul className='flex  hover:scale-125 hover:bg-white duration-500 rounded-full'><FaLinkedin/></ul>
</div>
</nav>
    )
}

export default NavBar