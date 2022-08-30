import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Navbar from "./_components/Navbar";
import Alert from "./_components/Alert";
import { AlertState } from "./context/alert/AlertState";
import { FirebaseState } from "./context/firebase/FirebaseState";

const Page404 = lazy(() => import("./_pages/Page404")),
    Home = lazy(() => import("./_pages/Home")),
    About = lazy(() => import("./_pages/About"));

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

function App() {
    return (
        <FirebaseState>
            <AlertState>
                <Router>
                    <ScrollToTop />
                    <Navbar />
                    <main className="container">
                        <Alert />
                        <Suspense fallback={<span></span>}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="*" element={<Page404 />} />
                            </Routes>
                        </Suspense>
                    </main>
                </Router>
            </AlertState>
        </FirebaseState>
    );
}

export default App;
