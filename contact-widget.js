document.addEventListener("DOMContentLoaded",function(){
  var launcher=document.querySelector(".contact-launcher");
  if(!launcher) return;
  var btn=launcher.querySelector(".launcher-circle");
  var stack=launcher.querySelector(".channel-stack");
  btn.addEventListener("click",function(){
    var open=launcher.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true":"false");
    stack.setAttribute("aria-hidden", open ? "false":"true");
  });
  document.addEventListener("click",function(e){
    if(!launcher.contains(e.target)){
      launcher.classList.remove("open");
      btn.setAttribute("aria-expanded","false");
      stack.setAttribute("aria-hidden","true");
    }
  });
  document.addEventListener("keydown",function(e){
    if(e.key==="Escape"){
      launcher.classList.remove("open");
      btn.setAttribute("aria-expanded","false");
      stack.setAttribute("aria-hidden","true");
    }
  });
});