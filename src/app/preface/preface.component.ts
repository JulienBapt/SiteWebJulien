import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
  selector: 'app-preface',
  standalone: true,
  templateUrl: './preface.component.html',
  styleUrl: './preface.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrefaceComponent {
  heading = input<string>("Présentation du livre");
  mainPreface = input<boolean>(true);
}
