/* eslint-disable prettier/prettier */
import { createTheme } from '@mui/material/styles';

// assets
import colors from '../../styles/scss/_themes-vars.module.scss';

// project imports
import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

export const theme = (customization) => {
    const color = colors;
    // console.log(document.getElementsByTagName('body'));
    // if you are use bootstrap then you have to override
    // const getBody = document.getElementById('mainBody');
    // if (customization?.themeChange === 'light' && getBody) {
    //     getBody.style.backgroundColor = color.paper;
    // } else if (customization?.themeChange === 'dark' && getBody) {
    //     getBody.style.backgroundColor = color.darkPaper;
    // }
    // if (customization?.dirChange && getBody) {
    //     getBody.style.direction = 'rtl';
    // } else if (!customization?.dirChange && getBody) {
    //     getBody.style.direction = 'ltr';
    // }

    const themeOption = {
        presetColors: 'red',
        colors: color,
        heading: customization?.themeChange === 'light' ? color.grey900 : color.grey50,
        paper: customization?.themeChange === 'light' ? color.paper : color.darkPaper,
        backgroundDefault: customization?.themeChange === 'light' ? color.paper : color.darkPaper,
        background: customization?.themeChange === 'light' ? color.primaryLight : color.darkBackground,
        darkTextPrimary: customization?.themeChange === 'light' ? color.grey900 : color.grey100,
        darkTextSecondary: color.grey500,
        textDark: customization?.themeChange === 'light' ? color.grey900 : color.grey50,
        menuSelected: color.secondaryDark,
        menuSelectedBack: color.secondaryLight,
        divider: color.grey200,
        customization
    };

    const themeOptions = {
        direction: customization?.dirChange ? 'ltr' : 'ltr',
        palette: themePalette(themeOption),
        mixins: {
            toolbar: {
                minHeight: '48px',
                padding: '16px',
                '@media (min-width: 600px)': {
                    minHeight: '48px'
                }
            }
        },
        typography: themeTypography(themeOption)
    };

    const themes = createTheme(themeOptions);
    themes.components = componentStyleOverrides(themeOption);
    return themes;
};

export default theme;
