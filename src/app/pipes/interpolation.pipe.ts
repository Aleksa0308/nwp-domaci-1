import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'interpolation'
})
export class InterpolationPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    // Ensure the value is within the range -1 to 1
    const redRGB = {r: 255, g: 0, b: 0};
    const greenRGB = {r: 0, g: 255, b: 0};

    value = Math.min(1, Math.max(-1, value));

    let newColort = {
      r: redRGB.r + (greenRGB.r - redRGB.r) * value,
      g: redRGB.g + (greenRGB.g - redRGB.g) * value,
      b: redRGB.b + (greenRGB.b - redRGB.b) * value,
    }

    // Create an RGB color string
    const color = `rgb(${newColort.r}, ${newColort.g}, ${newColort.b})`;
    return color;
  }

}
