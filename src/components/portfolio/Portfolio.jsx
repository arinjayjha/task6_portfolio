import React from 'react'
import PRJ1 from '../../assets/proj1.jpg';
import PRJ2 from '../../assets/proj2.jpg';
import PRJ3 from '../../assets/proj3.jpg';

import './portfolio.css'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PRJ1} alt="IMG" />
          </div>
          <h3>Calculator</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/arinjayjha/MERN_REACT2" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://mern-task-3-59nh-cs3n947oi-arinjay-jhas-projects.vercel.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PRJ2} alt="IMG" />
          </div>
          <h3>Record Table</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/arinjayjha/MERN_REACT3" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://mern-react-3-nine.vercel.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PRJ3} alt="IMG" />
          </div>
          <h3>Age calculator</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/arinjayjha/MERN_-TASK-3-" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://mern-task-3.vercel.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio