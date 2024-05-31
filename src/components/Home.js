import React, { useEffect } from "react";

function Home() {
  useEffect(()=>{
    document.title = "Home | EduSiksha";
  },[])
  return (
    <div className="container">
      <h2 className="text-center mt-3 mb-5">Welcome to EduShiksha</h2>
    </div>
  );
}

export default Home;
