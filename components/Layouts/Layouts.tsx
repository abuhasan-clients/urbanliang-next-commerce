import type { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/redux/rootReducer';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import themes from '../themes';
import Customization from '../themes/Customization';

const Layouts: NextPage = ({ children }) => {
    const customization = useSelector((state: RootState) => state.customization);
    // console.log(customization);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <main id="mainLayoutWrapper" dir={customization?.dirChange ? 'rtl' : 'ltr'}>
                    {children}
                </main>
                <Customization />
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default Layouts;
