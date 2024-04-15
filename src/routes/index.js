import Following from "~/pages/Following";
import Home from "~/pages/Home";
import Profile from "~/pages/Profile";


// Public routes
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/following', component: Following},
    { path: '/profile', component: Profile}
    // { path: '/upload', component: UpLoad}

];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
