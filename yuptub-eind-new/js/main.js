class API {   
    async getData() {    
        let dataToBeReturned = {}; 
       await fetch("../data/data.json").then(  
           (response) => {  
               return response.json();  
           }
       ).then((data) => {      
            dataToBeReturned = data.data;   
       });
        return dataToBeReturned; 
    }
}



class App{
 switcher;
 data = [
 {
    id: 0,
    video: "https://www.youtube.com/watch?v=mxpYHW-M_Ac",
    link: 1

 },
{
    id:1,
    video: "https://www.youtube.com/watch?v=mxpYHW-M_Ac",
    link: 2
},
{
    id:2,
    video: "https://www.youtube.com/watch?v=mxpYHW-M_Ac",
    link: 0
},

]

 constructor(){
    this.switcher = new Switcher(this, this.data);
 }
}



class Switcher{
 yubtub;
 cleaner;
 app;
 default = 0;

 constructor(app,data){
    this.app = app;
    this.data = data;
    this.yubtub = new Yubtub(this.app, data[this.default]);
    this.cleaner = new Cleaner();
 }

 switch(link){
    this.cleaner.clean("body");
    this.yubtub = new Yubtub(this.app,  this.data[link]);

 }
}

class Cleaner{
    clean(whereToClean){
        document.querySelector(whereToClean).innerHTML = "";
    }
}


class Header{
    htmlElement;
    renderer;
    app;
    header;
    constructor(app, data) {
        

        this.htmlElement = document.createElement("header");
        this.htmlElement.classList.add("heading")
        this.header.renderer.render("body",this.htmlElement);
        this.renderer = new Renderer();
        this.header = new Header(this, data);

        this.header.renderer.render("header", this.htmlElement);
    }
}

class Yubtub{
    aside;
    renderer;
    app;
    constructor(app,data){
        this.app = app;
        this.renderer = new Renderer();
        this.aside = new Aside(this, data);
    }
}

class Renderer{
    render(whereToRender, whatToRender){
        document.querySelector(whereToRender).appendChild(whatToRender);
    }
}

class Aside{
    yubtub;
    nextVideo;
    htmlElement;

    constructor(yubtub,data){
        this.yubtub = yubtub;
        this.htmlElement = document.createElement("aside");
        this.htmlElement.classList.add("aside__side")
        this.yubtub.renderer.render("body",this.htmlElement);
        this.nextVideo = new NextVideo(this,data);

    }
}

class NextVideo {
    aside;
    htmlElement;
  
    constructor(aside, data) {
      this.aside = aside;
      this.data = data;
      this.htmlElement = document.createElement("iframe");
      this.htmlElement.classList.add("video__tag");
      this.htmlElement.src = data.video;
      this.htmlElement.setAttribute("frameborder", "0");
      this.htmlElement.setAttribute("allowfullscreen", "true");
      this.aside.yubtub.renderer.render("aside", this.htmlElement);
      this.htmlElement.onclick = this.videoClicked;
    }
  
    videoClicked = () => {
      this.aside.yubtub.app.switcher.switch(this.data.link);
    };
  }
  

const app = new App();
console.log(app);