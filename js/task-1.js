"use ctrict";
const categoriesList = document.getElementById("categories");
const categoriesItems = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryItemsCount = category.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItemsCount}`);
});
