// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.




const inputData = document.getElementById("validation-input");

inputData.addEventListener("blur", () => {
    const lengthinputData = inputData.value.length;
    const dataLength = Number(inputData.dataset.length);
  if (lengthinputData === dataLength) {
    inputData.classList.add("valid");
    inputData.classList.remove("invalid");
  } else {
    inputData.classList.add("invalid");
    inputData.classList.remove("valid");
  }
});