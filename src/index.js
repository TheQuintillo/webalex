import React from 'react';
import { render } from 'react-dom';
import Nav from './components/NavBar';
import Biogra from './components/Biografia';
import Galery from './components/Galeria';
import Foot from './components/Footer';

render(<Nav />,document.getElementById('nav'));
render(<Biogra />,document.getElementById('biografia'));
render(<Galery />,document.getElementById('galeria'));
render(<Foot />,document.getElementById('footer'));

