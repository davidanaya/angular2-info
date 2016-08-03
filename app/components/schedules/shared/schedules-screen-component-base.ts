import { SchedulesService, Schedule } from '../../schedules';
import { CommonCodesService, ResultSet, PageSet, ScreenComponentBase } from '../../../shared';

export abstract class SchedulesScreenComponentBase extends ScreenComponentBase {
  protected schedules: Schedule[];
  protected subSchedules: any;

  // sorting and filtering
  protected order = 'byTime'; 
	protected reverse: boolean = false;	

  constructor(protected schedulesService: SchedulesService, commonCodesService: CommonCodesService) { 
    super(commonCodesService);
  }

  // lifecycle hooks
  ngOnInit() {
    //console.log('onInit, loadSchedules');
    this.loadSchedules();
    this.isDataReady = true;
  }

  ngOnDestroy() {
    //console.log('cancel subSchedules');
    this.subSchedules.unsubscribe();
  }

  // abstract
  loadSchedules() {
    this.subSchedules = this.schedulesService
        .loadSchedules()
        .subscribe(() => this.updateSchedules(this.pageSet.page));
  }

  abstract updateSchedules(page: number) : void;

  // on events
  onResultsOrderChanged() {
    this.updateSchedules(1);
  }

  onResultsPageUpdated() {
    this.updateSchedules(this.pageSet.page);
  }

  // methods
  getMedalIcon(medal) {
	  switch(medal) {
      case '1': return 'goldMedalEventIcon';
      case '2': return 'bronzeMedalEventIcon';
      default: return 'noMedalEventIcon';
    }
	}

}