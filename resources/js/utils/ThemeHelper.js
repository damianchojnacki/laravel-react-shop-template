export function getTheme(){
    return localStorage.getItem('theme');
}

export function getColor(){
    const style = getComputedStyle(document.body);

    return style.getPropertyValue(`--${getTheme()}`);
}
