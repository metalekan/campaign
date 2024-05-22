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
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "emawodia.html",
  },
  {
    id: 2,
    name: "Hands-On Experience",
    detail:
      "Gain practical, real-world experience that will set you apart in the competitive tech job market.",
    image:
      "https://images.unsplash.com/photo-1604145559206-e3bce0040e2d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "xtralarge.html",
  },
  {
    id: 3,
    name: "Internship Opportunity",
    detail:
      "Stand a chance to secure an internship at Tech Champions upon completing your training.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "paulano.html",
  },
  {
    id: 4,
    name: "Employment Referrals",
    detail:
      "Access exclusive job opportunities through our network of tech companies looking for top talent.",
    image:
      "https://images.unsplash.com/photo-1573165067541-4cd6d9837902?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "dees.html",
  },
];

const worksContainer = document.getElementById("container");
const worksHTML = worksArray
  .map(
    (item, index) => `
      <div class="cardd">
          <div class="cardd-image-container">
          <img class="h-full w-full object-cover object-center" src=${item.image} alt=${index}/>
          </div>
          <p class="font-bold">${item.name}</p>
          <p class="text-sm mt-1">${item.detail}</p>
          <a href="register.html">
            <button class="cursor-pointer transition-all bg-[#20a4f3] text-white px-6 py-2 rounded-lg
            border-[#20a4f3]
            border-b-[4px] hover:brightness-110
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] text-sm w-full mt-6">
            Get started</button>
          </a>
          </div>

          `
  )
  .join("");

worksContainer.innerHTML = worksHTML;



