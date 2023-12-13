**Below is the hosted version of chat widget**

small chat screen will appear on the bottom right corner of screen

 - its static chat no apis and socket is added
 - send text `ping` and it will repond `pong`
 
https://freakk101.github.io/embedded_chat/

***Below is the UMD version hosted on CDN***
just include the script tag in HTML page and chat will appear on the bottom right, one can test it locally in pasting in any html file

    <script src="https://cdn.jsdelivr.net/gh/freakk101/embedded_chat@main/dist/chat-widget.js"></script>

**To Run code locally**

    git clone git@github.com:freakk101/embedded_chat.git
    cd embedded_chat
    npm install
    npm run dev
   it will create create a build and move the `dist` folder to `static` folder along with `background.jpg` and `index.html` and open the html in browser.
   
  Note:- index.html and backgroud.jpeg is created for sake of presentation it does not have anything to do with widget.

**To make the distribution build**

    npm run build
it will create a dist folder and have all the minified js exported from webpack
