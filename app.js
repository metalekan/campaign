lucide.createIcons();

let el2 = document.querySelector(".banner");
el2.setAttribute("data-scroll", "");

ScrollOut({
  onShown: function (el2) {
    // remove the class
    el2.classList.remove("animate__zoomIn");

    // force reflow
    void el2.offsetWidth;

    // re-add the animated cl
    el2.classList.add("animate__zoomIn");
  },
});


const worksArray = [
  {
    id: 1,
    name: "Expert Instruction",
    detail:
      "Learn from industry professionals who are experts in their field and passionate about sharing their ",
    image: "./images/mockup.jpg",
    link: "emawodia.html",
  },
  {
    id: 2,
    name: "Hands-On Experience",
    detail:
      "Gain practical, real-world experience that will set you apart in the competitive tech job market.",
    image: "./images/mockup.jpg",
    link: "xtralarge.html",
  },
  {
    id: 3,
    name: "Internship Opportunity",
    detail:
      "Stand a chance to secure an internship at Tech Champions upon completing your training.",
    image: "",
    link: "paulano.html",
  },
  {
    id: 4,
    name: "Employment  Referrals",
    detail:
      "Access exclusive job opportunities through our network of tech companies looking for top talent.",
    image: "",
    link: "dees.html",
  },
];

const worksContainer = document.getElementById("container");
const worksHTML = worksArray
  .map(
    (item, index) => `
      <div class="card">
          <div class="card-image-container">
          <img class="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1599949104055-2d04026aee1e?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=image_${index}/>
          </div>
          <p class="font-bold">${item.name}</p>
          <p class="text-sm">${item.detail}</p>
          <button class="cursor-pointer transition-all bg-[#002EBA] text-white px-6 py-2 rounded-lg
          border-[#002EBA]
          border-b-[4px] hover:brightness-110
          active:border-b-[2px] active:brightness-90 active:translate-y-[2px] text-sm">
          Get started</button>
          </div>

          `
  )
  .join("");

worksContainer.innerHTML = worksHTML;
