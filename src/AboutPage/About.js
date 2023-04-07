import React from 'react'
import "../Style/AboutPage.css"
import AboutImage from "./Aboutimg/aboutImg.jpeg"
function About() {
  return (
    <div className='bodyAbout'>
        <section className='section2'>
            <div className='aboutImgContainer'>
                <img src={AboutImage} alt="" />
            </div>
            <div className='aboutDescriptionContainer'>
                <div className='heading'>
                <h1>Our Story</h1>
                <div className='line'></div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.</p>
            </div>
        </section>
    </div>
  )
}

export default About