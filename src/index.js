import ReactDom from 'react-dom'
// since we use webpack, it ddoes not know to treat functional components as React functional components. 
// hence we need to import the library 'react' wherever we create functional components
import React from 'react'

function Header(){
    return (
        <div>
            <img  src="../public/images/ironhack-logo.svg" />
            <img src="../public/images/menu-top.svg"/>
        </div>
    )
}

function LandingPage(){
    return (
        <div>
        <h1>Say Hello to ReactJS</h1>
        <p>You will learn how to use <br></br>the most popular frontend library,<br></br> and become a super Ninja developer</p>
        <button>Awesome!</button>
        </div>
    )
}

function BodyPage(){
    return (
        <div>
            <div>
                <img src="../public/images/icon1.png" />
                <h1>Declarative</h1>
                <p>React makes it painless to create interactive UIs.</p>
            </div>

            <div>
                <img src="../public/images/icon2.png" />
                <h1>Components</h1>
                <p>Build encapsulated components that manage their state.</p>
            </div>

            <div>
            <img src="../public/images/icon3.png" />
            <h1>Single-Way</h1>
            <p>A set of immutable values are passed to the component's.</p>
            </div>

            <div>
            <img src="../public/images/icon4.png" />
            <h1>JSX</h1>
            <p>Statically-typed. designed to run on modern browsers.</p>
            </div>

        </div>
    )
}

function App() {
    return (
        <div>
            <Header />
            <LandingPage />
            <bodyPage />
        </div>
    )
}



ReactDom.render(< App />, document.querySelector('#root') )