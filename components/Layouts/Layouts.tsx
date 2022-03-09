import type { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/redux/rootReducer';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import themes from '../themes';
// import Customization from '../themes/Customization';
import MainNavBar from './MainNav/MainNavBar';
import Footer from './Footer/Footer';
// import { useRouter } from 'next/router';

const Layouts: NextPage = ({ children }: any) => {
    const customization = useSelector((state: RootState) => state.customization);
    // const router = useRouter();
    // console.log(router);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <header id="header_nav_parent">
                    <MainNavBar />
                </header>
                <main id="mainLayoutWrapper" className="container mx-auto px-3">
                    {children}
                </main>
                <footer id="footer_wrapper" className={`${customization.themeChange === 'light' ? 'footer_main_bg' : ''}`}>
                    <Footer />
                </footer>
                {/* <Customization /> */}
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default Layouts;
