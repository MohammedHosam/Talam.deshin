// start myDIV
let btn1 = document.getElementById("myDIV"); 

function myFunction() {
  if (btn1.style.display === "none") {
    btn1.style.display = "block";
  } else {
    btn1.style.display = "none";
  }
};
// end myDIV

// start button-footer
let btn2 = document.querySelector(".button-footer")

window.onscroll = function () {
    if (window.scrollY >= 2100) {  
      btn2.style.display = "block"
    } 
    if (window.scrollY >= 1960) {  
      btn2.style.display = "block"
    } 
    if (window.scrollY >= 1830) {  
      btn2.style.display = "block"
    }  
    if (window.scrollY >= 1550) {  
      btn2.style.display = "block"
    }
    if (window.scrollY >= 1460) {  
      btn2.style.display = "block"
    }
    if (window.scrollY >= 280) {  
      btn2.style.display = "block"
    }
    else {
      btn2.style.display = "none"  
    }
    
};

btn2.onclick = function () {    
    window.scrollTo({
        left: 0,   
        top: 0,   
        behavior: "smooth",  
    });
};
// end button-footer

// start button-footer-2
let btn3 = document.querySelector(".button-footer-2");
let block = document.querySelector(".color-2")
let lis = document.querySelectorAll(".color-2 ul li");
let exp = document.querySelector(".footer");

btn3.onclick = function () {
    block.style.display = "block";
    window.scrollTo({behavior: "smooth",});
};

btn3.onmouseenter = function () {
  block.style.display = "none";
}

if (window.localStorage.getItem("color")) { 
    exp.style.backgroundColor = window.localStorage.getItem("color")
    lis.forEach((li) => {
        li.classList.remove("active");
    });
    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active")
};
lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        lis.forEach((li) => {
            li.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        window.localStorage.setItem("color", e.currentTarget.dataset.color);
        exp.style.backgroundColor = e.currentTarget.dataset.color;
    });
});
// end button-footer-2
