import { LoginClient } from "../generated/LoginServiceClientPb";
import { GoogleLoginRequest } from "../generated/login_pb";
import { SERVICE_HOST } from "./constants";

var loginClient = new LoginClient(SERVICE_HOST);

function IsLoggedIn() {
    const token = localStorage.getItem('token');
    return token !== null;
}

// Admin login only.
async function LoginWithGoogle(token: string) : Promise<boolean> {
    var req = new GoogleLoginRequest();
    req.setIdToken(token);

    var res = await loginClient.adminLoginWithGoogle(req, {});
    localStorage.setItem('token', res.getJwt());

    return true;
}

function Logout() {
    localStorage.removeItem('token');
    return true;
}

export { IsLoggedIn, LoginWithGoogle, Logout };