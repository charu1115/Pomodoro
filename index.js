var display1=document.getElementById("display1");
var display2=document.getElementById("display2");
var head=document.getElementById("head");
var s_timer=document.getElementById("s_timer");
var s_minus=document.getElementById("s_minus");
var s_plus=document.getElementById("s_plus");
var b_timer=document.getElementById("b_timer");
var b_minus=document.getElementById("b_minus");
var b_plus=document.getElementById("b_plus");
var start=document.getElementById("start");
var pause=document.getElementById("pause");
var display_screen=document.getElementById("display_screen");
var reset=document.getElementById("reset");
 var session_time=20;
 var break_time=5;
 var s_min,b_min,s_sec=0,b_sec=0;
 var count=1;
s_minus.addEventListener("click",function()
{
session_time--;

if(session_time<=1 )
{
  if(session_time==0)
{
  session_time++;
}
  s_minus.disabled=true;
}

s_timer.innerText=session_time+" min";

})

s_plus.addEventListener("click",function()
{
session_time++;
console.log(session_time);
s_timer.innerText=session_time+" min";
if(session_time==2)
{
  s_minus.disabled=false;
}
})

b_minus.addEventListener("click",function()
{
break_time--;

if(break_time<=1)
{
    if(break_time==0)
{
  break_time++;
}
  b_minus.disabled=true;
}
b_timer.innerText=break_time+" min";
})


b_plus.addEventListener("click",function()
{
break_time++;
b_timer.innerText=break_time+" min";
if(break_time==2)
{
  b_minus.disabled=false;
}
})
var run=true;

start.addEventListener("click",function()
{

s_min=session_time;

b_min=break_time;
console.log(s_min); 
s_minus.disabled=true;
s_plus.disabled=true;
b_minus.disabled=true;
b_plus.disabled=true;
  start.style.display="none"
  pause.style.display="initial";
  if(run)
display_session(s_min,s_sec);
else
display_break(b_min,b_sec);

})

function display_session(min,sec=0)
{
  setTimeout(function()
  {
 display1.style.display="initial";
  display2.style.display="none";
  head.innerText="Session "+count;
display_screen.style.backgroundColor="#00a0b0"; 
  },1000);
  
  pause.addEventListener("click",function()
  {
  clearInterval(session_display);  
 start.style.display="initial";
 pause.style.display="none";
 session_time=min;
 s_sec=sec;
 run=true;
  })
  reset.addEventListener("click",function()
{
stop_timer(session_display);
})
  var session_display=setInterval(function()
  {
   var str;
   if(sec>9)
   {
     str=min+" : "+sec;
   }
   else{
     str=min+" : 0"+sec;
   }
   if(min<10)
   str="0"+str;
   sec--;
   if(min==0 && sec==-1)
   {
     count++;
     clearInterval(session_display);
    display_break(b_min);
   }
   
  if(sec==-1)
  {
 sec=59;
 min--;
  }
  display1.innerText=str;
  },1000);
}

function display_break(min,sec=0)
{
  setTimeout(function()
  {
    display1.style.display="none";
    display2.style.display="initial";
    display_screen.style.backgroundColor="red";
  })
    pause.addEventListener("click",function()
  {
  clearInterval(break_display);  
 start.style.display="initial";
 pause.style.display="none";
 break_time=min;
 b_sec=sec;
 
  })
  reset.addEventListener("click",function()
  {
    stop_timer(break_display);
  })

  var break_display=setInterval(function()
  {
    var str;
    if(sec>9)
    {
     str=min+" : "+sec;
    }
    else{
      str=min+" : 0"+sec;
    }
    if(min<10)
    {
      str="0"+str;
    }
    
     sec--;
     if(min==0 && sec==-1)
     {
       clearInterval(break_display);
       display_session(s_min);
     }
      if(sec==-1)
      {
        sec=59;
        min--;
      }
      display2.innerText=str;
  },1000)
}
function stop_timer(time_stop)
{
  display1.innerText="";
  display2.innerText="";
  //display2.innerText="";
 clearInterval(time_stop);
  s_minus.disabled=false;
   s_plus.disabled=false;
    b_minus.disabled=false;
   b_plus.disabled=false;
   start.style.display="initial";
   pause.style.display="none";
}