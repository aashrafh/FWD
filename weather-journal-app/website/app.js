const apiKey = "&appid=e46cdd02392...";
const base = "http://api.openweathermap.org/data/2.5/weather?zip=";

let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

document.getElementById("generate").addEventListener("click", e => {
  e.preventDefault();
  const zip = document.getElementById("zip").value;
  const feelings = document.getElementById("feelings").value;

  getAPIData(base, zip, apiKey).then(response => {
    postData("http://localhost:8000/add", {
      date: newDate,
      temperature: response.main.temp,
      userResponse: feelings
    })
      .then(res => {
        updateState();
      })
      .catch(err => {
        console.log(err);
      });
  });
});

const getAPIData = async (base, zip, apiKey) => {
  const res = await fetch(base + zip + apiKey);
  try {
    const data = await res.json();
    return data;
  } catch (erorr) {
    console.log("error", erorr);
  }
};

const postData = async (base = "", body = {}) => {
  const req = await fetch(base, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      date: body.date,
      temperature: body.temperature,
      userResponse: body.userResponse
    })
  });
  try {
    const data = await req.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const updateState = async () => {
  const res = await fetch("http://localhost:8000/all");
  try {
    const data = await res.json();
    document.getElementById("date").innerHTML = data.date;
    document.getElementById("temp").innerHTML = data.temperature;
    document.getElementById("content").innerHTML = data.userResponse;
  } catch (error) {
    console.log(error);
  }
};
