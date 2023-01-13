import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

let fasKeys = Object.keys(fas);
let farKeys = Object.keys(far);
let fabKeys = Object.keys(fab);

const fasArray = fasKeys.map((name) => {
  return `fas fa-${fas[name].iconName}`;
});

const farArray = farKeys.map((name) => {
  return `far fa-${far[name].iconName}`;
});

const fabArray = fabKeys.map((name) => {
  return `fab fa-${fab[name].iconName}`;
});

export const iconsArr = [...fasArray, ...farArray, ...fabArray];
