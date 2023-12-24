declare namespace APP {
  type MD3Theme = import('react-native-paper/lib/typescript/types').MD3Theme;
  type MyTheme = {
    myColors: {
      primary: {
        _100: string;
        _200: string;
        _300: string;
        _400: string;
        _500: string;
      };
      secondary: {
        _100: string;
        _200: string;
        _300: string;
        _400: string;
        _500: string;
      };
      success: string;
      info: string;
      warning: string;
      error: string;
      disabled: string;
      disable_button: string;
      greyScale: {
        _900: string;
        _800: string;
        _700: string;
        _600: string;
        _500: string;
        _400: string;
        _300: string;
        _200: string;
        _100: string;
        _50: string;
      };
      gradients: {
        orange: {
          start: string;
          end: string;
        };
        yellow: {
          start: string;
          end: string;
        };
        green: {
          start: string;
          end: string;
        };
        purple: {
          start: string;
          end: string;
        };
        blue: {
          start: string;
          end: string;
        };
        red: {
          start: string;
          end: string;
        };
      };
      darks: {
        dark_1: string;
        dark_2: string;
        dark_3: string;
      };
    };
  };
  interface CustomTheme extends Partial<MD3Theme>, MyTheme {
    colors: Partial<MD3Theme['colors']>;
  }
}
