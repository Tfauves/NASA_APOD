import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Article from './APOD';


const Articles = () => {
  
  const [articles, setArticles] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const _getApod = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/apod");
        console.log(res.data);
        setLoading(false);
        setArticles(res.data);
      } catch (err) {
        console.error(err.message);
      }
    }
    _getApod();
  },[])

  const displayArticles = () => {
    return <img src={articles.url} alt={articles.title} />
   

  }

  return (
    <div style={{width: "100%", justifyContent: 'center'}}>
      {loading ? (
        <p>Loading...</p>
      ) : displayArticles()
      }
    </div>
  )
}

export default Articles;