import VanillaTilt from "vanilla-tilt";

export default function initTiltAnimN() {
    const elements = document.querySelectorAll(".js-tilt");
    VanillaTilt.init(elements);
}