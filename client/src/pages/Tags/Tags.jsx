import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagList from './TagList'
import './Tags.css'

const Tags = () => {

    const tagsList = [{
        id: 1,
        tagName: "javascript",
        tagDesc: "For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in mind that JavaScript is NOT the same as Java! Include all labels that are relevant to your question; e.g., [node.js], [jQuery], [JSON], [ReactJS], [angular], [ember.js], [vue.js], [typescript], [svelte], etc.",
    },{
        id: 2,
        tagName: "python",
        tagDesc: "Python is a multi-paradigm, dynamically typed, multi-purpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax. Please note that Python 2 is officially out of support as of 2020-01-01. For version-specific Python questions, add the [python-2.7] or [python-3.x] tag. When using a Python variant (e.g. Jython, PyPy) or library (e.g. Pandas, NumPy), please include it in the tags.",
    },{
        id: 3,
        tagName: "c#",
        tagDesc: "C# (pronounced as a see sharp) is a high-level, statically typed, multi-paradigm programming language developed by Microsoft. C# code usually targets Microsoft's .NET family of tools and run-times, which include .NET, .NET Framework, .NET MAUI, and Xamarin among others. Use this tag for questions about code written in C# or about C#'s formal specification.",
    },{
        id: 4,
        tagName: "java",
        tagDesc: "Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. This tag is frequently used alongside other tags for libraries and/or frameworks used by Java developers.",
    },{
        id: 5,
        tagName: "php",
        tagDesc: "PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language designed initially for server-side web development. Use this tag for questions about programming in the PHP language.",
    },{
        id: 6,
        tagName: "html",
        tagDesc: "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser. Questions regarding HTML should include a minimal reproducible example and some idea of what you're trying to achieve. This tag is rarely used alone and is often paired with [CSS] and [JavaScript].",
    },{
        id: 7,
        tagName: "android",
        tagDesc: "Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles, TVs, Wear, Glass, IoT). For topics related to Android, use Android-specific tags such as android-intent, android-activity, android-adapter, etc. For questions other than development or programming but related to the Android framework, use this link: https://android.stackexchange.com.",
    },{
        id: 8,
        tagName: "css",
        tagDesc: "CSS (Cascading Style Sheets) is a representation style sheet language used for describing the look and formatting of HTML (HyperText Markup Language), XML (Extensible Markup Language) documents and SVG elements including (but not limited to) colors, layout, fonts, and animations. It also describes how elements should be rendered on screen, on paper, in speech, or on other media.",
    },{
        id: 9,
        tagName: "Reactjs",
        tagDesc: "React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be efficient and flexible.",
    },{
        id: 10,
        tagName: "node.js",
        tagDesc: "Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library. It is used for developing applications that make heavy use of the ability to run JavaScript both on the client as well as on the server side and therefore benefit from the re-usability of code and the lack of context switching.",
    }]
  return (
    <div className='home-container-1'>
        <LeftSidebar />
        <div className='home-container-2'>
            <h1 className='tags-h1'>Tags</h1>
            <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions.</p>
            <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
            <div className='tags-list-container'>
                {
                    tagsList.map((tag) => (
                        <TagList tag={tag} key={tagsList.id} /> 
                    ))
                }

            </div>
            
        </div>
    </div>
  )
}

export default Tags