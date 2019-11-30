let obj ={
  setRem(){
    let uiW = 750;
    let winW = parseFloat(document.documentElement.clientWidth);
    let rate = winW/uiW;
    let app = document.getElementById("app");
    let tabBar = document.getElementsByClassName("tabBar")[0];
    if(winW>uiW){
      app.style.width =uiW + "px";
      app.style.margin = "0 auto";
      tabBar.style.width = uiW + "px";
      return;
    }
    document.documentElement.style.fontSize = rate*100+"px";
  }
};
export {obj};
