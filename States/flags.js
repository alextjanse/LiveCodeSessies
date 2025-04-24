/**
 * Set the color of all shapes to the given color. If any shape has changed,
 * redraw the screen.
 * @param {Array<Shape>} shapes 
 * @param {Color} color 
 */
function recolorAll(shapes, color) {
    let redrawFlag = false;

    for (const shape of shapes) {
        if (shape.color !== color) {
            shape.color = color;
            redrawFlag = true;
        }
    }

    // Only redraw if any shape has changed color
    if (redrawFlag) {
        screen.draw();
    }
}