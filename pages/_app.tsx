import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layouts from '../components/Layouts/Layouts';
import { Provider } from 'react-redux';
import { store } from '../services/redux/store';
import '../i18n';

function MyApp({ Component, pageProps }: AppProps) {
    // if (typeof window !== 'undefined') {
    //     document.cookie = 'i18next=bn';
    // }
    return (
        <Provider store={store}>
            <Layouts>
                <Component {...pageProps} />
            </Layouts>
        </Provider>
    );
}

export default MyApp;
