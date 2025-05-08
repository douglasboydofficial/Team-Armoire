let people = [];

function addPerson() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim();
  if (name) {
    people.push({ name, rating: 5 });
    nameInput.value = "";
    renderList();
  }
}

function updateRating(index, value) {
  people[index].rating = value;
  renderList();
}

function renderList() {
  const listContainer = document.getElementById("people-list");
  listContainer.innerHTML = "";
  people.forEach((person, index) => {
    const personDiv = document.createElement("div");
    personDiv.className = "person-entry";

    const nameSpan = document.createElement("span");
    nameSpan.textContent = person.name;

    const ratingInput = document.createElement("input");
    ratingInput.type = "range";
    ratingInput.min = 1;
    ratingInput.max = 10;
    ratingInput.value = person.rating;
    ratingInput.oninput = () => updateRating(index, parseInt(ratingInput.value));

    const ratingValue = document.createElement("span");
    ratingValue.textContent = ` (${person.rating})`;
    ratingInput.addEventListener("input", () => {
      ratingValue.textContent = ` (${ratingInput.value})`;
    });

    personDiv.appendChild(nameSpan);
    personDiv.appendChild(ratingInput);
    personDiv.appendChild(ratingValue);

    listContainer.appendChild(personDiv);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("add-btn").addEventListener("click", addPerson);
});
