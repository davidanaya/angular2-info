export interface Schedule {
  venue: string;
  rsc: string;
  gender: string;
  endDate: string;
  active: boolean;
  medal: string;
  startTime: string;
  location: string;
  olySolidarity: string;
  endTime: string;
  event: string;
  sport: string;
  startDate: string;
  status: string;
  template: string;
  // calculated fields
  dStartDate: Date;
  dEndDate: Date;
  eventName: string;
}
