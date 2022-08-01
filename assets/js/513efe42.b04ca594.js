"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[399],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6150:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],l={id:"connect",title:"Tutorial: Connect API",hide_title:!0,sidebar_label:"Tutorial: Connect API",description:"Tutorials > Connect API: how to use the legacy connect API"},s=void 0,p={unversionedId:"tutorials/connect",id:"tutorials/connect",isDocsHomePage:!1,title:"Tutorial: Connect API",description:"Tutorials > Connect API: how to use the legacy connect API",source:"@site/../docs/tutorials/connect.md",sourceDirName:"tutorials",slug:"/tutorials/connect",permalink:"/react-redux-cn/tutorials/connect",editUrl:"https://github.com/reduxjs/react-redux/edit/master/website/../docs/tutorials/connect.md",tags:[],version:"current",lastUpdatedAt:1659003295,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"connect",title:"Tutorial: Connect API",hide_title:!0,sidebar_label:"Tutorial: Connect API",description:"Tutorials > Connect API: how to use the legacy connect API"},sidebar:"docs",previous:{title:"TypeScript Quick Start",permalink:"/react-redux-cn/tutorials/typescript-quick-start"},next:{title:"Usage with TypeScript",permalink:"/react-redux-cn/using-react-redux/usage-with-typescript"}},d=[{value:"A Todo List Example",id:"a-todo-list-example",children:[{value:"Providing the Store",id:"providing-the-store",children:[],level:3},{value:"Connecting the Components",id:"connecting-the-components",children:[],level:3},{value:"Common ways of calling <code>connect</code>",id:"common-ways-of-calling-connect",children:[{value:"Do not subscribe to the store and do not inject action creators",id:"do-not-subscribe-to-the-store-and-do-not-inject-action-creators",children:[],level:4},{value:"Subscribe to the store and do not inject action creators",id:"subscribe-to-the-store-and-do-not-inject-action-creators",children:[],level:4},{value:"Do not subscribe to the store and inject action creators",id:"do-not-subscribe-to-the-store-and-inject-action-creators",children:[],level:4},{value:"Subscribe to the store and inject action creators",id:"subscribe-to-the-store-and-inject-action-creators",children:[],level:4}],level:3}],level:2},{value:"Links",id:"links",children:[],level:2},{value:"Get More Help",id:"get-more-help",children:[],level:2}],c={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tutorial-using-the-connect-api"},"Tutorial: Using the ",(0,i.kt)("inlineCode",{parentName:"h1"},"connect")," API"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We now recommend using ",(0,i.kt)("a",{parentName:"p",href:"/react-redux-cn/api/hooks"},"the React-Redux hooks API as the default"),". However, the ",(0,i.kt)("inlineCode",{parentName:"p"},"connect")," API still works fine."),(0,i.kt)("p",{parentName:"div"},"This tutorial also shows some older practices we no longer recommend, like separating Redux logic into folders by type. We've kept this tutorial as-is for completeness, but recommend reading through ",(0,i.kt)("a",{parentName:"p",href:"https://redux.js.org/tutorials/essentials/part-1-overview-concepts"},'the "Redux Essentials" tutorial')," and the ",(0,i.kt)("a",{parentName:"p",href:"https://redux.js.org/style-guide/style-guide"},"Redux Style Guide")," in the Redux docs for our current best practices."),(0,i.kt)("p",{parentName:"div"},"We're working on a new tutorial that will introduce the hooks APIs. Until then, we suggest reading ",(0,i.kt)("a",{parentName:"p",href:"https://redux.js.org/tutorials/fundamentals/part-5-ui-react"},(0,i.kt)("strong",{parentName:"a"},"Redux Fundamentals, Part 5: UI and React"))," for a hooks tutorial."))),(0,i.kt)("p",null,"To see how to use React Redux in practice, we\u2019ll show a step-by-step example by creating a todo list app."),(0,i.kt)("h2",{id:"a-todo-list-example"},"A Todo List Example"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Jump to")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83e\udd1e ",(0,i.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/9on71rvnyo"},"Just show me the code")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc46 ",(0,i.kt)("a",{parentName:"li",href:"#providing-the-store"},"Providing the store")),(0,i.kt)("li",{parentName:"ul"},"\u270c\ufe0f ",(0,i.kt)("a",{parentName:"li",href:"#connecting-the-components"},"Connecting the Component"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The React UI Components")),(0,i.kt)("p",null,"We have implemented our React UI components as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TodoApp")," is the entry component for our app. It renders the header, the ",(0,i.kt)("inlineCode",{parentName:"li"},"AddTodo"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"TodoList"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"VisibilityFilters")," components."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AddTodo")," is the component that allows a user to input a todo item and add to the list upon clicking its \u201cAdd Todo\u201d button:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It uses a controlled input that sets state upon ",(0,i.kt)("inlineCode",{parentName:"li"},"onChange"),"."),(0,i.kt)("li",{parentName:"ul"},"When the user clicks on the \u201cAdd Todo\u201d button, it dispatches the action (that we will provide using React Redux) to add the todo to the store."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TodoList")," is the component that renders the list of todos:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It renders the filtered list of todos when one of the ",(0,i.kt)("inlineCode",{parentName:"li"},"VisibilityFilters")," is selected."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Todo")," is the component that renders a single todo item:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It renders the todo content, and shows that a todo is completed by crossing it out."),(0,i.kt)("li",{parentName:"ul"},"It dispatches the action to toggle the todo's complete status upon ",(0,i.kt)("inlineCode",{parentName:"li"},"onClick"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"VisibilityFilters")," renders a simple set of filters: ",(0,i.kt)("em",{parentName:"li"},"all"),", ",(0,i.kt)("em",{parentName:"li"},"completed"),", and ",(0,i.kt)("em",{parentName:"li"},"incomplete.")," Clicking on each one of them filters the todos:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It accepts an ",(0,i.kt)("inlineCode",{parentName:"li"},"activeFilter")," prop from the parent that indicates which filter is currently selected by the user. An active filter is rendered with an underscore."),(0,i.kt)("li",{parentName:"ul"},"It dispatches the ",(0,i.kt)("inlineCode",{parentName:"li"},"setFilter")," action to update the selected filter."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"constants")," holds the constants data for our app."),(0,i.kt)("li",{parentName:"ul"},"And finally ",(0,i.kt)("inlineCode",{parentName:"li"},"index")," renders our app to the DOM.")),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The Redux Store")),(0,i.kt)("p",null,"The Redux portion of the application has been set up using the ",(0,i.kt)("a",{parentName:"p",href:"https://redux.js.org"},"patterns recommended in the Redux docs"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Store",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"todos"),": A normalized reducer of todos. It contains a ",(0,i.kt)("inlineCode",{parentName:"li"},"byIds")," map of all todos and a ",(0,i.kt)("inlineCode",{parentName:"li"},"allIds")," that contains the list of all ids."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"visibilityFilters"),": A simple string ",(0,i.kt)("inlineCode",{parentName:"li"},"all"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"completed"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"incomplete"),"."))),(0,i.kt)("li",{parentName:"ul"},"Action Creators",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"addTodo")," creates the action to add todos. It takes a single string variable ",(0,i.kt)("inlineCode",{parentName:"li"},"content")," and returns an ",(0,i.kt)("inlineCode",{parentName:"li"},"ADD_TODO")," action with ",(0,i.kt)("inlineCode",{parentName:"li"},"payload")," containing a self-incremented ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"content")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"toggleTodo")," creates the action to toggle todos. It takes a single number variable ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," and returns a ",(0,i.kt)("inlineCode",{parentName:"li"},"TOGGLE_TODO")," action with ",(0,i.kt)("inlineCode",{parentName:"li"},"payload")," containing ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," only"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setFilter")," creates the action to set the app\u2019s active filter. It takes a single string variable ",(0,i.kt)("inlineCode",{parentName:"li"},"filter")," and returns a ",(0,i.kt)("inlineCode",{parentName:"li"},"SET_FILTER")," action with ",(0,i.kt)("inlineCode",{parentName:"li"},"payload")," containing the ",(0,i.kt)("inlineCode",{parentName:"li"},"filter")," itself"))),(0,i.kt)("li",{parentName:"ul"},"Reducers",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"todos")," reducer",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Appends the ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," to its ",(0,i.kt)("inlineCode",{parentName:"li"},"allIds")," field and sets the todo within its ",(0,i.kt)("inlineCode",{parentName:"li"},"byIds")," field upon receiving the ",(0,i.kt)("inlineCode",{parentName:"li"},"ADD_TODO")," action"),(0,i.kt)("li",{parentName:"ul"},"Toggles the ",(0,i.kt)("inlineCode",{parentName:"li"},"completed")," field for the todo upon receiving the ",(0,i.kt)("inlineCode",{parentName:"li"},"TOGGLE_TODO")," action"))),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"visibilityFilters")," reducer sets its slice of store to the new filter it receives from the ",(0,i.kt)("inlineCode",{parentName:"li"},"SET_FILTER")," action payload"))),(0,i.kt)("li",{parentName:"ul"},"Action Types",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"We use a file ",(0,i.kt)("inlineCode",{parentName:"li"},"actionTypes.js")," to hold the constants of action types to be reused"))),(0,i.kt)("li",{parentName:"ul"},"Selectors",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getTodoList")," returns the ",(0,i.kt)("inlineCode",{parentName:"li"},"allIds")," list from the ",(0,i.kt)("inlineCode",{parentName:"li"},"todos")," store"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getTodoById")," finds the todo in the store given by ",(0,i.kt)("inlineCode",{parentName:"li"},"id")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getTodos")," is slightly more complex. It takes all the ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),"s from ",(0,i.kt)("inlineCode",{parentName:"li"},"allIds"),", finds each todo in ",(0,i.kt)("inlineCode",{parentName:"li"},"byIds"),", and returns the final array of todos"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getTodosByVisibilityFilter")," filters the todos according to the visibility filter")))),(0,i.kt)("p",null,"You may check out ",(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/6vwyqrpqk3"},"this CodeSandbox")," for the source code of the UI components and the unconnected Redux store described above."),(0,i.kt)("br",null),(0,i.kt)("p",null,"We will now show how to connect this store to our app using React Redux."),(0,i.kt)("h3",{id:"providing-the-store"},"Providing the Store"),(0,i.kt)("p",null,"First we need to make the ",(0,i.kt)("inlineCode",{parentName:"p"},"store")," available to our app. To do this, we wrap our app with the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Provider />")," API provided by React Redux."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"// index.js\nimport React from 'react'\nimport ReactDOM from 'react-dom'\nimport TodoApp from './TodoApp'\n\nimport { Provider } from 'react-redux'\nimport store from './redux/store'\n\n// As of React 18\nconst root = ReactDOM.createRoot(document.getElementById('root'))\nroot.render(\n  <Provider store={store}>\n    <TodoApp />\n  </Provider>\n)\n")),(0,i.kt)("p",null,"Notice how our ",(0,i.kt)("inlineCode",{parentName:"p"},"<TodoApp />")," is now wrapped with the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Provider />")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"store")," passed in as a prop."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/LV0XvwA.png",alt:null})),(0,i.kt)("h3",{id:"connecting-the-components"},"Connecting the Components"),(0,i.kt)("p",null,"React Redux provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"connect")," function for you to read values from the Redux store (and re-read the values when the store updates)."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"connect")," function takes two arguments, both optional:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"mapStateToProps"),": called every time the store state changes. It receives the entire store state, and should return an object of data this component needs.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps"),": this parameter can either be a function, or an object."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If it\u2019s a function, it will be called once on component creation. It will receive ",(0,i.kt)("inlineCode",{parentName:"li"},"dispatch")," as an argument, and should return an object full of functions that use ",(0,i.kt)("inlineCode",{parentName:"li"},"dispatch")," to dispatch actions."),(0,i.kt)("li",{parentName:"ul"},"If it\u2019s an object full of action creators, each action creator will be turned into a prop function that automatically dispatches its action when called. ",(0,i.kt)("strong",{parentName:"li"},"Note"),": We recommend using this \u201cobject shorthand\u201d form.")))),(0,i.kt)("p",null,"Normally, you\u2019ll call ",(0,i.kt)("inlineCode",{parentName:"p"},"connect")," in this way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const mapStateToProps = (state, ownProps) => ({\n  // ... computed data from state and optionally ownProps\n})\n\nconst mapDispatchToProps = {\n  // ... normally is an object full of action creators\n}\n\n// `connect` returns a new function that accepts the component to wrap:\nconst connectToStore = connect(mapStateToProps, mapDispatchToProps)\n// and that function returns the connected, wrapper component:\nconst ConnectedComponent = connectToStore(Component)\n\n// We normally do both in one step, like this:\nconnect(mapStateToProps, mapDispatchToProps)(Component)\n")),(0,i.kt)("p",null,"Let\u2019s work on ",(0,i.kt)("inlineCode",{parentName:"p"},"<AddTodo />")," first. It needs to trigger changes to the ",(0,i.kt)("inlineCode",{parentName:"p"},"store")," to add new todos. Therefore, it needs to be able to ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch")," actions to the store. Here\u2019s how we do it."),(0,i.kt)("p",null,"Our ",(0,i.kt)("inlineCode",{parentName:"p"},"addTodo")," action creator looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// redux/actions.js\nimport { ADD_TODO } from './actionTypes'\n\nlet nextTodoId = 0\nexport const addTodo = (content) => ({\n  type: ADD_TODO,\n  payload: {\n    id: ++nextTodoId,\n    content,\n  },\n})\n\n// ... other actions\n")),(0,i.kt)("p",null,"By passing it to ",(0,i.kt)("inlineCode",{parentName:"p"},"connect"),", our component receives it as a prop, and it will automatically dispatch the action when it\u2019s called."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// components/AddTodo.js\n\n// ... other imports\nimport { connect } from 'react-redux'\nimport { addTodo } from '../redux/actions'\n\nclass AddTodo extends React.Component {\n  // ... component implementation\n}\n\nexport default connect(null, { addTodo })(AddTodo)\n")),(0,i.kt)("p",null,"Notice now that ",(0,i.kt)("inlineCode",{parentName:"p"},"<AddTodo />")," is wrapped with a parent component called ",(0,i.kt)("inlineCode",{parentName:"p"},"<Connect(AddTodo) />"),". Meanwhile, ",(0,i.kt)("inlineCode",{parentName:"p"},"<AddTodo />")," now gains one prop: the ",(0,i.kt)("inlineCode",{parentName:"p"},"addTodo")," action."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/u6aXbwl.png",alt:null})),(0,i.kt)("p",null,"We also need to implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"handleAddTodo")," function to let it dispatch the ",(0,i.kt)("inlineCode",{parentName:"p"},"addTodo")," action and reset the input"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"// components/AddTodo.js\n\nimport React from 'react'\nimport { connect } from 'react-redux'\nimport { addTodo } from '../redux/actions'\n\nclass AddTodo extends React.Component {\n  // ...\n\n  handleAddTodo = () => {\n    // dispatches actions to add todo\n    this.props.addTodo(this.state.input)\n\n    // sets state back to empty string\n    this.setState({ input: '' })\n  }\n\n  render() {\n    return (\n      <div>\n        <input\n          onChange={(e) => this.updateInput(e.target.value)}\n          value={this.state.input}\n        />\n        <button className=\"add-todo\" onClick={this.handleAddTodo}>\n          Add Todo\n        </button>\n      </div>\n    )\n  }\n}\n\nexport default connect(null, { addTodo })(AddTodo)\n")),(0,i.kt)("p",null,"Now our ",(0,i.kt)("inlineCode",{parentName:"p"},"<AddTodo />")," is connected to the store. When we add a todo it would dispatch an action to change the store. We are not seeing it in the app because the other components are not connected yet. If you have the Redux DevTools Extension hooked up, you should see the action being dispatched:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/kHvkqhI.png",alt:null})),(0,i.kt)("p",null,"You should also see that the store has changed accordingly:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/yx27RVC.png",alt:null})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<TodoList />")," component is responsible for rendering the list of todos. Therefore, it needs to read data from the store. We enable it by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"connect")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," parameter, a function describing which part of the data we need from the store."),(0,i.kt)("p",null,"Our ",(0,i.kt)("inlineCode",{parentName:"p"},"<Todo />")," component takes the todo item as props. We have this information from the ",(0,i.kt)("inlineCode",{parentName:"p"},"byIds")," field of the ",(0,i.kt)("inlineCode",{parentName:"p"},"todos"),". However, we also need the information from the ",(0,i.kt)("inlineCode",{parentName:"p"},"allIds")," field of the store indicating which todos and in what order they should be rendered. Our ",(0,i.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," function may look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// components/TodoList.js\n\n// ...other imports\nimport { connect } from "react-redux";\n\nconst TodoList = // ... UI component implementation\n\nconst mapStateToProps = state => {\n  const { byIds, allIds } = state.todos || {};\n  const todos =\n    allIds && allIds.length\n      ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))\n      : null;\n  return { todos };\n};\n\nexport default connect(mapStateToProps)(TodoList);\n')),(0,i.kt)("p",null,"Luckily we have a selector that does exactly this. We may simply import the selector and use it here."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// redux/selectors.js\n\nexport const getTodosState = (store) => store.todos\n\nexport const getTodoList = (store) =>\n  getTodosState(store) ? getTodosState(store).allIds : []\n\nexport const getTodoById = (store, id) =>\n  getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {}\n\nexport const getTodos = (store) =>\n  getTodoList(store).map((id) => getTodoById(store, id))\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// components/TodoList.js\n\n// ...other imports\nimport { connect } from "react-redux";\nimport { getTodos } from "../redux/selectors";\n\nconst TodoList = // ... UI component implementation\n\nexport default connect(state => ({ todos: getTodos(state) }))(TodoList);\n')),(0,i.kt)("p",null,"We recommend encapsulating any complex lookups or computations of data in selector functions. In addition, you can further optimize the performance by using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/reselect"},"Reselect")," to write \u201cmemoized\u201d selectors that can skip unnecessary work. (See ",(0,i.kt)("a",{parentName:"p",href:"https://redux.js.org/recipes/computing-derived-data#sharing-selectors-across-multiple-components"},"the Redux docs page on Computing Derived Data")," and the blog post ",(0,i.kt)("a",{parentName:"p",href:"https://blog.isquaredsoftware.com/2017/12/idiomatic-redux-using-reselect-selectors/"},"Idiomatic Redux: Using Reselect Selectors for Encapsulation and Performance")," for more information on why and how to use selector functions.)"),(0,i.kt)("p",null,"Now that our ",(0,i.kt)("inlineCode",{parentName:"p"},"<TodoList />")," is connected to the store. It should receive the list of todos, map over them, and pass each todo to the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Todo />")," component. ",(0,i.kt)("inlineCode",{parentName:"p"},"<Todo />")," will in turn render them to the screen. Now try adding a todo. It should come up on our todo list!"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/N68xvrG.png",alt:null})),(0,i.kt)("p",null,"We will connect more components. Before we do this, let\u2019s pause and learn a bit more about ",(0,i.kt)("inlineCode",{parentName:"p"},"connect")," first."),(0,i.kt)("h3",{id:"common-ways-of-calling-connect"},"Common ways of calling ",(0,i.kt)("inlineCode",{parentName:"h3"},"connect")),(0,i.kt)("p",null,"Depending on what kind of components you are working with, there are different ways of calling ",(0,i.kt)("inlineCode",{parentName:"p"},"connect")," , with the most common ones summarized as below:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Do Not Subscribe to the Store"),(0,i.kt)("th",{parentName:"tr",align:null},"Subscribe to the Store"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Do Not Inject Action Creators"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"connect()(Component)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"connect(mapStateToProps)(Component)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Inject Action Creators"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"connect(null, mapDispatchToProps)(Component)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"connect(mapStateToProps, mapDispatchToProps)(Component)"))))),(0,i.kt)("h4",{id:"do-not-subscribe-to-the-store-and-do-not-inject-action-creators"},"Do not subscribe to the store and do not inject action creators"),(0,i.kt)("p",null,"If you call ",(0,i.kt)("inlineCode",{parentName:"p"},"connect")," without providing any arguments, your component will:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"not")," re-render when the store changes"),(0,i.kt)("li",{parentName:"ul"},"receive ",(0,i.kt)("inlineCode",{parentName:"li"},"props.dispatch")," that you may use to manually dispatch action")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// ... Component\nexport default connect()(Component) // Component will receive `dispatch` (just like our <TodoList />!)\n")),(0,i.kt)("h4",{id:"subscribe-to-the-store-and-do-not-inject-action-creators"},"Subscribe to the store and do not inject action creators"),(0,i.kt)("p",null,"If you call ",(0,i.kt)("inlineCode",{parentName:"p"},"connect")," with only ",(0,i.kt)("inlineCode",{parentName:"p"},"mapStateToProps"),", your component will:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"subscribe to the values that ",(0,i.kt)("inlineCode",{parentName:"li"},"mapStateToProps")," extracts from the store, and re-render only when those values have changed"),(0,i.kt)("li",{parentName:"ul"},"receive ",(0,i.kt)("inlineCode",{parentName:"li"},"props.dispatch")," that you may use to manually dispatch action")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// ... Component\nconst mapStateToProps = (state) => state.partOfState\nexport default connect(mapStateToProps)(Component)\n")),(0,i.kt)("h4",{id:"do-not-subscribe-to-the-store-and-inject-action-creators"},"Do not subscribe to the store and inject action creators"),(0,i.kt)("p",null,"If you call ",(0,i.kt)("inlineCode",{parentName:"p"},"connect")," with only ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps"),", your component will:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"not")," re-render when the store changes"),(0,i.kt)("li",{parentName:"ul"},"receive each of the action creators you inject with ",(0,i.kt)("inlineCode",{parentName:"li"},"mapDispatchToProps")," as props and automatically dispatch the actions upon being called")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { addTodo } from './actionCreators'\n// ... Component\nexport default connect(null, { addTodo })(Component)\n")),(0,i.kt)("h4",{id:"subscribe-to-the-store-and-inject-action-creators"},"Subscribe to the store and inject action creators"),(0,i.kt)("p",null,"If you call ",(0,i.kt)("inlineCode",{parentName:"p"},"connect")," with both ",(0,i.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps"),", your component will:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"subscribe to the values that ",(0,i.kt)("inlineCode",{parentName:"li"},"mapStateToProps")," extracts from the store, and re-render only when those values have changed"),(0,i.kt)("li",{parentName:"ul"},"receive all of the action creators you inject with ",(0,i.kt)("inlineCode",{parentName:"li"},"mapDispatchToProps")," as props and automatically dispatch the actions upon being called.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as actionCreators from './actionCreators'\n// ... Component\nconst mapStateToProps = (state) => state.partOfState\nexport default connect(mapStateToProps, actionCreators)(Component)\n")),(0,i.kt)("p",null,"These four cases cover the most basic usages of ",(0,i.kt)("inlineCode",{parentName:"p"},"connect"),". To read more about ",(0,i.kt)("inlineCode",{parentName:"p"},"connect"),", continue reading our ",(0,i.kt)("a",{parentName:"p",href:"/react-redux-cn/api/connect"},"API section")," that explains it in more detail."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Now let\u2019s connect the rest of our ",(0,i.kt)("inlineCode",{parentName:"p"},"<TodoApp />"),"."),(0,i.kt)("p",null,"How should we implement the interaction of toggling todos? A keen reader might already have an answer. If you have your environment set up and have followed through up until this point, now is a good time to leave it aside and implement the feature by yourself. There would be no surprise that we connect our ",(0,i.kt)("inlineCode",{parentName:"p"},"<Todo />")," to dispatch ",(0,i.kt)("inlineCode",{parentName:"p"},"toggleTodo")," in a similar way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// components/Todo.js\n\n// ... other imports\nimport { connect } from "react-redux";\nimport { toggleTodo } from "../redux/actions";\n\nconst Todo = // ... component implementation\n\nexport default connect(\n  null,\n  { toggleTodo }\n)(Todo);\n')),(0,i.kt)("p",null,"Now our todo\u2019s can be toggled complete. We\u2019re almost there!"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/4UBXYtj.png",alt:null})),(0,i.kt)("p",null,"Finally, let\u2019s implement our ",(0,i.kt)("inlineCode",{parentName:"p"},"VisibilityFilters")," feature."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<VisibilityFilters />")," component needs to be able to read from the store which filter is currently active, and dispatch actions to the store. Therefore, we need to pass both a ",(0,i.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," here can be a simple accessor of the ",(0,i.kt)("inlineCode",{parentName:"p"},"visibilityFilter")," state. And the ",(0,i.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," will contain the ",(0,i.kt)("inlineCode",{parentName:"p"},"setFilter")," action creator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// components/VisibilityFilters.js\n\n// ... other imports\nimport { connect } from "react-redux";\nimport { setFilter } from "../redux/actions";\n\nconst VisibilityFilters = // ... component implementation\n\nconst mapStateToProps = state => {\n  return { activeFilter: state.visibilityFilter };\n};\nexport default connect(\n  mapStateToProps,\n  { setFilter }\n)(VisibilityFilters);\n')),(0,i.kt)("p",null,"Meanwhile, we also need to update our ",(0,i.kt)("inlineCode",{parentName:"p"},"<TodoList />")," component to filter todos according to the active filter. Previously the ",(0,i.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," we passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"<TodoList />")," ",(0,i.kt)("inlineCode",{parentName:"p"},"connect")," function call was simply the selector that selects the whole list of todos. Let\u2019s write another selector to help filtering todos by their status."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// redux/selectors.js\n\n// ... other selectors\nexport const getTodosByVisibilityFilter = (store, visibilityFilter) => {\n  const allTodos = getTodos(store)\n  switch (visibilityFilter) {\n    case VISIBILITY_FILTERS.COMPLETED:\n      return allTodos.filter((todo) => todo.completed)\n    case VISIBILITY_FILTERS.INCOMPLETE:\n      return allTodos.filter((todo) => !todo.completed)\n    case VISIBILITY_FILTERS.ALL:\n    default:\n      return allTodos\n  }\n}\n")),(0,i.kt)("p",null,"And connecting to the store with the help of the selector:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// components/TodoList.js\n\n// ...\n\nconst mapStateToProps = (state) => {\n  const { visibilityFilter } = state\n  const todos = getTodosByVisibilityFilter(state, visibilityFilter)\n  return { todos }\n}\n\nexport default connect(mapStateToProps)(TodoList)\n")),(0,i.kt)("p",null,"Now we've finished a very simple example of a todo app with React Redux. All our components are connected! Isn't that nice? \ud83c\udf89\ud83c\udf8a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/ONqer2R.png",alt:null})),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redux.js.org/basics/usage-with-react"},"Usage with React")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.isquaredsoftware.com/presentations/workshops/redux-fundamentals/react-redux.html"},"Using the React Redux Bindings")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e"},"Higher Order Components in Depth")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redux.js.org/recipes/computing-derived-data#sharing-selectors-across-multiple-components"},"Computing Derived Data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.isquaredsoftware.com/2017/12/idiomatic-redux-using-reselect-selectors/"},"Idiomatic Redux: Using Reselect Selectors for Encapsulation and Performance"))),(0,i.kt)("h2",{id:"get-more-help"},"Get More Help"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.reactiflux.com"},"Reactiflux")," Redux channel"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/tagged/react-redux"},"StackOverflow")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/react-redux/issues/"},"GitHub Issues"))))}m.isMDXComponent=!0}}]);