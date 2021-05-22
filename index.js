"use strict";

const tabsBox = document.querySelector("#tabs-container");
const tabs = document.querySelectorAll(".tabs");
const contents = document.querySelectorAll(".contents");
const input = document.querySelector(".email-input-form");
const inputBtn = document.querySelector(".input-btn");

const displayContent = function (tabNum) {
  const targetContent = document.querySelector(`.content-${tabNum}`);

  contents.forEach((content) => content.classList.add("hidden"));
  targetContent.classList.remove("hidden");
};

const changeActiveTab = function (e) {
  // exit if the outside container is clicked
  if (e.target.classList.contains("tabs-container")) return;

  //   if the p or icon inside tab is clicked, then shift target to the tab
  const target = e.target.closest(".tabs");

  tabs.forEach((tab) => tab.classList.remove("active-tab"));
  target.classList.add("active-tab");

  const tabNum = target.id[3];
  displayContent(tabNum);
};

// use event bubbling, hence selecting tabs container
tabsBox.addEventListener("click", changeActiveTab);
