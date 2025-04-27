/* eslint-disable no-unused-vars */
import React, { Suspense, lazy, useRef, useState, useEffect } from 'react';
import Navbar from './Navbar';
import Welcome from './Welcome';
import CookieBanner from './CookieBanner';
import Links from './Links';
import style from './App.module.css';

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
          <Introduction sections={sections} />
        </div>
        <Suspense fallback={<p>Loading...</p>}>
          <div ref={sections.about}>
            <About />
          </div>
        </Suspense>
        <Suspense fallback={<p>Loading...</p>}>
          <div id={style.id} ref={sections.skills}>
            <Skills />
          </div>
          <div ref={sections.project}>
            <Project />
          </div>
        </Suspense>
        <div ref={sections.contact}>
          <Contact />
        </div><br />
        <div className={style.copyright}>
          <i className={style.p}>surath172003@gmail.com</i>
          <p><b className={style.b1}>©</b> Copyright Reserved | Designed by <i><b className={style.b}>Surath</b></i></p>
        </div>
      </div>
    </>
  );
}

export default App;
