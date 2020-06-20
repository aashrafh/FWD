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