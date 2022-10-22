import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme;

// Suggests theme's colours on IDE's auto-completion
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}