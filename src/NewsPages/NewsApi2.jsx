import React ,{useState,useEffect} from 'react'

import ControlledPopup from './SquareCard';

const NewsAPI2 =(props)=> {
    
    const [apis, setapis] = useState([]);
    
    const getdatas = async ()=>{
        const rests = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0888d40d713149ec954616ce5f3ed61b&page=2");
        const actuals = await rests.json();
        setapis(actuals.articles);
        
    }
    useEffect(() => {
      
       getdatas();
    
    }, []);
     let page2 = apis.slice(1,7);
     if(props.id)
    {
         page2 = apis.slice(1,6); 
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
                 title = {value.title}
                 image = {value.urlToImage}
                 url = {value.url}
                 content ={value.content}
                 publishedAt = {value.publishedAt}
                 id = {props.id}
                 />
                 </>
            )
        })
     );
     
        
     
}

export default NewsAPI2;
