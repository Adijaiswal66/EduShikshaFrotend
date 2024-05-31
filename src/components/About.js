import React, { useEffect } from 'react'

function About() {
  useEffect(()=>{
    document.title = "About | EduSiksha";
  },[])
  return (
    <div>
      This is About
    </div>
  )
}

export default About
