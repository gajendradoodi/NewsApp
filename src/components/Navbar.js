

import React, { useState,useEffect} from 'react'


const Navbar =(props)=> {

 
  const [type,setType]=useState("top-headlines");
  const [country,setCountry]=useState("in")
  const [q,setQ]=useState("")
  const [category,setCategory]=useState("business")
  const [pageSize,setPageSize]=useState(5)
  const [url,setUrl]=useState("")
  const [page,setPage]=useState(0)

    useEffect(() => {
      setPage(props.page)
      setTheUrl();
    }, [props.page!==page]);
    
    const setTheUrl=()=>{
      let tempUrl="https://newsapi.org/v2/"+type+"?";
      if(country!="")
      {
        tempUrl+="country="+country+"&";
      }
      if(category!="")
      {
        tempUrl+="category="+category+"&";
      }
      if(q!="")
      {
        tempUrl+="q="+q+"&";
      }
  
      tempUrl+="apiKey=6c26ac44bb224ada8ad245dbbb15b593";
      tempUrl+=`&page=${page}&pageSize=${pageSize}`;
       setUrl(tempUrl)
      props.parentCallBack(tempUrl);
    }

   const typeHandler=()=>{


     if(type!="everything")
     {
       setType("everything")
       setCountry("")
       setCategory("")
       setQ("india")
       setPageSize(5)
     }
     else{
     
      setType("top-headlines")
      setCountry("in")
      setCategory("business")
      setQ("")
      setPageSize(5)
   }
   setTheUrl();
  }
  /*
   componentDidMount()
   {
    let tempUrl="https://newsapi.org/v2/"+this.state.typej+"?";
    if(this.state.country!="")
    {
      tempUrl+="country="+this.state.country+"&";
    }
    if(this.state.category!="")
    {
      tempUrl+="category="+this.state.category+"&";
    }
    if(this.state.q!="")
    {
      tempUrl+="q="+this.state.q+"&";
    }

    tempUrl+="apiKey=6c26ac44bb224ada8ad245dbbb15b593";
    
    this.setState({url:tempUrl})
    this.props.parentCallBack(
      tempUrl
       );

   }*/
    
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">NewsMonkey</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
     aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item">
         <button className="btn btn-dark" onClick={typeHandler}>{type!=="everything"?"Everything":"Top Headlines"}</button>
        </li>
        
    
      </ul>
     
    </div>
  </div>
</nav>
            </div>
        )
    
}

export default Navbar
