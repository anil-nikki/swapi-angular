import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  @Input('entries')
  entries!: any[];
  @Input('heading')
  heading!: string;
  @Input('route')
  route!: string;
}




