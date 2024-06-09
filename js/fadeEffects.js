export function fadeInElement(element, duration, callback) {
    element.style.transition = `opacity ${duration}ms ease-in-out`;
    element.style.opacity = 1;
    if (callback) {
        setTimeout(callback, duration);
    }
}

export function fadeOutElement(element, duration, callback) {
    element.style.transition = `opacity ${duration}ms ease-in-out`;
    element.style.opacity = 0;
    if (callback) {
        setTimeout(callback, duration);
    }
}

export function enlargeElement(element, duration, callback) {
    element.style.transition = `transform ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`;
    element.style.transform = 'translate(-50%, -50%) scale(1)';
    element.style.opacity = 1;
    if (callback) {
        setTimeout(callback, duration);
    }
}

export function shrinkElement(element, duration, callback) {
    element.style.transition = `transform ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`;
    element.style.transform = 'translate(-50%, -50%) scale(0)';
    element.style.opacity = 0;
    if (callback) {
        setTimeout(callback, duration);
    }
}
