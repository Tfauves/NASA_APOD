import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Apod from './Apod';

const Apods = () => {

  const [apods, setApod] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const _getApod = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/apod");
        console.log(res.data);
        setLoading(false);
        setApod(res.data);
      } catch (err) {
        console.error(err.message);
      }
    }
    _getApod();
  },[])

  const displayApod = () => {
    // [{article1}, {article2}, {article3}]
    // [<Article1 />, <Article2 /> <Article3 />]
    return apods.map((apod, i) => (
      <Apod apod={apod} key={apod.url} />
    ))
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