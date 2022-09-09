import { Component } from '@angular/core';
import { routingAnimationSequence } from './animations';
import { BehaviorSubject, observeOn, asyncScheduler, tap, filter, bufferToggle, windowToggle, merge, mergeAll } from 'rxjs';

type AnimationState = 'clear' | 'rendered';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routingAnimationSequence]
})
export class AppComponent {

  hideSync: boolean = false;
  
  animState: AnimationState = 'clear'
  animStateSub$ = new BehaviorSubject<AnimationState>('clear');
  animState$ = this.animStateSub$.asObservable().pipe(
    observeOn(asyncScheduler),
  )
  
  animationPending$ = new BehaviorSubject<boolean>(false)
  animationOn$ = this.animationPending$.pipe(filter(isPending => isPending))
  animationOff$ = this.animationPending$.pipe(filter(isPending => !isPending))
  
  constructor() {
    merge(
      this.animState$.pipe(
        bufferToggle(this.animationOn$, () => this.animationOff$),
        mergeAll(),
      ),
      this.animState$.pipe(
        windowToggle(this.animationOff$,  () => this.animationOn$),
        mergeAll(),
      )
    ).pipe(
      tap(newState => this.animState = newState),
    ).subscribe()
  }

}
