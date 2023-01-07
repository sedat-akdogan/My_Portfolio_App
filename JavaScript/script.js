// Typing Animation

var Typed = new Typed('.typing', {
    strings: ["Tenacious Programmer", "Principled Frond End Web Developer"],
    typeSpeed: 100,
    backSpeed: 30,
    loop: true,
    // startDelay: 500,
    backDelay: 2000
});

// Aside 

const nav = document.querySelector(".nav");
navList = nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;
for(let i=0; i<totalNavList; i++)
{
    const a = navList[i].querySelector("a");
    a.addEventListener("click",function()
    {
        removeBackSection();
        for(let j=0; j<totalNavList; j++)
        {
            if(navList[j].querySelector("a").classList.contains("active"))
            {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }   
        this.classList.add("active");
        showSection(this);
        if(window.innerWidth < 1200)
        {
            asideSectionTogglerBtn();
        }
    })
}

function removeBackSection()
{
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(num)
{
    allSection[num].classList.add("back-section");
}

function showSection(element)
{
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}

// update Nav function

function updateNav()
{
    navList[1].querySelector("a").classList.remove("active");
    navList[4].querySelector("a").classList.add("active");
}

// nav toggler button

document.querySelector(".hire-me").addEventListener("click", function(e)
{
    showSection(e.target);
    updateNav();
    removeBackSection();
    addBackSection(1);
});


// aside toogler button

const navTogglerBtn = document.querySelector(".nav-toggler");
aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn()
{
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.toggle("open");
    }
}


// Contact form submission

const scriptURL = 'https://script.google.com/macros/s/AKfycbzgxY7wkd2C4gHXn1XtlPuw9_sGBYphen93XdS4LzXbM8bi_s7y5yeTwi68e1ubR20Fgg/exec';
const form = document.forms['submit-to-google-sheet'];
const message = document.querySelector(".message");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        message.innerHTML = "Your message sent successfully!";
        
        setTimeout(function() {
            message.innerHTML = "";
            console.log(response);
        }, 3000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})


// Projects Sectoin display

const htmlBtn = document.querySelector("#htmlCss-btn");
const jsBtn = document.querySelector("#js-btn");
const reactBtn = document.querySelector("#react-btn");

const htmlDiv = document.querySelector("#htmlCss");
const jsDiv = document.querySelector("#js");
const reactDiv = document.querySelector("#react");

htmlDiv.style.display = "none";
jsDiv.style.display = "none";

htmlBtn.addEventListener("click", () => {
    htmlDiv.style.display = "block";
    jsDiv.style.display = "none";
    reactDiv.style.display = "none";
})

jsBtn.addEventListener("click", () => {
    htmlDiv.style.display = "none";
    jsDiv.style.display = "block";
    reactDiv.style.display = "none";
})

reactBtn.addEventListener("click", () => {
    htmlDiv.style.display = "none";
    jsDiv.style.display = "none";
    reactDiv.style.display = "block";
})
