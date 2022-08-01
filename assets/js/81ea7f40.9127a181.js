"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[454],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2556:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={id:"connect-mapstate",title:"Connect: Extracting Data with mapStateToProps",hide_title:!0,sidebar_label:"Connect: Extracting Data with mapStateToProps",description:"Usage > mapState: options for reading state with connect"},l=void 0,p={unversionedId:"using-react-redux/connect-mapstate",id:"using-react-redux/connect-mapstate",isDocsHomePage:!1,title:"Connect: Extracting Data with mapStateToProps",description:"Usage > mapState: options for reading state with connect",source:"@site/../docs/using-react-redux/connect-extracting-data-with-mapStateToProps.md",sourceDirName:"using-react-redux",slug:"/using-react-redux/connect-mapstate",permalink:"/react-redux-cn/using-react-redux/connect-mapstate",editUrl:"https://github.com/reduxjs/react-redux/edit/master/website/../docs/using-react-redux/connect-extracting-data-with-mapStateToProps.md",tags:[],version:"current",lastUpdatedAt:1659003295,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"connect-mapstate",title:"Connect: Extracting Data with mapStateToProps",hide_title:!0,sidebar_label:"Connect: Extracting Data with mapStateToProps",description:"Usage > mapState: options for reading state with connect"},sidebar:"docs",previous:{title:"Usage with TypeScript",permalink:"/react-redux-cn/using-react-redux/usage-with-typescript"},next:{title:"Connect: Dispatching Actions with mapDispatchToProps",permalink:"/react-redux-cn/using-react-redux/connect-mapdispatch"}},d=[{value:"Defining <code>mapStateToProps</code>",id:"defining-mapstatetoprops",children:[{value:"Arguments",id:"arguments",children:[{value:"<code>state</code>",id:"state",children:[],level:4},{value:"<code>ownProps</code> (optional)",id:"ownprops-optional",children:[],level:4}],level:3},{value:"Return",id:"return",children:[],level:3}],level:2},{value:"Usage Guidelines",id:"usage-guidelines",children:[{value:"Let <code>mapStateToProps</code> Reshape the Data from the Store",id:"let-mapstatetoprops-reshape-the-data-from-the-store",children:[],level:3},{value:"Use Selector Functions to Extract and Transform Data",id:"use-selector-functions-to-extract-and-transform-data",children:[],level:3},{value:"<code>mapStateToProps</code> Functions Should Be Fast",id:"mapstatetoprops-functions-should-be-fast",children:[],level:3},{value:"<code>mapStateToProps</code> Functions Should Be Pure and Synchronous",id:"mapstatetoprops-functions-should-be-pure-and-synchronous",children:[],level:3}],level:2},{value:"<code>mapStateToProps</code> and Performance",id:"mapstatetoprops-and-performance",children:[{value:"Return Values Determine If Your Component Re-Renders",id:"return-values-determine-if-your-component-re-renders",children:[],level:3},{value:"Only Return New Object References If Needed",id:"only-return-new-object-references-if-needed",children:[],level:3},{value:"Only Perform Expensive Operations When Data Changes",id:"only-perform-expensive-operations-when-data-changes",children:[{value:"Immutable.js Performance Concerns",id:"immutablejs-performance-concerns",children:[],level:4}],level:3}],level:2},{value:"Behavior and Gotchas",id:"behavior-and-gotchas",children:[{value:"<code>mapStateToProps</code> Will Not Run if the Store State is the Same",id:"mapstatetoprops-will-not-run-if-the-store-state-is-the-same",children:[],level:3},{value:"The Number of Declared Arguments Affects Behavior",id:"the-number-of-declared-arguments-affects-behavior",children:[],level:3}],level:2},{value:"Links and References",id:"links-and-references",children:[],level:2}],c={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connect-extracting-data-with-mapstatetoprops"},"Connect: Extracting Data with ",(0,r.kt)("inlineCode",{parentName:"h1"},"mapStateToProps")),(0,r.kt)("p",null,"As the first argument passed in to ",(0,r.kt)("inlineCode",{parentName:"p"},"connect"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," is used for selecting the part of the data from the store that the connected component needs. It\u2019s frequently referred to as just ",(0,r.kt)("inlineCode",{parentName:"p"},"mapState")," for short."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It is called every time the store state changes."),(0,r.kt)("li",{parentName:"ul"},"It receives the entire store state, and should return an object of data this component needs.")),(0,r.kt)("h2",{id:"defining-mapstatetoprops"},"Defining ",(0,r.kt)("inlineCode",{parentName:"h2"},"mapStateToProps")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," should be defined as a function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function mapStateToProps(state, ownProps?)\n")),(0,r.kt)("p",null,"It should take a first argument called ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),", optionally a second argument called ",(0,r.kt)("inlineCode",{parentName:"p"},"ownProps"),", and return a plain object containing the data that the connected component needs."),(0,r.kt)("p",null,"This function should be passed as the first argument to ",(0,r.kt)("inlineCode",{parentName:"p"},"connect"),", and will be called every time when the Redux store state changes. If you do not wish to subscribe to the store, pass ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"connect")," in place of ",(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"It does not matter if a ",(0,r.kt)("inlineCode",{parentName:"strong"},"mapStateToProps")," function is written using the ",(0,r.kt)("inlineCode",{parentName:"strong"},"function")," keyword (",(0,r.kt)("inlineCode",{parentName:"strong"},"function mapState(state) { }")," ) or as an arrow function (",(0,r.kt)("inlineCode",{parentName:"strong"},"const mapState = (state) => { }")," )")," - it will work the same either way."),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"state"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"ownProps")," (optional)"))),(0,r.kt)("h4",{id:"state"},(0,r.kt)("inlineCode",{parentName:"h4"},"state")),(0,r.kt)("p",null,"The first argument to a ",(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," function is the entire Redux store state (the same value returned by a call to ",(0,r.kt)("inlineCode",{parentName:"p"},"store.getState()"),"). Because of this, the first argument is traditionally just called ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),". (While you can give the argument any name you want, calling it ",(0,r.kt)("inlineCode",{parentName:"p"},"store"),' would be incorrect - it\'s the "state value", not the "store instance".)'),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," function should always be written with at least ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," passed in."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// TodoList.js\n\nfunction mapStateToProps(state) {\n  const { todos } = state\n  return { todoList: todos.allIds }\n}\n\nexport default connect(mapStateToProps)(TodoList)\n")),(0,r.kt)("h4",{id:"ownprops-optional"},(0,r.kt)("inlineCode",{parentName:"h4"},"ownProps")," (optional)"),(0,r.kt)("p",null,"You may define the function with a second argument, ",(0,r.kt)("inlineCode",{parentName:"p"},"ownProps"),", if your component needs the data from its own props to retrieve data from the store. This argument will contain all of the props given to the wrapper component that was generated by ",(0,r.kt)("inlineCode",{parentName:"p"},"connect"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Todo.js\n\nfunction mapStateToProps(state, ownProps) {\n  const { visibilityFilter } = state\n  // ownProps would look like { "id" : 123 }\n  const { id } = ownProps\n  const todo = getTodoById(state, id)\n\n  // component receives additionally:\n  return { todo, visibilityFilter }\n}\n\n// Later, in your application, a parent component renders:\n;<ConnectedTodo id={123} />\n// and your component receives props.id, props.todo, and props.visibilityFilter\n')),(0,r.kt)("p",null,"You do not need to include values from ",(0,r.kt)("inlineCode",{parentName:"p"},"ownProps")," in the object returned from ",(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"connect")," will automatically merge those different prop sources into a final set of props."),(0,r.kt)("h3",{id:"return"},"Return"),(0,r.kt)("p",null,"Your ",(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," function should return a plain object that contains the data the component needs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each field in the object will become a prop for your actual component"),(0,r.kt)("li",{parentName:"ul"},"The values in the fields will be used to determine if your component needs to re-render")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function mapStateToProps(state) {\n  return {\n    a: 42,\n    todos: state.todos,\n    filter: state.visibilityFilter,\n  }\n}\n\n// component will receive: props.a, props.todos, and props.filter\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: In advanced scenarios where you need more control over the rendering performance, ",(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," can also return a function. In this case, that function will be used as the final ",(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," for a particular component instance. This allows you to do per-instance memoization. See the ",(0,r.kt)("a",{parentName:"p",href:"/react-redux-cn/api/connect"},"Advanced Usage: Factory Functions")," section of the docs for more details, as well as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/react-redux/pull/279"},"PR #279")," and the tests it adds. Most apps never need this.")),(0,r.kt)("h2",{id:"usage-guidelines"},"Usage Guidelines"),(0,r.kt)("h3",{id:"let-mapstatetoprops-reshape-the-data-from-the-store"},"Let ",(0,r.kt)("inlineCode",{parentName:"h3"},"mapStateToProps")," Reshape the Data from the Store"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," functions can, and should, do a lot more than just ",(0,r.kt)("inlineCode",{parentName:"p"},"return state.someSlice"),". ",(0,r.kt)("strong",{parentName:"p"},'They have the responsibility of "re-shaping" store data as needed for that component.')," This may include returning a value as a specific prop name, combining pieces of data from different parts of the state tree, and transforming the store data in different ways."),(0,r.kt)("h3",{id:"use-selector-functions-to-extract-and-transform-data"},"Use Selector Functions to Extract and Transform Data"),(0,r.kt)("p",null,'We highly encourage the use of "selector" functions to help encapsulate the process of extracting values from specific locations in the state tree. Memoized selector functions also play a key role in improving application performance (see the following sections in this page and the ',(0,r.kt)("a",{parentName:"p",href:"https://redux.js.org/recipes/computing-derived-data"},"Advanced Usage: Computing Derived Data")," page for more details on why and how to use selectors.)"),(0,r.kt)("h3",{id:"mapstatetoprops-functions-should-be-fast"},(0,r.kt)("inlineCode",{parentName:"h3"},"mapStateToProps")," Functions Should Be Fast"),(0,r.kt)("p",null,"Whenever the store changes, all of the ",(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," functions of all of the connected components will run. Because of this, your ",(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," functions should run as fast as possible. This also means that a slow ",(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," function can be a potential bottleneck for your application."),(0,r.kt)("p",null,'As part of the "re-shaping data" idea, ',(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," functions frequently need to transform data in various ways (such as filtering an array, mapping an array of IDs to their corresponding objects, or extracting plain JS values from Immutable.js objects). These transformations can often be expensive, both in terms of cost to execute the transformation, and whether the component re-renders as a result. If performance is a concern, ensure that these transformations are only run if the input values have changed."),(0,r.kt)("h3",{id:"mapstatetoprops-functions-should-be-pure-and-synchronous"},(0,r.kt)("inlineCode",{parentName:"h3"},"mapStateToProps")," Functions Should Be Pure and Synchronous"),(0,r.kt)("p",null,"Much like a Redux reducer, a ",(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," function should always be 100% pure and synchronous. It should only take ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," (and ",(0,r.kt)("inlineCode",{parentName:"p"},"ownProps"),") as arguments, and return the data the component needs as props without mutating those arguments. It should ",(0,r.kt)("em",{parentName:"p"},"not")," be used to trigger asynchronous behavior like AJAX calls for data fetching, and the functions should not be declared as ",(0,r.kt)("inlineCode",{parentName:"p"},"async"),"."),(0,r.kt)("h2",{id:"mapstatetoprops-and-performance"},(0,r.kt)("inlineCode",{parentName:"h2"},"mapStateToProps")," and Performance"),(0,r.kt)("h3",{id:"return-values-determine-if-your-component-re-renders"},"Return Values Determine If Your Component Re-Renders"),(0,r.kt)("p",null,"React Redux internally implements the ",(0,r.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate")," method such that the wrapper component re-renders precisely when the data your component needs has changed. By default, React Redux decides whether the contents of the object returned from ",(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," are different using ",(0,r.kt)("inlineCode",{parentName:"p"},"==="),' comparison (a "shallow equality" check) on each fields of the returned object. If any of the fields have changed, then your component will be re-rendered so it can receive the updated values as props. Note that returning a mutated object of the same reference is a common mistake that can result in your component not re-rendering when expected.'),(0,r.kt)("p",null,"To summarize the behavior of the component wrapped by ",(0,r.kt)("inlineCode",{parentName:"p"},"connect")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," to extract data from the store:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"(state) => stateProps")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"(state, ownProps) => stateProps")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mapStateToProps")," runs when:"),(0,r.kt)("td",{parentName:"tr",align:null},"store ",(0,r.kt)("inlineCode",{parentName:"td"},"state")," changes"),(0,r.kt)("td",{parentName:"tr",align:null},"store ",(0,r.kt)("inlineCode",{parentName:"td"},"state")," changes ",(0,r.kt)("br",null)," or ",(0,r.kt)("br",null),"any field of ",(0,r.kt)("inlineCode",{parentName:"td"},"ownProps")," is different")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"component re-renders when:"),(0,r.kt)("td",{parentName:"tr",align:null},"any field of ",(0,r.kt)("inlineCode",{parentName:"td"},"stateProps")," is different"),(0,r.kt)("td",{parentName:"tr",align:null},"any field of ",(0,r.kt)("inlineCode",{parentName:"td"},"stateProps")," is different ",(0,r.kt)("br",null)," or ",(0,r.kt)("br",null)," any field of ",(0,r.kt)("inlineCode",{parentName:"td"},"ownProps")," is different")))),(0,r.kt)("h3",{id:"only-return-new-object-references-if-needed"},"Only Return New Object References If Needed"),(0,r.kt)("p",null,"React Redux does shallow comparisons to see if the ",(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," results have changed. It\u2019s easy to accidentally return new object or array references every time, which would cause your component to re-render even if the data is actually the same."),(0,r.kt)("p",null,"Many common operations result in new object or array references being created:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creating new arrays with ",(0,r.kt)("inlineCode",{parentName:"li"},"someArray.map()")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"someArray.filter()")),(0,r.kt)("li",{parentName:"ul"},"Merging arrays with ",(0,r.kt)("inlineCode",{parentName:"li"},"array.concat")),(0,r.kt)("li",{parentName:"ul"},"Selecting portion of an array with ",(0,r.kt)("inlineCode",{parentName:"li"},"array.slice")),(0,r.kt)("li",{parentName:"ul"},"Copying values with ",(0,r.kt)("inlineCode",{parentName:"li"},"Object.assign")),(0,r.kt)("li",{parentName:"ul"},"Copying values with the spread operator ",(0,r.kt)("inlineCode",{parentName:"li"},"{ ...oldState, ...newData }"))),(0,r.kt)("p",null,"Put these operations in ",(0,r.kt)("a",{parentName:"p",href:"https://redux.js.org/recipes/computing-derived-data#creating-a-memoized-selector"},"memoized selector functions")," to ensure that they only run if the input values have changed. This will also ensure that if the input values ",(0,r.kt)("em",{parentName:"p"},"haven't")," changed, ",(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," will still return the same result values as before, and ",(0,r.kt)("inlineCode",{parentName:"p"},"connect")," can skip re-rendering."),(0,r.kt)("h3",{id:"only-perform-expensive-operations-when-data-changes"},"Only Perform Expensive Operations When Data Changes"),(0,r.kt)("p",null,"Transforming data can often be expensive (",(0,r.kt)("em",{parentName:"p"},"and")," usually results in new object references being created). In order for your ",(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," function to be as fast as possible, you should only re-run these complex transformations when the relevant data has changed."),(0,r.kt)("p",null,"There are a few ways to approach this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Some transformations could be calculated in an action creator or reducer, and the transformed data could be kept in the store"),(0,r.kt)("li",{parentName:"ul"},"Transformations can also be done in a component's ",(0,r.kt)("inlineCode",{parentName:"li"},"render()")," method"),(0,r.kt)("li",{parentName:"ul"},"If the transformation does need to be done in a ",(0,r.kt)("inlineCode",{parentName:"li"},"mapStateToProps")," function, then we recommend using ",(0,r.kt)("a",{parentName:"li",href:"https://redux.js.org/recipes/computing-derived-data#creating-a-memoized-selector"},"memoized selector functions")," to ensure the transformation is only run when the input values have changed.")),(0,r.kt)("h4",{id:"immutablejs-performance-concerns"},"Immutable.js Performance Concerns"),(0,r.kt)("p",null,"Immutable.js author Lee Byron on Twitter ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/leeb/status/746733697093668864?lang=en"},"explicitly advises avoiding ",(0,r.kt)("inlineCode",{parentName:"a"},"toJS")," when performance is a concern"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Perf tip for #immutablejs: avoid .toJS() .toObject() and .toArray() all slow full-copy operations which render structural sharing useless.")),(0,r.kt)("p",null,"There's several other performance concerns to take into consideration with Immutable.js - see the list of links at the end of this page for more information."),(0,r.kt)("h2",{id:"behavior-and-gotchas"},"Behavior and Gotchas"),(0,r.kt)("h3",{id:"mapstatetoprops-will-not-run-if-the-store-state-is-the-same"},(0,r.kt)("inlineCode",{parentName:"h3"},"mapStateToProps")," Will Not Run if the Store State is the Same"),(0,r.kt)("p",null,"The wrapper component generated by ",(0,r.kt)("inlineCode",{parentName:"p"},"connect")," subscribes to the Redux store. Every time an action is dispatched, it calls ",(0,r.kt)("inlineCode",{parentName:"p"},"store.getState()")," and checks to see if ",(0,r.kt)("inlineCode",{parentName:"p"},"lastState === currentState"),". If the two state values are identical by reference, then it will ",(0,r.kt)("em",{parentName:"p"},"not")," re-run your ",(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," function, because it assumes that the rest of the store state hasn't changed either."),(0,r.kt)("p",null,"The Redux ",(0,r.kt)("inlineCode",{parentName:"p"},"combineReducers")," utility function tries to optimize for this. If none of the slice reducers returned a new value, then ",(0,r.kt)("inlineCode",{parentName:"p"},"combineReducers")," returns the old state object instead of a new one. This means that mutation in a reducer can lead to the root state object not being updated, and thus the UI won't re-render."),(0,r.kt)("h3",{id:"the-number-of-declared-arguments-affects-behavior"},"The Number of Declared Arguments Affects Behavior"),(0,r.kt)("p",null,"With just ",(0,r.kt)("inlineCode",{parentName:"p"},"(state)"),", the function runs whenever the root store state object is different. With ",(0,r.kt)("inlineCode",{parentName:"p"},"(state, ownProps)"),", it runs any time the store state is different and ALSO whenever the wrapper props have changed."),(0,r.kt)("p",null,"This means that ",(0,r.kt)("strong",{parentName:"p"},"you should not add the ",(0,r.kt)("inlineCode",{parentName:"strong"},"ownProps")," argument unless you actually need to use it"),", or your ",(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," function will run more often than it needs to."),(0,r.kt)("p",null,"There are some edge cases around this behavior. ",(0,r.kt)("strong",{parentName:"p"},"The number of mandatory arguments determines whether ",(0,r.kt)("inlineCode",{parentName:"strong"},"mapStateToProps")," will receive ",(0,r.kt)("inlineCode",{parentName:"strong"},"ownProps")),"."),(0,r.kt)("p",null,"If the formal definition of the function contains one mandatory parameter, ",(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," will ",(0,r.kt)("em",{parentName:"p"},"not")," receive ",(0,r.kt)("inlineCode",{parentName:"p"},"ownProps"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function mapStateToProps(state) {\n  console.log(state) // state\n  console.log(arguments[1]) // undefined\n}\nconst mapStateToProps = (state, ownProps = {}) => {\n  console.log(state) // state\n  console.log(ownProps) // {}\n}\n")),(0,r.kt)("p",null,"It ",(0,r.kt)("em",{parentName:"p"},"will")," receive ",(0,r.kt)("inlineCode",{parentName:"p"},"ownProps")," when the formal definition of the function contains zero or two mandatory parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function mapStateToProps(state, ownProps) {\n  console.log(state) // state\n  console.log(ownProps) // ownProps\n}\n\nfunction mapStateToProps() {\n  console.log(arguments[0]) // state\n  console.log(arguments[1]) // ownProps\n}\n\nfunction mapStateToProps(...args) {\n  console.log(args[0]) // state\n  console.log(args[1]) // ownProps\n}\n")),(0,r.kt)("h2",{id:"links-and-references"},"Links and References"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tutorials")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.isquaredsoftware.com/2017/01/practical-redux-part-6-connected-lists-forms-and-performance/"},"Practical Redux Series, Part 6: Connected Lists, Forms, and Performance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.isquaredsoftware.com/2017/12/idiomatic-redux-using-reselect-selectors/"},"Idiomatic Redux: Using Reselect Selectors for Encapsulation and Performance"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Performance")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/leeb/status/746733697093668864"},"Lee Byron's Tweet Suggesting to avoid ",(0,r.kt)("inlineCode",{parentName:"a"},"toJS"),", ",(0,r.kt)("inlineCode",{parentName:"a"},"toArray")," and ",(0,r.kt)("inlineCode",{parentName:"a"},"toObject")," for Performance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rangle.io/blog/react-and-redux-performance-with-reselect/"},"Improving React and Redux performance with Reselect")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/markerikson/react-redux-links/blob/master/react-performance.md#immutable-data"},"Immutable data performance links"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q&A")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://redux.js.org/faq/react-redux#why-is-my-component-re-rendering-too-often"},"Why Is My Component Re-Rendering Too Often?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://redux.js.org/faq/react-redux#why-isnt-my-component-re-rendering-or-my-mapstatetoprops-running"},"Why isn't my component re-rendering, or my mapStateToProps running")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://redux.js.org/faq/react-redux#how-can-i-speed-up-my-mapstatetoprops"},"How can I speed up my mapStateToProps?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://redux.js.org/faq/react-redux#should-i-only-connect-my-top-component-or-can-i-connect-multiple-components-in-my-tree"},"Should I only connect my top component, or can I connect multiple components in my tree?"))))}m.isMDXComponent=!0}}]);