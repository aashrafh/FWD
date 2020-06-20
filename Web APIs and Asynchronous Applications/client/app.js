const postRequest = async (enpoint='', body={})=>{
    console.log(body);
    const response = await fetch(enpoint, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body);
    });

    try {
        const resData = await response.json();
        console.log(resData);
        return resData;
    }catch(error){
        console.error(error);
    }
}

postRequest('/add', {ans: 42});

///////////////////////////////////////

const base = 'http://api.animalinfo.org/data/?animal=';
const apiKey = '&appid=9dsa112dsa2...';

document.getElementById('generate').addEventListener('click', getDate);
function getDate(e) {
    const animal = document.getElementById('animal').nodeValue;
    getRequest(base,animal, apiKey);
}

const getRequest = async (base, data, key) => {
    const res = await fetch(base+data+key);
    try{
        const data = await res.json();
        console.log(date);
        return data;
    } catch(error){
        console.log("error", error);
    }
}
