import React from 'react'
import './experience.css'
import {recipe} from '../../assets/recipe.png'
const experience = () => {
  return (
   <section id='experience'>
     <h4>Familiar Languages</h4>
     <br/>
    <div className='icons'>
   <i class="devicon-html5-plain"></i>
   <i class="devicon-css3-plain"></i>
   <i class="devicon-bootstrap-plain"></i>
   <i class="devicon-mongodb-plain"></i>     
   <i class="devicon-react-original"></i>
   <i class="devicon-javascript-plain"></i>
   <i class="devicon-nodejs-plain"></i>
   <i class="devicon-python-plain"></i>    
    </div>

  <div class="projects-container">
<article>
      <small>project1</small>
      <img src='../../assets/recipe.png' alt='recipe'/>
    </article>
<article>
        <small>project2</small>
    </article>
<article>
        <small>project3</small>
    </article>  


  </div>


   </section>
  )
}

export default experience 