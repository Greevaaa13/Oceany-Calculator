// WITHOUT EVENT LISTENER
//function calculate() {
//     let display=document.getElementById("display")
//     try {
//         let result=eval(display.value)
//         display.value=result
//     } catch (error) {
//         alert("Invalid expression")
//     }
// }

// function inputNumber(num){
//     let display=document.getElementById("display")
//     display.value+=num
// }
// function inputOperator(operator){
//     let display=document.getElementById("display")
//     display.value+=operator
// }

// function clearDisplay(){
//     let display=document.getElementById("display")
//     display.value=""
// }


//WITH EVENT LISTENER

let display=document.getElementById("display");
let buttons=document.querySelectorAll(".calculator button");

buttons.forEach(function(button){
button.addEventListener("click",function(){

let value=button.innerText;

if(value==="="){
try{
display.value=eval(display.value);
}
catch{
alert("Invalid Expression");
}
}

else if(value===""){
display.value="";
}

else if(value==="Clr"){
display.value="";
}

else if(value==="⌫"){
display.value=display.value.slice(0,-1);
}

else if(value==="x"){
display.value+="*";
}

else if(value==="÷"){
display.value+="/";
}

else if(value==="π"){
display.value+=Math.PI;
}

else if(value==="e"){
display.value+=Math.E;
}

else if(value==="sin"){
display.value=Math.sin(display.value);
}

else if(value==="cos"){
display.value=Math.cos(display.value);
}

else if(value==="tan"){
display.value=Math.tan(display.value);
}

else if(value==="log"){
display.value=Math.log10(display.value);
}

else if(value==="ln"){
display.value=Math.log(display.value);
}

else if(value==="√"){
display.value=Math.sqrt(display.value);
}

else if(value==="x²"){
display.value=Math.pow(display.value,2);
}

else if(value==="x!"){
let n=Number(display.value);
let fact=1;
for(let i=1;i<=n;i++){
fact=fact*i;
}
display.value=fact;
}

else if(value==="xy"){
display.value+="**";
}

else if(value==="exp"){
display.value=Math.exp(display.value);
}

else{
display.value+=value;
}

});
});

// ===== INTERACTIVE BUBBLES, SHELLS, STARFISH =====

// Bubble pop interaction
const bubbles = document.querySelectorAll('.bubble');
bubbles.forEach(bubble => {
  bubble.addEventListener('click', function(e) {
    e.stopPropagation();
    if (!this.classList.contains('pop')) {
      this.classList.add('pop');
      createPopParticles(this);
      
      // Remove bubble after animation
      setTimeout(() => {
        this.style.display = 'none';
        // Create a new bubble after 2 seconds
        setTimeout(() => {
          this.style.display = '';
          this.classList.remove('pop');
        }, 2000);
      }, 600);
    }
  });
});

// Shell and starfish spin interaction
const shells = document.querySelectorAll('.shell, .starfish');
shells.forEach(element => {
  element.addEventListener('click', function(e) {
    e.stopPropagation();
    if (!this.classList.contains('spin')) {
      this.classList.add('spin');
      createSparkles(this);
      
      // Remove spin class after animation
      setTimeout(() => {
        this.classList.remove('spin');
      }, 600);
    }
  });
});

// Create pop particles for bubbles
function createPopParticles(bubble) {
  const rect = bubble.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  
  for (let i = 0; i < 8; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = '8px';
    particle.style.height = '8px';
    particle.style.background = 'rgba(20, 184, 166, 0.8)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.boxShadow = '0 0 10px rgba(20, 184, 166, 0.6)';
    particle.style.zIndex = 9;
    
    document.body.appendChild(particle);
    
    const angle = (i / 8) * Math.PI * 2;
    const velocity = 3;
    let px = x;
    let py = y;
    let vx = Math.cos(angle) * velocity;
    let vy = Math.sin(angle) * velocity;
    
    const animate = () => {
      px += vx;
      py += vy;
      vy += 0.1; // gravity
      particle.style.left = px + 'px';
      particle.style.top = py + 'px';
      particle.style.opacity = Math.max(0, parseFloat(particle.style.opacity) - 0.02);
      
      if (parseFloat(particle.style.opacity) > 0) {
        requestAnimationFrame(animate);
      } else {
        particle.remove();
      }
    };
    
    particle.style.opacity = '1';
    animate();
  }
}

// Create sparkles for shells/starfish
function createSparkles(element) {
  const rect = element.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  
  for (let i = 0; i < 12; i++) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.width = '4px';
    sparkle.style.height = '4px';
    sparkle.style.background = '#ffd700';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.boxShadow = '0 0 8px #ffd700';
    sparkle.style.zIndex = 9;
    
    document.body.appendChild(sparkle);
    
    const angle = (i / 12) * Math.PI * 2;
    const velocity = 2.5;
    let px = x;
    let py = y;
    let vx = Math.cos(angle) * velocity;
    let vy = Math.sin(angle) * velocity;
    
    const animate = () => {
      px += vx;
      py += vy;
      vy += 0.08;
      sparkle.style.left = px + 'px';
      sparkle.style.top = py + 'px';
      sparkle.style.opacity = Math.max(0, parseFloat(sparkle.style.opacity) - 0.025);
      
      if (parseFloat(sparkle.style.opacity) > 0) {
        requestAnimationFrame(animate);
      } else {
        sparkle.remove();
      }
    };
    
    sparkle.style.opacity = '1';
    animate();
  }
}