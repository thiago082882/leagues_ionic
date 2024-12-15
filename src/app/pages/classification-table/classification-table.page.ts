import { Component, OnInit, inject } from '@angular/core';
import { Observable, first } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, NgClass } from '@angular/common';
import { IClasification } from 'src/app/models/clasification.model';
import { ILeague } from 'src/app/models/league.model';
import { ISeason } from 'src/app/models/season.model';
import { ClassificationService } from 'src/app/services/classification.service';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonImg, IonIcon, IonPopover } from '@ionic/angular/standalone';
import { checkmarkCircle, closeCircle, removeCircle, moon } from 'ionicons/icons'
import { addIcons } from 'ionicons';
import { ReversePipe } from 'src/app/pipes/reverse.pipe';


@Component({
  selector: 'app-classification-table',
  templateUrl: './classification-table.page.html',
  styleUrls: ['./classification-table.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, FormsModule, AsyncPipe, IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonImg, IonIcon, ReversePipe, NgClass, IonPopover],
})
export class ClassificationTablePage implements OnInit {


  private classificationService = inject(ClassificationService);

  public leagues$: Observable<ILeague[]> = this.classificationService.getFootballLeagues();
  public seasons$: Observable<ISeason[]> = new Observable<ISeason[]>;
  public clasification$: Observable<IClasification[]> = new Observable<IClasification[]>;

  public idLeagueSelected = '4335'
  public seasonSelected = '';

  ngOnInit() {
    addIcons({
      closeCircle,
      removeCircle,
      checkmarkCircle
    })
    this.getSeasons();

  }

  getSeasons() {
    this.seasons$ = this.classificationService.getSeasons(this.idLeagueSelected);
    this.seasons$.pipe(first()).subscribe({
      next: (seasons: ISeason[]) => {
        if (seasons.length > 0) {
          this.seasonSelected = seasons[0].strSeason;
          this.changeClasification()
        }
      }
    })
  }

  changeClasification() {
    this.clasification$ = this.classificationService.getTableClasification(this.idLeagueSelected, this.seasonSelected);
  }


  

}
