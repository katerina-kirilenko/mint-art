import React, { ReactElement } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { materialTheme } from 'theme/materialTheme';
import GlobalStyle from 'theme/GlobalStyle';
import { Props } from './types';

const ThemeProviderWrapper = ({ children }: Props): ReactElement => (
  <ThemeProvider theme={materialTheme}>
    <CssBaseline />
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default ThemeProviderWrapper;
