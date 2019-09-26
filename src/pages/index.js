import React from 'react'
import { Link, Router } from 'components/Router'
import "./css/index.css"

export default () => (
  <div className="index">
    <header>
      <div class="date-row">
        <p>10 Sep 2019</p>
        <p>Bay Area, CA</p>
      </div>
      <div class="title-row">
        <h1>周<span> Chou</span></h1>
        <h2>&</h2>
        <h3>
          <span class="move-J">J</span>
          <span class="effrey">EFFREY</span>
          <sup>©</sup>
        </h3>
      </div>
      <div class="title-row-temp">
        <h1>周<span> Chou</span></h1>
        <h2>&</h2>
        <h3>
          JEFFREY
        </h3>
      </div>
      <div class="title-row-temp">
        <h1>周<span> Chou</span></h1>
        <h2>&</h2>
        <h3>
          JEFFREY
        </h3>
      </div>
      <div class="title-row-temp">
        <h1>周<span> Chou</span></h1>
        <h2>&</h2>
        <h3>
          JEFFREY
        </h3>
      </div>
      <div class="title-row-temp">
        <h1>周<span> Chou</span></h1>
        <h2>&</h2>
        <h3>
          JEFFREY
        </h3>
      </div>
      <div class="title-row-temp">
        <h1>周<span> Chou</span></h1>
        <h2>&</h2>
        <h3>
          JEFFREY
        </h3>
      </div>
    </header>
    <div class="intro">
      <div class="footnotes">
        <div class="note">
          1<br></br><span>new york, ithaca<br></br>class of 2022</span>
        </div>
        <div class="note">
          2<br></br><span>interested in fullstack development<br></br>and machine learning</span>
        </div>
        <div class="note">
          3<br></br><span>the physics side of me that<br></br>is interested in space and the unknown :)</span>
        </div>
      </div>
      <div class="intro-text">
        Hello, my name is Jeffrey and I’m a current student at Cornell University <span class="footnote">1</span> pursuing a B.A in Computer Science & Physics.
        <br></br><br></br>
        My current interests include software development <span class="footnote">2</span>, planetary science <span class="footnote">3</span>, and statistics. Please feel to reach out at jc2573@cornell.edu
        <br></br><br></br>
        Currently looking for Summer 2020 internship opportunities. Contact me at <a href="github.com">Github</a> | <a href="linkedin.com">LinkedIn</a>
      </div>
    </div>
    <div class="experience">
      <div class="experience-title">
        <h2 id="title-right">Experience</h2>
        <h2 id="title-left">Experience</h2>
      </div>
      <div class="job-content">
        <span>1. IoTeX - Software Engineer Intern</span><br></br>
        I spent my last summer interning at IoTeX, an IoT blockchain startup. There, I created and solely managed codelabs.iotex.io, a community hub for IoTeX developers. I also implemented the backend GraphQL api for IoPay discovery feed and feature flag manager using MongoDB and React. Additionally, I developed decentralized apps
      </div>
      <div class="job-content">
        <span>2. NASA Ames - Planetary Science Intern</span><br></br>
        Interned under Dr. Jack J. Lissauer in Planetary Sciences Division. Performed data analysis on planet formation simulations with Matplotlib in Python. Coauthored one research paper. Operated Mercury v6, hybrid symplectic integrator.
      </div>
    </div>

    <div class="languages">
      <div class="language-title">
        <h2>Languages</h2>
        {/* <p>Programming languages I've recently used.</p> */}
      </div>
      <ul id="language">
        <li>Python</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>Java</li>
        <li>Golang</li>
        <li>Solidity</li>
        <li>OCaml</li>
      </ul>
    </div>
  </div >

)
