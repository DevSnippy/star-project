import { DiNodejsSmall , DiReact , DiMongodb } from "react-icons/di";
import { SiExpress , SiTailwindcss} from "react-icons/si";

 


function Footer () {
    return (
        
        
        
           <div className="flex justify-center items-end pt-36">


            <h3 className="text-4xl grid justify-center">
            was built using 

            
            <div className="flex justify-around">


            <a href="https://nodejs.org/en/about/" className="hover:scale-125 duration-150"><DiNodejsSmall/></a>

            <a href="https://reactjs.org/" className="hover:scale-125 duration-150"><DiReact/></a>

            <a href="https://www.mongodb.com/" className="hover:scale-125 duration-150"><DiMongodb/></a>

             <a href="https://tailwindcss.com/" className="hover:scale-125 duration-150"><SiTailwindcss/></a>

             <a href="https://expressjs.com/" className="hover:scale-125 duration-150"><SiExpress/></a> 
             
             </div>
            </h3>
        </div>
    )
}
export default Footer