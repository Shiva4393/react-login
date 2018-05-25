import Login from "../components/login/Login";
import Register from '../components/login/Register';

const indexRoutes = [
    { path: "/", component: Login },
    { path: "/register", component: Register }
];

export default indexRoutes;
