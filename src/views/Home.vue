<template>
  <div class="page">
    <Header />
    <router-view></router-view>
    <div class="row-50-50">
      <div class="column">
        <h1>Web Developer, General Nerd</h1>
        <p>Hey there, I'm Steve Perry (not the one from <em>Journey</em>.) I'm a web developer based out of the Metro Detroit area of Michigan, and a graduate of Michigan State University. I work at <a href="https://highlevelmarketing.com">High Level Marketing</a> (HLM), a nationwide digital media marketing and tech company.</p>
        <p>During my eight years at HLM, I've built over 600 websites for our clients (as well as the main <a href="https://highlevelmarketing.com">HLM website</a>).</p>
        <p>I've worked with Git extensively throughout my career, using GitHub, GitLab, and BitBucket for repository hosting.</p>
        <p>For frontend build technologies, I've used the obvious languages: HTML, CSS (Sass mostly), and Javascript. I'm versed in OOP principles due to the use of PHP within HLM's proprietary CMS, <a href="https://www.highlevelmarketing.com/technology.html">MYCE</a>.</p>
        <p>My role has shifted throughout the years to a more full-stack one, as I contribute more frequently to HLM's internal app platform.</p>
        <p>My current project is using VueJS with WebPack as a bundler and BootStrap for our CSS framework. Working with other Senior Developers, we've rewritten our RESTful API for our new enterprise-level application. It leverages Amazon's API Gateway (and other associated AWS services).</p>
        <p>The website you're currently on is a single page application built in VueJS, using Vite as the bundler and Netlify as a hosting service. Here's <a href="https://github.com/perryst5/portfolio-2022">the code</a>, if you're interested.</p>
        <p>Please take a look at my <a href="https://linkedin.com/in/steeeveperry">LinkedIn profile</a> for more information about my work history, or download my <a href="/documents/sperry_resume.pdf">resume</a>.</p>
      </div>
      
      <div class="column">
        <img src="@/assets/didney-lan.jpg" alt="Steve Perry tries to look cool at Disneyland.">
      </div>
    </div>
  </div>
</template>
