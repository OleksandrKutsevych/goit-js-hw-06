const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const parrentEl = document.querySelector("#ingredients");

function makeIngredientsList(arrOfIngredients) {
  return arrOfIngredients.map((ingredient) => {
    const liIngredient = document.createElement("li");
    liIngredient.textContent = ingredient;
    liIngredient.classList.add("item");
    return liIngredient;
  });
}

const elements = makeIngredientsList(ingredients);
parrentEl.append(...elements);
//============================================
// const ingredientsEl = ingredients.map((ingredient) => {
//   const articleEl = document.createElement("li");
//   articleEl.textContent = ingredient;
//   articleEl.classList.add("item");

//   return articleEl;
// });

// parrentEl.append(...ingredientsEl);
//=============================================
// let ingredientsEl = [];

// ingredients.forEach((ingredient) => {
//   const articleEl = document.createElement("li");
//   articleEl.textContent = ingredient;
//   articleEl.classList.add("item");

//   ingredientsEl.push(articleEl);
// });
// console.log(ingredientsEl);

// parrentEl.append(...ingredientsEl);
