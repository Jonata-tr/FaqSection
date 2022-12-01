import './App.css';
import {useState} from 'react'
import { ShowImages } from './faqSection/images';
import { ShowPictures } from './faqSection/showPictures';
import { ShowAcordion } from './faqSection/acordion/faqs';
import {Box, womanDesktop, womanMobile, arrowDown} from './imgs/imgImport'

function App(props) {
  
  return (
    <main>
      <section className='wrapper'>
        <div className='imgs'>
          <div className='imgsPosition'>
            <ShowImages source={Box} id='box'/>
            <ShowPictures sourceDesk={womanDesktop} sourceMob='https://img3.gelbooru.com//samples/57/f9/sample_57f98ca6db3de7536c7807a6f79e9b95.jpg' source={womanMobile} alt='UmaMulherObservandoUmMunitorGigante' id={'woman'}/>
          </div>
        </div>
        <ShowAcordion /> 
      </section>
    </main>
  )
}


{/* <div class="attribution">
Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
Coded by <a href="#">Your Name Here</a>.
</div> */}

export default App;
