import { profileConstant } from "./ProfileConstants"
import {getActiveEnv} from "./GetActiveEnv"

const baseUrl= getActiveEnv(profileConstant.Prod)

export const URL ={

    login : baseUrl + "users/login-user",
    register: baseUrl +  "users/register",





}

