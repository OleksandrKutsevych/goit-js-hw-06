// const categories = document.querySelectorAll(".item");
// const amount = categories.length;
// console.log(`Number of categories:  ${amount}`);

function numbersOfCategories() {
  const categories = document.querySelector("#categories");
  // console.log(categories);
  const item = categories.querySelectorAll("li.item");
  // console.log(item);
  const amount = item.length;
  console.log(`Number of categories:  ${amount}`);
}

numbersOfCategories();

// const ul = document.querySelectorAll("#categories>li");
// // console.log(ul);
// ul.forEach((el) => {
//   console.log(`Category: ${el.firstElementChild.textContent}
// Elements: ${el.lastElementChild.children.length}`);
// });

function numberOfElementsInCategories() {
  const ul = document.querySelectorAll("#categories>li");
  // console.log(ul);
  ul.forEach((el) => {
    console.log(`Category: ${el.firstElementChild.textContent}
Elements: ${el.lastElementChild.children.length}`);
  });
}

numberOfElementsInCategories();
