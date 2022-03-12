import react , {useEffect , useState} from "react";

function Sqr () {
    const API = "https://api.nasa.gov/planetary/apod?api_key=CfrfQa36pXDh3ZxFZvcKJsVw2QGVBflXDw6NiIpz"

    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
      fetchPhoto();
  
      async function fetchPhoto() {
        const res = await fetch(
          `${API}`
        );
        const data = await res.json();
        setPhotoData(data);
      }
    }, []);
  
    if (!photoData) return <div />;
    return ( 
        <div className="flex justify-center pb">
        <div className="shadow-2xl bg-gradient-to-r from-slate-900 to-slate-600 border  min-h-max	 w-1/4	"  >
            <h4 className="text-white text-center">
     <h3 className="text-2xl	pb-6">{photoData.title} - {photoData.date}</h3>
     

    <div className="pb-6 pl-6 pr-6"> {photoData.explanation} </div>
            </h4>
        </div>
        </div>
    )
}
export default Sqr;