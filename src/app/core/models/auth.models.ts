export interface signUpRequest {
    code : string,
    email : string,
    phoneNumber : string,
    password : string
}

export interface signInRequest {
    email : string,
    password : string
}

export interface authUser {
    userId : string,
    name : string,
    phoneNumber : string,
    email : string
}

export interface authResponse {
    date : string,
    message : string,
    user : authUser
}