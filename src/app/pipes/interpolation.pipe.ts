import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'interpolation'
})
export class InterpolationPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    // Ensure the value is within the range -1 to 1
  value = Math.min(1, Math.max(-1, value));

  // Calculate the hue (0 for red, 120 for green) based on the value
  const hue = (1 - value) * 120;

  // Create an HSL color string
  const color = `text-red-500`;

  console.log(color);
  

  return color;
  }

}
