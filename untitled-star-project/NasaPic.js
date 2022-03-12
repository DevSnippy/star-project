import React, { useState, useEffect ,} from "react";

const API = "https://api.nasa.gov/planetary/apod?api_key=CfrfQa36pXDh3ZxFZvcKJsVw2QGVBflXDw6NiIpz"


export default function NasaPhoto() {
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
    <div className="pt-32 pr-32 flex justify-end">
        
        <a href={photoData.url}>
<img
          src={photoData.url}
          alt={photoData.title}
          className="h-64 w-64 rounded-full border-4 bg-white hover:scale-150 duration-500"
        />

</a>
    </div>

  );
}