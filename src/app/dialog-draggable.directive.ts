import { Directive, HostListener, OnInit } from '@angular/core';
import { MatDialogContainer, MatDialogRef } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Rx';
import { takeUntil } from 'rxjs/operators/takeUntil';
import 'rxjs/add/observable/fromEvent';
import { take } from 'rxjs/operators/take';

@Directive({
  selector: '[mat-dialog-draggable-title]'
})
export class DialogDraggableDirectiveTitle implements OnInit {

  private _subscription: Subscription;
  mouseStart: Position;
  mouseDelta: Position;
  offset: Position;

  constructor(
    private matDialogRef: MatDialogRef<any>,
    private container: MatDialogContainer) {}

  ngOnInit() {
    this.offset = this._getOffset();
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.mouseStart = {x: event.pageX, y: event.pageY};
    const mouseup$ = Observable.fromEvent(document, 'mouseup');
    this._subscription = mouseup$.subscribe(() => this.onMouseup());

    const mousemove$ = Observable.fromEvent(document, 'mousemove')
      .pipe(takeUntil(mouseup$))
      .subscribe((e: MouseEvent) => this.onMouseMove(e));

    this._subscription.add(mousemove$);
  }

  onMouseMove(event: MouseEvent) {
      this.mouseDelta = {x: (event.pageX - this.mouseStart.x), y: (event.pageY - this.mouseStart.y)};

      this._updatePosition(this.offset.y + this.mouseDelta.y, this.offset.x + this.mouseDelta.x);
  }

  onMouseup() {
    if (this._subscription) {
      this._subscription.unsubscribe();
      this._subscription = undefined;
    }
    if (this.mouseDelta) {
      this.offset.x += this.mouseDelta.x;
      this.offset.y += this.mouseDelta.y;
    }
  }

  private _updatePosition(top: number, left: number) {
    this.matDialogRef.updatePosition({
      top: top + 'px',
      left: left + 'px'
    });
  }

  private _getOffset(): Position {
    const box = this.container['_elementRef'].nativeElement.getBoundingClientRect();
    return {
      x: box.left + pageXOffset,
      y: box.top + pageYOffset
    };
  }
}


export interface Position {
  x: number;
  y: number;
}