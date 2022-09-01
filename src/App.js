import './App.css';

import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Spiner from './components/Spiner';
import LoadingBar from 'react-top-loading-bar'



const App = ()=> {
  const [url,setUrl]=useState("");
  const [page,setPage]=useState(1);
  const [pageSize,setPageSize]=useState(5)


  
 const handlePageCountCallBack=(num)=>{
    
    setPage(num);
  //  setUrl(msg+`&page=${num}&pageSize=${pageSize}`)
  
  }
 const handlePageSizeCallBack=(num)=>{
  setPageSize(num);
 // setUrl(msg+`&page=${page}}&pageSize=${num}`)
  }
  const handleCallBack =(msg)=>{

    //setMsg(msg);
    //setUrl(msg+`&page=${page}&pageSize=${pageSize}`)
     setUrl(msg)
  }
 
  //everything and topheadlines
  
    //url will be passed to news component and the url will be updated at the navbar ohk
    //for that the communication between two or more component should be done by the states and those propes should belong to parent component 
    //pageSize is going to be updated via the navbar but the page number is dependent on news compo
    //ab iske baad page pass krna hai url leni hai news me daalni hai 
    return (
    
        <div className="container">
        
        <Navbar parentCallBack={handleCallBack} page={page} parentPageSizeChanger={handlePageSizeCallBack}/>
       
        {url!=""?<News url={url}   pageSize={pageSize} parentPageCountCallBack={handlePageCountCallBack}/>:<Spiner/>} 
      </div>
    )
  
}

export default App