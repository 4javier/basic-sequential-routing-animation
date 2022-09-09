import {
  animate,
  keyframes,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

const scaleInAnimation = [
  animate(
    '1000ms',
    keyframes([
      style({ transform: 'scale(0)' }),
      style({ transform: 'scale(1)' }),
    ])
  ),
];

const scaleOutAnimation = [
  animate(
    '1000ms',
    keyframes([
      style({ transform: 'scale(1)' }),
      style({ transform: 'scale(0)' }),
    ])
  ),
];


export const routingAnimationSequence = 
trigger('routingAnimationSequence', [
  transition('clear => rendered', [
    query('@routingAnimationSequence > *:last-child', [
      style({ display: 'block' }),
      ...scaleInAnimation,
    ], { optional: true })
  ]),
  transition('rendered => clear', [
    query('router-outlet + *', [
      style({ display: 'block' }),
      ...scaleOutAnimation,
    ], {optional: true}),
  ]),
]);
