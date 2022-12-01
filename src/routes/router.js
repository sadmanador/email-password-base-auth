import { createBrowserRouter } from "react-router-dom";
import BootstrapForm from "../components/Bootstrap-form/Bootstrap-Form";
import GoogleGitHubLogin from "../components/GoogleGitHubLogin/GoogleGitHubLogin";
import Login from "../components/Login/Login";
import Main from "../Layout/Main";


export const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        {path: '/', element: <GoogleGitHubLogin></GoogleGitHubLogin>},
        {path: '/bootstrapForm', element: <BootstrapForm></BootstrapForm>},
        {path: '/login', element: <Login></Login>}
    ]}
])