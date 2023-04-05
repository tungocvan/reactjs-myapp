// Pages
import Logout from '~/pages/Logout';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import Post from '~/pages/Post';
import Product from '~/pages/Product';
import Contact from '~/pages/Contact';
import Feedback from '~/pages/Feedback';
import Inbox from '~/pages/Inbox';
import Language from '~/pages/Language';
import Profiles from '~/pages/Profiles';
import Settings from '~/pages/Settings';
import UploadVideo from '~/pages/UploadVideo';
import Message from '~/pages/Message';

// Public routes
const publicRoutes = [
    { path: '/', component: Login },
    { path: '/signup', component: Signup },
    { path: '/contact', component: Contact, layout: 'Layout' },
    { path: '/inbox', component: Inbox, layout: 'Layout' },
];

const privateRoutes = [
    { path: '/home', component: Home, layout: 'Layout' },
    { path: '/post', component: Post, layout: 'HeaderOnly' },
    { path: '/product', component: Product, layout: 'HeaderOnly' },
    { path: '/logout', component: Logout, layout: null },
    { path: '/feedback', component: Feedback, layout: 'HeaderOnly' },
    { path: '/product', component: Product, layout: 'HeaderOnly' },
    { path: '/language', component: Language, layout: 'HeaderOnly' },
    { path: '/profiles', component: Profiles, layout: 'HeaderOnly' },
    { path: '/settings', component: Settings, layout: 'HeaderOnly' },
    { path: '/uploadVideo', component: UploadVideo, layout: 'HeaderOnly' },
    { path: '/message', component: Message, layout: 'HeaderOnly' },
];

export { publicRoutes, privateRoutes };
