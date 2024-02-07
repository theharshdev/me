const output = document.getElementById("output");
const preloader = document.getElementById("preloader");
const remainingBody = document.getElementById("remainingBody");
const loadingLine = document.getElementById("loadingLine");
const loadingTxt = document.getElementById("loadingTxt");
let increseLoadingNum = 0;

const increseLoading = setInterval(() => {
  increseLoadingNum = increseLoadingNum + 1;
  output.textContent = increseLoadingNum;
  loadingLine.style.width = `${increseLoadingNum}%`;
  if (increseLoadingNum >= 50) {
    loadingTxt.innerText = "(Oh! this stuff is so heavy)";
  }
  if (increseLoadingNum >= 100) {
    clearInterval(increseLoading);
    output.textContent = 100;
    preloader.classList.remove("h-screen");
    preloader.classList.add("h-0");
    remainingBody.classList.remove("h-0");
    scrollPercantage();
    setTimeout(inView, 700);
    setTimeout(ringCircleInView, 600);
    setTimeout(mainTopTxtInView, 700);
  }
}, 80);

const line = document.getElementById("line");
const cursor = document.getElementById("cursor");
const cursorDot = document.getElementById("cursorDot");
const cursorBg = document.getElementById("cursorBg");
const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");
const hellotxt = document.getElementById("hellotxt");
const helloTxt2 = document.getElementById("helloTxt2");
const namaskaar = document.getElementById("namaskaar");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const helloBox = document.getElementById("helloBox");
const aboutTxt = document.getElementById("aboutTxt");
const scrollPercentageTxt = document.getElementById("scrollPercentage");
const ringCircle = document.getElementById("ringCircle");
const navLinks = document.querySelectorAll(".navLinks");
const inViews = document.querySelectorAll(".inView");
const aboutInViews = document.querySelectorAll(".aboutInView");
const projectLinks = document.querySelectorAll(".projectLink");
const projectParagraphs = document.querySelectorAll(".projectParagraph");
const projectHeadings = document.querySelectorAll(".projectHeading");
const projectBgs = document.querySelectorAll(".projectBg");
const mailTxt = document.getElementById("mailTxt");
const copyMailTxt = document.getElementById("copyMailTxt");
let menuClosed = true;

window.addEventListener("scroll", scrollPercantage);
window.addEventListener("load", scrollPercantage);

function scrollPercantage() {
  const scrollPosition = window.scrollY;
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercentage = (scrollPosition / totalHeight) * 100;
  line.style.width = `${scrollPercentage}%`;
  scrollPercentageTxt.innerHTML = `${scrollPercentage.toFixed(2)}`;
}

window.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  cursor.style.display = "block";
  cursorDot.style.display = "block";
  cursor.style.top = `${y}px`;
  cursor.style.left = `${x}px`;
  cursorDot.style.top = `${y}px`;
  cursorDot.style.left = `${x}px`;
  const target = event.target;

  if (target.classList.contains("cursorScale")) {
    cursorBg.style.transform = "scale(6)";
  } else {
    cursorBg.style.transform = "scale(1)";
  }

  if (
    target.classList.contains("downloadCv") &&
    target.classList.contains("cursorScale")
  ) {
    cursorBg.innerHTML = `<span
          class="text-[2px] text-black inline font-bold text-center leading-none"
          >Download CV</span
        >`;
    cursorDot.style.display = "none";
  } else if (
    target.classList.contains("cursorScale") &&
    target.classList.contains("viewProject")
  ) {
    cursorBg.innerHTML = `<i class="bi bi-eye text-zinc-400 mix-blend-difference text-[4px]"></i>`;
    cursorDot.style.display = "none";
    projectArrows.forEach((projectArrow) => {
      projectArrow.style.display = "none";
    });
  } else if (
    target.classList.contains("cursorScale") &&
    target.classList.contains("copyMail")
  ) {
    cursorBg.innerHTML = `<span
          class="text-[2px] text-black inline font-extrabold text-center leading-none"
          >Copy</span
        >`;
    cursorDot.style.display = "none";
  } else {
    cursorBg.innerHTML = "";
    cursorDot.style.display = "block";
  }
});

document.addEventListener("mouseleave", () => {
  cursor.style.display = "none";
  cursorDot.style.display = "none";
});

menuBtn.addEventListener("click", menuToggle);

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", menuToggle);
});

function menuToggle() {
  if (menuClosed) {
    menuBtn.innerHTML = `<i
              class="bi bi-x-lg lg:text-4xl sm:text-3xl text-2xl cursorScale leading-3"
            ></i>`;
    menu.classList.remove("translate-x-full");
    menu.style.transition = "1s";
    navLinks.forEach((navLink) => {
      navLink.style.transition = "2.5s";
      navLink.classList.remove("rotate-[20deg]");
      navLink.classList.remove("translate-y-[250%]");
      navLink.classList.remove("opacity-0");
    });
    menuClosed = false;
  } else {
    menuBtn.innerHTML = `<i
              class="bi bi-list lg:text-4xl sm:text-3xl text-2xl cursorScale leading-3"
            ></i>`;
    menu.classList.add("translate-x-full");
    menu.style.transition = "1.8s";
    navLinks.forEach((navLink) => {
      navLink.style.transition = "2s";
      navLink.classList.add("rotate-[20deg]");
      navLink.classList.add("translate-y-[250%]");
      navLink.classList.add("opacity-0");
    });
    menuClosed = true;
  }
}

window.addEventListener("scroll", helloInView);
window.addEventListener("load", helloInView);
window.addEventListener("scroll", inView);
window.addEventListener("scroll", ringCircleInView);

function helloInView() {
  const rect = helloBox.getBoundingClientRect();
  const top = rect.top;
  const bottom = rect.bottom;

  if (top <= window.innerHeight && bottom >= 0) {
    hellotxt.classList.add("scale-150");
    box1.classList.add("-rotate-90");
    box2.classList.add("-rotate-45");
    box3.classList.add("rotate-45");
    namaskaar.classList.add("opacity-10");
    namaskaar.classList.remove("opacity-0");
    namaskaar.classList.remove("scale-[3]");
    hellotxt.style.transition = "2s";
    helloTxt2.style.transition = "2s";
    box1.style.transition = "2s";
    box2.style.transition = "2s";
    box3.style.transition = "2s";
    namaskaar.style.transition = "1.5s";
  } else {
    hellotxt.classList.remove("scale-150");
    box1.classList.remove("-rotate-90");
    box2.classList.remove("-rotate-45");
    box3.classList.remove("rotate-45");
    namaskaar.classList.remove("opacity-10");
    namaskaar.classList.add("opacity-0");
    namaskaar.classList.add("scale-[3]");
    hellotxt.style.transition = "0s";
    helloTxt2.style.transition = "0s";
    box1.style.transition = "0s";
    box2.style.transition = "0s";
    box3.style.transition = "0s";
    namaskaar.style.transition = "0s";
  }
}

function inView() {
  inViews.forEach((inView) => {
    const rect = inView.getBoundingClientRect();
    const top = rect.top;
    const bottom = rect.bottom;

    if (top <= window.innerHeight && bottom >= 0) {
      inView.classList.remove("translate-y-full");
      inView.classList.remove("opacity-0");
      inView.style.transition = "2s";
    } else {
      inView.classList.add("translate-y-full");
      inView.classList.add("opacity-0");
      inView.style.transition = "0s";
    }
  });
}

function ringCircleInView() {
  const rect = ringCircle.getBoundingClientRect();
  const top = rect.top;
  const bottom = rect.bottom;

  if (top <= window.innerHeight && bottom >= 0) {
    ringCircle.classList.remove("translate-x-full");
    ringCircle.style.transition = "2s";
  } else {
    ringCircle.classList.add("translate-x-full");
    ringCircle.style.transition = "0s";
  }
}

function aboutTxtInView() {
  const rect = aboutTxt.getBoundingClientRect();

  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    aboutTxt.classList.remove("opacity-0");
    aboutTxt.style.transition = "3s";
    aboutInViews.forEach((aboutInView) => {
      aboutInView.classList.remove("translate-y-full");
      aboutInView.classList.remove("opacity-0");
      aboutInView.style.transition = "2s";
    });
  } else {
    aboutTxt.classList.add("opacity-0");
    aboutTxt.style.transition = "0s";
    aboutInViews.forEach((aboutInView) => {
      aboutInView.classList.add("translate-y-full");
      aboutInView.classList.add("opacity-0");
      aboutInView.style.transition = "0s";
    });
  }
}

window.addEventListener("load", aboutTxtInView);
window.addEventListener("scroll", aboutTxtInView);

const websiteImgBox = document.getElementById("websiteImgBox");

function websiteImgBoxInView() {
  const rect = websiteImgBox.getBoundingClientRect();

  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    websiteImgBox.classList.remove("opacity-0");
    websiteImgBox.classList.remove("scale-90");
    websiteImgBox.style.transition = "1.5s";
  } else {
    websiteImgBox.classList.add("opacity-0");
    websiteImgBox.classList.add("scale-90");
    websiteImgBox.style.transition = "0s";
  }
}

window.addEventListener("scroll", websiteImgBoxInView);
window.addEventListener("load", websiteImgBoxInView);

function projectHeadingInView() {
  projectHeadings.forEach((projectHeading) => {
    const rect = projectHeading.getBoundingClientRect();

    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      projectHeading.classList.remove("translate-y-full");
      projectHeading.classList.remove("opacity-0");
      projectHeading.style.transition = "1.5s";
    } else {
      projectHeading.classList.add("translate-y-full");
      projectHeading.classList.add("opacity-0");
      projectHeading.style.transition = "0s";
    }
  });
}

window.addEventListener("scroll", projectHeadingInView);
window.addEventListener("load", projectHeadingInView);

function projectParagraphInView() {
  projectParagraphs.forEach((projectParagraph) => {
    const rect = projectParagraph.getBoundingClientRect();

    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      projectParagraph.classList.remove("translate-x-full");
      projectParagraph.classList.remove("opacity-0");
      projectParagraph.style.transition = "1.5s";
    } else {
      projectParagraph.classList.add("translate-x-full");
      projectParagraph.classList.add("opacity-0");
      projectParagraph.style.transition = "0s";
    }
  });
}

window.addEventListener("scroll", projectParagraphInView);
window.addEventListener("load", projectParagraphInView);

function projectLinkInView() {
  projectLinks.forEach((projectLink) => {
    const rect = projectLink.getBoundingClientRect();

    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      projectLink.classList.remove("-translate-y-full");
      projectLink.classList.remove("opacity-0");
      projectLink.style.transition = "2s";
    } else {
      projectLink.classList.add("-translate-y-full");
      projectLink.classList.add("opacity-0");
      projectLink.style.transition = "0s";
    }
  });
}

window.addEventListener("scroll", projectLinkInView);
window.addEventListener("load", projectLinkInView);

const textSection = document.getElementById("textSection");
const textSectionBg = document.getElementById("textSectionBg");
const textSectionTxt = document.getElementById("textSectionTxt");

function textSectionInView() {
  const rect = textSection.getBoundingClientRect();

  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    textSectionBg.classList.remove("translate-x-full");
    textSectionBg.classList.remove("opacity-0");
    textSectionBg.style.transition = "2s";
    textSectionTxt.classList.remove("translate-x-full");
    textSectionTxt.classList.remove("opacity-0");
    textSectionTxt.style.transition = "2s";
  } else {
    textSectionBg.classList.add("translate-x-full");
    textSectionBg.classList.add("opacity-0");
    textSectionBg.style.transition = "0s";
    textSectionTxt.classList.add("translate-x-full");
    textSectionTxt.classList.add("opacity-0");
    textSectionTxt.style.transition = "0s";
  }
}

window.addEventListener("scroll", textSectionInView);
window.addEventListener("load", textSectionInView);

const contactTxt = document.getElementById("contactTxt");

function contactTxtInView() {
  const rect = contactTxt.getBoundingClientRect();

  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    contactTxt.classList.remove("-translate-x-full");
    contactTxt.classList.remove("opacity-0");
    contactTxt.style.transition = "1.5s";
  } else {
    contactTxt.classList.add("-translate-x-full");
    contactTxt.classList.add("opacity-0");
    contactTxt.style.transition = "0s";
  }
}

window.addEventListener("scroll", contactTxtInView);
window.addEventListener("load", contactTxtInView);

const footerNav = document.getElementById("footerNav");

function footerNavInView() {
  const rect = footerNav.getBoundingClientRect();

  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    footerNav.classList.remove("translate-y-full");
    footerNav.classList.remove("opacity-0");
    footerNav.style.transition = "1.5s";
  } else {
    footerNav.classList.add("translate-y-full");
    footerNav.classList.add("opacity-0");
    footerNav.style.transition = "0s";
  }
}

window.addEventListener("scroll", footerNavInView);
window.addEventListener("load", footerNavInView);

const footerContact = document.getElementById("footerContact");

function footerContactInView() {
  const rect = footerContact.getBoundingClientRect();

  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    footerContact.classList.remove("translate-x-full");
    footerContact.classList.remove("opacity-0");
    footerContact.style.transition = "1.5s";
  } else {
    footerContact.classList.add("translate-x-full");
    footerContact.classList.add("opacity-0");
    footerContact.style.transition = "0s";
  }
}

window.addEventListener("scroll", footerContactInView);
window.addEventListener("load", footerContactInView);

const footerHeading = document.getElementById("footerHeading");

function footerHeadingInView() {
  const rect = footerHeading.getBoundingClientRect();

  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    footerHeading.classList.remove("-translate-x-full");
    footerHeading.classList.remove("opacity-0");
    footerHeading.style.transition = "1.5s";
  } else {
    footerHeading.classList.add("-translate-x-full");
    footerHeading.classList.add("opacity-0");
    footerHeading.style.transition = "0s";
  }
}

window.addEventListener("scroll", footerHeadingInView);
window.addEventListener("load", footerHeadingInView);

const workBottomPara = document.getElementById("workBottomPara");

function workBottomParaInView() {
  const rect = workBottomPara.getBoundingClientRect();

  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    workBottomPara.classList.remove("-translate-x-full");
    workBottomPara.classList.remove("opacity-0");
    workBottomPara.style.transition = "1.5s";
  } else {
    workBottomPara.classList.add("-translate-x-full");
    workBottomPara.classList.add("opacity-0");
    workBottomPara.style.transition = "0s";
  }
}

window.addEventListener("scroll", workBottomParaInView);
window.addEventListener("load", workBottomParaInView);

const crossImage = document.getElementById("crossImage");

function crossImageInView() {
  const rect = crossImage.getBoundingClientRect();

  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    crossImage.classList.remove("translate-y-full");
    crossImage.classList.remove("opacity-0");
    crossImage.style.transition = "1.5s";
  } else {
    crossImage.classList.add("translate-y-full");
    crossImage.classList.add("opacity-0");
    crossImage.style.transition = "0s";
  }
}

window.addEventListener("scroll", crossImageInView);
window.addEventListener("load", crossImageInView);

const hireMeBtn = document.getElementById("hireMeBtn");

function hireMeBtnInView() {
  const rect = hireMeBtn.getBoundingClientRect();

  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    hireMeBtn.classList.remove("scale-75");
    hireMeBtn.classList.remove("opacity-0");
    hireMeBtn.style.transition = "2.5s";
  } else {
    hireMeBtn.classList.add("scale-75");
    hireMeBtn.classList.add("opacity-0");
    hireMeBtn.style.transition = "0s";
  }
}

window.addEventListener("scroll", hireMeBtnInView);
window.addEventListener("load", hireMeBtnInView);

const mainTopTxt = document.getElementById("mainTopTxt");

function mainTopTxtInView() {
  const rect = mainTopTxt.getBoundingClientRect();

  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    mainTopTxt.classList.remove("-translate-x-full");
    mainTopTxt.classList.remove("opacity-0");
    mainTopTxt.style.transition = "1s";
  } else {
    mainTopTxt.classList.add("-translate-x-full");
    mainTopTxt.classList.add("opacity-0");
    mainTopTxt.style.transition = "0s";
  }
}

window.addEventListener("scroll", mainTopTxtInView);

const homeBtns = document.querySelectorAll(".homeBtn");
const contactBtns = document.querySelectorAll(".contactBtn");
const portfolioBtns = document.querySelectorAll(".portfolioBtn");
const aboutBtns = document.querySelectorAll(".aboutBtn");

const homeSection = document.getElementById("homeSection");
const aboutSection = document.getElementById("aboutSection");
const PortfolioSection = document.getElementById("PortfolioSection");
const contactSection = document.getElementById("contactSection");

homeBtns.forEach((homeBtn) => {
  homeBtn.addEventListener("click", () => {
    homeSection.scrollIntoView(true);
  });
});

contactBtns.forEach((contactBtn) => {
  contactBtn.addEventListener("click", () => {
    contactSection.scrollIntoView(true);
  });
});

portfolioBtns.forEach((portfolioBtn) => {
  portfolioBtn.addEventListener("click", () => {
    PortfolioSection.scrollIntoView(true);
  });
});

aboutBtns.forEach((aboutBtn) => {
  aboutBtn.addEventListener("click", () => {
    aboutSection.scrollIntoView(true);
  });
});

const textReveal = document.getElementById("textReveal");

function textRevealInView() {
  const rect = textReveal.getBoundingClientRect();

  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    textReveal.style.backgroundSize = "100%";
    textReveal.style.transition = "3.5s linear";
  } else {
    textReveal.style.backgroundSize = "0%";
    textReveal.style.transition = "0s";
  }
}

window.addEventListener("scroll", textRevealInView);
window.addEventListener("load", textRevealInView);

const paragraphs = document.querySelectorAll(".paragraph");

paragraphs.forEach((paragraph) => {
  let paraInnerTxt = "";
  let pSpan = paragraph.textContent.trim().split("");
  for (i = 0; i < pSpan.length; i++) {
    if (pSpan[i] === " ") {
      paraInnerTxt += `<span class="inline-block lg:w-6 md:w-5 sm:w-4 w-3 cursorScale">${pSpan[i]}</span>`;
    } else {
      paraInnerTxt += `<span class="paraspan inline-block translate-y-[200%] cursorScale"><span class="preSpan inline-block cursorScale ">${pSpan[i]}</span></span>`;
    }
  }
  paragraph.innerHTML = paraInnerTxt;
});

function paraInView() {
  paragraphs.forEach((para) => {
    const rect = para.getBoundingClientRect();
    const paraSpans = para.querySelectorAll(".paraspan");
    paraSpans.forEach((paraSpan, id) => {
      paraSpan.style.transition = "0.7s";
      if (rect.top <= window.innerHeight / 1.2 && rect.bottom >= 0) {
        setTimeout(() => {
          paraSpan.classList.remove("translate-y-[200%]");
        }, id * 50);
      } else {
        setTimeout(() => {
          paraSpan.classList.add("translate-y-[200%]");
        }, id * 50);
      }
    });
  });
}

window.addEventListener("scroll", paraInView);
window.addEventListener("load", paraInView);

paragraphs.forEach((para) => {
  para.addEventListener("mouseover", () => {
    const preSpans = para.querySelectorAll(".preSpan");
    preSpans.forEach((preSpan, id) => {
      preSpan.style.transition = "0.7s";
      setTimeout(() => {
        preSpan.style.transform = "scaleY(-1)";
      }, id * 50);
    });
  });
});

paragraphs.forEach((para) => {
  para.addEventListener("mouseleave", () => {
    const preSpans = para.querySelectorAll(".preSpan");
    preSpans.forEach((preSpan, id) => {
      preSpan.style.transition = "0.7s";
      setTimeout(() => {
        preSpan.style.transform = "scaleY(1)";
      }, id * 50);
    });
  });
});

copyMailTxt.addEventListener("click", () => {
  navigator.clipboard.writeText(mailTxt.textContent.trim());
  cursorBg.innerHTML = `<span class="text-[2px] text-black inline font-extrabold
   text-center leading-none">Copied</span>`;
});

const projectBoxs = document.querySelectorAll(".projectBox");
const projectArrows = document.querySelectorAll(".projectArrow");

projectBoxs.forEach((projectBox, index) => {
  projectBox.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    projectArrows[index].style.top = `${y}px`;
    projectArrows[index].style.left = `${x}px`;
    if (event.target.classList.contains("viewProject")) {
      projectArrows[index].style.display = "none";
    } else {
      projectArrows[index].style.display = "block";
    }
  });
  projectBox.addEventListener("mouseleave", () => {
    projectArrows[index].style.display = "none";
  });
});

const portfolioTxt = document.getElementById("portfolioTxt");

let portfolioTxtStr = "";
let portfolioTxtSpanArr = portfolioTxt.textContent.trim().split("");

portfolioTxtSpanArr.forEach((portfolioTxtSpan) => {
  portfolioTxtStr += `<span class='font3 -scale-y-100 inline-block opacity-0'>${portfolioTxtSpan}</span>`;
});

portfolioTxt.innerHTML = portfolioTxtStr;

function portfolioTxtInView() {
  const rect = portfolioTxt.getBoundingClientRect();
  const workSpans = portfolioTxt.querySelectorAll("span");
  workSpans.forEach((workSpan, inx) => {
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      workSpan.style.transition = "0.8s";
      setTimeout(() => {
        workSpan.classList.remove("-scale-y-100");
        workSpan.classList.remove("opacity-0");
      }, inx * 80);
    } else {
      workSpan.style.transition = "0s";
      setTimeout(() => {
        workSpan.classList.add("-scale-y-100");
        workSpan.classList.add("opacity-0");
      }, inx * 80);
    }
  });
}

window.addEventListener("scroll", portfolioTxtInView);
window.addEventListener("load", portfolioTxtInView);
