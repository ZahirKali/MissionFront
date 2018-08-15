import {Pipe, PipeTransform} from '@angular/core';
import {CalendarEvent} from 'angular-calendar';
import {startOfDay, isSameDay, isAfter, isBefore} from 'date-fns';

@Pipe({
  name: 'missionCouranteFilter',
  pure: false
})
export class MissionCouranteFilter implements PipeTransform {

  transform(missions: CalendarEvent[], filter: CalendarEvent): CalendarEvent[] {
    if (!missions || !filter) {
      return missions;
    }

    return missions.filter(mission =>
      (isSameDay(mission.start, filter.start))
      || (isBefore(mission.start, filter.start) && isAfter(mission.end, filter.end))
    );
  }
}
