// const scroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,
// });


// function firstPageAnim() {
  // var tl = gsap.timeline();

  // tl.from("#nav", {
  //   y: "-10",
  //   opacity: 0,
  //   duration: 1.5,
  //   ease: Expo.easeInOut,
  // })
    // .to(".boundingelem", {
    //   y: 0,
    //   ease: Expo.easeInOut,
    //   duration: 2,
    //   delay: -1,
    //   stagger: 0.2,
    // })
//     .from("#herofooter", {
//       y: -10,
//       opacity: 0,
//       duration: 1.5,
//       delay: -1,
//       ease: Expo.easeInOut,
//     });
// }

// firstPageAnim();

function circleMouseFollower(xscale, yscale) {
  // window.addEventListener("mousemove", function (dets) {
  //   document.querySelector(
  //     "#minicircle"
  //   ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  // });
}
circleMouseFollower();

// jab mouse move ho to hum mouse move kr paye aur maximum skew and minimum skew define kr paye , jab mouse move ho to chapta ki. valur badhe aur jab mouse chalna band ho jaye to chapta hata do 

function circleChaptaKaro() {
  // define default scale value
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
  });
}

circleChaptaKaro();


// teeno element ko select kro , uske bad teeno par ek mousemove lagao , jab mousemove ho to ye pta kro ki mouse kha pr hai , jiska matlab hai mouse ki x and y position pta kro , ab mouse ki x y position ke badle us image ko show karo and us image ko move kro , move krte waqt rotate kro , and jaise jaise mouse tez chale waise rotation bhi tez ho jaye 


document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});