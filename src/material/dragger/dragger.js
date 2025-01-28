/**
 *
 */
class Dragger {}
export { Dragger };
// let target = undefined;
// let startX;
// let startY;
// let moveX;
// let moveY;
// let endX;
// let endY;
// window.addEventListener("pointerdown", (event) => {
//     let element = event.target.closest(".demo-dragger");
//     if (element) {
//         target = element;
//         startX = event.clientX - (endX || 0);
//         startY = event.clientY - (endY || 0);
//     }
// });
// window.addEventListener("pointermove", (event) => {
//     if (target) {
//         moveX = event.clientX - startX;
//         moveY = event.clientY - startY;
//         target.style.position = "relative";
//         target.style.left = moveX + "px";
//         target.style.top = moveY + "px";
//     }
// });
// window.addEventListener("pointerup", (event) => {
//     if (target) {
//         endX = moveX;
//         endY = moveY;
//         target = undefined;
//     }
// });
