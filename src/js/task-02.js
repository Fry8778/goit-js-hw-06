const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");
const dish = [];
ingredients.forEach  ((ingredientsEl) =>  {
  dish.push (ingredientsEl);
});

const createFirst = document.createElement("li");
createFirst.textContent = dish [0];
createFirst.classList.add("item");

const createSecond = document.createElement("li");
createSecond.textContent = dish [1];
createSecond.classList.add("item");


const createThird = document.createElement("li");
createThird.textContent = dish [2];
createThird.classList.add("item");

const createFourth = document.createElement("li");
createFourth.textContent = dish [3];
createFourth.classList.add("item");

const createFifth = document.createElement("li");
createFifth.textContent = dish [4];
createFifth.classList.add("item");

const createSixth = document.createElement("li");
createSixth.textContent = dish [5];
createSixth.classList.add("item");
listEl.append(createFirst, createSecond, createThird, createFourth, createFifth, createSixth);
