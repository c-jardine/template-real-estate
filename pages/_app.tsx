import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { Footer } from '../src/components/core/Footer';
import { InformationBar } from '../src/components/core/InformationBar';
import { Navbar } from '../src/components/core/Navbar';
import { store } from '../src/redux/store';
import '../src/styles/globals.css';
import AppWrapper from './AppWrapper';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <AppWrapper>
        <InformationBar />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </AppWrapper>
    </Provider>
  );
};

export default App;
