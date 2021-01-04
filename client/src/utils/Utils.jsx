import styled from "@emotion/styled";

const breakpoints = [640, 768, 1024, 1280, 1536];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const sm = mq[0];
const md = mq[1];
const lg = mq[2];
const xl = mq[3];
const xxl = mq[4];

export const Section = styled.section((props) => ({
    width: "100%",
    background: props.alpha ? props.theme.alphaPrimary : "transparent",
    padding: props.full ? "20px 0" : props.text ? "20px 20px" : "20px 10px",
    display: "flex",
    flexDirection: props.row ? "row" : "column",

    [sm]: {
        padding: props.full ? "30px 0" : props.text ? "30px 10%" : "30px 20px",
    },

    [md]: {
        padding: props.full ? "30px 0" : props.text ? "30px 10%" : "30px 20px",
    },

    [lg]: {
        padding: props.full ? "30px 0" : props.text ? "30px 15%" : "30px 3%",
    },

    [xl]: {
        padding: props.full ? "30px 0" : props.text ? "30px 25%" : "30px 3%",
    },
}));

export const Header = styled.section((props) => ({
    width: props.width || "100%",
    fontFamily: "Quicksand",
    fontWeight: "bold",
    color: props.theme.headerText,
    fontSize: props.sm ? "20px" : props.lg ? "32px" : "28px",

    [sm]: {
        fontSize: props.sm ? "28px" : props.lg ? "56px" : "32px",
    },

    [md]: {
        fontSize: props.sm ? "28px" : props.lg ? "56px" : "36px",
    },

    [lg]: {
        fontSize: props.sm ? "28px" : props.lg ? "56px" : "42px",
    },

    [xl]: {
        fontSize: props.sm ? "28px" : props.lg ? "56px" : "48px",
    },
}));

export const Text = styled.section((props) => ({
    width: props.width || "100%",
    fontFamily: "Inter",
    fontWeight: "400",
    color: props.theme.bodyText,
    marginTop: props.sm ? "12px" : "16px",
    lineHeight: "180%",
    fontSize: props.sm ? "8px" : "12px",

    [sm]: {
        fontSize: props.sm ? "10px" : "14px",
        lineHeight: props.sm ? "20px" : "30px",
    },

    [md]: {
        fontSize: props.sm ? "12px" : "16px",
    },

    [lg]: {
        fontSize: props.sm ? "14px" : "18px",
        lineHeight: props.sm ? "22px" : "32px",
        marginTop: props.sm ? "16px" : "24px",
    },

    [xl]: {
        marginTop: "32px",
        marginTop: props.sm ? "20px" : "24px",
    },
}));

export const Button = styled.button((props) => ({
    outline: "none",
    border: "none",
    color: props.theme.coloredText,
    background: props.secondary ? props.theme.secondary : props.theme.primary,
    fontFamily: "Quicksand",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: 100,
    marginTop: props.margin || 64,
    textTransform: "capitalize",
    transition: "0.3s all ease",
    fontSize: "12px",
    padding: "8px 10px",
    width: props.width || "100px",

    ":hover": {
        background: props.secondary
            ? props.theme.hoverSecondary
            : props.theme.hoverPrimary,
    },

    [md]: {
        fontSize: "14px",
        padding: "10px 30px",
        width: props.width || "140px",
    },
}));
