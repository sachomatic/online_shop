function getData() {
    const name = document.getElementById("name").value
    const object = document.getElementById("obj").value
    const text = document.getElementById("fulltext").value
    const anonymous = document.getElementById('anonymouscheck').checked;

    const data = {"name":name,"object":object,"text":text,"anonymous":anonymous}
    console.log(`data: ${data["name"]},${data["object"]},${data["text"],data["anonymous"]}`)
    return data
}

async function sendMessage() {
    const url = getRoot()+"/send/";
    const data = getData();
    var missing_flag = false

    const text = "<p class='warning'>Missing</p>"

    if (data[Object.keys(data)[0]] == '') {
      var element = document.getElementById("name");
      // Check if there's already a warning next to the element
      if (!element.nextElementSibling || !element.nextElementSibling.classList.contains("warning")) {
        element.insertAdjacentHTML("afterend", text);
      }
      missing_flag = true;
    }
    
    if (data[Object.keys(data)[1]] == '') {
      var element = document.getElementById("obj");
      if (!element.nextElementSibling || !element.nextElementSibling.classList.contains("warning")) {
        element.insertAdjacentHTML("afterend", text);
      }
      missing_flag = true;
    }
    
    if (data[Object.keys(data)[2]] == '') {
      var element = document.getElementById("fulltext");
      if (!element.nextElementSibling || !element.nextElementSibling.classList.contains("warning")) {
        element.insertAdjacentHTML("afterend", text);
      }
      missing_flag = true;
    }

    if (missing_flag) {
      return
    }

    try {
      const response = await fetch(url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken"),
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        console.log(`Error : ${response.status}`)
        throw new Error(`Response status: ${response.status}`);
      }
      console.log(`Success : ${response.status}`);
    } 
    catch (error) {
      console.error(error.message);
      return
    }

    document.querySelector("form").reset();

    const successMessage = document.createElement("p");
    successMessage.id = "success-message";
    successMessage.textContent = "Success!";
    document.querySelector("form").after(successMessage);

    setTimeout(function() {
      successMessage.style.transition = "opacity 0.5s";
      successMessage.style.opacity = 0;
      setTimeout(() => successMessage.remove(), 500);
    }, 3000);
  }

function getRoot () {
    return window.location.origin
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === name + "=") {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

document.addEventListener("DOMContentLoaded", () => {
  function box(name, image, price) {
      if (image=="none") {
        image="/static/images/not_found.png"
      }
      const container = document.getElementById("items-container");
      const box_html = document.createElement("div");
      box_html.classList.add("box");
      box_html.innerHTML = `
          <img src="${image}" alt="${name}">
          <h2>${name}</h2>
          <p class="price">${price}€</p>
          <button>Buy</button>
      `;
      container.appendChild(box_html);
  }
  window.box = box
});

document.addEventListener("DOMContentLoaded", () => {
  function topnav() {
    console.log("topnav loaded");
  
    const topnavbar = document.querySelector(".topnav");
    const path = window.location.pathname;
  
    const links = [
      { href: "/", label: "Home" },
      { href: "/buy/", label: "Buy" },
      { href: "/news/", label: "News" },
      { href: "/contact/", label: "Contact us" },
      { href: "/about/", label: "About" },
    ];
  
    let html = `<a href="/"><h1>Online Shop</h1></a>`;
  
    links.forEach(link => {
      const isActive = path === link.href ? "active" : "";
      html += `<a href="${link.href}" class="${isActive}">${link.label}</a>`;
    });
  
    html += `
      <a href="/login">
        <img src="/static/images/login_icon.png" width="30" height="30" style="float: right">
      </a>
    `;
  
    topnavbar.innerHTML = html;
  }
  window.topnav = topnav
});

document.addEventListener("DOMContentLoaded", () => {
  function botnav() {
    const topnavbar = document.querySelector(".botnav");
    topnavbar.innerHTML = `
        <p>Made by Sacha Tardat</p>
        <a href="https://github.com/sachomatic" target="_blank">See my GitHub</a>
        <p>©Sacha Tardat, 15 yo</p>
        `;
  }
  window.botnav = botnav
});