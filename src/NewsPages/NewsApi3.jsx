import React ,{useState,useEffect} from 'react'
import ControlledPopup from './SquareCard';


const NewsApi3 =(props)=> {
    const [apiss, setapiss] = useState([]);
    
    const getdata3 = async ()=>{
         const rests = await fetch("https://bing-news-search1.p.rapidapi.com/news?textFormat=Raw&safeSearch=Off", {
            "method": "GET",
            "headers": {
                "x-bingapis-sdk": "true",
                "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
                "x-rapidapi-key": "c2178f2e31mshbd82148e75d8de5p1f7640jsnf88a5abb8f2b"
            }
        });
        const actuals = await rests.json();
        
        setapiss(actuals.value);
        
    }
    
    useEffect(() => {
       getdata3();
    }, []);
     
    
    
    let page3 = apiss.slice(10,17);
    
    if(props.id)
    {
         page3 = apiss.slice(10,16); 
    }
   
    
    const delCard =(inde)=>{
     setapiss((olditem) => {
          return (
              olditem.filter((elem, index) => {
                  return index !== inde;
              })
          )
      })
    }

  return (
    
     page3.map((value,index)=>{
         
         return(
            <>
            <ControlledPopup key ={index}
            indu ={index}
            delCard = {delCard}
            title = {value.name}
            image = {value.image.thumbnail.contentUrl}
            url = {value.url}
            content ={value.description}
            publishedAt = {value.datePublished.slice(1,19)}
            id = {props.id}
            
            />
            </>
         )
     })
  );
     
        
     
}

export default NewsApi3;
