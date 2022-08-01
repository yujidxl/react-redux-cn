"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[565],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5700:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={id:"quick-start",title:"Quick Start",sidebar_label:"Quick Start",hide_title:!0},s=void 0,c={unversionedId:"tutorials/quick-start",id:"tutorials/quick-start",isDocsHomePage:!1,title:"Quick Start",description:"&nbsp;",source:"@site/../docs/tutorials/quick-start.md",sourceDirName:"tutorials",slug:"/tutorials/quick-start",permalink:"/react-redux-cn/tutorials/quick-start",editUrl:"https://github.com/reduxjs/react-redux/edit/master/website/../docs/tutorials/quick-start.md",tags:[],version:"current",lastUpdatedAt:1659003295,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"quick-start",title:"Quick Start",sidebar_label:"Quick Start",hide_title:!0},sidebar:"docs",previous:{title:"Why Use React Redux?",permalink:"/react-redux-cn/introduction/why-use-react-redux"},next:{title:"TypeScript Quick Start",permalink:"/react-redux-cn/tutorials/typescript-quick-start"}},u=[{value:"Introduction",id:"introduction",children:[{value:"How to Read This Tutorial",id:"how-to-read-this-tutorial",children:[],level:3}],level:2},{value:"Usage Summary",id:"usage-summary",children:[{value:"Install Redux Toolkit and React Redux",id:"install-redux-toolkit-and-react-redux",children:[],level:3},{value:"Create a Redux Store",id:"create-a-redux-store",children:[],level:3},{value:"Provide the Redux Store to React",id:"provide-the-redux-store-to-react",children:[],level:3},{value:"Create a Redux State Slice",id:"create-a-redux-state-slice",children:[],level:3},{value:"Add Slice Reducers to the Store",id:"add-slice-reducers-to-the-store",children:[],level:3},{value:"Use Redux State and Actions in React Components",id:"use-redux-state-and-actions-in-react-components",children:[],level:3}],level:2},{value:"What You&#39;ve Learned",id:"what-youve-learned",children:[{value:"Full Counter App Example",id:"full-counter-app-example",children:[],level:3}],level:2},{value:"What&#39;s Next?",id:"whats-next",children:[],level:2}],d={toc:u};function p(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react-redux-quick-start"},"React Redux Quick Start"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"What You'll Learn")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"How to set up and use Redux Toolkit with React Redux")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Prerequisites")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Familiarity with ",(0,o.kt)("a",{parentName:"li",href:"https://www.taniarascia.com/es6-syntax-and-feature-overview/"},"ES6 syntax and features")),(0,o.kt)("li",{parentName:"ul"},"Knowledge of React terminology: ",(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/introducing-jsx.html"},"JSX"),", ",(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/state-and-lifecycle.html"},"State"),", ",(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/components-and-props.html"},"Function Components, Props"),", and ",(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-intro.html"},"Hooks")),(0,o.kt)("li",{parentName:"ul"},"Understanding of ",(0,o.kt)("a",{parentName:"li",href:"https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow"},"Redux terms and concepts"))))),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Welcome to the React Redux Quick Start tutorial! ",(0,o.kt)("strong",{parentName:"p"},"This tutorial will briefly introduce you to React Redux and teach you how to start using it correctly"),"."),(0,o.kt)("h3",{id:"how-to-read-this-tutorial"},"How to Read This Tutorial"),(0,o.kt)("p",null,"This page will focus on just how to set up a Redux application with Redux Toolkit and the main APIs you'll use. For explanations of what Redux is, how it works, and full examples of how to use Redux Toolkit, see ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/tutorials/index"},"the Redux core docs tutorials"),"."),(0,o.kt)("p",null,"For this tutorial, we assume that you're using Redux Toolkit and React Redux together, as that is the standard Redux usage pattern. The examples are based on ",(0,o.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/folder-structure"},"a typical Create-React-App folder structure")," where all the application code is in a ",(0,o.kt)("inlineCode",{parentName:"p"},"src"),", but the patterns can be adapted to whatever project or folder setup you're using."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/cra-template-redux"},"Redux+JS template for Create-React-App")," comes with this same project setup already configured."),(0,o.kt)("h2",{id:"usage-summary"},"Usage Summary"),(0,o.kt)("h3",{id:"install-redux-toolkit-and-react-redux"},"Install Redux Toolkit and React Redux"),(0,o.kt)("p",null,"Add the Redux Toolkit and React Redux packages to your project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @reduxjs/toolkit react-redux\n")),(0,o.kt)("h3",{id:"create-a-redux-store"},"Create a Redux Store"),(0,o.kt)("p",null,"Create a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"src/app/store.js"),". Import the ",(0,o.kt)("inlineCode",{parentName:"p"},"configureStore")," API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app/store.js"',title:'"app/store.js"'},"import { configureStore } from '@reduxjs/toolkit'\n\nexport default configureStore({\n  reducer: {},\n})\n")),(0,o.kt)("p",null,"This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing."),(0,o.kt)("h3",{id:"provide-the-redux-store-to-react"},"Provide the Redux Store to React"),(0,o.kt)("p",null,"Once the store is created, we can make it available to our React components by putting a React Redux ",(0,o.kt)("inlineCode",{parentName:"p"},"<Provider>")," around our application in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/index.js"),". Import the Redux store we just created, put a ",(0,o.kt)("inlineCode",{parentName:"p"},"<Provider>")," around your ",(0,o.kt)("inlineCode",{parentName:"p"},"<App>"),", and pass the store as a prop:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"import React from 'react'\nimport ReactDOM from 'react-dom/client'\nimport './index.css'\nimport App from './App'\n// highlight-start\nimport store from './app/store'\nimport { Provider } from 'react-redux'\n// highlight-end\n\n// As of React 18\nconst root = ReactDOM.createRoot(document.getElementById('root'))\n\nroot.render(\n  // highlight-next-line\n  <Provider store={store}>\n    <App />\n  </Provider>\n)\n")),(0,o.kt)("h3",{id:"create-a-redux-state-slice"},"Create a Redux State Slice"),(0,o.kt)("p",null,"Add a new file named ",(0,o.kt)("inlineCode",{parentName:"p"},"src/features/counter/counterSlice.js"),". In that file, import the ",(0,o.kt)("inlineCode",{parentName:"p"},"createSlice")," API from Redux Toolkit."),(0,o.kt)("p",null,"Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice."),(0,o.kt)("p",null,"Redux requires that ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#immutability"},"we write all state updates immutably, by making copies of data and updating the copies"),". However, Redux Toolkit's ",(0,o.kt)("inlineCode",{parentName:"p"},"createSlice")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"createReducer")," APIs use ",(0,o.kt)("a",{parentName:"p",href:"https://immerjs.github.io/immer/"},"Immer")," inside to allow us to ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#immutable-updates-with-immer"},'write "mutating" update logic that becomes correct immutable updates'),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="features/counter/counterSlice.js"',title:'"features/counter/counterSlice.js"'},"import { createSlice } from '@reduxjs/toolkit'\n\nexport const counterSlice = createSlice({\n  name: 'counter',\n  initialState: {\n    value: 0,\n  },\n  reducers: {\n    increment: (state) => {\n      // Redux Toolkit allows us to write \"mutating\" logic in reducers. It\n      // doesn't actually mutate the state because it uses the Immer library,\n      // which detects changes to a \"draft state\" and produces a brand new\n      // immutable state based off those changes\n      state.value += 1\n    },\n    decrement: (state) => {\n      state.value -= 1\n    },\n    incrementByAmount: (state, action) => {\n      state.value += action.payload\n    },\n  },\n})\n\n// Action creators are generated for each case reducer function\nexport const { increment, decrement, incrementByAmount } = counterSlice.actions\n\nexport default counterSlice.reducer\n")),(0,o.kt)("h3",{id:"add-slice-reducers-to-the-store"},"Add Slice Reducers to the Store"),(0,o.kt)("p",null,"Next, we need to import the reducer function from the counter slice and add it to our store. By defining a field inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"reducers")," parameter, we tell the store to use this slice reducer function to handle all updates to that state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app/store.js"',title:'"app/store.js"'},"import { configureStore } from '@reduxjs/toolkit'\n// highlight-next-line\nimport counterReducer from '../features/counter/counterSlice'\n\nexport default configureStore({\n  reducer: {\n    // highlight-next-line\n    counter: counterReducer,\n  },\n})\n")),(0,o.kt)("h3",{id:"use-redux-state-and-actions-in-react-components"},"Use Redux State and Actions in React Components"),(0,o.kt)("p",null,"Now we can use the React Redux hooks to let React components interact with the Redux store. We can read data from the store with ",(0,o.kt)("inlineCode",{parentName:"p"},"useSelector"),", and dispatch actions using ",(0,o.kt)("inlineCode",{parentName:"p"},"useDispatch"),". Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"src/features/counter/Counter.js")," file with a ",(0,o.kt)("inlineCode",{parentName:"p"},"<Counter>")," component inside, then import that component into ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js")," and render it inside of ",(0,o.kt)("inlineCode",{parentName:"p"},"<App>"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="features/counter/Counter.js"',title:'"features/counter/Counter.js"'},"import React from 'react'\nimport { useSelector, useDispatch } from 'react-redux'\nimport { decrement, increment } from './counterSlice'\nimport styles from './Counter.module.css'\n\nexport function Counter() {\n  const count = useSelector((state) => state.counter.value)\n  const dispatch = useDispatch()\n\n  return (\n    <div>\n      <div>\n        <button\n          aria-label=\"Increment value\"\n          onClick={() => dispatch(increment())}\n        >\n          Increment\n        </button>\n        <span>{count}</span>\n        <button\n          aria-label=\"Decrement value\"\n          onClick={() => dispatch(decrement())}\n        >\n          Decrement\n        </button>\n      </div>\n    </div>\n  )\n}\n")),(0,o.kt)("p",null,'Now, any time you click the "Increment" and "Decrement buttons:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The corresponding Redux action will be dispatched to the store"),(0,o.kt)("li",{parentName:"ul"},"The counter slice reducer will see the actions and update its state"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"<Counter>")," component will see the new state value from the store and re-render itself with the new data")),(0,o.kt)("h2",{id:"what-youve-learned"},"What You've Learned"),(0,o.kt)("p",null,"That was a brief overview of how to set up and use Redux Toolkit with React. Recapping the details:"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Summary")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Create a Redux store with ",(0,o.kt)("inlineCode",{parentName:"strong"},"configureStore")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"configureStore")," accepts a ",(0,o.kt)("inlineCode",{parentName:"li"},"reducer")," function as a named argument"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"configureStore")," automatically sets up the store with good default settings"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Provide the Redux store to the React application components"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Put a React Redux ",(0,o.kt)("inlineCode",{parentName:"li"},"<Provider>")," component around your ",(0,o.kt)("inlineCode",{parentName:"li"},"<App />")),(0,o.kt)("li",{parentName:"ul"},"Pass the Redux store as ",(0,o.kt)("inlineCode",{parentName:"li"},"<Provider store={store}>")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},'Create a Redux "slice" reducer with ',(0,o.kt)("inlineCode",{parentName:"strong"},"createSlice")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Call ",(0,o.kt)("inlineCode",{parentName:"li"},"createSlice")," with a string name, an initial state, and named reducer functions"),(0,o.kt)("li",{parentName:"ul"},'Reducer functions may "mutate" the state using Immer'),(0,o.kt)("li",{parentName:"ul"},"Export the generated slice reducer and action creators"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Use the React Redux ",(0,o.kt)("inlineCode",{parentName:"strong"},"useSelector/useDispatch")," hooks in React components"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Read data from the store with the ",(0,o.kt)("inlineCode",{parentName:"li"},"useSelector")," hook"),(0,o.kt)("li",{parentName:"ul"},"Get the ",(0,o.kt)("inlineCode",{parentName:"li"},"dispatch")," function with the ",(0,o.kt)("inlineCode",{parentName:"li"},"useDispatch")," hook, and dispatch actions as needed")))))),(0,o.kt)("h3",{id:"full-counter-app-example"},"Full Counter App Example"),(0,o.kt)("p",null,"The counter example app shown here is also the"),(0,o.kt)("p",null,"Here's the complete counter application as a running CodeSandbox:"),(0,o.kt)("iframe",{class:"codesandbox",src:"https://codesandbox.io/embed/github/reduxjs/redux-essentials-counter-example/tree/master/?fontsize=14&hidenavigation=1&module=%2Fsrc%2Ffeatures%2Fcounter%2FcounterSlice.js&theme=dark&runonclick=1",title:"redux-essentials-example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,o.kt)("h2",{id:"whats-next"},"What's Next?"),(0,o.kt)("p",null,"We recommend going through ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/tutorials/index"},(0,o.kt)("strong",{parentName:"a"},'the "Redux Essentials" and "Redux Fundamentals" tutorials in the Redux core docs')),", which will give you a complete understanding of how Redux works, what Redux Toolkit and React Redux do, and how to use it correctly."))}p.isMDXComponent=!0}}]);