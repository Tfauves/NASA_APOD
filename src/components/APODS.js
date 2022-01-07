import React, {useEffect, useState} from 'react';
import axios from 'axios';


const Apods = () => {
  
  const [apods, setApods] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const _getApod = async () => {
      // const apiHost = process.env.REACT_APP_API_HOST || "http://localhost:8080"
      try {
        const res = await axios.get("http://localhost:8080/api/apod");
        console.log(res.data);
        setLoading(false);
        setApods(res.data);
      } catch (err) {
        console.error(err.message);
      }
    }
    _getApod();
  },[])

  const displayApod = () => {
    return <img src={apods.url} alt={apods.title} />
    
   

  }

  return (
    <div style={{width: "100%", justifyContent: 'center'}}>
      {loading ? (
        <p>Loading...</p>
      ) : displayApod()
      }
    </div>
  )
}

export default Apods;