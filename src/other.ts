export function otherAction() {
    const x = document.createElement("p");
    x.innerHTML = 'vite example';
    document.querySelector<HTMLDivElement>('#app')!.appendChild(x);
}