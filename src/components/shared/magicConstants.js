// Home for various constants and variable setting to use throughout the app.

// Import frequently used social media icons from Material UI.
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import LanguageIcon from "@material-ui/icons/Language";
import MailOutlineIcon from '@material-ui/icons/MailOutline';

/**
 * Maximum screen widths, in pixels, for different screen types/different kinds
 * of responsive effects.
 */
export const breakpoints = {
    tabletLarge: 1100,
    tablet: 850,
    phone: 650,
    phoneSmall: 350,
}

// Factor by which to multiple font size to get line height value for text rendered in the font Jost
export const LINE_HEIGHT_ADJ = 1.25;

/**
 * Responsiveness factors. Can be used to shrink fonts consistently through the
 * app for different screen sizes.
 */
export const resFactors = {
    tabletLarge: 0.9,
    tablet: 0.8,
    phone: 0.7,
    phoneSmall: 0.5,
}

export const colors = {
    lightBlack: "#2e2e2e",
    grey: "#454545",
    mediumGrey: "#585858",
    lightGrey: "#aaaaaa",
    veryLightGrey: "#e0e0e0",
    darkWhite: "#f0f0f0",
    red: "#c80000",
    veryLightRed: "#ffe4e9",
    blue: "#0055b6",
    veryLightBlue: "#4992e6",
    white: "#ffffff",
    green: "#006317",

    accent: "#006317",
}

// Base font sizes in pixels
export const fontSizes = {
    button: {
        large: 40,
        medium: 30,
        small: 20,
    },
    title: {
        large: 80,
        medium: 60,
        small: 40,
    },
    subtitle: {
        large: 40,
        medium: 30,
        small: 20,
    },
    footnote: {
        large: 20,
        medium: 20,
        small: 15,
    }
}

export const DEFAULT_LINE_COLOR = colors.veryLightGrey;



export const SOCIAL_LINKS_CONFIG = [
    {
        nickname: "website",
        site: "Website",
        url: "https://",
        icon: <LanguageIcon fontSize="large" style={{ fill: colors.grey }} />
    },
    {
        nickname: "linkedIn",
        site: "LinkedIn",
        url: "linkedin.com/in/",
        icon: <LinkedInIcon fontSize="large" style={{ fill: colors.grey }} />,
    },
    {
        nickname: "gitHub",
        site: "GitHub",
        url: "github.com/",
        icon: <GitHubIcon fontSize="large" style={{ fill: colors.grey }} />,
    },
    {
        nickname: "youTube",
        site: "YouTube",
        url: "youtube.com/",
        icon: <YouTubeIcon fontSize="large" style={{ fill: colors.grey }} />,
    },
    {
        nickname: "twitter",
        site: "Twitter",
        url: "twitter.com/",
        icon: <TwitterIcon fontSize="large" style={{ fill: colors.grey }} />,
    },
    {
        nickname: "instagram",
        site: "Instagram",
        url: "instagram.com/",
        icon: <InstagramIcon fontSize="large" style={{ fill: colors.grey }} />,
    },
    {
        nickname: "facebook",
        site: "Facebook",
        url: "facebook.com/",
        icon: <FacebookIcon fontSize="large" style={{ fill: colors.grey }} />,
    },
]

export const mailIcon =
    <MailOutlineIcon fontSize="large" style={{ fill: colors.grey }} />
