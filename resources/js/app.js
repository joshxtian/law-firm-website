require('./bootstrap');
import { ChakraProvider } from '@chakra-ui/react';
import "../css/app.css"
import ReactDOM from 'react-dom';
import Index from './components/Index';
import theme from './themes/globalTheme';

if (document.getElementById('app')) {
  ReactDOM.render(<ChakraProvider theme={theme}><Index/></ChakraProvider>, document.getElementById('app'));
}
