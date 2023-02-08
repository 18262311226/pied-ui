import{_ as D,c as r,b as o,w as y,a,d as c,e,r as F,o as C,t}from"./app.8acbfb45.js";const A={data(){return{inputValue:"",inputValue1:"",inputValue2:"",inputValue3:"",inputValue4:"",inputValue5:"",data:[{value:1,label:"option1"},{value:2,label:"option2"},{value:3,label:"option3"},{value:4,label:"option4"},{value:5,label:"option5"},{value:6,label:"option6"},{value:7,label:"option7"},{value:8,label:"option8"}]}}},f=JSON.parse('{"title":"\u9009\u62E9\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9009\u62E9\u5668","slug":"\u9009\u62E9\u5668"},{"level":3,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":3,"title":"\u6A21\u7CCA\u67E5\u8BE2","slug":"\u6A21\u7CCA\u67E5\u8BE2"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u5185\u5BB9","slug":"\u81EA\u5B9A\u4E49\u5185\u5BB9"}],"relativePath":"components/select.md"}'),i=a("h2",{id:"\u9009\u62E9\u5668",tabindex:"-1"},[c("\u9009\u62E9\u5668 "),a("a",{class:"header-anchor",href:"#\u9009\u62E9\u5668","aria-hidden":"true"},"#")],-1),d=a("h3",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[c("\u57FA\u7840\u7528\u6CD5 "),a("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),u=e(`<details class="details custom-block"><summary>\u4EE3\u7801\u793A\u4F8B</summary><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">pied-select</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inputValue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#FFCB6B;">pied-select</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> ref </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const inputValue = ref(&#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const data = ref([</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        label: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">option1</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        label: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">option2</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        label: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">option3</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        label: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">option4</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        label: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">option5</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        label: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">option6</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        label: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">option7</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        label: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">option8</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h3 id="\u6A21\u7CCA\u67E5\u8BE2" tabindex="-1">\u6A21\u7CCA\u67E5\u8BE2 <a class="header-anchor" href="#\u6A21\u7CCA\u67E5\u8BE2" aria-hidden="true">#</a></h3>`,2),g=e(`<details class="details custom-block"><summary>\u4EE3\u7801\u793A\u4F8B</summary><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">pied-select</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inputValue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">filterable</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#FFCB6B;">pied-select</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> ref </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const inputValue = ref(&#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const data = ref([</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        label: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">option1</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        label: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">option2</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        label: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">option3</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        label: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">option4</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        label: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">option5</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        label: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">option6</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        label: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">option7</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        label: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">option8</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h3 id="\u81EA\u5B9A\u4E49\u5185\u5BB9" tabindex="-1">\u81EA\u5B9A\u4E49\u5185\u5BB9 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5185\u5BB9" aria-hidden="true">#</a></h3>`,2),_={class:"flex"},v=e(`<details class="details custom-block"><summary>\u4EE3\u7801\u793A\u4F8B</summary><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">pied-select</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inputValue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">filterable</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-slot</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scope</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">flex</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;{{</span><span style="color:#A6ACCD;">scope.data.value</span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;{{</span><span style="color:#A6ACCD;">scope.data.label</span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">pied-select</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> ref </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const inputValue = ref(&#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const data = ref([</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        label: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">option1</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        label: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">option2</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        label: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">option3</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        label: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">option4</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        label: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">option5</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        label: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">option6</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        label: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">option7</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        value: </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        label: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">option8</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">.flex</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">  justify</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">content: space</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">around;</span></span>
<span class="line"><span style="color:#A6ACCD;">  align</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">items: center;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><table><thead><tr><th>\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:right;">\u53EF\u9009\u503C</th><th style="text-align:right;">\u9ED8\u8BA4\u503C</th><th style="text-align:right;">\u7C7B\u578B</th></tr></thead><tbody><tr><td>v-model</td><td style="text-align:center;">\u7ED1\u5B9A\u503C</td><td style="text-align:right;">-----</td><td style="text-align:right;">-----</td><td style="text-align:right;">String</td></tr><tr><td>type</td><td style="text-align:center;">\u8F93\u5165\u7C7B\u578B</td><td style="text-align:right;">-----</td><td style="text-align:right;">-----</td><td style="text-align:right;">text,password</td></tr><tr><td>disabled</td><td style="text-align:center;">\u7981\u7528</td><td style="text-align:right;">false,true</td><td style="text-align:right;">false</td><td style="text-align:right;">Boolean</td></tr><tr><td>label</td><td style="text-align:center;">\u540D\u79F0</td><td style="text-align:right;">-----</td><td style="text-align:right;">-----</td><td style="text-align:right;">String</td></tr><tr><td>center</td><td style="text-align:center;">\u5C45\u4E2D\u5C55\u793A</td><td style="text-align:right;">-----</td><td style="text-align:right;">-----</td><td style="text-align:right;">Boolean</td></tr></tbody></table>`,2);function b(h,l,m,E,s,x){const p=F("pied-select");return C(),r("div",null,[i,d,o(p,{modelValue:s.inputValue,"onUpdate:modelValue":l[0]||(l[0]=n=>s.inputValue=n),data:s.data},null,8,["modelValue","data"]),u,o(p,{modelValue:s.inputValue1,"onUpdate:modelValue":l[1]||(l[1]=n=>s.inputValue1=n),filterable:"",data:s.data},null,8,["modelValue","data"]),g,o(p,{modelValue:s.inputValue2,"onUpdate:modelValue":l[2]||(l[2]=n=>s.inputValue2=n),filterable:"",data:s.data},{default:y(n=>[a("div",_,[a("p",null,t(n.data.value),1),a("p",null,t(n.data.label),1)])]),_:1},8,["modelValue","data"]),v])}const T=D(A,[["render",b]]);export{f as __pageData,T as default};
