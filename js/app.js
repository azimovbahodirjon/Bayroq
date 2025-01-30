async function getData() {
    const req = await fetch("https://restcountries.com/v3.1/all");
    const data = await req.json();
    return data;
}

const list = document.querySelector("#list");

function generateCountires(countries) {
    countries.forEach((c) => {
        let li = document.createElement("li");
        li.textContent = c.name.common;
        list.appendChild(li);
    });
}

getData()
    .then((data) => generateCountires(data))
    .catch((error) => console.log(error));