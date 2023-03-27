import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#1B9CFC', // primary color
        accent: '#55E6C1', // accent color
    },
    roundness: 4, // global border radius
    components: {
        Button: {
            mode: 'contained',
            style: {
                borderRadius: 24,
                height: 48,
            },
            labelStyle: {
                fontWeight: 'bold',
                fontSize: 16,
                textTransform: 'uppercase',
            },
        },
        TextInput: {
            style: {
                backgroundColor: '#F5F6FA', // background color
                borderRadius: 8,
                height: 56,
            },
            underlineColor: 'transparent',
        },
    },
};

export default function PaperThemeProvider({ children }) {
    return (
        <PaperProvider theme={theme}>
            {children}
        </PaperProvider>
    );
}