import { FaGithub , FaUserAstronaut ,FaMeteor , FaLinkedin} from 'react-icons/fa';

function NavBar () {
    return (
 <div className="flex justify-between items-center text-6xl">
<ul className="flex gap-4"><FaUserAstronaut/></ul>
<ul><FaGithub/></ul>
<ul><FaMeteor/></ul>
<ul><FaLinkedin/></ul>
</div>
    )
}

export default NavBar