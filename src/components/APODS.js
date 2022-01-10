import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Apod from './APOD';




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
    return (
    <div >
      <h2 style={{marginTop: 100, color: '#cfd4e2'}}>{apods.title}</h2>
      <p style={{color: '#cfd4e2'}}>{apods.date}</p>
      <img style={{height: '100%', width: '100%', objectFit: 'cover'}}src={apods.url} alt={apods.title} />
      <p style={{color: '#cfd4e2'}}>{apods.explanation}</p>

    </div>
    // return apods.get(apod => <Apod apod={apod} key={apod.date}/>)
     
    )
  
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