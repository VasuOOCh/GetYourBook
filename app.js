let main = document.querySelector(".main");
let slider = document.querySelector(".slider");
let images = document.querySelectorAll(".imgEvent");
let navItems = document.querySelectorAll(".navItem");
let eventPage = document.querySelector(".eventPage");
let contact = document.querySelector(".contact");
let sideItems = document.querySelectorAll(".sideItem")

let cloud1 = document.querySelector ("#cloud1")
let cloud2 = document.querySelector ("#cloud2")

let forw = document.querySelector(".forw")
let prev = document.querySelector(".prev")

// INformation selectors 

let title = document.querySelector("#title");
let desc = document.querySelector("#desc");
let time = document.querySelector("#time");


slider.scrollLeft = 0;

let sliderX = 0;
let toggle = false;
let animate = true;

let titles = [
    "Sahayog",
    "Jyoti",
    "Abhiyanta",
    "Blanket Donation"
];

let descs = [
    "An event of social welfare, celebrated on the occasion of HOLI. We visit Patna's slum areas and collaborate with NGOs which takes care of children who are abandoned or need support to grow. We distribute delicacies and items like notebook, water guns and stationaries to them.",

    "An event of social welfare, celebrated on the occasion of Diwali.We visit Patna's slum areas and collaborate with NGOs which takes care of children who are abandoned or need support to grow. We distribute delicacies and items like notebook, water guns and stationaries to them. Also, celebrate festivals and provide platform to showcase their talent.",

    "On the occasion of Engineer's Day, we conduct a zealing and enthusiastic event to cheer up and bring the competence among the engineers. The listed activities are : A quiz related to engineers and our own college to build interest and fun among students. Stand-up show by our college's Drama and film club, Natvansh. Live music by our college's Music club, Saptak." ,

    "As the chilly winter winds crept in, we organized a blanket donation drive to help those less fortunate in the slum area of Ganga Ghat. Volunteers and club members helped arrange blankets and brought them to the ghat. Afterwards, We distributed Blankets to each family, abandoned old citizens, and children who live there and in the surrounding area."
]

let times = [
    "Holi",
    "Diwali",
    "Engineer's Day",
    "Winters"
]



slider.addEventListener("scroll", ()=>{
    sliderX = slider.scrollLeft;
    let indiWidth = slider.offsetWidth;

    // console.log(sliderX);

    for(let i = 0;i< images.length; i++) {
        if(sliderX >= i*indiWidth - 5 && sliderX <= i*indiWidth + 5) {
            console.log(i+1);
            title.innerText = titles[i];
            time.innerText = times[i];
            desc.innerText = descs[i]
        }
    }

})

prev.addEventListener("click", ()=>{
    slider.scrollLeft -= slider.offsetWidth*0.7
    // animate = false;
})

forw.addEventListener("click", ()=>{
    slider.scrollLeft += slider.offsetWidth*0.7
    // animate = false;
})


window.addEventListener("scroll", ()=>{
    // console.log(window.scrollY);

    if(window.scrollY >=0 && window.scrollY <500) {
        // console.log("tabl1")
        navItems[0].classList.add("activeTab");
        navItems[1].classList.remove("activeTab");
        navItems[4].classList.remove("activeTab");
    } else if(window.scrollY >=500 && window.scrollY <900) {
        // console.log("tabl1")
        navItems[0].classList.remove("activeTab");
        navItems[1].classList.add("activeTab");
        navItems[4].classList.remove("activeTab");
    } else if(window.scrollY >=900) {
        // console.log("tabl1")
        navItems[0].classList.remove("activeTab");
        navItems[1].classList.remove("activeTab");
        navItems[4].classList.add("activeTab");
    }

    // console.log("load")
    let wid = (window.scrollY/ (document.body.offsetHeight - window.innerHeight)
    )*100
    document.querySelector(".loader").style.width = `${wid}%`;
})



navItems[0].addEventListener("click", ()=>{
    main.scrollIntoView({
        behavior : "smooth"
    })
})
navItems[1].addEventListener("click", ()=>{
    eventPage.scrollIntoView({
        behavior : "smooth"
    })
})
navItems[4].addEventListener("click", ()=>{
    contact.scrollIntoView({
        behavior : "smooth"
    })
})

sideItems[0].addEventListener("click", ()=>{
    main.scrollIntoView({
        behavior : "smooth"
    })
})
sideItems[1].addEventListener("click", ()=>{
    eventPage.scrollIntoView({
        behavior : "smooth"
    })
})
sideItems[6].addEventListener("click", ()=>{
    contact.scrollIntoView({
        behavior : "smooth"
    })
})


document.querySelector("input").addEventListener("change", ()=>{
    if(document.querySelector("input").checked == true) {
        document.querySelector(".sideNav").style.display = "block";
    } else{
        document.querySelector(".sideNav").style.display = "none"
    }
})

for(let i = 0; i<sideItems.length; i++) {
    sideItems[i].addEventListener("click", ()=>{
        document.querySelector(".sideNav").style.display = "none";
        if(document.querySelector("input").checked == false) {
            document.querySelector("input").checked = true;
        } else{
            document.querySelector("input").checked = false;
        }
    })
}

