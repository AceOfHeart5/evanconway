(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{26:function(e,t,i){},27:function(e,t,i){},33:function(e,t,i){"use strict";i.r(t);var a=i(1),s=i.n(a),c=i(19),n=i.n(c),o=(i(26),i(27),i(9)),r=i(2),l=i(12),d=i(0),h=function(e){var t=e.link,i=e.children,a=e.selected;return Object(d.jsx)(o.b,{className:"nav ".concat(t===a?"selected":null),to:"/"+t,children:i})},m=function(){var e=Object(a.useState)(window.location.hash.split("/")[1]),t=Object(l.a)(e,2),i=t[0],s=t[1],c=Object(r.f)();return Object(a.useEffect)((function(){return c.listen((function(e){s(window.location.hash.split("/")[1])}))}),[c]),Object(a.useEffect)((function(){}),[i]),Object(d.jsxs)("div",{className:"navbar",children:[Object(d.jsx)(h,{link:"",selected:i,children:"About"}),Object(d.jsx)(h,{link:"projects",selected:i,children:"Projects"})]})},j=i.p+"static/media/eviltower01.cfe02c67.png",p=i.p+"static/media/eviltower02.c63a24e3.png",b=i.p+"static/media/botcommand.86d69c42.gif",g=i.p+"static/media/botdemonstrate.9120feaa.gif",u=i.p+"static/media/uparrow.f1a651b0.gif",x=i.p+"static/media/sitereadingapp.5c580855.png",f={eviltower:{one:j,two:p},discordbot:{command:b,demonstrate:g,uparrow:u},text:{code:i.p+"static/media/textcode.0f3709ae.png",colors:i.p+"static/media/textcolors.d2414af6.gif",combine:i.p+"static/media/textcombine.95721cf7.gif",typing:i.p+"static/media/texttyping.31571ec5.gif",matrix:i.p+"static/media/textmatrix.aff41224.gif",fade:i.p+"static/media/textfade.b7f8b926.gif"},sitereadingapp:x,timemanager:i.p+"static/media/timemanager.dd2d3f6d.png",guestbook:i.p+"static/media/guestbook.155ec602.png",topDownAdventure:i.p+"static/media/topdownadventure.3e88d0c7.png"},O=function(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=[];return a.push(Object(d.jsx)("h2",{children:e})),null!==t&&a.push(Object(d.jsx)("a",{href:t,className:"link-github",style:{paddingRight:"10px"},children:"Github"})),null!==i&&a.push(Object(d.jsx)("a",{href:i,className:"link-project",children:"Project"})),Object(d.jsx)("div",{style:{paddingBottom:"15px"},children:a})};return Object(d.jsxs)("div",{children:[Object(d.jsx)("section",{style:{paddingBottom:"10px"},className:"project",children:Object(d.jsx)("a",{href:"https://github.com/AceOfHeart5?tab=repositories",className:"projectlink",children:"Link To Github"})}),Object(d.jsxs)("section",{className:"project",children:[e("Guestbook","https://github.com/AceOfHeart5/guestbook-backend","https://guestbook-l5nnz.ondigitalocean.app/"),Object(d.jsx)("img",{src:f.guestbook,alt:"guestbook app"}),Object(d.jsx)("p",{children:"A simple guestbook app. Made with React, Express, and Postgres hosted on Digital Ocean."})]}),Object(d.jsxs)("section",{className:"project",children:[e("Time Manager","https://github.com/AceOfHeart5/TimeManager","https://time-manager-hhvqs.ondigitalocean.app/"),Object(d.jsx)("img",{src:f.timemanager,alt:"time manager app"}),Object(d.jsx)("p",{children:"A time management app to keep track of time spent on tasks. Made with React."})]}),Object(d.jsxs)("section",{className:"project",children:[e("Text Boxes","https://github.com/AceOfHeart5/Text_Boxes"),Object(d.jsx)("img",{src:f.text.code,alt:"Code for colored text."}),Object(d.jsx)("img",{src:f.text.colors,alt:"Colored text."}),Object(d.jsx)("img",{src:f.text.combine,alt:"Combined text effects with typing."}),Object(d.jsx)("img",{src:f.text.typing,alt:"Special typing effects."}),Object(d.jsx)("p",{children:"A key part of any video game is text boxes. When I'm working on a project, I often find myself wanting to draw text with a single word highlighted a different color or maybe floating in place. This isn't that hard to do, but it's cumbersome to have to do it over again for each project. I also wanted to display text that could type out still have added special effects. So I made a special collection of classes and functions to give text interesting effects."})]}),Object(d.jsxs)("section",{className:"project",children:[e("Discord Bot","https://github.com/AceOfHeart5/Meme-Machine-discord-bot"),Object(d.jsx)("img",{src:f.discordbot.uparrow,alt:"up arrow reaction"}),Object(d.jsx)("img",{src:f.discordbot.command,alt:"Programming a discord bot."}),Object(d.jsx)("img",{src:f.discordbot.demonstrate,alt:"Bot performing its program."}),Object(d.jsx)("p",{children:'I was inspired to make this bot after a friend made a Beetlejuice reference on a private server as a joke to "summon" us. It also converts messages containing only \'^\' into up arrow reactions on the previous message. Its main feature, though, is programmable responses. If a user sends a message with the syntax "Hey bot! When I say \'call\' you say \'response\'", the bot will respond with "response" anytime someone messages the "call".'})]}),Object(d.jsxs)("section",{className:"project",children:[e("Piano Sight-Reading Web App","https://github.com/AceOfHeart5/WebMidiLearning","https://aceofheart5.github.io/WebMidiLearning/"),Object(d.jsx)("img",{src:f.sitereadingapp,alt:"pic of sheet music app"}),Object(d.jsx)("p",{children:"Finding good material to practice sight-reading is difficult. The music can't be too hard or easy, and you need a lot of music to read through in order to make any real improvement. In the past I've used typing test programs to improve my typing speed, so I thought I'd make something similar, but for sight reading. The app randomly generates sheet music according to options set by the user. When run in a supported browser (just Google Chrome right now), the app can detect MIDI input from an electric piano. The green-highlighted note cursor only advances once the correct notes have been played."})]}),Object(d.jsxs)("section",{className:"project",children:[e("GameMaker Studio Prototype","https://github.com/AceOfHeart5/TopDownAdventure/tree/2.3update","https://gla55world.itch.io/top-down-adventure"),Object(d.jsx)("img",{src:f.topDownAdventure,alt:"pic of a video game"}),Object(d.jsx)("p",{children:"This project was about exploring GameMaker in further depth. I spent most of my time with this project making a modular state system."})]}),Object(d.jsxs)("section",{className:"project",children:[e("GameMaker Studio Project","https://github.com/AceOfHeart5/Altered-Platformer","https://gla55world.itch.io/the-evil-tower"),Object(d.jsx)("img",{src:f.eviltower.one,alt:"pic of a video game"}),Object(d.jsx)("p",{children:"My goal in creating this game was to uncover all the unexpected challenges involved in making a complete game. The content of this game is minimal, but it does have most of the features anyone would expect from a modern indie game:"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"sprites with animations"}),Object(d.jsx)("li",{children:"attacking and blocking mechanics"}),Object(d.jsx)("li",{children:"hitstun"}),Object(d.jsx)("li",{children:"keyboard and controller support"}),Object(d.jsx)("li",{children:"rebindable controls"}),Object(d.jsx)("li",{children:"sound effects"}),Object(d.jsx)("li",{children:"music"}),Object(d.jsx)("li",{children:"options menu for changing settings"}),Object(d.jsx)("li",{children:"cutscenes"}),Object(d.jsx)("li",{children:"character interactions"}),Object(d.jsx)("li",{children:"text boxes with typing effects"})]})]}),Object(d.jsxs)("section",{className:"project",children:[e("Music",null,"https://www.licenselab.com/search/tracks/list/k_conway/"),Object(d.jsxs)("p",{children:["Over 250 piese of music written for TV, radio, and various media. Each song is part of an album, and each album fits a specific theme or mood. Some of my favorites are ",Object(d.jsx)("a",{href:"https://www.licenselab.com/track/8c1c1ca2bc3c191f/beautiful-entanglement",children:"Beautiful Entanglement"}),", ",Object(d.jsx)("a",{href:"https://www.licenselab.com/track/1d98ce3e652151e5/nuts-and-bolts",children:"Nuts And Bolts"}),", ",Object(d.jsx)("a",{href:"https://www.licenselab.com/track/9c79172e951d2ebb/glorious-dawn",children:"Glorious Dawn"}),", and ",Object(d.jsx)("a",{href:"https://www.licenselab.com/track/d537ecbc9ed581ad/adorable-saves-the-day",children:"Adorable Saves The Day"}),"."]})]}),Object(d.jsxs)("section",{className:"project",children:[e("This Website","https://github.com/AceOfHeart5/AceOfHeart5.github.io"),Object(d.jsx)("p",{children:"This site was made with React. Honestly React is waaaaaaay overkill for this, but I wanted more experience with React, and what better way to accomplish that than to make something?"})]})]})},w=[{title:"Sprite Animations",description:"How to make sprites look cool",body:Object(d.jsxs)("article",{children:[Object(d.jsx)("h1",{children:"Sprite Animations "}),Object(d.jsx)("p",{children:"Aliquam hic numquam cupiditate, commodi eaque perferendis excepturi error repudiandae earum ratione repellendus architecto provident adipisci?"})]})},{title:"Audio and Music Looping",description:"Creating sounds in-game and looping you favorite tracks.",body:Object(d.jsxs)("article",{children:[Object(d.jsx)("h1",{children:"Audio and Music Looping"}),Object(d.jsx)("p",{children:"Aliquam, natus dolorem eius quaerat commodi adipisci, ea at necessitatibus eaque magnam itaque totam maxime illo sequi quam aperiam quis provident minima."})]})},{title:"Making a game in Game Maker Studio",description:"Discovering a love for programming, and uncovering all the challenges of making a feature complete video game.",body:Object(d.jsxs)("article",{children:[Object(d.jsx)("h1",{children:"The Evil Tower"}),Object(d.jsx)("img",{src:f.eviltower.one,alt:"guy swinging sword"}),Object(d.jsx)("img",{src:f.eviltower.two,alt:"standing on ladder"}),Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:"https://gla55world.itch.io/the-evil-tower",children:"Link to the game."}),Object(d.jsx)("p",{children:"There have been a number of times in my life where I've tried to make a video game, or get into game programming. But not being a programmer, and not really knowing where to look for help, I've always gotten frustrated and given up. It wasn't until Googling \"What was Undertale made with?\" and trying Game Maker Studio that I was able to really dive into programming. Every tool has a different amount of abstraction, and I think Game Maker has the perfect amount for me."})]})}],v=function(){var e=Object(a.useState)("blog"),t=Object(l.a)(e,2),i=t[0],s=t[1];Object(a.useEffect)((function(){}),[i]);var c=Object(r.f)();Object(a.useEffect)((function(){return c.listen((function(e){var t=e.pathname.split("/"),i=t[t.length-1];s(i)}))}),[c]);if(!w)return Object(d.jsx)("div",{style:{height:"100vh"}});var n=window.location.pathname.split("/"),h=n[n.length-1];if("blog"===h)return Object(d.jsx)("div",{className:"blogwrapper",children:Object(d.jsx)("ul",{className:"bloglist",children:w.map((function(e,t){return function(e,t){return Object(d.jsx)(o.b,{className:"bloglink",to:"/blog/".concat(String(t)),children:Object(d.jsxs)("li",{className:"bloglisting",children:[Object(d.jsx)("h3",{children:e.title}),Object(d.jsx)("div",{children:e.description})]})},t)}(e,t)}))})});if(Number.isInteger(parseInt(h))){var m=w[parseInt(h)];return Object(d.jsxs)("div",{className:"blogpost",children:[Object(d.jsx)(o.b,{className:"blogback",to:"/blog",children:"Back To List"}),m.body]})}return Object(d.jsx)("h1",{children:"Oh no! Something is broken :("})},y=function(){var e={marginBottom:"0px"},t={marginTop:"5px"};return Object(d.jsxs)("article",{style:{maxWidth:"900px"},children:[Object(d.jsx)("p",{style:{paddingBottom:"10px",borderColor:"grey",borderBottomStyle:"solid"},children:"Evan Conway is a composer and programmer based in Rochester, NY. He writes for the Modus Operandi music library and has been pursuing programming professionally since 2018. In his spare time, he writes games with GameMaker Studio 2."}),Object(d.jsx)("h1",{children:"Experience"}),Object(d.jsx)("h4",{style:e,children:"Composer"}),Object(d.jsx)("h5",{style:t,children:"June 2011 to Present"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Composes stock music for Modus Operandi music library"}),Object(d.jsx)("li",{children:"Has pieces aired on Fox, CBS, NBC, and globally"})]}),Object(d.jsx)("h4",{style:e,children:"Participant at the Recurse Center"}),Object(d.jsx)("h5",{style:t,children:"July 2020 to September 2020"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Learned JavaScript, HTML, and CSS independently"}),Object(d.jsx)("li",{children:"Learned abcjs music notation library to display sheet music in HTML"}),Object(d.jsx)("li",{children:"Created JavaScript classes to model pitches and chords and randomly generate notes"}),Object(d.jsx)("li",{children:"Created a music sight reading app"}),Object(d.jsx)("li",{children:"Created GameMaker text boxes with string parser to customize text appearance"}),Object(d.jsx)("li",{children:"Created movement code for 2D games using Bresenham's line llgorithm"}),Object(d.jsx)("li",{children:"Solved LeetCode questions in daily virtual pairing sessions with experienced devs"}),Object(d.jsx)("li",{children:"Led morning check-ins and MC'd weekly music listening group"}),Object(d.jsx)("li",{children:"Attended virtual programming lectures on machine learning, frontend web dev, and more"})]}),Object(d.jsx)("h4",{style:e,children:"Piano Teacher"}),Object(d.jsx)("h5",{style:t,children:"Hartland Music, September 2013 to June 2018"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Gave lessons to students aged 6 to 65"}),Object(d.jsx)("li",{children:"Organized studio events, recitals, and competition entrances"})]}),Object(d.jsx)("h4",{style:e,children:"Programmer"}),Object(d.jsx)("h5",{style:t,children:"Zerrez Solutions, November 2014 to July 2015"}),Object(d.jsx)("ul",{children:Object(d.jsx)("li",{children:"Assisted in building a 2D modeling application in JavaScript and C++/QT"})}),Object(d.jsx)("h4",{style:e,children:"Associate in Science, Computer Science"}),Object(d.jsx)("h5",{style:t,children:"Monroe Community College, June 2020"}),Object(d.jsx)("h4",{style:e,children:"Bachelor of Music, Piano Performance"}),Object(d.jsx)("h5",{style:t,children:"Lawrence University, June 2013"})]})};var k=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(o.a,{basename:"/",children:[Object(d.jsxs)("div",{className:"topbar",children:[Object(d.jsx)("h1",{className:"my-name",children:"Evan Conway"}),Object(d.jsx)(m,{})]}),Object(d.jsx)("div",{className:"contentwrapper",children:Object(d.jsx)("div",{className:"contentborder",children:Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{path:"/projects",children:Object(d.jsx)(O,{})}),Object(d.jsx)(r.a,{path:"/blog",children:Object(d.jsx)(v,{})}),Object(d.jsx)(r.a,{path:"/",children:Object(d.jsx)(y,{})})]})})})]})})},A=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,34)).then((function(t){var i=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,n=t.getTTFB;i(e),a(e),s(e),c(e),n(e)}))};i(21).a.initializeApp({apiKey:"AIzaSyCWgno0GM7N-wv5Lo-GSADB4b9gdUfRXHo",authDomain:"test-database-49f1c.firebaseapp.com",projectId:"test-database-49f1c",storageBucket:"test-database-49f1c.appspot.com",messagingSenderId:"1057833712951",appId:"1:1057833712951:web:6e2c3adc3e393a9d426eb2"}),n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),A()}},[[33,1,2]]]);
//# sourceMappingURL=main.837e12f5.chunk.js.map