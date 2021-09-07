import React ,{useState,useEffect} from 'react'
import ControlledPopup from './SquareCard';



const NewsAPI =(props)=> {
    const [api, setapi] = useState([]);
    
    const getdata = async ()=>{
        const rest = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0888d40d713149ec954616ce5f3ed61b`);
        const actual = await rest.json();
        setapi(actual.articles);   
    }
    
    useEffect(() => {
       getdata();
       
    }, []);
     
    
    
    let page1 = api.slice(1,7);
    if(props.id)
    {
         page1 = api.slice(1,6); 
    }
    const delCard =(inde)=>{
     setapi((olditem) => {
          return (
              olditem.filter((elem, index) => {
                  return index !== inde;
              })
          )
      })
    }
   
   
     return (<>
        
       { page1.map((value,index)=>{
            
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
        })}
        
        
        </>
        
     );
     
        
     
}

export default NewsAPI
