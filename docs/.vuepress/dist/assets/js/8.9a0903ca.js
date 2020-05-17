(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{440:function(t,s,a){"use strict";a.r(s);var r=a(55),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue-flipping-stepper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-flipping-stepper"}},[t._v("#")]),t._v(" vue-flipping-stepper")]),t._v(" "),a("p",[t._v("A simple stepper that rotates horizontally between steps. Add any number of components, and specify the number of steps. Pass in a v-model to control the which is the next step. Back step will follow the same path it came from.")]),t._v(" "),a("p",[t._v("The package works on apps with Bootstrap-Vue.")]),t._v(" "),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),a("h4",{attrs:{id:"npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[t._v("#")]),t._v(" NPM")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" vue bootstrap-vue bootstrap @kikiio2020/vue-flipping-stepper\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//app.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./bootstrap'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" BootstrapVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" IconsPlugin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bootstrap-vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bootstrap/dist/css/bootstrap.css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bootstrap-vue/dist/bootstrap-vue.css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" FlippingStepper "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@kikiio2020/vue-flipping-stepper'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FlippingStepper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tcomponents"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("FlippingStepper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"cdn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdn"}},[t._v("#")]),t._v(" CDN")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code")])]),a("h2",{attrs:{id:"basic-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-example"}},[t._v("#")]),t._v(" Basic Example")]),t._v(" "),a("img",{attrs:{src:"https://www.dropbox.com/s/gen0byhvkl0dy9f/flipping-stepper-basic-screen1.png?raw=1"}}),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("flipping"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("stepper num"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("steps"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("slot"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"m-5 p-5"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Slot "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ONE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("slot"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"m-5 p-5"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Slot "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TWO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("flipping"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("stepper"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Named-slot names must be integer indicating its position.")])]),t._v(" "),a("p",[t._v("More "),a("RouterLink",{attrs:{to:"/#more-examples"}},[t._v("examples")]),t._v(" below.")],1),t._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),a("p",[t._v("The package depends on Bootstrap-Vue")]),t._v(" "),a("h2",{attrs:{id:"more-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more-examples"}},[t._v("#")]),t._v(" More Examples")]),t._v(" "),a("h4",{attrs:{id:"changing-border-color"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changing-border-color"}},[t._v("#")]),t._v(" Changing Border Color")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("flipping"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("stepper num"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("steps"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),t._v(" theme"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("color"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("slot"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"m-5 p-5"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Slot "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ONE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("slot"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"m-5 p-5"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Slot "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TWO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("flipping"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("stepper"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("Change the border color of the container and the buttons via the "),a("code",[t._v("theme-color")]),t._v(" prop.")]),t._v(" "),a("h4",{attrs:{id:"skipping-to-specified-slot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#skipping-to-specified-slot"}},[t._v("#")]),t._v(" Skipping to Specified Slot")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("flipping"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("stepper num"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("steps"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),t._v(" v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"step"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("slot"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"m-5 p-5"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\t\tSlot "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ONE")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button @click"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"step.nextStep=3"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Skip to "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("slot"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"m-5 p-5"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Slot "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TWO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("slot"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"m-5 p-5"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Slot "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("flipping"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("stepper"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tstep"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tnextStep"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("When the value object is provided you can change which slot to go next by changing its nextStep property. Backward action will follow the path where it came from.")]),t._v(" "),a("h2",{attrs:{id:"props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Prop")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("num-steps")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("Total number of steps")])]),t._v(" "),a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[t._v("Object {nextStep: Number}")]),t._v(" "),a("td",[t._v("{nextStep: Null}")]),t._v(" "),a("td",[t._v("No")]),t._v(" "),a("td",[t._v("An object currently with only one property to specify the next step to go to")])]),t._v(" "),a("tr",[a("td",[t._v("theme-color")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("#73AD21")]),t._v(" "),a("td",[t._v("No")]),t._v(" "),a("td",[t._v("Specifies the border color of container and the buttons")])])])]),t._v(" "),a("h2",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Event")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("flip-forward")]),t._v(" "),a("td",[t._v("Emitted when stepping forward")])]),t._v(" "),a("tr",[a("td",[t._v("flip-backward")]),t._v(" "),a("td",[t._v("Emitted when stepping backward")])])])]),t._v(" "),a("h2",{attrs:{id:"built-with"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#built-with"}},[t._v("#")]),t._v(" Built With")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"vuejs.org"}},[t._v("Vue")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://bootstrap-vue.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bootstrap-Vue"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://getbootstrap.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bootstrap"),a("OutboundLink")],1)])]),t._v(" "),a("h4",{attrs:{id:"bundling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bundling"}},[t._v("#")]),t._v(" Bundling")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://webpack.js.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack"),a("OutboundLink")],1)])]),t._v(" "),a("h4",{attrs:{id:"testing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[t._v("#")]),t._v(" Testing")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://mochajs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mocha"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.chaijs.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chai"),a("OutboundLink")],1)])]),t._v(" "),a("h4",{attrs:{id:"documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#documentation"}},[t._v("#")]),t._v(" Documentation")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://vuepress.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"authors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authors"}},[t._v("#")]),t._v(" Authors")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://kikiio.com",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("Daniel 'Kikiio' Leung")]),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"contributing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[t._v("#")]),t._v(" Contributing")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/CONTRIBUTE.html"}},[t._v("Contribute guide")])],1),t._v(" "),a("h2",{attrs:{id:"code-of-conduct"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-of-conduct"}},[t._v("#")]),t._v(" Code of Conduct")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/CONDUCT.html"}},[t._v("Code of Conduct guide")])],1),t._v(" "),a("h2",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),a("p",[t._v("This project is licensed under the MIT License - see the "),a("RouterLink",{attrs:{to:"/LICENSE.html"}},[t._v("LICENSE.md")]),t._v(" file for details")],1)])}),[],!1,null,null,null);s.default=e.exports}}]);