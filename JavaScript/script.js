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

function updateNav(element)
{
    for(let i=0; i<totalNavList.length; i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

// nav toggler button

document.querySelector(".hire-me").addEventListener("click", function()
{
    const sectionIndex = this.getAttribute(data-section-index);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
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


// projects active content

const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remoce("active-link");
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remoce("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
} 
