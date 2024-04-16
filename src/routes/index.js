import Following from "~/pages/Following";
import Home from "~/pages/Home";
import Live from "~/pages/Live";
import Profile from "~/pages/Profile";


// Public routes
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/following', component: Following},
    { path: '/profile', component: Profile},
    { path: '/live', component: Live}

];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
