import{_ as D,c as r,b as p,w as y,d as o,r as F,o as C,a as n,t as e,p as A,f as i,e as v}from"./app.20a46c54.js";const u={data(){return{inputValue:"",inputValue1:"",inputValue2:"",inputValue3:"",inputValue4:"",inputValue5:"",data:[{value:1,label:"option1"},{value:2,label:"option2"},{value:3,label:"option3"},{value:4,label:"option4"},{value:5,label:"option5"},{value:6,label:"option6"},{value:7,label:"option7"},{value:8,label:"option8"}]}}},S=JSON.parse('{"title":"\u9009\u62E9\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9009\u62E9\u5668","slug":"\u9009\u62E9\u5668"},{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u6A21\u7CCA\u67E5\u8BE2","slug":"\u6A21\u7CCA\u67E5\u8BE2"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u5185\u5BB9","slug":"\u81EA\u5B9A\u4E49\u5185\u5BB9"}],"relativePath":"components/select.md"}'),c=l=>(A("data-v-61d43567"),l=l(),i(),l),g=c(()=>n("h2",{id:"\u9009\u62E9\u5668",tabindex:"-1"},[v("\u9009\u62E9\u5668 "),n("a",{class:"header-anchor",href:"#\u9009\u62E9\u5668","aria-hidden":"true"},"#")],-1)),_=c(()=>n("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[v("\u57FA\u7840\u7528\u6CD5 "),n("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1)),b=o(`<details class="details custom-block" data-v-61d43567><summary data-v-61d43567>\u4EE3\u7801\u793A\u4F8B</summary><div class="language-js" data-v-61d43567><button class="copy" data-v-61d43567></button><span class="lang" data-v-61d43567>js</span><pre data-v-61d43567><code data-v-61d43567><span class="line" data-v-61d43567><span style="color:#89DDFF;" data-v-61d43567>&lt;</span><span style="color:#F07178;" data-v-61d43567>template</span><span style="color:#89DDFF;" data-v-61d43567>&gt;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>&lt;</span><span style="color:#FFCB6B;" data-v-61d43567>pied-select</span><span style="color:#89DDFF;" data-v-61d43567> </span><span style="color:#C792EA;" data-v-61d43567>v-model</span><span style="color:#89DDFF;" data-v-61d43567>=</span><span style="color:#89DDFF;" data-v-61d43567>&quot;</span><span style="color:#C3E88D;" data-v-61d43567>inputValue</span><span style="color:#89DDFF;" data-v-61d43567>&quot;</span><span style="color:#89DDFF;" data-v-61d43567> </span><span style="color:#C792EA;" data-v-61d43567>data</span><span style="color:#89DDFF;" data-v-61d43567>=</span><span style="color:#89DDFF;" data-v-61d43567>&quot;</span><span style="color:#C3E88D;" data-v-61d43567>data</span><span style="color:#89DDFF;" data-v-61d43567>&quot;</span><span style="color:#89DDFF;" data-v-61d43567>&gt;&lt;/</span><span style="color:#FFCB6B;" data-v-61d43567>pied-select</span><span style="color:#89DDFF;" data-v-61d43567>&gt;</span></span>
<span class="line" data-v-61d43567><span style="color:#89DDFF;" data-v-61d43567>&lt;/</span><span style="color:#F07178;" data-v-61d43567>template</span><span style="color:#89DDFF;" data-v-61d43567>&gt;</span></span>
<span class="line" data-v-61d43567></span>
<span class="line" data-v-61d43567><span style="color:#89DDFF;" data-v-61d43567>&lt;</span><span style="color:#F07178;" data-v-61d43567>script</span><span style="color:#89DDFF;" data-v-61d43567> </span><span style="color:#C792EA;" data-v-61d43567>setup</span><span style="color:#89DDFF;" data-v-61d43567>&gt;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>import </span><span style="color:#89DDFF;" data-v-61d43567>{</span><span style="color:#A6ACCD;" data-v-61d43567> ref </span><span style="color:#89DDFF;" data-v-61d43567>}</span><span style="color:#A6ACCD;" data-v-61d43567> from &#39;vue&#39;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>const inputValue = ref(&#39;&#39;)</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>const data = ref([</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>{</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        value: </span><span style="color:#F78C6C;" data-v-61d43567>1</span><span style="color:#89DDFF;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        label: </span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span><span style="color:#C3E88D;" data-v-61d43567>option1</span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>}</span><span style="color:#A6ACCD;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>{</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        value: </span><span style="color:#F78C6C;" data-v-61d43567>2</span><span style="color:#89DDFF;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        label: </span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span><span style="color:#C3E88D;" data-v-61d43567>option2</span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>}</span><span style="color:#A6ACCD;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>{</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        value: </span><span style="color:#F78C6C;" data-v-61d43567>3</span><span style="color:#89DDFF;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        label: </span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span><span style="color:#C3E88D;" data-v-61d43567>option3</span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>}</span><span style="color:#A6ACCD;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>{</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        value: </span><span style="color:#F78C6C;" data-v-61d43567>4</span><span style="color:#89DDFF;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        label: </span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span><span style="color:#C3E88D;" data-v-61d43567>option4</span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>}</span><span style="color:#A6ACCD;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>{</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        value: </span><span style="color:#F78C6C;" data-v-61d43567>5</span><span style="color:#89DDFF;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        label: </span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span><span style="color:#C3E88D;" data-v-61d43567>option5</span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>}</span><span style="color:#A6ACCD;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>{</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        value: </span><span style="color:#F78C6C;" data-v-61d43567>6</span><span style="color:#89DDFF;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        label: </span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span><span style="color:#C3E88D;" data-v-61d43567>option6</span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>}</span><span style="color:#A6ACCD;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>{</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        value: </span><span style="color:#F78C6C;" data-v-61d43567>7</span><span style="color:#89DDFF;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        label: </span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span><span style="color:#C3E88D;" data-v-61d43567>option7</span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>}</span><span style="color:#A6ACCD;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>{</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        value: </span><span style="color:#F78C6C;" data-v-61d43567>8</span><span style="color:#89DDFF;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        label: </span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span><span style="color:#C3E88D;" data-v-61d43567>option8</span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>}</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>])</span></span>
<span class="line" data-v-61d43567><span style="color:#89DDFF;" data-v-61d43567>&lt;/</span><span style="color:#F07178;" data-v-61d43567>script</span><span style="color:#89DDFF;" data-v-61d43567>&gt;</span></span>
<span class="line" data-v-61d43567></span></code></pre></div></details><h2 id="\u6A21\u7CCA\u67E5\u8BE2" tabindex="-1" data-v-61d43567>\u6A21\u7CCA\u67E5\u8BE2 <a class="header-anchor" href="#\u6A21\u7CCA\u67E5\u8BE2" aria-hidden="true" data-v-61d43567>#</a></h2>`,2),h=o(`<details class="details custom-block" data-v-61d43567><summary data-v-61d43567>\u4EE3\u7801\u793A\u4F8B</summary><div class="language-js" data-v-61d43567><button class="copy" data-v-61d43567></button><span class="lang" data-v-61d43567>js</span><pre data-v-61d43567><code data-v-61d43567><span class="line" data-v-61d43567><span style="color:#89DDFF;" data-v-61d43567>&lt;</span><span style="color:#F07178;" data-v-61d43567>template</span><span style="color:#89DDFF;" data-v-61d43567>&gt;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>&lt;</span><span style="color:#FFCB6B;" data-v-61d43567>pied-select</span><span style="color:#89DDFF;" data-v-61d43567> </span><span style="color:#C792EA;" data-v-61d43567>v-model</span><span style="color:#89DDFF;" data-v-61d43567>=</span><span style="color:#89DDFF;" data-v-61d43567>&quot;</span><span style="color:#C3E88D;" data-v-61d43567>inputValue</span><span style="color:#89DDFF;" data-v-61d43567>&quot;</span><span style="color:#89DDFF;" data-v-61d43567> </span><span style="color:#C792EA;" data-v-61d43567>filterable</span><span style="color:#89DDFF;" data-v-61d43567> </span><span style="color:#C792EA;" data-v-61d43567>data</span><span style="color:#89DDFF;" data-v-61d43567>=</span><span style="color:#89DDFF;" data-v-61d43567>&quot;</span><span style="color:#C3E88D;" data-v-61d43567>data</span><span style="color:#89DDFF;" data-v-61d43567>&quot;</span><span style="color:#89DDFF;" data-v-61d43567>&gt;&lt;/</span><span style="color:#FFCB6B;" data-v-61d43567>pied-select</span><span style="color:#89DDFF;" data-v-61d43567>&gt;</span></span>
<span class="line" data-v-61d43567><span style="color:#89DDFF;" data-v-61d43567>&lt;/</span><span style="color:#F07178;" data-v-61d43567>template</span><span style="color:#89DDFF;" data-v-61d43567>&gt;</span></span>
<span class="line" data-v-61d43567></span>
<span class="line" data-v-61d43567><span style="color:#89DDFF;" data-v-61d43567>&lt;</span><span style="color:#F07178;" data-v-61d43567>script</span><span style="color:#89DDFF;" data-v-61d43567> </span><span style="color:#C792EA;" data-v-61d43567>setup</span><span style="color:#89DDFF;" data-v-61d43567>&gt;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>import </span><span style="color:#89DDFF;" data-v-61d43567>{</span><span style="color:#A6ACCD;" data-v-61d43567> ref </span><span style="color:#89DDFF;" data-v-61d43567>}</span><span style="color:#A6ACCD;" data-v-61d43567> from &#39;vue&#39;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>const inputValue = ref(&#39;&#39;)</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>const data = ref([</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>{</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        value: </span><span style="color:#F78C6C;" data-v-61d43567>1</span><span style="color:#89DDFF;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        label: </span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span><span style="color:#C3E88D;" data-v-61d43567>option1</span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>}</span><span style="color:#A6ACCD;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>{</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        value: </span><span style="color:#F78C6C;" data-v-61d43567>2</span><span style="color:#89DDFF;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        label: </span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span><span style="color:#C3E88D;" data-v-61d43567>option2</span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>}</span><span style="color:#A6ACCD;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>{</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        value: </span><span style="color:#F78C6C;" data-v-61d43567>3</span><span style="color:#89DDFF;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        label: </span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span><span style="color:#C3E88D;" data-v-61d43567>option3</span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>}</span><span style="color:#A6ACCD;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>{</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        value: </span><span style="color:#F78C6C;" data-v-61d43567>4</span><span style="color:#89DDFF;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        label: </span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span><span style="color:#C3E88D;" data-v-61d43567>option4</span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>}</span><span style="color:#A6ACCD;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>{</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        value: </span><span style="color:#F78C6C;" data-v-61d43567>5</span><span style="color:#89DDFF;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        label: </span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span><span style="color:#C3E88D;" data-v-61d43567>option5</span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>}</span><span style="color:#A6ACCD;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>{</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        value: </span><span style="color:#F78C6C;" data-v-61d43567>6</span><span style="color:#89DDFF;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        label: </span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span><span style="color:#C3E88D;" data-v-61d43567>option6</span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>}</span><span style="color:#A6ACCD;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>{</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        value: </span><span style="color:#F78C6C;" data-v-61d43567>7</span><span style="color:#89DDFF;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        label: </span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span><span style="color:#C3E88D;" data-v-61d43567>option7</span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>}</span><span style="color:#A6ACCD;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>{</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        value: </span><span style="color:#F78C6C;" data-v-61d43567>8</span><span style="color:#89DDFF;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        label: </span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span><span style="color:#C3E88D;" data-v-61d43567>option8</span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>}</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>])</span></span>
<span class="line" data-v-61d43567><span style="color:#89DDFF;" data-v-61d43567>&lt;/</span><span style="color:#F07178;" data-v-61d43567>script</span><span style="color:#89DDFF;" data-v-61d43567>&gt;</span></span>
<span class="line" data-v-61d43567></span></code></pre></div></details><h2 id="\u81EA\u5B9A\u4E49\u5185\u5BB9" tabindex="-1" data-v-61d43567>\u81EA\u5B9A\u4E49\u5185\u5BB9 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5185\u5BB9" aria-hidden="true" data-v-61d43567>#</a></h2>`,2),m={class:"flex"},E=o(`<details class="details custom-block" data-v-61d43567><summary data-v-61d43567>\u4EE3\u7801\u793A\u4F8B</summary><div class="language-js" data-v-61d43567><button class="copy" data-v-61d43567></button><span class="lang" data-v-61d43567>js</span><pre data-v-61d43567><code data-v-61d43567><span class="line" data-v-61d43567><span style="color:#89DDFF;" data-v-61d43567>&lt;</span><span style="color:#F07178;" data-v-61d43567>template</span><span style="color:#89DDFF;" data-v-61d43567>&gt;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>&lt;</span><span style="color:#FFCB6B;" data-v-61d43567>pied-select</span><span style="color:#89DDFF;" data-v-61d43567> </span><span style="color:#C792EA;" data-v-61d43567>v-model</span><span style="color:#89DDFF;" data-v-61d43567>=</span><span style="color:#89DDFF;" data-v-61d43567>&quot;</span><span style="color:#C3E88D;" data-v-61d43567>inputValue</span><span style="color:#89DDFF;" data-v-61d43567>&quot;</span><span style="color:#89DDFF;" data-v-61d43567> </span><span style="color:#C792EA;" data-v-61d43567>filterable</span><span style="color:#89DDFF;" data-v-61d43567> </span><span style="color:#C792EA;" data-v-61d43567>data</span><span style="color:#89DDFF;" data-v-61d43567>=</span><span style="color:#89DDFF;" data-v-61d43567>&quot;</span><span style="color:#C3E88D;" data-v-61d43567>data</span><span style="color:#89DDFF;" data-v-61d43567>&quot;</span><span style="color:#89DDFF;" data-v-61d43567>&gt;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        </span><span style="color:#89DDFF;" data-v-61d43567>&lt;</span><span style="color:#F07178;" data-v-61d43567>template</span><span style="color:#89DDFF;" data-v-61d43567> </span><span style="color:#C792EA;" data-v-61d43567>v-slot</span><span style="color:#89DDFF;" data-v-61d43567>=</span><span style="color:#89DDFF;" data-v-61d43567>&quot;</span><span style="color:#C3E88D;" data-v-61d43567>scope</span><span style="color:#89DDFF;" data-v-61d43567>&quot;</span><span style="color:#89DDFF;" data-v-61d43567>&gt;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>            </span><span style="color:#89DDFF;" data-v-61d43567>&lt;</span><span style="color:#F07178;" data-v-61d43567>div</span><span style="color:#89DDFF;" data-v-61d43567> </span><span style="color:#C792EA;" data-v-61d43567>class</span><span style="color:#89DDFF;" data-v-61d43567>=</span><span style="color:#89DDFF;" data-v-61d43567>&quot;</span><span style="color:#C3E88D;" data-v-61d43567>flex</span><span style="color:#89DDFF;" data-v-61d43567>&quot;</span><span style="color:#89DDFF;" data-v-61d43567>&gt;&lt;</span><span style="color:#F07178;" data-v-61d43567>p</span><span style="color:#89DDFF;" data-v-61d43567>&gt;{{</span><span style="color:#A6ACCD;" data-v-61d43567>scope.data.value</span><span style="color:#89DDFF;" data-v-61d43567>}}&lt;/</span><span style="color:#F07178;" data-v-61d43567>p</span><span style="color:#89DDFF;" data-v-61d43567>&gt;&lt;</span><span style="color:#F07178;" data-v-61d43567>p</span><span style="color:#89DDFF;" data-v-61d43567>&gt;{{</span><span style="color:#A6ACCD;" data-v-61d43567>scope.data.label</span><span style="color:#89DDFF;" data-v-61d43567>}}&lt;/</span><span style="color:#F07178;" data-v-61d43567>p</span><span style="color:#89DDFF;" data-v-61d43567>&gt;&lt;/</span><span style="color:#F07178;" data-v-61d43567>div</span><span style="color:#89DDFF;" data-v-61d43567>&gt;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        </span><span style="color:#89DDFF;" data-v-61d43567>&lt;/</span><span style="color:#F07178;" data-v-61d43567>template</span><span style="color:#89DDFF;" data-v-61d43567>&gt;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>&lt;/</span><span style="color:#FFCB6B;" data-v-61d43567>pied-select</span><span style="color:#89DDFF;" data-v-61d43567>&gt;</span></span>
<span class="line" data-v-61d43567><span style="color:#89DDFF;" data-v-61d43567>&lt;/</span><span style="color:#F07178;" data-v-61d43567>template</span><span style="color:#89DDFF;" data-v-61d43567>&gt;</span></span>
<span class="line" data-v-61d43567></span>
<span class="line" data-v-61d43567><span style="color:#89DDFF;" data-v-61d43567>&lt;</span><span style="color:#F07178;" data-v-61d43567>script</span><span style="color:#89DDFF;" data-v-61d43567> </span><span style="color:#C792EA;" data-v-61d43567>setup</span><span style="color:#89DDFF;" data-v-61d43567>&gt;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>import </span><span style="color:#89DDFF;" data-v-61d43567>{</span><span style="color:#A6ACCD;" data-v-61d43567> ref </span><span style="color:#89DDFF;" data-v-61d43567>}</span><span style="color:#A6ACCD;" data-v-61d43567> from &#39;vue&#39;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>const inputValue = ref(&#39;&#39;)</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>const data = ref([</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>{</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        value: </span><span style="color:#F78C6C;" data-v-61d43567>1</span><span style="color:#89DDFF;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        label: </span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span><span style="color:#C3E88D;" data-v-61d43567>option1</span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>}</span><span style="color:#A6ACCD;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>{</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        value: </span><span style="color:#F78C6C;" data-v-61d43567>2</span><span style="color:#89DDFF;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        label: </span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span><span style="color:#C3E88D;" data-v-61d43567>option2</span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>}</span><span style="color:#A6ACCD;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>{</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        value: </span><span style="color:#F78C6C;" data-v-61d43567>3</span><span style="color:#89DDFF;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        label: </span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span><span style="color:#C3E88D;" data-v-61d43567>option3</span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>}</span><span style="color:#A6ACCD;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>{</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        value: </span><span style="color:#F78C6C;" data-v-61d43567>4</span><span style="color:#89DDFF;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        label: </span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span><span style="color:#C3E88D;" data-v-61d43567>option4</span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>}</span><span style="color:#A6ACCD;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>{</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        value: </span><span style="color:#F78C6C;" data-v-61d43567>5</span><span style="color:#89DDFF;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        label: </span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span><span style="color:#C3E88D;" data-v-61d43567>option5</span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>}</span><span style="color:#A6ACCD;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>{</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        value: </span><span style="color:#F78C6C;" data-v-61d43567>6</span><span style="color:#89DDFF;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        label: </span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span><span style="color:#C3E88D;" data-v-61d43567>option6</span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>}</span><span style="color:#A6ACCD;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>{</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        value: </span><span style="color:#F78C6C;" data-v-61d43567>7</span><span style="color:#89DDFF;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        label: </span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span><span style="color:#C3E88D;" data-v-61d43567>option7</span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>}</span><span style="color:#A6ACCD;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>{</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        value: </span><span style="color:#F78C6C;" data-v-61d43567>8</span><span style="color:#89DDFF;" data-v-61d43567>,</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>        label: </span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span><span style="color:#C3E88D;" data-v-61d43567>option8</span><span style="color:#89DDFF;" data-v-61d43567>&#39;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>    </span><span style="color:#89DDFF;" data-v-61d43567>}</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>])</span></span>
<span class="line" data-v-61d43567><span style="color:#89DDFF;" data-v-61d43567>&lt;/</span><span style="color:#F07178;" data-v-61d43567>script</span><span style="color:#89DDFF;" data-v-61d43567>&gt;</span></span>
<span class="line" data-v-61d43567></span>
<span class="line" data-v-61d43567><span style="color:#89DDFF;" data-v-61d43567>&lt;</span><span style="color:#F07178;" data-v-61d43567>style</span><span style="color:#89DDFF;" data-v-61d43567>&gt;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>.flex</span><span style="color:#89DDFF;" data-v-61d43567>{</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>  display: flex;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>  justify</span><span style="color:#89DDFF;" data-v-61d43567>-</span><span style="color:#A6ACCD;" data-v-61d43567>content: space</span><span style="color:#89DDFF;" data-v-61d43567>-</span><span style="color:#A6ACCD;" data-v-61d43567>around;</span></span>
<span class="line" data-v-61d43567><span style="color:#A6ACCD;" data-v-61d43567>  align</span><span style="color:#89DDFF;" data-v-61d43567>-</span><span style="color:#A6ACCD;" data-v-61d43567>items: center;</span></span>
<span class="line" data-v-61d43567><span style="color:#89DDFF;" data-v-61d43567>}</span></span>
<span class="line" data-v-61d43567><span style="color:#89DDFF;" data-v-61d43567>&lt;/</span><span style="color:#F07178;" data-v-61d43567>style</span><span style="color:#89DDFF;" data-v-61d43567>&gt;</span></span>
<span class="line" data-v-61d43567></span></code></pre></div></details><table data-v-61d43567><thead data-v-61d43567><tr data-v-61d43567><th data-v-61d43567>\u53C2\u6570</th><th style="text-align:center;" data-v-61d43567>\u8BF4\u660E</th><th style="text-align:right;" data-v-61d43567>\u53EF\u9009\u503C</th><th style="text-align:right;" data-v-61d43567>\u9ED8\u8BA4\u503C</th><th style="text-align:right;" data-v-61d43567>\u7C7B\u578B</th></tr></thead><tbody data-v-61d43567><tr data-v-61d43567><td data-v-61d43567>v-model</td><td style="text-align:center;" data-v-61d43567>\u7ED1\u5B9A\u503C</td><td style="text-align:right;" data-v-61d43567>-----</td><td style="text-align:right;" data-v-61d43567>-----</td><td style="text-align:right;" data-v-61d43567>String</td></tr><tr data-v-61d43567><td data-v-61d43567>type</td><td style="text-align:center;" data-v-61d43567>\u8F93\u5165\u7C7B\u578B</td><td style="text-align:right;" data-v-61d43567>-----</td><td style="text-align:right;" data-v-61d43567>-----</td><td style="text-align:right;" data-v-61d43567>text,password</td></tr><tr data-v-61d43567><td data-v-61d43567>disabled</td><td style="text-align:center;" data-v-61d43567>\u7981\u7528</td><td style="text-align:right;" data-v-61d43567>false,true</td><td style="text-align:right;" data-v-61d43567>false</td><td style="text-align:right;" data-v-61d43567>Boolean</td></tr><tr data-v-61d43567><td data-v-61d43567>label</td><td style="text-align:center;" data-v-61d43567>\u540D\u79F0</td><td style="text-align:right;" data-v-61d43567>-----</td><td style="text-align:right;" data-v-61d43567>-----</td><td style="text-align:right;" data-v-61d43567>String</td></tr><tr data-v-61d43567><td data-v-61d43567>center</td><td style="text-align:center;" data-v-61d43567>\u5C45\u4E2D\u5C55\u793A</td><td style="text-align:right;" data-v-61d43567>-----</td><td style="text-align:right;" data-v-61d43567>-----</td><td style="text-align:right;" data-v-61d43567>Boolean</td></tr></tbody></table>`,2);function x(l,t,V,f,a,T){const d=F("pied-select");return C(),r("div",null,[g,_,p(d,{modelValue:a.inputValue,"onUpdate:modelValue":t[0]||(t[0]=s=>a.inputValue=s),data:a.data},null,8,["modelValue","data"]),b,p(d,{modelValue:a.inputValue1,"onUpdate:modelValue":t[1]||(t[1]=s=>a.inputValue1=s),filterable:"",data:a.data},null,8,["modelValue","data"]),h,p(d,{modelValue:a.inputValue2,"onUpdate:modelValue":t[2]||(t[2]=s=>a.inputValue2=s),filterable:"",data:a.data},{default:y(s=>[n("div",m,[n("p",null,e(s.data.value),1),n("p",null,e(s.data.label),1)])]),_:1},8,["modelValue","data"]),E])}const q=D(u,[["render",x],["__scopeId","data-v-61d43567"]]);export{S as __pageData,q as default};