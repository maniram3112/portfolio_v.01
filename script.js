import { defaultProps, targetElements } from "./data/scrollConfig.js";
import initScroll from "./js_files/scroll.js";
import initTiltAnimN from "./js_files/tiltAnimN.js";

initScroll(targetElements, defaultProps);
initTiltAnimN();