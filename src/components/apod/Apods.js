// import React, {useEffect, useState} from 'react';
// import axios from 'axios';
// import Apod from './Apod';

// const Apods = () => {

//   const [apods, setApods] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const _getApod = async () => {
//       try {
//         const res = await axios.get("http://localhost:8080/api/apod/Java");
//         console.log(res.data);
//         setLoading(false);
//         setApods(res.data);
//       } catch (err) {
//         console.error(err.message);
//       }
//     }
//     _getApod();
//   },[])

//   const displayApods = () => {
//     // [{article1}, {article2}, {article3}]
//     // [<Article1 />, <Article2 /> <Article3 />]
//     return apods.map((article, i) => (
//       <Apods apodds={apods} key={apods.url} />
//     ))
//   }

//   return (
//     <div style={{width: "100%", justifyContent: 'center'}}>
//       {loading ? (
//         <p>Loading...</p>
//       ) : displayApods()
//       }
//     </div>
//   )
// }

// export default Apods;