// For API's without token 

// POST method for login and tokenParse
export const LOGIN_POST = async (URL, body) => {
    console.log("Login Body : ", body, URL)
    const res = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        mode:'no-cors',
        body: JSON.stringify(body)
    });
console.log("res",res);
    // return res;
}

// For API's with token 

// GET method
export const GET = async (URL, token) => {
    const res = await fetch(URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + token,
        },
    });
    return res;
}


// POST method
export const POST = async (URL, token, body) => {
    const res = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Bearer " + token,
        },
        body: JSON.stringify(body)
    });

    return res;
}

// PUT method
export const PUT = async (URL, token, body) => {
    const res = await fetch(URL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Bearer " + token,
        },
        body: JSON.stringify(body)
    });

    return res;
}