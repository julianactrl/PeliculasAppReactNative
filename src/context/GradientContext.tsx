/* eslint-disable no-shadow */
// Necesito estado inicial
// Provider
// Definir tipos

import React, {createContext} from 'react';
import {useState} from 'react';

interface ImageColors {
  primary: string;
  secondary: string;
}

interface ContexProps {
  colors: ImageColors;
  prevColors: ImageColors;
  setMainColors: (colors: ImageColors) => void;
  setPrevMainColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContexProps);

// Provide -- highter order component
// recibe un children y retorna un JSX.Element
export const GradientProvider = ({children}: any) => {
  //Manejar la informacion de dos pares de colores
  const [colors, setColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });
  const [prevColors, setPrevColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setMainColors = (colors: ImageColors) => {
    setColors(colors);
  };

  const setPrevMainColors = (colors: ImageColors) => {
    setPrevColors(colors);
  };

  return (
    <GradientContext.Provider
      value={{
        colors,
        prevColors,
        setMainColors,
        setPrevMainColors,
      }}>
      {children}
    </GradientContext.Provider>
  );
};
