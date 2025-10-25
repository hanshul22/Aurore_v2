import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const MainLayout = () => {

    

    return (
        <div className="main-layout">
            
            <Header/>

            <main className="main-content">
                <Outlet />
            </main>

            <Footer  />
        </div>
    );
};

export default MainLayout;

