(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1086:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(55),_clientLogger=__webpack_require__(36),_configFilename=__webpack_require__(1087);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1087:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1088:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(126).configure)([__webpack_require__(1089),__webpack_require__(1092)],module,!1)}).call(this,__webpack_require__(105)(module))},1089:function(module,exports,__webpack_require__){var map={"./stories/useClickAway.stories.mdx":1090,"./stories/useSmartReducer.stories.mdx":1091};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1089},1090:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(101),_assets_repo_svg__WEBPACK_IMPORTED_MODULE_9__=(__webpack_require__(464),__webpack_require__(465),__webpack_require__(466),__webpack_require__(467),__webpack_require__(468),__webpack_require__(469),__webpack_require__(212));__webpack_require__(470);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,{title:"Docs/useClickAway",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n\n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n\n"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h1",{id:"useclickaway-hook"},"useClickAway hook"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("div",{className:"subheading"},"The Purpose"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,"to do"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("div",{className:"subheading"},"How it works"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,"to do"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("div",{className:"subheading"},"Rules of thumb"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,"to do"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("div",{className:"subheading"},"Source code"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a",{className:"link-item",href:"https://github.com/stopyransky/fh-hooks/blob/master/src/useClickAway/useClickAway.ts",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("img",{src:_assets_repo_svg__WEBPACK_IMPORTED_MODULE_9__.a,alt:"repo"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("strong",null,"fh-hooks: useClickAway"),"The hook allows to react on clicking away of referenced element.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("div",{className:"subheading"},"Examples"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,"to do"))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Docs/useClickAway",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(MDXContent,null))},__webpack_exports__.default=componentMeta},1091:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(101),_assets_repo_svg__WEBPACK_IMPORTED_MODULE_9__=(__webpack_require__(464),__webpack_require__(465),__webpack_require__(466),__webpack_require__(467),__webpack_require__(468),__webpack_require__(469),__webpack_require__(212));__webpack_require__(470);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,{title:"Docs/useSmartReducer",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n\n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n\n"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h1",{id:"usesmartreducer-hook"},"useSmartReducer hook"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("div",{className:"subheading"},"The Purpose"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,"The goal with ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode",{parentName:"p"},"useSmartReducer")," hook is to remove verbosity of managing state contained in an JS Object ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode",{parentName:"p"},"{}"),".\nThe hook provides similar usage pattern as React ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode",{parentName:"p"},"useState")," but under the hood it uses ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode",{parentName:"p"},"useReducer"),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("div",{className:"subheading"},"How it works"),"The hook returns array of `[state, setState]`. The setState function accepts two arguments (type, value), where:",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode",{parentName:"li"},"type")," is the key of the state or custom reducer's action name,"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li",{parentName:"ul"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode",{parentName:"li"},"value")," is the new value of the portion of the state defined by type.\nsetState returns new state as provided by custom reducer.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,"Under the hood, the hook uses ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode",{parentName:"p"},"baseReducer")," which allows to mutate the state by providing the name of field which exists in the state."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,"User can add or change the default behavior by implementing ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode",{parentName:"p"},"customReducer"),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("div",{className:"subheading"},"Rules of thumb"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("ul",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li",{parentName:"ul"},"If ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode",{parentName:"li"},"customReducer")," is not provided it will check if first argument of setState (action.type) matches with any key in the initialState."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li",{parentName:"ul"},"If ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode",{parentName:"li"},"action.type")," matches with any field name in the state, then the hook will update the state with given second argument of setState (action.value)."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li",{parentName:"ul"},"If ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode",{parentName:"li"},"action.type")," does not match with any field name in the state, then the original state will be returned (no change) and console.error will be printed."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li",{parentName:"ul"},"If ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode",{parentName:"li"},"action.value")," is not provided and customReducer is not given it will not change state."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li",{parentName:"ul"},"If ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode",{parentName:"li"},"customReducer")," is provided and it returns ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode",{parentName:"li"},"null")," as a ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode",{parentName:"li"},"default")," case, then the baseReducer will be used as default."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li",{parentName:"ul"},"If ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode",{parentName:"li"},"customReducer")," is provided and it returns ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode",{parentName:"li"},"state")," as a ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode",{parentName:"li"},"default")," case then baseReducer will not be used and state will be handled\nexactly as per provided reducer (works as React useReducer). In this case user needs to implement all actions that were handled by baseReducer")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("div",{className:"subheading"},"Source code"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a",{className:"link-item",href:"https://github.com/stopyransky/fh-hooks/blob/master/src/useSmartReducer/useSmartReducer.ts",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("img",{src:_assets_repo_svg__WEBPACK_IMPORTED_MODULE_9__.a,alt:"repo"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("strong",null,"fh-hooks: useSmartReducer"),"An alternative to React useReducer")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("div",{className:"subheading"},"Examples"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h4",{id:"simple-use-case"},"Simple use case"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode",{parentName:"p"},"useSmartReducer")," can be used without any reducer."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code",{parentName:"pre",className:"language-jsx"},"const initialState = {\n    fieldName: 'value',\n};\n\nfunction MyComponent() {\n    const [state, setState] = useSmartReducer(initialState);\n\n    return (\n        <div>\n            <button\n                onClick={() => {\n                    setState('fieldName', 'new value');\n                }}\n            >\n                click\n            </div>\n        </div>\n    );\n}\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h4",{id:"custom-reducer"},"Custom reducer"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,"Adding custom reducer allows to include custom actions."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,"Returning ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode",{parentName:"p"},"null")," in default case allows ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode",{parentName:"p"},"baseReducer")," to handle initialState fields cases."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p",null,"Returning ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode",{parentName:"p"},"state")," in default case will disable ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode",{parentName:"p"},"baseReducer")," so only actions defined in the custom reducer will affect the state."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code",{parentName:"pre",className:"language-jsx"},"const initialState = {\n    firstName: 'Jane',\n    lastName: 'Doe',\n};\n\nfunction customReducer(state, action) {\n    switch (action.type) {\n        case 'name':\n            return {\n                firstName: action.value.firstName,\n                lastName: action.value.lastName,\n            };\n        default:\n            return null;\n    }\n}\n\nfunction MyComponent() {\n    const [state, setState] = useSmartReducer(initialState, customReducer);\n\n    return (\n        <div>\n            <button\n                onClick={() => {\n                    setState('name', { firstName: 'John', lastName: 'Wayne' });\n                }}\n            >\n                click\n            </div>\n            <button\n                onClick={() => {\n                    setState('firstName', 'John');\n                    // will not work if customReducer default case returns state\n                }}\n            >\n                click\n            </div>\n        </div>\n    );\n}\n")))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Docs/useSmartReducer",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(MDXContent,null))},__webpack_exports__.default=componentMeta},1092:function(module,exports,__webpack_require__){var map={"./stories/useClickAway/useClickAway.stories.js":1093,"./stories/useSmartReducer/useSmartReducer.stories.js":1096};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1092},1093:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(0);var _storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(126),fh_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(117),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__(1094),__webpack_require__(29));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Examples/useClickAway",module).addParameters({storySource:{source:"import React from 'react';\nimport { storiesOf } from '@storybook/react';\nimport { useClickAway } from 'fh-hooks';\nimport './styles.css';\n\nfunction Clicker() {\n\tconst { ref, active, toggle } = useClickAway();\n\n\treturn (\n\t\t<div className='container' ref={ref}>\n\t\t\t<div className='button' onClick={toggle}>\n\t\t\t\tClick\n\t\t\t</div>\n\t\t\t{active && <div className='content'>content</div>}\n\t\t</div>\n\t);\n}\nstoriesOf('Examples/useClickAway', module).add('Simple use case', Clicker);\n",locationsMap:{"simple-use-case":{startLoc:{col:47,line:18},endLoc:{col:73,line:18},startBody:{col:66,line:18},endBody:{col:73,line:18}}}}}).add("Simple use case",(function Clicker(){var _useClickAway=Object(fh_hooks__WEBPACK_IMPORTED_MODULE_2__.a)(),ref=_useClickAway.ref,active=_useClickAway.active,toggle=_useClickAway.toggle;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"container",ref:ref,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"button",onClick:toggle,children:"Click"}),active&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"content",children:"content"})]})}))}.call(this,__webpack_require__(152)(module))},1094:function(module,exports,__webpack_require__){},1096:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _home_travis_build_stopyransky_fh_hooks_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(158),_home_travis_build_stopyransky_fh_hooks_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(62),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(0),__webpack_require__(126)),fh_hooks__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__(1097),__webpack_require__(117)),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(29),mockState={firstName:"Jane",lastName:"Doe"},PrettyPrintJson=function PrettyPrintJson(_ref){var data=_ref.data;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("pre",{children:JSON.stringify(data,null,2)})})};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("Examples/useSmartReducer",module).addParameters({storySource:{source:"import React from 'react';\nimport { storiesOf } from '@storybook/react';\nimport './styles.css';\nimport { useSmartReducer } from 'fh-hooks';\n\nconst mockState = {\n\tfirstName: 'Jane',\n\tlastName: 'Doe',\n};\n\nconst PrettyPrintJson = ({ data }) => {\n\treturn (\n\t\t<div>\n\t\t\t<pre>{JSON.stringify(data, null, 2)}</pre>\n\t\t</div>\n\t);\n};\n\nstoriesOf('Examples/useSmartReducer', module)\n\t.add('No Reducer', () => {\n\t\tconst defaultState = { ...mockState };\n\t\tconst [state, setState] = useSmartReducer(defaultState);\n\t\treturn (\n\t\t\t<div className='demo'>\n\t\t\t\t<button onClick={() => setState('firstName', 'John')}>\n\t\t\t\t\tset firstName to John\n\t\t\t\t</button>\n\n\t\t\t\t<PrettyPrintJson data={state} />\n\t\t\t</div>\n\t\t);\n\t})\n\t.add('Smart Reducer', () => {\n\t\tconst defaultState = { ...mockState };\n\n\t\tfunction reducer(state, action) {\n\t\t\tswitch (action.type) {\n\t\t\t\tcase 'name':\n\t\t\t\t\treturn {\n\t\t\t\t\t\t...state,\n\t\t\t\t\t\tfirstName: action.value.firstName,\n\t\t\t\t\t\tlastName: action.value.lastName,\n\t\t\t\t\t};\n\t\t\t\tdefault:\n\t\t\t\t\treturn null;\n\t\t\t}\n\t\t}\n\n\t\tconst [state, setState] = useSmartReducer(defaultState, reducer);\n\t\treturn (\n\t\t\t<div className='demo'>\n\t\t\t\t<div className='controls'>\n\t\t\t\t\t<button\n\t\t\t\t\t\tonClick={() =>\n\t\t\t\t\t\t\tsetState('name', { firstName: 'James', lastName: 'Bond' })\n\t\t\t\t\t\t}\n\t\t\t\t\t>\n\t\t\t\t\t\tset name to James Bond\n\t\t\t\t\t</button>\n\t\t\t\t\t<button onClick={() => setState('firstName', 'John')}>\n\t\t\t\t\t\tset firstName to John\n\t\t\t\t\t</button>\n\t\t\t\t\t<button onClick={() => setState('lastName', 'Wayne')}>\n\t\t\t\t\t\tset lastName to Wayne\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<PrettyPrintJson data={state} />\n\t\t\t</div>\n\t\t);\n\t})\n\t.add('Own Reducer with error', () => {\n\t\tconst defaultState = { ...mockState };\n\n\t\tfunction reducer(state, action) {\n\t\t\tswitch (action.type) {\n\t\t\t\tcase 'name':\n\t\t\t\t\treturn {\n\t\t\t\t\t\t...state,\n\t\t\t\t\t\tfirstName: action.value.firstName,\n\t\t\t\t\t\tlastName: action.value.lastName,\n\t\t\t\t\t};\n\t\t\t\tdefault:\n\t\t\t\t\treturn state;\n\t\t\t}\n\t\t}\n\n\t\tconst [state, setState] = useSmartReducer(defaultState, reducer);\n\n\t\treturn (\n\t\t\t<div className='demo'>\n\t\t\t\t<div className='controls'>\n\t\t\t\t\t<button\n\t\t\t\t\t\tonClick={() =>\n\t\t\t\t\t\t\tsetState('name', { firstName: 'James', lastName: 'Bond' })\n\t\t\t\t\t\t}\n\t\t\t\t\t>\n\t\t\t\t\t\tset name to James Bond\n\t\t\t\t\t</button>\n\t\t\t\t\t<button\n\t\t\t\t\t\tstyle={{ color: 'red' }}\n\t\t\t\t\t\tonClick={() => setState('firstName', 'John')}\n\t\t\t\t\t>\n\t\t\t\t\t\tset firstName to John\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<PrettyPrintJson data={state} />\n\t\t\t</div>\n\t\t);\n\t})\n\t.add('Own Reducer fixed', () => {\n\t\tconst defaultState = { ...mockState };\n\n\t\tfunction reducer(state, action) {\n\t\t\tswitch (action.type) {\n\t\t\t\tcase 'firstName':\n\t\t\t\t\treturn {\n\t\t\t\t\t\t...state,\n\t\t\t\t\t\tfirstName: action.value,\n\t\t\t\t\t};\n\t\t\t\tcase 'name':\n\t\t\t\t\treturn {\n\t\t\t\t\t\t...state,\n\t\t\t\t\t\tfirstName: action.value.firstName,\n\t\t\t\t\t\tlastName: action.value.lastName,\n\t\t\t\t\t};\n\t\t\t\tdefault:\n\t\t\t\t\treturn state;\n\t\t\t}\n\t\t}\n\n\t\tconst [state, setState] = useSmartReducer(defaultState, reducer);\n\n\t\treturn (\n\t\t\t<div className='demo'>\n\t\t\t\t<div className='controls'>\n\t\t\t\t\t<button\n\t\t\t\t\t\tonClick={() => {\n\t\t\t\t\t\t\tsetState('name', { firstName: 'James', lastName: 'Bond' });\n\t\t\t\t\t\t}}\n\t\t\t\t\t>\n\t\t\t\t\t\tset name to James Bond\n\t\t\t\t\t</button>\n\t\t\t\t\t<button onClick={() => setState('firstName', 'John')}>\n\t\t\t\t\t\tset firstName to John\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<PrettyPrintJson data={state} />\n\t\t\t</div>\n\t\t);\n\t});\n",locationsMap:{"own-reducer-fixed":{startLoc:{col:6,line:110},endLoc:{col:2,line:150},startBody:{col:27,line:110},endBody:{col:2,line:150}},"own-reducer-with-error":{startLoc:{col:6,line:71},endLoc:{col:2,line:109},startBody:{col:32,line:71},endBody:{col:2,line:109}},"smart-reducer":{startLoc:{col:6,line:33},endLoc:{col:2,line:70},startBody:{col:23,line:33},endBody:{col:2,line:70}},"no-reducer":{startLoc:{col:6,line:20},endLoc:{col:2,line:32},startBody:{col:20,line:20},endBody:{col:2,line:32}}}}}).add("No Reducer",(function(){var defaultState=Object(_home_travis_build_stopyransky_fh_hooks_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},mockState),_useSmartReducer=Object(fh_hooks__WEBPACK_IMPORTED_MODULE_5__.b)(defaultState),_useSmartReducer2=Object(_home_travis_build_stopyransky_fh_hooks_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useSmartReducer,2),state=_useSmartReducer2[0],setState=_useSmartReducer2[1];return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"demo",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:function onClick(){return setState("firstName","John")},children:"set firstName to John"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PrettyPrintJson,{data:state})]})})).add("Smart Reducer",(function(){var defaultState=Object(_home_travis_build_stopyransky_fh_hooks_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},mockState);var _useSmartReducer3=Object(fh_hooks__WEBPACK_IMPORTED_MODULE_5__.b)(defaultState,(function reducer(state,action){switch(action.type){case"name":return Object(_home_travis_build_stopyransky_fh_hooks_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_home_travis_build_stopyransky_fh_hooks_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},state),{},{firstName:action.value.firstName,lastName:action.value.lastName});default:return null}})),_useSmartReducer4=Object(_home_travis_build_stopyransky_fh_hooks_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useSmartReducer3,2),state=_useSmartReducer4[0],setState=_useSmartReducer4[1];return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"demo",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"controls",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:function onClick(){return setState("name",{firstName:"James",lastName:"Bond"})},children:"set name to James Bond"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:function onClick(){return setState("firstName","John")},children:"set firstName to John"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:function onClick(){return setState("lastName","Wayne")},children:"set lastName to Wayne"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PrettyPrintJson,{data:state})]})})).add("Own Reducer with error",(function(){var defaultState=Object(_home_travis_build_stopyransky_fh_hooks_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},mockState);var _useSmartReducer5=Object(fh_hooks__WEBPACK_IMPORTED_MODULE_5__.b)(defaultState,(function reducer(state,action){switch(action.type){case"name":return Object(_home_travis_build_stopyransky_fh_hooks_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_home_travis_build_stopyransky_fh_hooks_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},state),{},{firstName:action.value.firstName,lastName:action.value.lastName});default:return state}})),_useSmartReducer6=Object(_home_travis_build_stopyransky_fh_hooks_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useSmartReducer5,2),state=_useSmartReducer6[0],setState=_useSmartReducer6[1];return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"demo",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"controls",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:function onClick(){return setState("name",{firstName:"James",lastName:"Bond"})},children:"set name to James Bond"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{style:{color:"red"},onClick:function onClick(){return setState("firstName","John")},children:"set firstName to John"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PrettyPrintJson,{data:state})]})})).add("Own Reducer fixed",(function(){var defaultState=Object(_home_travis_build_stopyransky_fh_hooks_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},mockState);var _useSmartReducer7=Object(fh_hooks__WEBPACK_IMPORTED_MODULE_5__.b)(defaultState,(function reducer(state,action){switch(action.type){case"firstName":return Object(_home_travis_build_stopyransky_fh_hooks_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_home_travis_build_stopyransky_fh_hooks_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},state),{},{firstName:action.value});case"name":return Object(_home_travis_build_stopyransky_fh_hooks_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_home_travis_build_stopyransky_fh_hooks_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},state),{},{firstName:action.value.firstName,lastName:action.value.lastName});default:return state}})),_useSmartReducer8=Object(_home_travis_build_stopyransky_fh_hooks_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useSmartReducer7,2),state=_useSmartReducer8[0],setState=_useSmartReducer8[1];return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"demo",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"controls",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:function onClick(){setState("name",{firstName:"James",lastName:"Bond"})},children:"set name to James Bond"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{onClick:function onClick(){return setState("firstName","John")},children:"set firstName to John"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PrettyPrintJson,{data:state})]})}))}.call(this,__webpack_require__(152)(module))},1097:function(module,exports,__webpack_require__){},212:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a=__webpack_require__.p+"static/media/repo.6d496322.svg"},464:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.p},465:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.p},466:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.p},467:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.p},468:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.p},469:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.p},470:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.p},482:function(module,exports,__webpack_require__){__webpack_require__(483),__webpack_require__(647),__webpack_require__(648),__webpack_require__(806),__webpack_require__(1027),__webpack_require__(1060),__webpack_require__(1065),__webpack_require__(1077),__webpack_require__(1079),__webpack_require__(1084),__webpack_require__(1086),module.exports=__webpack_require__(1088)},556:function(module,exports){},648:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(126)}},[[482,1,2]]]);
//# sourceMappingURL=main.138a472c26fcfc756fbe.bundle.js.map