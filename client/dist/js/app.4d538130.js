(function(t){function s(s){for(var a,n,o=s[0],l=s[1],c=s[2],u=0,m=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&m.push(i[n][0]),i[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(s);while(m.length)m.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,s=0;s<r.length;s++){for(var e=r[s],a=!0,o=1;o<e.length;o++){var l=e[o];0!==i[l]&&(a=!1)}a&&(r.splice(s--,1),t=n(n.s=e[0]))}return t}var a={},i={app:0},r=[];function n(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=a,n.d=function(t,s,e){n.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,s){if(1&s&&(t=n(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)n.d(e,a,function(s){return t[s]}.bind(null,a));return e},n.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(s,"a",s),s},n.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=s,o=o.slice();for(var c=0;c<o.length;c++)s(o[c]);var d=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"034f":function(t,s,e){"use strict";var a=e("85ec"),i=e.n(a);i.a},"158c":function(t,s,e){"use strict";var a=e("ce1b"),i=e.n(a);i.a},"24fa":function(t,s,e){},3712:function(t,s,e){},"3b8a":function(t,s,e){"use strict";var a=e("3712"),i=e.n(a);i.a},"56d7":function(t,s,e){"use strict";e.r(s);var a=e("2b0e"),i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},r=[],n={name:"App"},o=n,l=(e("034f"),e("2877")),c=Object(l["a"])(o,i,r,!1,null,null,null),d=c.exports,u=e("8c4f"),m=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"boards container-fluid boardback"},[e("Nav"),t._v(" "),e("div",{staticClass:"row justify-content-around mt-5"},t._l(t.boards,(function(s){return e("div",{key:s._id,staticClass:"col-sm-3"},[e("div",{staticClass:"card m-3"},[e("div",{staticClass:"card-body"},[e("router-link",{attrs:{to:{name:"board",params:{boardId:s._id}}}},[e("div",[e("h3",{staticClass:"card-title"},[t._v(t._s(s.title))]),t._v(" "),e("p",{staticClass:"card-text"},[t._v(t._s(s.description))])])]),t._v(" "),e("button",{staticClass:"btn btn-danger delete-btn",on:{click:function(e){t.deleteBoard(s._id)}}},[t._v("Delete Board")])],1)])])})))],1)},p=[],v=e("ac68"),h=e.n(v);class f{static async inputData(t="Enter Inputs"){try{const{value:s}=await h.a.fire({title:t,html:'<input id="swal-input1" class="swal2-input"><input id="swal-input2" class="swal2-input">',focusConfirm:!1,preConfirm:()=>[document.getElementById("swal-input1").value,document.getElementById("swal-input2").value]});if(s)return{title:s[0],description:s[1]}}catch(s){return!1}}static async inputList(t="Enter Inputs"){try{const{value:s}=await h.a.fire({title:t,html:'<input id="swal-input1" class="swal2-input">',focusConfirm:!1,preConfirm:()=>[document.getElementById("swal-input1").value]});if(s)return s[0]}catch(s){return!1}}}var b=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container-fluid p-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 pl-0 pr-0"},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-transparent"},[a("div",[a("p",{staticClass:"navbar-brand m-0 bg-light rounded pl-2 pr-2"},[a("i",{staticClass:"fas fa-edit mr-2"}),t._v(" "),a("router-link",{attrs:{to:"/"}},[a("img",{staticClass:"img",attrs:{alt:"Vue logo",src:e("cf05")}}),t._v(" "),a("span",{staticClass:"text-dark"},[t._v("anban")])])],1)]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav ml-auto mr-3"},["boards"==this.$route.name?a("div",[a("button",{staticClass:"btn btn-primary mr-3",on:{click:t.addBoard}},[t._v("\n                Create Board\n              ")])]):"board"==this.$route.name?a("div",[a("button",{staticClass:"btn btn-success mr-3",on:{click:t.addList}},[t._v("\n                Create List\n              ")])]):t._e(),t._v(" "),a("li",[a("button",{staticClass:"btn btn-danger ml-4",on:{click:t.logout}},[t._v("\n                Logout\n              ")])])])])])])])])},g=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],w={name:"Nav",methods:{logout(){this.$store.dispatch("logout")},async addBoard(){let t=await f.inputData("Create A New Board");t&&(this.$store.dispatch("addBoard",t),this.newBoard={title:"",description:""})},async addList(){console.log(this.$route.params.boardId);let t=await f.inputList("Create A New List");t&&(this.$store.dispatch("addList",{title:t,boardId:this.$route.params.boardId}),this.newList={title:""})}}},_=w,C=(e("8160"),Object(l["a"])(_,b,g,!1,null,"1d1cca27",null)),k=C.exports,y={name:"boards",mounted(){this.$store.dispatch("resetLists"),this.$store.dispatch("getBoards")},data(){return{newBoard:{title:"",description:""}}},computed:{boards(){return this.$store.state.boards}},methods:{deleteBoard(t){this.$store.dispatch("deleteBoard",t)}},components:{Nav:k}},x=y,$=(e("3b8a"),Object(l["a"])(x,m,p,!1,null,null,null)),L=$.exports,T=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"board container-fluid bakkground"},[e("Nav"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 mx-auto"},[e("h1",{staticClass:"text-light border bg-dark"},[t._v(t._s(t.board.title))])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"row"},t._l(t.lists,(function(t){return e("div",{key:t.id,staticClass:"col-12 col-sm-4 col-lg-3"},[e("list-component",{attrs:{listData:t}})],1)})))])])],1)},B=[],E=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"list border p-2"},[e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-danger trash-btn",on:{click:function(s){t.deleteList(t.listData.id)}}},[e("i",{staticClass:"fas fa-trash-alt text-white"})])]),t._v(" "),e("h4",[t._v(t._s(t.listData.title))]),t._v(" "),e("div",[e("form",{on:{submit:function(s){s.preventDefault(),t.addTask()}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask.description,expression:"newTask.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Task",required:""},domProps:{value:t.newTask.description},on:{input:function(s){s.target.composing||t.$set(t.newTask,"description",s.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-success mb-1"},[t._v("Add Task")])])]),t._v(" "),e("div",[e("div",{staticClass:"row"},t._l(t.tasks,(function(s){return e("div",{key:s.id,staticClass:"col-12 pb-1 pt-1 mt-2 mb-2",attrs:{id:t.listData.id}},[e("task-component",{attrs:{taskData:s}})],1)})))])])},I=[],D=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"task p-2 border",attrs:{id:t.taskData.id}},[e("i",{staticClass:"pin"}),t._v(" "),e("div",{staticClass:"text-right"},[e("div",{staticClass:"dropdown"},[t._m(0),t._v(" "),e("div",{staticClass:"dropdown-content text-left"},[e("a",{attrs:{href:"#"}},[t._v("Edit Task")]),t._v(" "),e("a",{attrs:{href:"#"},on:{click:function(s){t.deleteTask(t.taskData.id)}}},[t._v("Delete Task")]),t._v(" "),e("div",{staticClass:"sub-dropdown w-100"},[e("a",{staticClass:"sub-dropbtn"},[t._v("Move To")]),t._v(" "),e("div",{staticClass:"sub-dropdown-content"},t._l(t.lists,(function(s){return e("a",{key:s.id,attrs:{href:"#"},on:{click:function(e){t.updateListId(s.id)}}},[t._v(t._s(s.title))])})))])])])]),t._v(" "),e("div",{staticClass:"text-center"},[e("h5",[t._v(t._s(t.taskData.description))])]),t._v(" "),e("form",{on:{submit:function(s){s.preventDefault(),t.addComment()}}},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"form-group mb-0"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment.content,expression:"newComment.content"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Comment",required:""},domProps:{value:t.newComment.content},on:{input:function(s){s.target.composing||t.$set(t.newComment,"content",s.target.value)}}})]),t._v(" "),t._m(1)])]),t._v(" "),t._l(t.taskData.comments,(function(s){return e("div",{key:s.id,staticClass:"d-flex justify-content-between mb-4 mt-4"},[e("p",[t._v(t._s(s.content))]),t._v(" "),e("div",{staticClass:"dropdown"},[t._m(2,!0),t._v(" "),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[e("button",{staticClass:"dropdown-item"},[t._v("Edit")]),t._v(" "),e("button",{staticClass:"dropdown-item",on:{click:function(e){t.deleteComment(s)}}},[t._v("Delete")])])])])}))],2)},U=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("button",{staticClass:"dropbtn"},[e("i",{staticClass:"fas fa-ellipsis-h"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("button",{staticClass:"btn btn-warning"},[e("i",{staticClass:"fa fa-plus"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("button",{staticClass:"btn p-0",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("i",{staticClass:"fas fa-ellipsis-h"})])}],N={name:"Task",props:["taskData"],data(){return{newComment:{content:"",taskId:this.taskData.id}}},methods:{addComment(){let t={...this.newComment};this.$store.dispatch("addComment",t),console.log("comment",t),this.newComment={content:"",taskId:this.taskData.id}},deleteTask(t){this.$store.dispatch("deleteTask",t)},deleteComment(t){let s={...t,taskId:this.taskData.id};this.$store.dispatch("deleteComment",s)},updateListId(t){this.taskData.listId=t,this.$store.dispatch("editTask",this.taskData)}},computed:{lists(){return this.$store.state.lists}}},j=N,P=(e("fcc1"),Object(l["a"])(j,D,U,!1,null,null,null)),O=P.exports,S={name:"List",props:["listData"],mounted(){this.$store.dispatch("getTasks")},data(){return{newTask:{description:"",boardId:this.listData.boardId,listId:this.listData.id}}},computed:{tasks(){return this.$store.state.tasks.filter(t=>t.listId==this.listData.id)}},methods:{deleteList(t){this.$store.dispatch("deleteList",t)},addTask(){let t={...this.newTask};this.$store.dispatch("addTask",t),console.log(t),this.newTask={description:"",boardId:this.listData.boardId,listId:this.listData.id}}},components:{TaskComponent:O}},F=S,R=(e("9223"),Object(l["a"])(F,E,I,!1,null,"1de54308",null)),A=R.exports,M={name:"board",props:["boardId"],mounted(){this.$store.dispatch("getBoards"),this.$store.dispatch("getListsByBoardId",this.boardId)},computed:{board(){return this.$store.state.boards.find(t=>t._id==this.boardId)||{title:"Loading..."}},lists(){return this.$store.state.lists}},data(){return{newList:{title:"",boardId:this.boardId}}},components:{ListComponent:A,Nav:k}},V=M,q=(e("158c"),Object(l["a"])(V,T,B,!1,null,null,null)),J=q.exports,H=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"login background"},[e("div",{staticClass:"row p-0 m-auto d-flex justify-content-center"},[e("div",{staticClass:"col-md-4"},[t.loginForm?e("form",{staticClass:"text-center border border-light rounded p-5 form bg-light",on:{submit:function(s){return s.preventDefault(),t.loginUser(s)}}},[t._m(0),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.email,expression:"creds.email"}],staticClass:"form-control mb-4",attrs:{type:"email",id:"defaultLoginFormEmail",placeholder:"E-mail"},domProps:{value:t.creds.email},on:{input:function(s){s.target.composing||t.$set(t.creds,"email",s.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.password,expression:"creds.password"}],staticClass:"form-control mb-4",attrs:{type:"password",id:"defaultLoginFormPassword",placeholder:"Password"},domProps:{value:t.creds.password},on:{input:function(s){s.target.composing||t.$set(t.creds,"password",s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-success btn-block my-4",attrs:{type:"submit"}},[t._v("Sign in")]),t._v(" "),e("p",{staticClass:"text-dark"},[t._v("or sign in with:")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)]):e("form",{staticClass:"text-center border border-light rounded bg-light p-5 second regform",on:{submit:function(s){return s.preventDefault(),t.register(s)}}},[t._m(5),t._v(" "),e("div",{staticClass:"form-row mb-4"},[e("div",{staticClass:"col"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.name,expression:"newUser.name"}],staticClass:"form-control",attrs:{type:"text",id:"defaultRegisterFormFirstName",placeholder:"UserName"},domProps:{value:t.newUser.name},on:{input:function(s){s.target.composing||t.$set(t.newUser,"name",s.target.value)}}})])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.email,expression:"newUser.email"}],staticClass:"form-control mb-4",attrs:{type:"email",id:"defaultRegisterFormEmail",placeholder:"E-mail"},domProps:{value:t.newUser.email},on:{input:function(s){s.target.composing||t.$set(t.newUser,"email",s.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.password,expression:"newUser.password"}],staticClass:"form-control",attrs:{type:"password",id:"defaultRegisterFormPassword",placeholder:"Password"},domProps:{value:t.newUser.password},on:{input:function(s){s.target.composing||t.$set(t.newUser,"password",s.target.value)}}}),t._v(" "),e("small",{staticClass:"form-text text-dark mb-4",attrs:{id:"defaultRegisterFormPasswordHelpBlock"}},[t._v("At least 7 characters in length")]),t._v(" "),e("button",{staticClass:"btn btn-warning my-4 btn-block",attrs:{type:"submit"}},[t._v("Register")]),t._v(" "),e("p",{staticClass:"text-dark"},[t._v("or sign in with:")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9)]),t._v(" "),e("div",{staticClass:"action mt-4",on:{click:function(s){t.loginForm=!t.loginForm}}},[t.loginForm?e("p",{staticClass:"text-white"},[t._v("\n          No account? Click here to\n          "),e("span",{staticClass:"registration"},[t._v("Register")])]):e("p",{staticClass:"text-white"},[t._v("\n          Already have an account? Click here to\n          "),e("span",{staticClass:"registration"},[t._v("Login")])])])])])])},W=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"h4 mb-4 text-dark"},[a("img",{staticClass:"img",attrs:{alt:"Vue logo",src:e("cf05")}}),t._v("anban Sign in\n        ")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"mx-2",attrs:{href:"https://www.facebook.com",role:"button"}},[e("i",{staticClass:"fab fa-facebook-f text-primary"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"mx-2",attrs:{href:"https://www.twitter.com",role:"button"}},[e("i",{staticClass:"fab fa-twitter text-primary"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"mx-2",attrs:{href:"https://www.linkedin.com",role:"button"}},[e("i",{staticClass:"fab fa-linkedin-in text-primary"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"mx-2",attrs:{href:"https://www.github.com",role:"button"}},[e("i",{staticClass:"fab fa-github text-dark"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"h4 mb-4"},[t._v("\n          Register With\n          "),a("img",{staticClass:"img",attrs:{alt:"Vue logo",src:e("cf05")}}),t._v("anban Today!\n        ")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"mx-2",attrs:{href:"https://www.facebook.com",role:"button"}},[e("i",{staticClass:"fab fa-facebook-f text-primary"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"mx-2",attrs:{href:"https://www.twitter.com",role:"button"}},[e("i",{staticClass:"fab fa-twitter text-primary"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"mx-2",attrs:{href:"https://www.linkedin.com",role:"button"}},[e("i",{staticClass:"fab fa-linkedin-in text-primary"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"mx-2",attrs:{href:"https://www.github.com",role:"button"}},[e("i",{staticClass:"fab fa-github text-dark"})])}],z={name:"login",data(){return{loginForm:!0,creds:{email:"",password:""},newUser:{email:"",password:"",name:""}}},beforeCreate(){this.$store.state.user._id&&this.$router.push({name:"boards"})},methods:{register(){this.$store.dispatch("register",this.newUser)},loginUser(){this.$store.dispatch("login",this.creds)}}},G=z,K=(e("d6db"),Object(l["a"])(G,H,W,!1,null,null,null)),Q=K.exports;a["a"].use(u["a"]);var X=new u["a"]({routes:[{path:"/",name:"boards",component:L},{path:"/boards/:boardId",name:"board",props:!0,component:J},{path:"/login",name:"login",component:Q},{path:"*",redirect:"/"}]}),Y=e("2f62"),Z=e("bc3a"),tt=e.n(Z);let st=location.host.includes("localhost")?"//localhost:3000/":"/",et=tt.a.create({baseURL:st+"account/",timeout:3e3,withCredentials:!0});class at{static async Login(t){try{let s=await et.post("login",t);return s.data}catch(s){throw new Error(`[login failed] : ${s.response?s.response.data.error:"No response from server"}`)}}static async Register(t){try{let s=await et.post("register",t);return s.data}catch(s){throw new Error(`[registration failed] : ${s.response?s.response.data.error:"No response from server"}`)}}static async Logout(){try{await et.delete("logout");return!0}catch(t){throw new Error(`[logout failed] : ${t.response?t.response.data.error:"No response from server"}`)}}static async Authenticate(){try{let t=await et.get("authenticate");return t.data}catch(t){console.warn(`[Authentication failed] : ${t.response?t.response.data.error:"No response from server"}`)}}}a["a"].use(Y["a"]);let it=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",rt=tt.a.create({baseURL:it+"api/",timeout:3e3,withCredentials:!0});var nt=new Y["a"].Store({state:{user:{},boards:[],lists:[],activeBoard:{},tasks:[]},mutations:{setUser(t,s){t.user=s},setBoards(t,s){t.boards=s},setLists(t,s){t.lists=s},setTasks(t,s){t.tasks=s},resetState(t){t.user={},t.boards=[],t.lists=[],t.activeBoard={},t.tasks=[]},setTaskByList(t,s,e){a["a"].set(t.tasks,s,e)},setListsByBoard(t,s){t.lists=s},resetLists(t,s){t.lists=[]}},actions:{async register({commit:t,dispatch:s},e){try{let s=await at.Register(e);t("setUser",s),X.push({name:"boards"})}catch(a){console.warn(a.message)}},async login({commit:t,dispatch:s},e){try{let s=await at.Login(e);t("setUser",s),X.push({name:"boards"})}catch(a){console.warn(a.message)}},async logout({commit:t,dispatch:s}){try{await at.Logout();t("resetState"),X.push({name:"login"})}catch(e){console.warn(e.message)}},getBoards({commit:t,dispatch:s}){rt.get("boards").then(s=>{t("setBoards",s.data)})},addBoard({commit:t,dispatch:s},e){rt.post("boards",e).then(t=>{s("getBoards")})},deleteBoard({commit:t,dispatch:s},e){rt.delete("boards/"+e).then(t=>{s("getBoards")})},getLists({commit:t,dispatch:s}){rt.get("lists").then(s=>{t("setLists",s.data)})},resetLists({commit:t,dispatch:s}){t("resetLists")},getListsByBoardId({commit:t,dispatch:s},e){rt.get("boards/"+e+"/lists").then(s=>{t("setListsByBoard",s.data),console.log(s.data)})},getTasksByList({commit:t,dispatch:s},e){rt.get("tasks/"+e).then(s=>{t("setTaskByList",s.data)})},addList({commit:t,dispatch:s},e){rt.post("lists",e).then(t=>{s("getLists")})},deleteList({commit:t,dispatch:s},e){rt.delete("lists/"+e).then(t=>{s("getLists")})},getTasks({commit:t,dispatch:s}){rt.get("tasks").then(s=>{t("setTasks",s.data)})},addTask({commit:t,dispatch:s},e){rt.post("/tasks",e).then(t=>{s("getTasks")})},addComment({commit:t,dispatch:s},e){rt.put("tasks/"+e.taskId+"/acomments",e).then(t=>{console.log(t),s("getTasks")})},deleteTask({commit:t,dispatch:s},e){rt.delete("tasks/"+e).then(t=>{s("getTasks")})},deleteComment({commit:t,dispatch:s},e){rt.put("/tasks/"+e.taskId+"/dcomments",e).then(t=>{s("getTasks")})},editTask({commit:t,dispatch:s},e){rt.put("/tasks/"+e.id,e).then(t=>{s("getTasks")})}}});async function ot(){let t=await at.Authenticate();t?nt.commit("setUser",t):X.push({name:"login"}),new a["a"]({router:X,store:nt,render:t=>t(d)}).$mount("#app")}ot()},8160:function(t,s,e){"use strict";var a=e("fd17"),i=e.n(a);i.a},"85ec":function(t,s,e){},9223:function(t,s,e){"use strict";var a=e("aeb4"),i=e.n(a);i.a},aeb4:function(t,s,e){},ce1b:function(t,s,e){},cf05:function(t,s,e){t.exports=e.p+"img/logo.82b9c7a5.png"},d6db:function(t,s,e){"use strict";var a=e("e67a"),i=e.n(a);i.a},e67a:function(t,s,e){},fcc1:function(t,s,e){"use strict";var a=e("24fa"),i=e.n(a);i.a},fd17:function(t,s,e){}});
//# sourceMappingURL=app.4d538130.js.map