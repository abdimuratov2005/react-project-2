

export const getWindowSize = (setWindowWidth) => {
    setWindowWidth(window.innerWidth);
    return window.innerWidth;
}

export const isInViewportCheck = (element) => {
    //console.log('isInViewport2:', element);
    if (!element) {
        return;
    }
    const rect = element.getBoundingClientRect();

    const check = 
        //rect.top >= 0 &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight) * .9;
        //rect.left >= 0 &&
        //rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        //rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    //console.log('isInViewport:', check, element, rect, window);

    return check;
}

export const inViewportListener = ({
    setIsVisible,
    boxClass
}) => {
    const box = document.querySelector(`.${boxClass}`);

    document.addEventListener('scroll', () => {
        if (isInViewportCheck(box)) {
            setIsVisible(true);
        }
    });

    if (isInViewportCheck(box)) {
        setIsVisible(true);
    }
}