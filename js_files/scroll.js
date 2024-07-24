export default function initScroll(targetElements, defaultProps) {
    if (!targetElements.length) return;

    Scroll({ reset: false });

    targetElements.forEach(({ element, animation }) => {
        Scroll().reveal(element, Object.assign({}, defaultProps, animation));
    });
}