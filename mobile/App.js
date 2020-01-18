import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    //incluido o fragment para ser pssível um componente abaixo do outro
    //incluido o StatusBar para a alteração ser em todo o projeto
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Routes />
    </>
  );
}