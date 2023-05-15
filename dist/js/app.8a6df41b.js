(function(){"use strict";var t={7197:function(t,e,o){var s=o(9242),a=o(3396);const n={class:"app"};function l(t,e,o,s,l,r){const i=(0,a.up)("navbar"),u=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(i),(0,a._)("div",n,[(0,a.Wm)(u)])],64)}o(7658);const r={class:"navbar"},i={class:"navbar__btns"};function u(t,e,o,s,n,l){const u=(0,a.up)("my-button");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",{onClick:e[0]||(e[0]=e=>t.$router.push("/"))},"Vue 3"),(0,a._)("div",i,[(0,a.Wm)(u,{onClick:e[1]||(e[1]=e=>t.$router.push("/posts"))},{default:(0,a.w5)((()=>[(0,a.Uk)("Посты")])),_:1}),(0,a.Wm)(u,{style:{"margin-left":"20px"},onClick:e[2]||(e[2]=e=>t.$router.push("/about"))},{default:(0,a.w5)((()=>[(0,a.Uk)("О сайте")])),_:1}),(0,a.Wm)(u,{style:{"margin-left":"20px"},onClick:e[3]||(e[3]=e=>t.$router.push("/store"))},{default:(0,a.w5)((()=>[(0,a.Uk)("store")])),_:1}),(0,a.Wm)(u,{style:{"margin-left":"20px"},onClick:e[4]||(e[4]=e=>t.$router.push("/composition"))},{default:(0,a.w5)((()=>[(0,a.Uk)("Composition")])),_:1})])])}var d={},c=o(89);const p=(0,c.Z)(d,[["render",u],["__scopeId","data-v-de9d73da"]]);var m=p,h={components:{Navbar:m}};const v=(0,c.Z)(h,[["render",l]]);var g=v;const y={class:"btn"};function f(t,e,o,s,n,l){return(0,a.wg)(),(0,a.iD)("button",y,[(0,a.WI)(t.$slots,"default",{},void 0,!0)])}var w={name:"my-button"};const P=(0,c.Z)(w,[["render",f],["__scopeId","data-v-47dfc971"]]);var _=P;const b=["value"];function k(t,e,o,s,n,l){return(0,a.wg)(),(0,a.iD)("input",{value:o.modelValue,onInput:e[0]||(e[0]=(...t)=>l.updateInput&&l.updateInput(...t)),class:"input",type:"text"},null,40,b)}var S={name:"my-input",props:{modelValue:[String,Number]},methods:{updateInput(t){this.$emit("update:modelValue",t.target.value)}}};const V=(0,c.Z)(S,[["render",k],["__scopeId","data-v-0c401ab1"]]);var C=V;function D(t,e,o,n,l,r){return t.show?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"dialog",onClick:e[1]||(e[1]=(0,s.iM)(((...e)=>t.hideDialog&&t.hideDialog(...e)),["stop"]))},[(0,a._)("div",{onClick:e[0]||(e[0]=(0,s.iM)((()=>{}),["stop"])),class:"dialog__content"},[(0,a.WI)(t.$slots,"default",{},void 0,!0)])])):(0,a.kq)("",!0)}var W={props:{show:{type:Boolean,default:!1}},methods:{hideDialog(){this.$emit("update:show",!1)}},mounted(){console.log("mixin mounted")}},M={name:"my-dialog",mixins:[W],mounted(){console.log("dialog mounted")}};const O=(0,c.Z)(M,[["render",D],["__scopeId","data-v-3f4386d6"]]);var U=O,L=[_,C,U];const Q=(0,a._)("h1",null,"Добро пожаловать на курс по Vue 3",-1),I=[Q];function x(t,e,o,s,n,l){return(0,a.wg)(),(0,a.iD)("div",null,I)}var Z={};const j=(0,c.Z)(Z,[["render",x]]);var $=j,A=o(2483);const H=(0,a._)("h1",null,"Страница с постами",-1),T={class:"app__btns"},z={key:1},F={class:"observer"};function R(t,e,o,s,n,l){const r=(0,a.up)("my-input"),i=(0,a.up)("my-button"),u=(0,a.up)("my-select"),d=(0,a.up)("post-form"),c=(0,a.up)("my-dialog"),p=(0,a.up)("post-list"),m=(0,a.Q2)("focus"),h=(0,a.Q2)("intersection");return(0,a.wg)(),(0,a.iD)("div",null,[H,(0,a.wy)((0,a.Wm)(r,{modelValue:n.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=t=>n.searchQuery=t),placeholder:"Поиск...."},null,8,["modelValue"]),[[m]]),(0,a._)("div",T,[(0,a.Wm)(i,{onClick:l.showDialog},{default:(0,a.w5)((()=>[(0,a.Uk)(" Создать пользователя ")])),_:1},8,["onClick"]),(0,a.Wm)(u,{modelValue:n.selectedSort,"onUpdate:modelValue":e[1]||(e[1]=t=>n.selectedSort=t),options:n.sortOptions},null,8,["modelValue","options"])]),(0,a.Wm)(c,{show:n.dialogVisible,"onUpdate:show":e[2]||(e[2]=t=>n.dialogVisible=t)},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{onCreate:l.createPost},null,8,["onCreate"])])),_:1},8,["show"]),n.isPostsLoading?((0,a.wg)(),(0,a.iD)("div",z,"Идет загрузка...")):((0,a.wg)(),(0,a.j4)(p,{key:0,posts:l.sortedAndSearchedPosts,onRemove:l.removePost},null,8,["posts","onRemove"])),(0,a.wy)((0,a._)("div",F,null,512),[[h,l.loadMorePosts]])])}const B=t=>((0,a.dD)("data-v-381b695e"),t=t(),(0,a.Cn)(),t),Y=B((()=>(0,a._)("h4",null,"Создание поста",-1)));function q(t,e,o,n,l,r){const i=(0,a.up)("my-input"),u=(0,a.up)("my-button"),d=(0,a.Q2)("focus");return(0,a.wg)(),(0,a.iD)("form",{onSubmit:e[2]||(e[2]=(0,s.iM)((()=>{}),["prevent"]))},[Y,(0,a.wy)((0,a.Wm)(i,{modelValue:l.post.title,"onUpdate:modelValue":e[0]||(e[0]=t=>l.post.title=t),type:"text",placeholder:"Название"},null,8,["modelValue"]),[[d]]),(0,a.Wm)(i,{modelValue:l.post.body,"onUpdate:modelValue":e[1]||(e[1]=t=>l.post.body=t),type:"text",placeholder:"Описание"},null,8,["modelValue"]),(0,a.Wm)(u,{style:{"align-self":"flex-end","margin-top":"15px"},onClick:r.createPost},{default:(0,a.w5)((()=>[(0,a.Uk)(" Создать ")])),_:1},8,["onClick"])],32)}var E={data(){return{post:{title:"",body:""}}},methods:{createPost(){this.post.id=Date.now(),this.$emit("create",this.post),this.post={title:"",body:""}}}};const K=(0,c.Z)(E,[["render",q],["__scopeId","data-v-381b695e"]]);var N=K;const G=t=>((0,a.dD)("data-v-df55615e"),t=t(),(0,a.Cn)(),t),J={key:0},X=G((()=>(0,a._)("h3",null,"Список пользователей",-1))),tt={key:1,style:{color:"red"}};function et(t,e,o,n,l,r){const i=(0,a.up)("post-item");return o.posts.length>0?((0,a.wg)(),(0,a.iD)("div",J,[X,(0,a.Wm)(s.W3,{name:"user-list"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.posts,(e=>((0,a.wg)(),(0,a.j4)(i,{post:e,key:e.id,onRemove:o=>t.$emit("remove",e)},null,8,["post","onRemove"])))),128))])),_:1})])):((0,a.wg)(),(0,a.iD)("h2",tt," Список пользователей пуст "))}var ot=o(7139);const st=t=>((0,a.dD)("data-v-529df572"),t=t(),(0,a.Cn)(),t),at={class:"post"},nt=st((()=>(0,a._)("strong",null,"Название:",-1))),lt=st((()=>(0,a._)("strong",null,"Описание:",-1))),rt={class:"post__btns"};function it(t,e,o,s,n,l){const r=(0,a.up)("my-button");return(0,a.wg)(),(0,a.iD)("div",at,[(0,a._)("div",null,[(0,a._)("div",null,(0,ot.zw)(o.post.id),1),(0,a._)("div",null,[nt,(0,a.Uk)(" "+(0,ot.zw)(o.post.title),1)]),(0,a._)("div",null,[lt,(0,a.Uk)(" "+(0,ot.zw)(o.post.body),1)])]),(0,a._)("div",rt,[(0,a.Wm)(r,{onClick:e[0]||(e[0]=e=>t.$router.push(`/posts/${o.post.id}`))},{default:(0,a.w5)((()=>[(0,a.Uk)(" Открыть ")])),_:1}),(0,a.Wm)(r,{onClick:e[1]||(e[1]=e=>t.$emit("remove",o.post))},{default:(0,a.w5)((()=>[(0,a.Uk)(" Удалить ")])),_:1})])])}var ut={props:{post:{type:Object,required:!0}}};const dt=(0,c.Z)(ut,[["render",it],["__scopeId","data-v-529df572"]]);var ct=dt,pt={components:{PostItem:ct},props:{posts:{type:Array,required:!0}}};const mt=(0,c.Z)(pt,[["render",et],["__scopeId","data-v-df55615e"]]);var ht=mt,vt=o(8474);const gt=t=>((0,a.dD)("data-v-4cd79a44"),t=t(),(0,a.Cn)(),t),yt=["value"],ft=gt((()=>(0,a._)("option",{disabled:"",value:""},"Выберите из списка",-1))),wt=["value"];function Pt(t,e,o,s,n,l){return(0,a.wg)(),(0,a.iD)("select",{value:o.modelValue,onChange:e[0]||(e[0]=(...t)=>l.changeOption&&l.changeOption(...t))},[ft,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.options,(t=>((0,a.wg)(),(0,a.iD)("option",{key:t.value,value:t.value},(0,ot.zw)(t.name),9,wt)))),128))],40,yt)}var _t={name:"my-select",props:{modelValue:{type:String},options:{type:Array,default:()=>[]}},methods:{changeOption(t){this.$emit("update:modelValue",t.target.value)}}};const bt=(0,c.Z)(_t,[["render",Pt],["__scopeId","data-v-4cd79a44"]]);var kt=bt,St={components:{MyInput:C,MySelect:kt,MyButton:_,PostList:ht,PostForm:N},data(){return{posts:[],dialogVisible:!1,isPostsLoading:!1,selectedSort:"",searchQuery:"",page:1,limit:10,totalPages:0,sortOptions:[{value:"title",name:"По названию"},{value:"body",name:"По содержимому"}]}},methods:{createPost(t){this.posts.push(t),this.dialogVisible=!1},removePost(t){this.posts=this.posts.filter((e=>e.id!==t.id))},showDialog(){this.dialogVisible=!0},async fetchPosts(){try{this.isPostsLoading=!0;const t=await vt.Z.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:this.page,_limit:this.limit}});this.totalPages=Math.ceil(t.headers["x-total-count"]/this.limit),this.posts=t.data}catch(t){alert("Ошибка")}finally{this.isPostsLoading=!1}},async loadMorePosts(){try{this.page+=1;const t=await vt.Z.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:this.page,_limit:this.limit}});this.totalPages=Math.ceil(t.headers["x-total-count"]/this.limit),this.posts=[...this.posts,...t.data]}catch(t){alert("Ошибка")}}},mounted(){this.fetchPosts()},computed:{sortedPosts(){return[...this.posts].sort(((t,e)=>t[this.selectedSort]?.localeCompare(e[this.selectedSort])))},sortedAndSearchedPosts(){return this.sortedPosts.filter((t=>t.title.toLowerCase().includes(this.searchQuery.toLowerCase())))}},watch:{}};const Vt=(0,c.Z)(St,[["render",R]]);var Ct=Vt;const Dt=(0,a._)("h1",null,"Данное приложение было создано в результате обучения на канале Ulbi TV",-1),Wt=[Dt];function Mt(t,e,o,s,n,l){return(0,a.wg)(),(0,a.iD)("div",null,Wt)}var Ot={};const Ut=(0,c.Z)(Ot,[["render",Mt]]);var Lt=Ut;function Qt(t,e,o,s,n,l){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("h1",null,"Это страница поста с ID = "+(0,ot.zw)(t.$route.params.id),1)])}var It={};const xt=(0,c.Z)(It,[["render",Qt]]);var Zt=xt;const jt=(0,a._)("h1",null,"Страница с постами",-1),$t={class:"app__btns"},At={key:1},Ht={class:"observer"},Tt={class:"page__wrapper"},zt=["onClick"];function Ft(t,e,o,s,n,l){const r=(0,a.up)("my-input"),i=(0,a.up)("my-button"),u=(0,a.up)("my-select"),d=(0,a.up)("post-form"),c=(0,a.up)("my-dialog"),p=(0,a.up)("post-list"),m=(0,a.Q2)("focus"),h=(0,a.Q2)("intersection");return(0,a.wg)(),(0,a.iD)("div",null,[jt,(0,a.wy)((0,a.Wm)(r,{"model-value":t.searchQuery,"onUpdate:modelValue":t.setSearchQuery,placeholder:"Поиск...."},null,8,["model-value","onUpdate:modelValue"]),[[m]]),(0,a._)("div",$t,[(0,a.Wm)(i,{onClick:l.showDialog},{default:(0,a.w5)((()=>[(0,a.Uk)(" Создать пользователя ")])),_:1},8,["onClick"]),(0,a.Wm)(u,{"model-value":t.selectedSort,"onUpdate:modelValue":t.setSelectedSort,options:t.sortOptions},null,8,["model-value","onUpdate:modelValue","options"])]),(0,a.Wm)(c,{show:n.dialogVisible,"onUpdate:show":e[0]||(e[0]=t=>n.dialogVisible=t)},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{onCreate:l.createPost},null,8,["onCreate"])])),_:1},8,["show"]),t.isPostsLoading?((0,a.wg)(),(0,a.iD)("div",At,"Идет загрузка...")):((0,a.wg)(),(0,a.j4)(p,{key:0,posts:t.sortedAndSearchedPosts,onRemove:l.removePost},null,8,["posts","onRemove"])),(0,a.wy)((0,a._)("div",Ht,null,512),[[h,t.loadMorePosts]]),(0,a._)("div",Tt,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.totalPages,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e,class:(0,ot.C_)(["page",{"current-page":t.page===e}]),onClick:o=>t.changePage(e)},(0,ot.zw)(e),11,zt)))),128))])])}var Rt=o(65),Bt={components:{MyInput:C,MySelect:kt,MyButton:_,PostList:ht,PostForm:N},data(){return{dialogVisible:!1}},methods:{...(0,Rt.OI)({setPage:"post/setPage",setSearchQuery:"post/setSearchQuery",setSelectedSort:"post/setSelectedSort"}),...(0,Rt.nv)({loadMorePosts:"post/loadMorePosts",fetchPosts:"post/fetchPosts"}),createPost(t){this.posts.push(t),this.dialogVisible=!1},removePost(t){this.posts=this.posts.filter((e=>e.id!==t.id))},showDialog(){this.dialogVisible=!0}},mounted(){this.fetchPosts()},computed:{...(0,Rt.rn)({posts:t=>t.post.posts,isPostsLoading:t=>t.post.isPostsLoading,selectedSort:t=>t.post.selectedSort,searchQuery:t=>t.post.searchQuery,page:t=>t.post.page,limit:t=>t.post.limit,totalPages:t=>t.post.totalPages,sortOptions:t=>t.post.sortOptions}),...(0,Rt.Se)({sortedPosts:"post/sortedPosts",sortedAndSearchedPosts:"post/sortedAndSearchedPosts"})},watch:{}};const Yt=(0,c.Z)(Bt,[["render",Ft]]);var qt=Yt;const Et=(0,a._)("h1",null,"Страница с постами",-1),Kt={class:"app__btns"},Nt={key:1};function Gt(t,e,o,s,n,l){const r=(0,a.up)("my-input"),i=(0,a.up)("my-button"),u=(0,a.up)("my-select"),d=(0,a.up)("post-form"),c=(0,a.up)("my-dialog"),p=(0,a.up)("post-list"),m=(0,a.Q2)("focus");return(0,a.wg)(),(0,a.iD)("div",null,[Et,(0,a.wy)((0,a.Wm)(r,{modelValue:s.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=t=>s.searchQuery=t),placeholder:"Поиск...."},null,8,["modelValue"]),[[m]]),(0,a._)("div",Kt,[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a.Uk)(" Создать пользователя ")])),_:1}),(0,a.Wm)(u,{modelValue:s.selectedSort,"onUpdate:modelValue":e[1]||(e[1]=t=>s.selectedSort=t),options:n.sortOptions},null,8,["modelValue","options"])]),(0,a.Wm)(c,{show:n.dialogVisible,"onUpdate:show":e[2]||(e[2]=t=>n.dialogVisible=t)},{default:(0,a.w5)((()=>[(0,a.Wm)(d)])),_:1},8,["show"]),s.isPostsLoading?((0,a.wg)(),(0,a.iD)("div",Nt,"Идет загрузка...")):((0,a.wg)(),(0,a.j4)(p,{key:0,posts:s.sortedAndSearchedPosts},null,8,["posts"]))])}var Jt=o(4870);function Xt(t){const e=(0,Jt.iH)([]),o=(0,Jt.iH)(0),s=(0,Jt.iH)(!0),n=async()=>{try{const s=await vt.Z.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:1,_limit:t}});o.value=Math.ceil(s.headers["x-total-count"]/t),e.value=s.data}catch(a){alert("Ошибка")}finally{s.value=!1}};return(0,a.bv)(n),{posts:e,isPostsLoading:s,totalPages:o}}function te(t){const e=(0,Jt.iH)(""),o=(0,a.Fl)((()=>[...t.value].sort(((t,o)=>t[e.value]?.localeCompare(o[e.value])))));return{selectedSort:e,sortedPosts:o}}function ee(t){const e=(0,Jt.iH)(""),o=(0,a.Fl)((()=>t.value.filter((t=>t.title.toLowerCase().includes(e.value.toLowerCase())))));return{searchQuery:e,sortedAndSearchedPosts:o}}var oe={components:{MyInput:C,MySelect:kt,MyButton:_,PostList:ht,PostForm:N},data(){return{dialogVisible:!1,sortOptions:[{value:"title",name:"По названию"},{value:"body",name:"По содержимому"}]}},setup(t){const{posts:e,totalPages:o,isPostsLoading:s}=Xt(10),{sortedPosts:a,selectedSort:n}=te(e),{searchQuery:l,sortedAndSearchedPosts:r}=ee(a);return{posts:e,totalPages:o,isPostsLoading:s,sortedPosts:a,selectedSort:n,searchQuery:l,sortedAndSearchedPosts:r}}};const se=(0,c.Z)(oe,[["render",Gt]]);var ae=se;const ne=[{path:"/",component:$},{path:"/posts",component:Ct},{path:"/about",component:Lt},{path:"/posts/:id",component:Zt},{path:"/store",component:qt},{path:"/composition",component:ae}],le=(0,A.p7)({routes:ne,history:(0,A.PO)("/")});var re=le,ie={mounted(t){t.focus()},name:"focus"},ue={mounted(t,e){const o={rootMargin:"0px",threshold:1},s=(t,o)=>{t[0].isIntersecting&&e.value()},a=new IntersectionObserver(s,o);a.observe(t)},name:"intersection"},de=[ie,ue];const ce={state:()=>({posts:[],isPostsLoading:!1,selectedSort:"",searchQuery:"",page:1,limit:10,totalPages:0,sortOptions:[{value:"title",name:"По названию"},{value:"body",name:"По содержимому"}]}),getters:{sortedPosts(t){return[...t.posts].sort(((e,o)=>e[t.selectedSort]?.localeCompare(o[t.selectedSort])))},sortedAndSearchedPosts(t,e){return e.sortedPosts.filter((e=>e.title.toLowerCase().includes(t.searchQuery.toLowerCase())))}},mutations:{setPosts(t,e){t.posts=e},setLoading(t,e){t.isPostsLoading=e},setPage(t,e){t.page=e},setSelectedSort(t,e){t.selectedSort=e},setTotalPages(t,e){t.totalPages=e},setSearchQuery(t,e){t.searchQuery=e}},actions:{async fetchPosts({state:t,commit:e}){try{e("setLoading",!0);const o=await vt.Z.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:t.page,_limit:t.limit}});e("setTotalPages",Math.ceil(o.headers["x-total-count"]/t.limit)),e("setPosts",o.data)}catch(o){console.log(o)}finally{e("setLoading",!1)}},async loadMorePosts({state:t,commit:e}){try{e("setPage",t.page+1);const o=await vt.Z.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:t.page,_limit:t.limit}});e("setTotalPages",Math.ceil(o.headers["x-total-count"]/t.limit)),e("setPosts",[...t.posts,...o.data])}catch(o){console.log(o)}}},namespaced:!0};var pe=(0,Rt.MT)({state:{isAuth:!1},modules:{post:ce}});const me=(0,s.ri)(g);L.forEach((t=>{me.component(t.name,t)})),de.forEach((t=>{me.directive(t.name,t)})),me.use(re).use(pe).mount("#app")}},e={};function o(s){var a=e[s];if(void 0!==a)return a.exports;var n=e[s]={exports:{}};return t[s].call(n.exports,n,n.exports,o),n.exports}o.m=t,function(){var t=[];o.O=function(e,s,a,n){if(!s){var l=1/0;for(d=0;d<t.length;d++){s=t[d][0],a=t[d][1],n=t[d][2];for(var r=!0,i=0;i<s.length;i++)(!1&n||l>=n)&&Object.keys(o.O).every((function(t){return o.O[t](s[i])}))?s.splice(i--,1):(r=!1,n<l&&(l=n));if(r){t.splice(d--,1);var u=a();void 0!==u&&(e=u)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[s,a,n]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,s){var a,n,l=s[0],r=s[1],i=s[2],u=0;if(l.some((function(e){return 0!==t[e]}))){for(a in r)o.o(r,a)&&(o.m[a]=r[a]);if(i)var d=i(o)}for(e&&e(s);u<l.length;u++)n=l[u],o.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return o.O(d)},s=self["webpackChunkvue3_course"]=self["webpackChunkvue3_course"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(7197)}));s=o.O(s)})();
//# sourceMappingURL=app.8a6df41b.js.map