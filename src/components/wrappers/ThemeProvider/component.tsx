import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { lightTheme } from 'theme/lightTheme';
import { darkTheme } from 'theme/darkTheme';
import GlobalStyle from 'theme/GlobalStyle';
import { currentTheme } from 'store/selectors';
import { LIGHT } from 'constants/themes';
import { Props } from './types';

const ThemeProviderWrapper = ({ children }: Props): ReactElement => {
  const theme = useSelector(currentTheme);
  const appliedTheme = createMuiTheme(theme === LIGHT ? lightTheme : darkTheme);

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
