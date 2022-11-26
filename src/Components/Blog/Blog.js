import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="px-4 py-16  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

                <div className=" max-w-sm gap-5 mb-8  sm:mx-auto lg:max-w-full">

                    <div className="px-10 py-20 border rounded shadow-2xl shadow-white">
                        <h1>What are the different ways to manage a state in a React application?</h1>
                        <p>Local (UI) state – Local state is data we manage in one or another component.
                            Local state is most often managed in React using the useState hook.
                            For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.
                            Global (UI) state – Global state is data we manage across multiple components.
                            Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                            A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
                            Sometimes state we think should be local might become global.
                            Server state – Data that comes from an external server that must be integrated with our UI state.
                            Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                            There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.
                            Fortunately there are tools such as SWR and React Query that make managing server state much easier.
                            URL state – Data that exists on our URLs, including the pathname and query parameters.
                            URL state is often missing as a category of state, but it is an important one.
                            In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!</p>
                    </div>
                    <div className="px-10 mt-8 py-20 border rounded shadow-2xl shadow-white">
                        <h1>How does prototypical inheritance work?</h1>
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.</p>
                    </div>
                    <div className="px-10 mt-8 py-20 border rounded shadow-2xl shadow-white">
                        <h1>What is a unit test? Why should we write unit tests?</h1>
                        <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stage</p>
                    </div>
                    <div className="px-10 mt-8 py-20 border rounded shadow-2xl shadow-white">
                        <h1>React vs. Angular vs. Vue?</h1>
                        <p>Angular is a front-end framework with lots of components, services, and tools. On Angular’s site, you can see that they define Angular as:
                            “The modern web developer’s platform”
                            It is developed and maintained by Google developers, but curiously it is not used to implement any of their most common products such as Search or YouTube.
                            React is considered a UI library. They define themselves as:
                            “A JavaScript library for building user interfaces”
                            Facebook developers are behind the development and maintenance of this library. And, in this case, most of Facebook’s products are made with React.
                            Last but not least, Vue.js is, according to its site:
                            “A progressive JavaScript framework”
                            Vue.js is developed and led by Evan You, but also it counts on a huge open-source community.

                            <p className='font-bold'>Angular:</p>
                            Angular is built entirely in Typescript and every project on Angular is structured in modules, components and services. At least, each module must have a root module and a root component.
                            <p className='font-bold'>React:</p>
                            React doesn’t propose a specific structure to be followed, and with only a few lines of code you can have a simple React application.
                            <p className='font-bold'>Vue.js:</p>
                            The structure in Vue.js is pretty simple. All pieces are meant to be self-contained, reusable components.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;