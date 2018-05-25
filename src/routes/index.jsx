import Login from "../views/LoginPage/LoginPage";
import Register from '../views/RegisterPage/RegisterPage';

const indexRoutes = [
    { path: "/", component: Login },
    { path: "/register", component: Register }
];

export default indexRoutes;
