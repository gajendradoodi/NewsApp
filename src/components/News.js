import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem'
import Spiner from './Spiner';

const News =(props)=>{
  
    /*articles=[
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z",
          "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          "publishedAt": "2020-03-30T15:26:05Z",
          "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
      ]*/
      
      const [articles,setArticles]=useState([])
      const [loading,setLoading]=useState(true)
      const [page,setPage]=useState(1)
      const [url,setUrl]=useState("")
    
      const [totalResults,setTotalResults]=useState(0)
      

      useEffect(() => {
        setUrl(props.url);
        updateNews();
      }, [props.url]);

      const updateNews=async()=>{

         setUrl(props.url)
        setLoading(true)

         let data=await fetch(url);
     
         let parsedData=await data.json()
         
       
         setArticles(parsedData.articles)
         setLoading(false)
         setTotalResults(parsedData.totalResults)
         props.parentPageCountCallBack(page);
         
      }

   /*   async componentDidUpdate()
      {
     
        if(this.state.url!=this.props.url)
        {
         
          this.setState({url:this.props.url})
          this.updateNews();
        }
      }*/
     /*async componentDidMount(){
          //will run after rendering
         // let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=b1eb3890a4304846943bd0e49ad24132&page=${this.state.page}&pageSize=${this.props.pageSize}`
        
        /* let url=this.props.url;
        
        this.setState({loading:true});
         let data=await fetch(url);
         let parsedData=await data.json()
         this.setState({
             articles:parsedData.articles,
             loading:false,
            // lastpage:false,
             totalResults:parsedData.totalResults
         })
         this.props.parentPageCountCallBack(this.state.page);*/
         //this.updateNews();
     // }
          const  onNextHandler=async ()=>{
          /*if(Math.ceil(this.state.totalResults/20)>this.state.page+1)
          {
            
          }*/
         /* else if(Math.ceil(this.state.totalResults/20)===this.state.page+1){
            let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=b1eb3890a4304846943bd0e49ad24132&page=${this.state.page+1}&pageSize=20`
            let data=await fetch(url);
            let parsedData=await data.json()
               this.setState({
                articles:parsedData.articles,
          loading:false,
                lastpage:true,
                page:this.state.page+1
            })
          }*/
         // else{
           
            //let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=b1eb3890a4304846943bd0e49ad24132&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
           /* let url=this.props.url;
            
            this.setState({loading:true})
            let data=await fetch(url);
            let parsedData=await data.json()
               this.setState({
                articles:parsedData.articles,
                loading:false,
               // lastpage:false,
                page:this.state.page+1
            })
            this.props.parentPageCountCallBack(this.state.page);*/
           
            setPage(page+1)
            updateNews();
         // }
      
      }
    const  onPreviousHandler=async()=>{
       // let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=b1eb3890a4304846943bd0e49ad24132&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    /*   let url=this.props.url;
       this.setState({loading:true})
        let data=await fetch(url);
        let parsedData=await data.json()
        this.setState({
           // articles:parsedData.articles,
            loading:false,
        //    lastpage:false,
            page:this.state.page-1
        })
        this.props.parentPageCountCallBack(this.state.page);*/
        
        setPage(page-1)
        updateNews();
      }
  
        return (
            <div className="container  my-3" >
              
                <h2 className="text-center">NewsMonkey-Top Headlines</h2>
                
                {/*this.state.loading&&<Spiner/>*/}
                <div className="row">
                   {!loading?articles.map((elements)=>{
                       return <div className="col-md-4" key={elements.url}>
                       <NewsItem title={elements&&elements.title?elements.title.slice(0,30):""} 
                       description={elements&&elements.description?elements.description.slice(0,88):""} imageUrl={elements&&elements.urlToImage?elements.urlToImage:"https://s3.amazonaws.com/prod.static-content.quillette.com/2021/12/GettyImages-454335232-2.jpg"} 
                       newsUrl={elements.url} author={elements.author} datetime={elements.publishedAt}/>
                       </div>
                   }):<Spiner/>}
                
               
                </div>
              <div className="container d-flex justify-content-between">
              <button disabled={page<=1} type="button" onClick={onPreviousHandler} className="btn btn-dark">&larr;Previous</button>
              <button disabled={page+1>Math.ceil(totalResults/props.pageSize) /*this.state.lastpage*/} type="button" onClick={onNextHandler} className="btn btn-dark">Next &rarr;</button>
              </div>
            </div>
        )
    
}
export default News