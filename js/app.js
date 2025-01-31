const loaderContainer = document.querySelector(".loader-container");

async function getData() {
  loaderContainer.classList.remove("hidden");
  const req = await fetch("https://restcountries.com/v3.1/all");
  const data = await req.json();
  loaderContainer.classList.add("hidden");

  return data;
}

const list = document.querySelector("#list");

function generateCountires(countries) {
  countries.forEach((c) => {
    console.log(c);
    let li = document.createElement("li");
    let p = document.createElement("p");
    let img = document.querySelector("img");
    img.src = c.flags.svg;
    img.width = 300;
    img.alt = c.flags.alt;
    p.textContent = c.name.common;
    li.appendChild(img);
    li.appendChild(p);

    list.appendChild(li);
  });
}

getData()
  .then((data) => generateCountires(data))
  .catch((error) => console.log(error));
