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
     <ul>
      <li><a href="https://glowing-custard-78a364.netlify.app/" target="_blank" rel="noopener noreferrer">Betr Betr</a></li>
      <li><a href='https://polite-souffle-7c2e9b.netlify.app/'> Recipe Book</a></li>
      <li><a href='https://pacific-hollows-96763.herokuapp.com/'> DJANGO CRUD APP</a></li>
      <li><a href='https://resonant-tulumba-513197.netlify.app/'>First Portfolio</a></li>

     </ul>
    
    </article>



  </div>


   </section>
  )
}

export default experience 