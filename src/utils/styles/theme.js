import { DefaultTheme, MD3DarkTheme, Provider as PaperProvider } from 'react-native-paper';
const glassmorphismShadow = {
    shadowColor: '#000',
    shadowOffset: {
        width: -6,
        height: -6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
};

const glassmorphismBackground = {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
};

const glassmorphismBorder = {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
};

const glassmorphismStyle = {
    ...glassmorphismShadow,
    ...glassmorphismBackground,
    ...glassmorphismBorder,
    borderRadius: 16,
};

const lightTheme = {
    ...DefaultTheme,
    roundness: 10,
    colors: {
        ...DefaultTheme.colors,
        primary: '#1B9CFC', // primary color
        accent: '#ffffff',
        background: '#d9d9d9',
        surface: '#ffffff',
        text: '#121212',
        placeholder: '#888888',
    },
    glassmorphism: glassmorphismStyle,
};

const darkTheme = {
    ...MD3DarkTheme,
    roundness: 10,
    colors: {
        ...MD3DarkTheme.colors,
        primary: '#1B9CFC', // primary color
        accent: '#ffffff',
        background: '#121212',
        surface: '#333333',
        text: '#ffffff',
        placeholder: '#888888',
    },
    glassmorphism: glassmorphismStyle,
};

export default function PaperThemeProvider({ children, themeType }) {
    const theme = themeType === 'dark' ? darkTheme : lightTheme;

    return (
        <PaperProvider theme={theme}>
            {children}
        </PaperProvider>
    );
}