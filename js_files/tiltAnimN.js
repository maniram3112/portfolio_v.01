import VanillaTilt from "../node_modules/vanilla-tilt";

export default function initTiltAnimN(){
    const elements = document.querySelectorAll(".js-tilt");
    VanillaTilt.init(elements);
}