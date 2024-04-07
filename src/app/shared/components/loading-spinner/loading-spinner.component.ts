import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.css',
})
export class LoaderSpinnerComponent {
  @Input()
  public content: string = '';
  @Input()
  public width: number = 30;
  @Input()
  public height: number = 30;
}
