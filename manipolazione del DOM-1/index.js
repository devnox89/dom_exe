const addProduct = () => {
  const valueText = document.querySelector("input").value;
  const listText = document.querySelector("ul");
  const listItem = document.createElement("li");

  listItem.innerHTML = `<input type="checkbox" /> ${valueText}`;
  listText.appendChild(listItem);
};
