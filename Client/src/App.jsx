/* eslint-disable no-unused-vars */
import React, { Suspense, lazy, useRef } from 'react';
import Navbar from './Navbar';
import style from './App.module.css';
import Welcome from './Welcome';
import CookieBanner from './CookieBanner';
import Links from './Links';

const Introduction = lazy(() => import('./Introduction'));
const About = lazy(() => import('./About'));
const Skills = lazy(() => import('./Skills'));
const Project = lazy(() => import('./Project'));
const Contact = lazy(() => import('./Contact'));

function App() {
  const sections = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    project: useRef(null),
    contact: useRef(null),
  };
    return (
    <>
      <div className={style.div} ref={sections.home}>
        <Navbar sections={sections} />
        <Welcome /><br />
        <CookieBanner />
        <Links />
        <div>
          <Introduction />
        </div>
        <Suspense fallback={<img src={<p>loading</p>} className={style.logo} alt="React logo" />}>
          <div ref={sections.about}>
            <About />
          </div>
          </Suspense>
          <Suspense fallback={<img src={<p>loading</p>} className={style.logo} alt="React logo" />}>
          <div id={style.id} ref={sections.skills}>
            <Skills />
          </div>
          <div ref={sections.project}>
            <Project />
          </div>
        </Suspense>
        <div ref={sections.contact}>
          <Contact />
        </div>
        <div className={style.copyright}>
          <p>© Copyright Reserved | Designed by <i><b className={style.b}>Surath</b></i></p>
        </div>
      </div>
    </>
  );
}

export default App;
