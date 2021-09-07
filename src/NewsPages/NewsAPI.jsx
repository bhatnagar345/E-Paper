import React ,{useState,useEffect} from 'react'
import ControlledPopup from './SquareCard';



const NewsAPI =(props)=> {
    // const [api, setapi] = useState([]);
    const [apiss, setapiss] = useState([])
    
    // const getdata = async ()=>{
    //     const rest = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0888d40d713149ec954616ce5f3ed61b`);
    //     const actual = await rest.json();
    //     setapi(actual.articles);   
    // }
    const getsdata = async () =>{
        const res = await fetch("https://bing-news-search1.p.rapidapi.com/news?textFormat=Raw&safeSearch=Off", {
            "method": "GET",
            "headers": {
                "x-bingapis-sdk": "true",
                "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
                "x-rapidapi-key": "c2178f2e31mshbd82148e75d8de5p1f7640jsnf88a5abb8f2b"
            }
        });
        const act = await res.json();
        setapiss(act.value);
        
    }
    useEffect(() => {
    //    getdata();
       getsdata();
    }, []);
     
    // console.log(apiss);
    
    let page1 = apiss.slice(0,6);
    if(props.id)
    {
         page1 = apiss.slice(0,5); 
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
   
   
     return (<>
        
       { page1.map((value,index)=>{
            
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
        })}
        
        
        </>
        
     );
     
        
     
}

export default NewsAPI
