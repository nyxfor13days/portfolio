import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#b39ddb',
      contrastText: '#1c1c1c',
    },
    secondary: {
      main: '#e57373',
      contrastText: '#1c1c1c',
    },
    background: {
      default: '#1c1c1c',
      paper: '#1f1f1f',
    },
    text: {
      primary: '#fefefe',
    },
    divider: 'rgba(48,48,48,0.25)',
    error: {
      main: '#ef5350',
    },
  },

  typography: {
    fontFamily: 'Poppins',
    htmlFontSize: 18,
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2.5rem',
    },
    h3: {
      fontSize: '2rem',
    },
    h4: {
      fontSize: '1.7rem',
    },
    h5: {
      fontSize: '1.5rem',
    },
    h6: {
      fontSize: '1.2rem',
    },
    subtitle1: {
      fontSize: '1rem',
    },
    subtitle2: {
      fontSize: '0.8rem',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.8rem',
    },
    button: {
      fontSize: '0.8rem',
    },
    caption: {
      fontSize: '0.8rem',
    },
    overline: {
      fontSize: '0.7rem',
    },
  },

  spacing: 8,

  shape: {
    borderRadius: 15,
  },

  components: {
    MuiButton: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiFilledInput: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiFormControl: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiInputBase: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiInputLabel: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiListItem: {
      defaultProps: {
        dense: true,
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiFab: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiTable: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiTextField: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiToolbar: {
      defaultProps: {
        variant: 'dense',
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: 'default',
      }
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      }
    },
  }
})

export default theme