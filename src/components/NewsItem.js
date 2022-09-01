import React from 'react'

const NewsItem =(props)=> {
   
    
         var {title , description,imageUrl,newsUrl,author,datetime}=props;
        return (
            <div>
               <div className="card my-3" style={{width: "18rem"}}>
         <img src={imageUrl} className="card-img-top " alt="..."/>
        <div className="card-body">
      <h5 className="card-title">{title}...</h5>
     <p className="card-text">{description}</p>
     <p className="card-text"><small className="text-muted">By {author==null?"Unknown":author} at {datetime}</small></p>
     <a href={ newsUrl/*`/newsDetails/${newsUrl}`*/} className="btn btn-dark">Read More</a>
      </div>
</div>
            </div>
        )
    
}

export default NewsItem