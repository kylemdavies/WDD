const newParagraph = document.createElement("p");
newParagraph.innerHTML = "<strong>Hello World</strong>";
document.body.appendChild(newParagraph);

const my_list = ["one", "two"]

const new_list = document.createElement("ul");
new_list.innerHTML = `<li>${my_list[0]}</li><li>${my_list[1]}</li>`;
document.body.appendChild(new_list);