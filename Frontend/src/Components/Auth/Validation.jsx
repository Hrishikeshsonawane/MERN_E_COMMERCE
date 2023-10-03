export const feild = {
    fieldValue: '',
    isValidField: true,
    errorField: ""
}

export const check = (val,feildname) => {
    

    switch (feildname) {
        case "name":           
            var regEx = /^[a-zA-Z ]+$/;
            break;
        case "email":           
            var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            break; 
        case "password":
            var regEx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        case "cpassword":
            var regEx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        default:
            break;
    }

    if(val.trim().length>0)
    {
        if(regEx.test(val))
        {
            console.log("in if");
            return {
                fieldValue: val,
                isValidField: true,
                errorField: ""
            }
        }
        else{
            console.log("in else");

            return {
                fieldValue: val,
                isValidField: false,
                errorField: `Invalid ${feildname}`
            }
        }
    }
    else{
        return {
            fieldValue: val,
            isValidField: false,
            errorField: `${feildname} is mandatory`
        }
    }
}