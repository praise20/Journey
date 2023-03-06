//Responsive Nav
const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

navToggle.addEventListener('click', function(){
    console.log('clicked')
    links.classList.toggle("show_nav");
})

// modal

const modalBtn= document.querySelector(".about");
const modalOverlay= document.querySelector(".modal-overlay");
const closeBtn= document.querySelector(".close-btn");

modalBtn.addEventListener('click',function(){
    console.log("click")
    modalOverlay.classList.add("open-modal");
})

closeBtn.addEventListener('click',function(){
    modalOverlay.classList.remove("open-modal");
})


// Reviews

const reviews = [
    {
      id: 1,
      name: 'Oluyale Praise',
      job: 'Intern',
      img: '/picture.jpg',
      text: "I am having an amazing IT expeience at Tramango. I have learnt a lot in design, improved my Javascript, soon learning react, learnt how to work with a team and general office etiquette. ",
    },
    {
      id: 2,
      name: 'Jane Doe',
      job: 'Developer',
      img:  '/blonde-female.jpg',
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    }
]


let img= document.getElementById("person-img");
let author= document.getElementById("author");
let job= document.getElementById("job");
let info= document.getElementById("info");

const prevBtn= document.querySelector(".prev-btn");
const nextBtn= document.querySelector(".next-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
  showPerson();
})

function showPerson(){
  const item = reviews[currentItem];
  img.src = item.img
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
}

nextBtn.addEventListener('click', function(){
  currentItem++;
  if(currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showPerson();
})

prevBtn.addEventListener('click', function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = 0;
  }
  showPerson();
})

// FAQ 

const questions = document.querySelectorAll('.question');
questions.forEach(function(question){
    const btn= question.querySelector(".question-btn");
    btn.addEventListener("click",function(){
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove("show-text")
            }
        })
        question.classList.toggle("show-text");
    })
})
