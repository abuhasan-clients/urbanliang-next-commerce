import type { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/redux/rootReducer';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import themes from '../themes';
import Customization from '../themes/Customization';
import MainNavBar from './MainNav/MainNavBar';

const Layouts: NextPage = ({ children }) => {
    const customization = useSelector((state: RootState) => state.customization);
    // console.log(customization);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <header id="header_nav_parent">
                    <MainNavBar />
                </header>
                <main id="mainLayoutWrapper" dir={customization?.dirChange ? 'rtl' : 'ltr'} className="container mx-auto px-3">
                    {children}
                </main>
                <Customization />
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default Layouts;
