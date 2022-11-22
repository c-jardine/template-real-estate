import { ChakraProvider } from '@chakra-ui/react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useAppDispatch, useAppSelector } from '../lib/hooks/redux';
import { RootState } from '../src/redux/store';
import chakraTheme from '../src/styles/theme/theme';

const AppWrapper = (props) => {
  const { darkMode } = useAppSelector((state: RootState) => state.themeReducer);
  const dispatch = useAppDispatch();

  return (
    <ParallaxProvider>
      <ChakraProvider theme={chakraTheme.lightTheme}>
        {props.children}
      </ChakraProvider>
    </ParallaxProvider>
  );
};

export default AppWrapper;
