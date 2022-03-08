import { DiNodejsSmall , DiReact , DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";


function Footer () {
    return ( 
        <div className="">
            <h3 className="text-4xl grid justify-center">
            was built using 
            <div className="flex justify-around"><DiNodejsSmall/><DiReact/><DiMongodb/><SiExpress/></div>
            </h3>
        </div>
    )
}
export default Footer