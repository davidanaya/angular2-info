export class Constants {

  public static get CONTEXT_PATH(): string { return '/OIS'; }
  public static get DATA_PATH(): string { return '/generated/data'; }

  public static get DEFAULT_LANGUAGE(): string { return 'ENG'; }

  public static get UPDATE_INTERVAL_DATA(): number { return 120000; } // in milliseconds

  public static get START_DATE(): Date { return new Date('2018-02-08'); }
  public static get END_DATE(): Date { return new Date('2018-02-25'); }

}