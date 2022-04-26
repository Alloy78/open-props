export default {
    '--size-000': '-.5rem',
    '--size-00': '-.25rem',
    '--size-0': '0.25rem',
    '--size-1': '0.5rem',
    '--size-2': '0.75rem',
    '--size-3': '1rem',
    '--size-4': '1.25rem',
    '--size-5': '1.5rem',
    '--size-6': '1.875rem',
    '--size-7': '2.25rem',
    '--size-8': '2.5rem',
    '--size-9': '3rem',
    '--size-10': '3.625rem',
    '--size-11': '4.125rem',
    '--size-12': '4.875rem',
    '--size-13': '5.625rem',
    '--size-14': '7.5rem',
    '--size-15': '10rem',
    '--size-16': '12.5rem',
    '--size-17': '25rem',
    '--size-18': '37.5rem',

  // Viewport will be re-calculated by JavaScript
  // because using `vw` unit for scaling fails WCAG AA
  // JS will work out eg, 1080px / 16 = 67.5
  // 1% (or 1vw) = 0.675rem, so that '--size-vw': '0.675rem',
  // Used in calc so `clamp(20rem, calc(40 * var(--size-vw)), 30rem)`
  // '--size-vw': 'Xrem',

  '--size-fluid-1': 'clamp(.5rem, calc(1 * var(--size-vw, 1vw)), 1rem)',
  '--size-fluid-2': 'clamp(1rem, calc(2 * var(--size-vw, 1vw)), 1.5rem)',
  '--size-fluid-3': 'clamp(1.5rem, calc(3 * var(--size-vw, 1vw)), 2rem)',
  '--size-fluid-4': 'clamp(2rem, calc(4 * var(--size-vw, 1vw)), 3rem)',
  '--size-fluid-5': 'clamp(4rem, calc(5 * var(--size-vw, 1vw)), 5rem)',
  '--size-fluid-6': 'clamp(5rem, calc(7 * var(--size-vw, 1vw)), 7.5rem)',
  '--size-fluid-7': 'clamp(7.5rem, calc(10 * var(--size-vw, 1vw)), 10rem)',
  '--size-fluid-8': 'clamp(10rem, calc(20 * var(--size-vw, 1vw)), 15rem)',
  '--size-fluid-9': 'clamp(15rem, calc(30 * var(--size-vw, 1vw)), 20rem)',
  '--size-fluid-10': 'clamp(20rem, calc(40 * var(--size-vw, 1vw)), 30rem)',

  '--size-content-1': '20ch',/* ~172px */
  '--size-content-2': '30ch',/* ~258px */
  '--size-content-3': '35ch',/* ~301px */
  '--size-content-4': '45ch',/* ~387px */
  '--size-content-5': '52ch',/* ~447px */
  '--size-content-6': '60ch',/* ~516px */
  '--size-content-7': '75ch',/* ~645px around the max for content */

  '--size-header-1': '20ch',
  '--size-header-2': '25ch',
  '--size-header-3': '35ch',
  '--size-header-4': '45ch',

  '--size-xxs': `${240 / 16}rem`,
  '--size-xs': `${360 / 16}rem`,
  '--size-sm': `${480 / 16}rem`,
  '--size-md': `${768 / 16}rem`,
  '--size-lg': `${1024 / 16}rem`,
  '--size-xl': `${1440 / 16}rem`,
  '--size-xxl': `${1920 / 16}rem`,
}
