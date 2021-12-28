import {createStyles} from "@material-ui/core/styles";

export const styles = createStyles({
    closeButton: {
        color: '#fff',
        zIndex: 2,
        float: 'right'
    },
    fade: {
        position: 'relative',
        width: '100%',
        minHeight: '60vh',
        top: -25,
        backgroundImage: 'linear-gradient(0deg, transparent, black 75%)',
        zIndex: 1,
    },
    starWars: {
        display: "flex",
        justifyContent: "center",
        position: "relative",
        height: "800px",
        color: "#feda4a",
        fontSize: "500%",
        fontWeight: "bold",
        letterSpacing: "6px",
        lineHeight: "150%",
        perspective: "400px",
        textAlign: "justify"
    },
    crawl: {
        position: "relative",
        top: "9999px",
        transformOrigin: "50% 100%",
        animation: "$crawl 60s linear"
    },
    "@keyframes crawl": {
        "0%": {
            top: 0,
            transform: 'rotateX(20deg)  translateZ(0)',
        },
        "100%": {
            top: -6000,
            transform: 'rotateX(25deg) translateZ(-2500px)',
        }
    }
});
