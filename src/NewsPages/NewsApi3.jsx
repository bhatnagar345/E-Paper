import React ,{useState,useEffect} from 'react'
import ControlledPopup from './SquareCard';


const NewsApi3 =(props)=> {
    const [apiss, setapiss] = useState([]);
    
    const getdata3 = async ()=>{
        const restss = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0888d40d713149ec954616ce5f3ed61b");
        const actualss = await restss.json();
        setapiss(actualss.articles);
        
    }
    
    useEffect(() => {
       getdata3();
    }, []);
     
    
    
    let page3 = apiss.slice(7,13);
    
    if(props.id)
    {
         page3 = apiss.slice(7,12); 
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

export default NewsApi3;
