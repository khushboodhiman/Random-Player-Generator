import { colors } from './colors';

export const changeTurn = () => {
    window.location.reload();
    let color = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('body').style.backgroundColor = color;
}


