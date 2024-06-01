import React from 'react'
import "./Home.css"
import blogbackground from "../../assets/blogbackground.jpg"
function Home() {
  return (
    <div className='home d-flex flex-column'>
      <img src={blogbackground} className='blog-background' alt="" />
      <div> 
        <h1 className='text-center mt-3 display-5'>Wisdom Whisper</h1>
        <p className='px-5 fs-4'>Step into a world where words paint vivid pictures, ideas spark into life, and stories unfold like magic. Here, we invite you to embark on a journey through the realms of creativity and imagination. Whether you're a passionate writer, an avid reader, or simply seeking inspiration, you've found your sanctuary. Our blog is a melting pot of thoughts, musings, and reflections crafted with care and infused with the essence of storytelling. Join our community of like-minded individuals, where every word has a voice and every story has a home. Let's explore the wonders of the written word together. Welcome aboard!</p>      
      </div>
    </div>
  )
}

export default Home