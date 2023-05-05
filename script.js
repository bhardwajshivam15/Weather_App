const temp = document.querySelector(".w1");
const loc = document.querySelector(".w2 p");
const date = document.querySelector(".w2 span");
const image = document.querySelector(".w3 img");
const condition = document.querySelector(".w3 span");
const inp = document.querySelector(".inp");
const btn = document.querySelector("form");
const fetchdata = async(target)=>{
  const url = "https://api.weatherapi.com/v1/current.json?key=b17ec88f06bc47c2aa3174713230505&q="+target;
  const response = await fetch(url);
  const data = await response.json();
  try{
  temp.innerHTML=data.current.temp_c+"°C";
  loc.innerHTML=data.location.name;
  date.innerHTML=data.location.localtime;
  image.src=data.current.condition.icon;
  condition.innerHTML=data.current.condition.text;
  }
  catch(target){
    alert("Location Not Found");
  }
};
btn.addEventListener("submit",(e)=>{
    e.preventDefault();
    let target = inp.value; 
    fetchdata(target);
    
})
// 