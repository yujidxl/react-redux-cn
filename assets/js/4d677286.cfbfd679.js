"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[921],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(h,r(r({ref:t},l),{},{components:n})):a.createElement(h,r({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,r[1]=p;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1232:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>l});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],p={id:"connect-mapdispatch",title:"Connect: Dispatching Actions with mapDispatchToProps",hide_title:!0,sidebar_label:"Connect: Dispatching Actions with mapDispatchToProps",description:"Usage > mapDispatch: options for dispatching actions with connect"},s=void 0,c={unversionedId:"using-react-redux/connect-mapdispatch",id:"using-react-redux/connect-mapdispatch",isDocsHomePage:!1,title:"Connect: Dispatching Actions with mapDispatchToProps",description:"Usage > mapDispatch: options for dispatching actions with connect",source:"@site/../docs/using-react-redux/connect-dispatching-actions-with-mapDispatchToProps.md",sourceDirName:"using-react-redux",slug:"/using-react-redux/connect-mapdispatch",permalink:"/react-redux-cn/using-react-redux/connect-mapdispatch",editUrl:"https://github.com/reduxjs/react-redux/edit/master/website/../docs/using-react-redux/connect-dispatching-actions-with-mapDispatchToProps.md",tags:[],version:"current",lastUpdatedAt:1659003295,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"connect-mapdispatch",title:"Connect: Dispatching Actions with mapDispatchToProps",hide_title:!0,sidebar_label:"Connect: Dispatching Actions with mapDispatchToProps",description:"Usage > mapDispatch: options for dispatching actions with connect"},sidebar:"docs",previous:{title:"Connect: Extracting Data with mapStateToProps",permalink:"/react-redux-cn/using-react-redux/connect-mapstate"},next:{title:"Accessing the Store",permalink:"/react-redux-cn/using-react-redux/accessing-store"}},l=[{value:"Approaches for Dispatching",id:"approaches-for-dispatching",children:[{value:"Default: <code>dispatch</code> as a Prop",id:"default-dispatch-as-a-prop",children:[],level:3},{value:"Providing A <code>mapDispatchToProps</code> Parameter",id:"providing-a-mapdispatchtoprops-parameter",children:[{value:"More Declarative",id:"more-declarative",children:[],level:4},{value:"Pass Down Action Dispatching Logic to ( Unconnected ) Child Components",id:"pass-down-action-dispatching-logic-to--unconnected--child-components",children:[],level:4}],level:3}],level:2},{value:"Two Forms of <code>mapDispatchToProps</code>",id:"two-forms-of-mapdispatchtoprops",children:[],level:2},{value:"Defining <code>mapDispatchToProps</code> As A Function",id:"defining-mapdispatchtoprops-as-a-function",children:[{value:"Arguments",id:"arguments",children:[],level:3},{value:"Return",id:"return",children:[],level:3},{value:"Defining the <code>mapDispatchToProps</code> Function with <code>bindActionCreators</code>",id:"defining-the-mapdispatchtoprops-function-with-bindactioncreators",children:[],level:3},{value:"Manually Injecting <code>dispatch</code>",id:"manually-injecting-dispatch",children:[],level:3}],level:2},{value:"Defining <code>mapDispatchToProps</code> As An Object",id:"defining-mapdispatchtoprops-as-an-object",children:[],level:2},{value:"Common Problems",id:"common-problems",children:[{value:"Why is my component not receiving <code>dispatch</code>?",id:"why-is-my-component-not-receiving-dispatch",children:[],level:3},{value:"Can I <code>mapDispatchToProps</code> without <code>mapStateToProps</code> in Redux?",id:"can-i-mapdispatchtoprops-without-mapstatetoprops-in-redux",children:[],level:3},{value:"Can I call <code>store.dispatch</code>?",id:"can-i-call-storedispatch",children:[],level:3}],level:2},{value:"Links and References",id:"links-and-references",children:[],level:2}],d={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"connect-dispatching-actions-with-mapdispatchtoprops"},"Connect: Dispatching Actions with ",(0,i.kt)("inlineCode",{parentName:"h1"},"mapDispatchToProps")),(0,i.kt)("p",null,"As the second argument passed in to ",(0,i.kt)("inlineCode",{parentName:"p"},"connect"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," is used for dispatching actions to the store."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dispatch")," is a function of the Redux store. You call ",(0,i.kt)("inlineCode",{parentName:"p"},"store.dispatch")," to dispatch an action.\nThis is the only way to trigger a state change."),(0,i.kt)("p",null,"With React Redux, your components never access the store directly - ",(0,i.kt)("inlineCode",{parentName:"p"},"connect")," does it for you.\nReact Redux gives you two ways to let components dispatch actions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"By default, a connected component receives ",(0,i.kt)("inlineCode",{parentName:"li"},"props.dispatch")," and can dispatch actions itself."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connect")," can accept an argument called ",(0,i.kt)("inlineCode",{parentName:"li"},"mapDispatchToProps"),", which lets you create functions that dispatch when called, and pass those functions as props to your component.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," functions are normally referred to as ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatch")," for short, but the actual variable name used can be whatever you want."),(0,i.kt)("h2",{id:"approaches-for-dispatching"},"Approaches for Dispatching"),(0,i.kt)("h3",{id:"default-dispatch-as-a-prop"},"Default: ",(0,i.kt)("inlineCode",{parentName:"h3"},"dispatch")," as a Prop"),(0,i.kt)("p",null,"If you don't specify the second argument to ",(0,i.kt)("inlineCode",{parentName:"p"},"connect()"),", your component will receive ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch")," by default. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"connect()(MyComponent)\n// which is equivalent with\nconnect(null, null)(MyComponent)\n\n// or\nconnect(mapStateToProps /** no second argument */)(MyComponent)\n")),(0,i.kt)("p",null,"Once you have connected your component in this way, your component receives ",(0,i.kt)("inlineCode",{parentName:"p"},"props.dispatch"),". You may use it to dispatch actions to the store."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function Counter({ count, dispatch }) {\n  return (\n    <div>\n      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>\n      <span>{count}</span>\n      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>\n      <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>\n    </div>\n  )\n}\n")),(0,i.kt)("h3",{id:"providing-a-mapdispatchtoprops-parameter"},"Providing A ",(0,i.kt)("inlineCode",{parentName:"h3"},"mapDispatchToProps")," Parameter"),(0,i.kt)("p",null,"Providing a ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," allows you to specify which actions your component might need to dispatch. It lets you provide action dispatching functions as props. Therefore, instead of calling ",(0,i.kt)("inlineCode",{parentName:"p"},"props.dispatch(() => increment())"),", you may call ",(0,i.kt)("inlineCode",{parentName:"p"},"props.increment()")," directly. There are a few reasons why you might want to do that."),(0,i.kt)("h4",{id:"more-declarative"},"More Declarative"),(0,i.kt)("p",null,"First, encapsulating the dispatch logic into function makes the implementation more declarative.\nDispatching an action and letting the Redux store handle the data flow is ",(0,i.kt)("em",{parentName:"p"},"how to")," implement the behavior, rather than ",(0,i.kt)("em",{parentName:"p"},"what")," it does."),(0,i.kt)("p",null,"A good example would be dispatching an action when a button is clicked. Connecting the button directly probably doesn't make sense conceptually, and neither does having the button reference ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// button needs to be aware of "dispatch"\n<button onClick={() => dispatch({ type: "SOMETHING" })} />\n\n// button unaware of "dispatch",\n<button onClick={doSomething} />\n')),(0,i.kt)("p",null,"Once you've wrapped all our action creators with functions that dispatch the actions, the component is free of the need of ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch"),".\nTherefore, ",(0,i.kt)("strong",{parentName:"p"},"if you define your own ",(0,i.kt)("inlineCode",{parentName:"strong"},"mapDispatchToProps"),", the connected component will no longer receive ",(0,i.kt)("inlineCode",{parentName:"strong"},"dispatch"),".")),(0,i.kt)("h4",{id:"pass-down-action-dispatching-logic-to--unconnected--child-components"},"Pass Down Action Dispatching Logic to ( Unconnected ) Child Components"),(0,i.kt)("p",null,'In addition, you also gain the ability to pass down the action dispatching functions to child ( likely unconnected ) components.\nThis allows more components to dispatch actions, while keeping them "unaware" of Redux.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"// pass down toggleTodo to child component\n// making Todo able to dispatch the toggleTodo action\nconst TodoList = ({ todos, toggleTodo }) => (\n  <div>\n    {todos.map((todo) => (\n      <Todo todo={todo} onClick={toggleTodo} />\n    ))}\n  </div>\n)\n")),(0,i.kt)("p",null,"This is what React Redux\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"connect")," does \u2014 it encapsulates the logic of talking to the Redux store and lets you not worry about it. And this is what you should totally make full use of in your implementation."),(0,i.kt)("h2",{id:"two-forms-of-mapdispatchtoprops"},"Two Forms of ",(0,i.kt)("inlineCode",{parentName:"h2"},"mapDispatchToProps")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," parameter can be of two forms. While the function form allows more customization, the object form is easy to use."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Function form"),": Allows more customization, gains access to ",(0,i.kt)("inlineCode",{parentName:"li"},"dispatch")," and optionally ",(0,i.kt)("inlineCode",{parentName:"li"},"ownProps")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Object shorthand form"),": More declarative and easier to use")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u2b50 ",(0,i.kt)("strong",{parentName:"p"},"Note:")," We recommend using the object form of ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," unless you specifically need to customize dispatching behavior in some way.")),(0,i.kt)("h2",{id:"defining-mapdispatchtoprops-as-a-function"},"Defining ",(0,i.kt)("inlineCode",{parentName:"h2"},"mapDispatchToProps")," As A Function"),(0,i.kt)("p",null,"Defining ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," as a function gives you the most flexibility in customizing the functions your component receives, and how they dispatch actions.\nYou gain access to ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ownProps"),".\nYou may use this chance to write customized functions to be called by your connected components."),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"dispatch"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ownProps")," (optional)"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"dispatch"))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," function will be called with ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch")," as the first argument.\nYou will normally make use of this by returning new functions that call ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch()")," inside themselves, and either pass in a plain action object directly or pass in the result of an action creator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const mapDispatchToProps = (dispatch) => {\n  return {\n    // dispatching plain actions\n    increment: () => dispatch({ type: 'INCREMENT' }),\n    decrement: () => dispatch({ type: 'DECREMENT' }),\n    reset: () => dispatch({ type: 'RESET' }),\n  }\n}\n")),(0,i.kt)("p",null,"You will also likely want to forward arguments to your action creators:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const mapDispatchToProps = (dispatch) => {\n  return {\n    // explicitly forwarding arguments\n    onClick: (event) => dispatch(trackClick(event)),\n\n    // implicitly forwarding arguments\n    onReceiveImpressions: (...impressions) =>\n      dispatch(trackImpressions(impressions)),\n  }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"ownProps")," ( optional )")),(0,i.kt)("p",null,"If your ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," function is declared as taking two parameters, it will be called with ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch")," as the first parameter and the ",(0,i.kt)("inlineCode",{parentName:"p"},"props")," passed to the connected component as the second parameter, and will be re-invoked whenever the connected component receives new props."),(0,i.kt)("p",null,"This means, instead of re-binding new ",(0,i.kt)("inlineCode",{parentName:"p"},"props")," to action dispatchers upon component re-rendering, you may do so when your component's ",(0,i.kt)("inlineCode",{parentName:"p"},"props")," change."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Binds on component mount")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"render() {\n  return <button onClick={() => this.props.toggleTodo(this.props.todoId)} />\n}\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    toggleTodo: todoId => dispatch(toggleTodo(todoId))\n  }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Binds on ",(0,i.kt)("inlineCode",{parentName:"strong"},"props")," change")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"render() {\n  return <button onClick={() => this.props.toggleTodo()} />\n}\n\nconst mapDispatchToProps = (dispatch, ownProps) => {\n  return {\n    toggleTodo: () => dispatch(toggleTodo(ownProps.todoId))\n  }\n}\n")),(0,i.kt)("h3",{id:"return"},"Return"),(0,i.kt)("p",null,"Your ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," function should return a plain object:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each field in the object will become a separate prop for your own component, and the value should normally be a function that dispatches an action when called."),(0,i.kt)("li",{parentName:"ul"},"If you use action creators ( as oppose to plain object actions ) inside ",(0,i.kt)("inlineCode",{parentName:"li"},"dispatch"),", it is a convention to simply name the field key the same name as the action creator:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const increment = () => ({ type: 'INCREMENT' })\nconst decrement = () => ({ type: 'DECREMENT' })\nconst reset = () => ({ type: 'RESET' })\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    // dispatching actions returned by action creators\n    increment: () => dispatch(increment()),\n    decrement: () => dispatch(decrement()),\n    reset: () => dispatch(reset()),\n  }\n}\n")),(0,i.kt)("p",null,"The return of the ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," function will be merged to your connected component as props. You may call them directly to dispatch its action."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function Counter({ count, increment, decrement, reset }) {\n  return (\n    <div>\n      <button onClick={decrement}>-</button>\n      <span>{count}</span>\n      <button onClick={increment}>+</button>\n      <button onClick={reset}>reset</button>\n    </div>\n  )\n}\n")),(0,i.kt)("p",null,"(Full code of the Counter example is ",(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/yv6kqo1yw9"},"in this CodeSandbox"),")"),(0,i.kt)("h3",{id:"defining-the-mapdispatchtoprops-function-with-bindactioncreators"},"Defining the ",(0,i.kt)("inlineCode",{parentName:"h3"},"mapDispatchToProps")," Function with ",(0,i.kt)("inlineCode",{parentName:"h3"},"bindActionCreators")),(0,i.kt)("p",null,"Wrapping these functions by hand is tedious, so Redux provides a function to simplify that."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"bindActionCreators")," turns an object whose values are ",(0,i.kt)("a",{parentName:"p",href:"https://redux.js.org/glossary#action-creator"},"action creators"),", into an object with the same keys, but with every action creator wrapped into a ",(0,i.kt)("a",{parentName:"p",href:"https://redux.js.org/api/store#dispatch"},(0,i.kt)("inlineCode",{parentName:"a"},"dispatch"))," call so they may be invoked directly. See ",(0,i.kt)("a",{parentName:"p",href:"https://redux.js.org/api/bindactioncreators"},"Redux Docs on ",(0,i.kt)("inlineCode",{parentName:"a"},"bindActionCreators")))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"bindActionCreators")," accepts two parameters:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"function"))," (an action creator) or an ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"object"))," (each field an action creator)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"dispatch"))),(0,i.kt)("p",null,"The wrapper functions generated by ",(0,i.kt)("inlineCode",{parentName:"p"},"bindActionCreators")," will automatically forward all of their arguments, so you don't need to do that by hand."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { bindActionCreators } from 'redux'\n\nconst increment = () => ({ type: 'INCREMENT' })\nconst decrement = () => ({ type: 'DECREMENT' })\nconst reset = () => ({ type: 'RESET' })\n\n// binding an action creator\n// returns (...args) => dispatch(increment(...args))\nconst boundIncrement = bindActionCreators(increment, dispatch)\n\n// binding an object full of action creators\nconst boundActionCreators = bindActionCreators(\n  { increment, decrement, reset },\n  dispatch\n)\n// returns\n// {\n//   increment: (...args) => dispatch(increment(...args)),\n//   decrement: (...args) => dispatch(decrement(...args)),\n//   reset: (...args) => dispatch(reset(...args)),\n// }\n")),(0,i.kt)("p",null,"To use ",(0,i.kt)("inlineCode",{parentName:"p"},"bindActionCreators")," in our ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { bindActionCreators } from 'redux'\n// ...\n\nfunction mapDispatchToProps(dispatch) {\n  return bindActionCreators({ increment, decrement, reset }, dispatch)\n}\n\n// component receives props.increment, props.decrement, props.reset\nconnect(null, mapDispatchToProps)(Counter)\n")),(0,i.kt)("h3",{id:"manually-injecting-dispatch"},"Manually Injecting ",(0,i.kt)("inlineCode",{parentName:"h3"},"dispatch")),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," argument is supplied, the component will no longer receive the default ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch"),". You may bring it back by adding it manually to the return of your ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps"),", although most of the time you shouldn\u2019t need to do this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { bindActionCreators } from 'redux'\n// ...\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    dispatch,\n    ...bindActionCreators({ increment, decrement, reset }, dispatch),\n  }\n}\n")),(0,i.kt)("h2",{id:"defining-mapdispatchtoprops-as-an-object"},"Defining ",(0,i.kt)("inlineCode",{parentName:"h2"},"mapDispatchToProps")," As An Object"),(0,i.kt)("p",null,"You\u2019ve seen that the setup for dispatching Redux actions in a React component follows a very similar process: define an action creator, wrap it in another function that looks like ",(0,i.kt)("inlineCode",{parentName:"p"},"(\u2026args) => dispatch(actionCreator(\u2026args))"),", and pass that wrapper function as a prop to your component."),(0,i.kt)("p",null,"Because this is so common, ",(0,i.kt)("inlineCode",{parentName:"p"},"connect")," supports an \u201cobject shorthand\u201d form for the ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," argument: if you pass an object full of action creators instead of a function, ",(0,i.kt)("inlineCode",{parentName:"p"},"connect")," will automatically call ",(0,i.kt)("inlineCode",{parentName:"p"},"bindActionCreators")," for you internally."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"We recommend always using the \u201cobject shorthand\u201d form of ",(0,i.kt)("inlineCode",{parentName:"strong"},"mapDispatchToProps"),", unless you have a specific reason to customize the dispatching behavior.")),(0,i.kt)("p",null,"Note that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each field of the ",(0,i.kt)("inlineCode",{parentName:"li"},"mapDispatchToProps")," object is assumed to be an action creator"),(0,i.kt)("li",{parentName:"ul"},"Your component will no longer receive ",(0,i.kt)("inlineCode",{parentName:"li"},"dispatch")," as a prop")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// React Redux does this for you automatically:\n;(dispatch) => bindActionCreators(mapDispatchToProps, dispatch)\n")),(0,i.kt)("p",null,"Therefore, our ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," can simply be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const mapDispatchToProps = {\n  increment,\n  decrement,\n  reset,\n}\n")),(0,i.kt)("p",null,"Since the actual name of the variable is up to you, you might want to give it a name like ",(0,i.kt)("inlineCode",{parentName:"p"},"actionCreators"),", or even define the object inline in the call to ",(0,i.kt)("inlineCode",{parentName:"p"},"connect"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { increment, decrement, reset } from './counterActions'\n\nconst actionCreators = {\n  increment,\n  decrement,\n  reset,\n}\n\nexport default connect(mapState, actionCreators)(Counter)\n\n// or\nexport default connect(mapState, { increment, decrement, reset })(Counter)\n")),(0,i.kt)("h2",{id:"common-problems"},"Common Problems"),(0,i.kt)("h3",{id:"why-is-my-component-not-receiving-dispatch"},"Why is my component not receiving ",(0,i.kt)("inlineCode",{parentName:"h3"},"dispatch"),"?"),(0,i.kt)("p",null,"Also known as"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"TypeError: this.props.dispatch is not a function\n")),(0,i.kt)("p",null,"This is a common error that happens when you try to call ",(0,i.kt)("inlineCode",{parentName:"p"},"this.props.dispatch")," , but ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch")," is not injected to your component."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dispatch")," is injected to your component ",(0,i.kt)("em",{parentName:"p"},"only")," when:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1. You do not provide ",(0,i.kt)("inlineCode",{parentName:"strong"},"mapDispatchToProps"))),(0,i.kt)("p",null,"The default ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," is simply ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch => ({ dispatch })"),". If you do not provide ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch")," will be provided as mentioned above."),(0,i.kt)("p",null,"In another words, if you do:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// component receives `dispatch`\nconnect(mapStateToProps /** no second argument*/)(Component)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2. Your customized ",(0,i.kt)("inlineCode",{parentName:"strong"},"mapDispatchToProps")," function return specifically contains ",(0,i.kt)("inlineCode",{parentName:"strong"},"dispatch"))),(0,i.kt)("p",null,"You may bring back ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch")," by providing your customized ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const mapDispatchToProps = (dispatch) => {\n  return {\n    increment: () => dispatch(increment()),\n    decrement: () => dispatch(decrement()),\n    reset: () => dispatch(reset()),\n    dispatch,\n  }\n}\n")),(0,i.kt)("p",null,"Or alternatively, with ",(0,i.kt)("inlineCode",{parentName:"p"},"bindActionCreators"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { bindActionCreators } from 'redux'\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    dispatch,\n    ...bindActionCreators({ increment, decrement, reset }, dispatch),\n  }\n}\n")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/react-redux/issues/255"},"this error in action in Redux\u2019s GitHub issue #255"),"."),(0,i.kt)("p",null,"There are discussions regarding whether to provide ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch")," to your components when you specify ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," ( ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/react-redux/issues/255#issuecomment-172089874"},"Dan Abramov\u2019s response to #255")," ). You may read them for further understanding of the current implementation intention."),(0,i.kt)("h3",{id:"can-i-mapdispatchtoprops-without-mapstatetoprops-in-redux"},"Can I ",(0,i.kt)("inlineCode",{parentName:"h3"},"mapDispatchToProps")," without ",(0,i.kt)("inlineCode",{parentName:"h3"},"mapStateToProps")," in Redux?"),(0,i.kt)("p",null,"Yes. You can skip the first parameter by passing ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),". Your component will not subscribe to the store, and will still receive the dispatch props defined by ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"connect(null, mapDispatchToProps)(MyComponent)\n")),(0,i.kt)("h3",{id:"can-i-call-storedispatch"},"Can I call ",(0,i.kt)("inlineCode",{parentName:"h3"},"store.dispatch"),"?"),(0,i.kt)("p",null,"It's an anti-pattern to interact with the store directly in a React component, whether it's an explicit import of the store or accessing it via context (see the ",(0,i.kt)("a",{parentName:"p",href:"https://redux.js.org/faq/storesetup#can-or-should-i-create-multiple-stores-can-i-import-my-store-directly-and-use-it-in-components-myself"},"Redux FAQ entry on store setup")," for more details). Let React Redux\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"connect")," handle the access to the store, and use the ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch")," it passes to the props to dispatch actions."),(0,i.kt)("h2",{id:"links-and-references"},"Links and References"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Tutorials")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://daveceddia.com/redux-mapdispatchtoprops-object-form/"},"You Might Not Need the ",(0,i.kt)("inlineCode",{parentName:"a"},"mapDispatchToProps")," Function"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Related Docs")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redux.js.org/api/bindactioncreators"},"Redux Doc on ",(0,i.kt)("inlineCode",{parentName:"a"},"bindActionCreators")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q&A")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/34458261/how-to-get-simple-dispatch-from-this-props-using-connect-w-redux"},"How to get simple dispatch from ",(0,i.kt)("inlineCode",{parentName:"a"},"this.props")," using connect with Redux?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/react-redux/issues/255"},(0,i.kt)("inlineCode",{parentName:"a"},"this.props.dispatch")," is ",(0,i.kt)("inlineCode",{parentName:"a"},"undefined")," if using ",(0,i.kt)("inlineCode",{parentName:"a"},"mapDispatchToProps"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/916"},"Do not call ",(0,i.kt)("inlineCode",{parentName:"a"},"store.dispatch"),", call ",(0,i.kt)("inlineCode",{parentName:"a"},"this.props.dispatch")," injected by ",(0,i.kt)("inlineCode",{parentName:"a"},"connect")," instead")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/47657365/can-i-mapdispatchtoprops-without-mapstatetoprops-in-redux"},"Can I ",(0,i.kt)("inlineCode",{parentName:"a"},"mapDispatchToProps")," without ",(0,i.kt)("inlineCode",{parentName:"a"},"mapStateToProps")," in Redux?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redux.js.org/faq/reactredux"},"Redux Doc FAQ: React Redux"))))}m.isMDXComponent=!0}}]);