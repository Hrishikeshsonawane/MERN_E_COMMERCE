const constantEnv = {
    prod: 'http://my-shope.onrender.com',
    dev: 'http ://localhost:5500/'
}


export const getActiveEnv = (Env) => {

    switch (Env) {
        case "Prod":
            return constantEnv.prod;
       case "Dev":  
       return constantEnv.dev;  
       
       default :
       return  constantEnv.prod
    }


}