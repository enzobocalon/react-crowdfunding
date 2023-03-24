import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: {
      moderateCyan: string,
      darkCyan: string
    },
    neutral: {
      black: string,
      darkGray: string
    }
  }
}
