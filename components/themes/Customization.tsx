import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/themes/Customization.module.scss';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Switch,
    Drawer,
    Box,
    Fab,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    Radio,
    RadioGroup,
    Slider,
    Tooltip,
    Typography
} from '@mui/material';
import { IconSettings } from '@tabler/icons';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import { SET_BORDER_RADIUS, SET_FONT_FAMILY, SET_THEMING, DIR_CHANGE } from '../../services/redux/customization/actions';
import { gridSpacing } from '../../services/redux/customization/constant';
import { RootState } from '../../services/redux/rootReducer';
import UserAccessability from './UserAccessability';

// concat 'px'
function valueText(value: any) {
    return `${value}px`;
}

// ==============================|| LIVE CUSTOMIZATION ||============================== //

const Customization = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const customization = useSelector((state: RootState) => state.customization);
    // drawer on/off
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };

    // state - border radius
    const [borderRadius, setBorderRadius] = useState(customization.borderRadius);
    const handleBorderRadius = (event: any, newValue: any) => {
        setBorderRadius(newValue);
    };
    useEffect(() => {
        dispatch({ type: SET_BORDER_RADIUS, borderRadius });
    }, [dispatch, borderRadius]);

    let initialFont;
    switch (customization.fontFamily) {
        case `'Handlee', cursive`:
            initialFont = 'Handlee';
            break;
        case `'Inter', sans-serif`:
            initialFont = 'Inter';
            break;
        case `'Poppins', sans-serif`:
            initialFont = 'Poppins';
            break;
        case `'Roboto Slab', serif`:
        default:
            initialFont = 'Roboto';
            break;
    }

    // state - font family
    const [fontFamily, setFontFamily] = useState(initialFont);
    useEffect(() => {
        let newFont;
        switch (fontFamily) {
            case 'Handlee':
                newFont = `'Handlee', cursive`;
                break;
            case 'Inter':
                newFont = `'Inter', sans-serif`;
                break;
            case 'Poppins':
                newFont = `'Poppins', sans-serif`;
                break;
            case 'Roboto':
            default:
                newFont = `'Roboto Slab', serif`;
                break;
        }
        dispatch({ type: SET_FONT_FAMILY, fontFamily: newFont });
    }, [dispatch, fontFamily]);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const initialFont = localStorage.getItem('fontFamily');
            if (initialFont === null) {
                setFontFamily('Roboto');
            } else {
                setFontFamily(`${initialFont}`);
            }
        }
    }, [customization.fontFamily]);

    // state - theme switch
    let initialTheme;
    switch (customization.themeChange) {
        case `light`:
            initialTheme = 'light';
            break;
        case `dark`:
            initialTheme = 'dark';
            break;
        default:
            initialTheme = customization.themeChange;
            break;
    }
    const [darkTheme, setDarkTheme] = useState(initialTheme);
    useEffect(() => {
        let newTheme;
        switch (darkTheme) {
            case 'light':
                newTheme = `light`;
                break;
            case 'dark':
                newTheme = `dark`;
                break;
            default:
                newTheme = customization.themeChange;
                break;
        }
        dispatch({ type: SET_THEMING, themeChange: newTheme });
    }, [dispatch, darkTheme, customization.themeChange]);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const initialTheme = localStorage.getItem('themeChange');
            if (initialTheme === null) {
                setDarkTheme('light');
            } else {
                setDarkTheme(initialTheme);
            }
        }
    }, [customization.themeChange]);

    // change direction
    const [checked, setChecked] = useState(customization.dirChange);
    // console.log(checked);

    const handleChange = (event: any) => {
        setChecked(event.target.checked);
        localStorage.setItem('dirChange', event.target.checked);
    };
    useEffect(() => {
        dispatch({ type: DIR_CHANGE, dirChange: checked });
    }, [dispatch, checked, customization.dirChange]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const initialDir = localStorage.getItem('dirChange');
            if (initialDir === 'false') {
                setChecked(false);
            } else if (initialDir === 'true') {
                setChecked(true);
            } else {
                setChecked(false);
            }
        }
    }, [customization.dirChange]);

    return (
        <>
            {/* toggle button */}
            <Tooltip title="Live Customize" className="testing">
                <Fab
                    component="div"
                    onClick={handleToggle}
                    size="medium"
                    variant="circular"
                    color="secondary"
                    sx={{
                        borderRadius: 0,
                        borderTopLeftRadius: '50%',
                        borderBottomLeftRadius: '50%',
                        borderTopRightRadius: '50%',
                        borderBottomRightRadius: '4px',
                        top: '45%',
                        position: 'fixed',
                        right: customization?.dirChange ? 'auto' : 10,
                        left: customization?.dirChange ? 10 : 'auto',
                        zIndex: theme.zIndex.speedDial
                    }}
                >
                    <div>
                        <IconButton color="inherit" size="large" disableRipple>
                            <IconSettings />
                        </IconButton>
                    </div>
                </Fab>
            </Tooltip>

            <Drawer
                dir={customization?.dirChange ? 'rtl' : 'ltr'}
                anchor={customization?.dirChange ? 'left' : 'right'}
                onClose={handleToggle}
                open={open}
                PaperProps={{
                    sx: {
                        width: 280
                    }
                }}
            >
                <PerfectScrollbar component="div">
                    <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
                        <Grid item xs={12}>
                            {/* Theme Changing */}
                            <div>
                                <FormControl sx={{ width: '100%' }}>
                                    <RadioGroup
                                        aria-label="theme"
                                        value={darkTheme}
                                        onChange={(e) => {
                                            setDarkTheme(e.target.value);
                                            localStorage.setItem('themeChange', e.target.value);
                                        }}
                                        name="row-radio-buttons-group"
                                        sx={{ width: '100%' }}
                                    >
                                        <div id={`${styles.themeSwitch}`}>
                                            <FormControlLabel
                                                value="dark"
                                                control={<Radio />}
                                                label="Dark"
                                                sx={{
                                                    '& .MuiSvgIcon-root': { fontSize: 28 },
                                                    '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                                                }}
                                            />
                                            <FormControlLabel
                                                value="light"
                                                control={<Radio />}
                                                label="Light"
                                                sx={{
                                                    '& .MuiSvgIcon-root': { fontSize: 28 },
                                                    '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                                                }}
                                            />
                                        </div>
                                    </RadioGroup>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginTop: '10px'
                                        }}
                                    >
                                        <h5 className="text-primary">
                                            Direction Now <span className="text-warning">{checked ? 'RTL' : 'LTR'}</span>
                                        </h5>
                                        <Switch id="dirChange" checked={checked} onChange={handleChange} color="warning" />
                                    </Box>
                                </FormControl>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            {/* font family */}
                            <div id={`${styles.font_family_select}`}>
                                <FormControl>
                                    <RadioGroup
                                        aria-label="font-family"
                                        value={fontFamily}
                                        onChange={(e) => {
                                            setFontFamily(e.target.value);
                                            localStorage.setItem('fontFamily', e.target.value);
                                        }}
                                        name="row-radio-buttons-group"
                                        className={`${styles.font_family_parent}`}
                                    >
                                        <FormControlLabel
                                            value="Roboto"
                                            control={<Radio />}
                                            label="Roboto"
                                            sx={{
                                                '& .MuiSvgIcon-root': { fontSize: 28 },
                                                '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                                            }}
                                        />
                                        <FormControlLabel
                                            value="Poppins"
                                            control={<Radio />}
                                            label="Poppins"
                                            sx={{
                                                '& .MuiSvgIcon-root': { fontSize: 28 },
                                                '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                                            }}
                                        />
                                        <FormControlLabel
                                            value="Inter"
                                            control={<Radio />}
                                            label="Inter"
                                            sx={{
                                                '& .MuiSvgIcon-root': { fontSize: 28 },
                                                '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                                            }}
                                        />
                                        <FormControlLabel
                                            value="Handlee"
                                            control={<Radio />}
                                            label="Handlee"
                                            sx={{
                                                '& .MuiSvgIcon-root': { fontSize: 28 },
                                                '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                                            }}
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <UserAccessability />
                        </Grid>
                        <Grid item xs={12}>
                            {/* border radius */}
                            <div title="Border Radius">
                                <Grid item xs={12} container spacing={2} alignItems="center" sx={{ mt: 2.5 }}>
                                    <Grid item>
                                        <Typography variant="h6" color="secondary">
                                            4px
                                        </Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Slider
                                            size="small"
                                            value={borderRadius}
                                            onChange={handleBorderRadius}
                                            getAriaValueText={valueText}
                                            valueLabelDisplay="on"
                                            aria-labelledby="discrete-slider-small-steps"
                                            marks
                                            step={2}
                                            min={4}
                                            max={24}
                                            color="secondary"
                                            sx={{
                                                '& .MuiSlider-valueLabel': {
                                                    color: 'secondary.light'
                                                }
                                            }}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h6" color="secondary">
                                            24px
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </PerfectScrollbar>
            </Drawer>
        </>
    );
};

export default Customization;
