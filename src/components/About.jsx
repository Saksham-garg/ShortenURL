import React from 'react'
// import Cards from './Cards'
// import {aboutContent} from './about-content'
function About() {
    const aboutContent = [
        {
            iurl : "send.png",
            title : "Fast",
            content : "ShortURL is stripped down to just the bare minimals for extremely fast performance. With an average processing time of just ~34ms, nothing comes between you and long URLs."
        },
        {   
            iurl : "security.png",
            title : "Secure",
            content : "Privacy is important. ShortURL does not handle, collect or store any user information. In fact, did you notice the cookie compliance pop-up when visiting this page? Yeah, neither did we."
        },
        {
            iurl : "access-control.png",
            title : "Accessible",
            content : "You get a short link! You get a short link! Everybody gets a short link! With our easy to use SDK, you can set up GoTiny into your projects in literally seconds"
        }
    ]
    // console.log(aboutContent);
  return (
    <div className='about--section'>
        <h1>This is About Page</h1>
        {   
            aboutContent.map((data)=>{
                console.log(data.iurl);
                <div className='cards'>
                {/* <img src={props.iurl} alt="Logo"></img> */}
                <h2>vfdd{data.title}</h2>
                <p>{data.content}</p>  
                 </div>
            })
        }
    </div>
  )
}

export default About