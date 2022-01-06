import React, {useEffect, useState} from 'react'
import BorderCard from './BorderCard'
import axios from 'axios';


const Article = (props) => {
  //requires a props.article
  const {date, explanation, title,  urlToImage,} = props.article
  
  useEffect(() => {
    const _getNews = async () => {
      try {
        urlToImage = await axios.get("http://localhost:8080/api/apod");
        // console.log(res.data);
        
      } catch (err) {
        console.error(err.message);
      }
    }
    _getNews();
  },[])


  return (
    <BorderCard style={{minWidth: '1000px'}}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{flex: 1}}>
          <img 
            src={urlToImage} 
            style={{height: '100%', width: '100%', objectFit: 'cover'}} 
            alt="article img"/>
        </div>
        <div style={{flex: 3, flexDirection: 'column', padding: '0 8px'}}>

          <h2>{title}</h2>
          <p>{explanation}</p>
          {date ?  (
            <small>{date}</small> 
          ) : (
            null
          )}
        </div>
      </div>
    </BorderCard>
  )
}

export default Article;