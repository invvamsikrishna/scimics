import { makeStyles } from "@mui/styles";

export const customStyles = makeStyles((theme) => ({
  outerBorderBox: {
    overflow: "hidden",
    position: "relative",
  },
  outerMask: {
    padding: "1px",
    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    maskComposite: "xor",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    position: "absolute",
    inset: 0,
    zIndex: 0,
    borderRadius: "12px",
  },
  heroPreview1: {
    width: "300px",
    height: "300px",
    position: "absolute",
    borderRadius: "100%",
    backgroundImage: `linear-gradient(to top,rgba(109,46,255,0),rgba(158,122,255,.3490196078),rgba(254,139,187,.6980392157),#FFBD7A 99%,rgba(255,189,122,0) 100%)`,
    animation: "$heroPreviewAnimationLine 30s linear infinite",
  },
  heroPreview2: {
    width: "300px",
    height: "300px",
    position: "absolute",
    borderRadius: "100%",
    backgroundImage: `linear-gradient(to top,rgba(109,46,255,0),rgba(158,122,255,.3490196078),rgba(254,139,187,.6980392157),#FFBD7A 99%,rgba(255,189,122,0) 100%)`,
    animation: "$heroPreviewAnimationLine 30s linear infinite",
    animationDelay: "10s",
  },
  "@keyframes heroPreviewAnimationLine": {
    "0%": {
      left: "-150px",
      top: "calc(100% - 300px)",
      transform: "rotate(0deg)",
    },
    "10%": {
      left: "-150px",
      top: "0px",
      transform: "rotate(0deg)",
    },
    "20%": {
      left: "0px",
      top: "-150px",
      transform: "rotate(90deg)",
    },
    "40%": {
      left: "calc(100% - 300px)",
      top: "-150px",
      transform: "rotate(90deg)",
    },
    "50%": {
      left: "calc(100% - 150px)",
      top: "0px",
      transform: "rotate(180deg)",
    },
    "60%": {
      left: "calc(100% - 150px)",
      top: "calc(100% - 300px)",
      transform: "rotate(180deg)",
    },
    "70%": {
      left: "calc(100% - 300px)",
      top: "calc(100% - 150px)",
      transform: "rotate(270deg)",
    },
    "90%": {
      left: "0px",
      top: "calc(100% - 150px)",
      transform: "rotate(270deg)",
    },
    "100%": {
      left: "-150px",
      top: "calc(100% - 300px)",
      transform: "rotate(360deg)",
    },
  },
}));
