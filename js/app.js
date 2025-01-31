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
    let img = document.createElement("img");
    let cap = document.createElement("p");
    // let popula = document.createElement("population");
    img.src = c.flags.svg;
    img.width = 264;
    img.height = 160;
    img.alt = c.flags.alt;
    p.textContent = c.name.common;
    cap.textContent = c.capital;

    li.appendChild(img);
    li.appendChild(p);
    li.appendChild(cap);
    list.appendChild(li);
  });
}
list.style.display = "flex";
list.style.flexWrap = "wrap";
list.style.gap = "75px";
getData()
  .then((data) => generateCountires(data))
  .catch((error) => console.log(error));
