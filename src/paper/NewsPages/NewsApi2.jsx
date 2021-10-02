import React ,{useState,useEffect} from 'react'

import ControlledPopup from './SquareCard';

const NewsAPI2 =(props)=> {
    
    const [apis, setapis] = useState([]);
    
    const getdatas = async ()=>{
        const rests = await fetch("https://bing-news-search1.p.rapidapi.com/news?textFormat=Raw&safeSearch=Off", {
            "method": "GET",
            "headers": {
                "x-bingapis-sdk": "true",
                "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
                "x-rapidapi-key": "c2178f2e31mshbd82148e75d8de5p1f7640jsnf88a5abb8f2b"
            }
        });
        const actuals = await rests.json();
        setapis(actuals.value);
        
    }
    useEffect(() => {
      
       getdatas();
    
    }, []);
     let page2 = apis.slice(5,11);
     if(props.id)
    {
         page2 = apis.slice(5,10); 
    }
    
    const delCard =(inde)=>{
        setapis((olditem) => {
             return (
                 olditem.filter((elem, index) => {
                     return index !== inde;
                 })
             )
         })
       }

     return (
       
        page2.map((value,index)=>{
            
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
     
    //  return(
    //     <>
    //     <h3>I am Harsh Bhatnagar</h3>
    //     </>
    // );  
     
}

export default NewsAPI2;
