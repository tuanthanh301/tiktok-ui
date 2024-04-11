import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { DefaultLayout } from './Layout';
import Header from './Layout/DefaultLayout/Header';
import Sidebar from './Layout/DefaultLayout/Sidebar';
import UpLoad from './Layout/DefaultLayout/Upload';
import Following from './pages/Following';
import Home from './pages/Home';
import Profile from './pages/Profile';

const App = () => {
    return (
        <Router>
            <div className="App">
                    <Header/>
                    <Sidebar/>
                    <div className="screens-section-container">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/following" element={<Following />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/upload" element={<UpLoad />} />

                            {/* {publicRoutes.map((route, index) => {
                        const Layout = route.layout || DefaultLayout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })} */}
                        </Routes>
                    </div>
            </div>
        </Router>
    );
};

export default App;
