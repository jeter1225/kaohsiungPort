import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { InformationTableItem } from './information-table/information-table-datasource';

import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InformationDataService implements InMemoryDbService {
  createDb() {
    const information_table_list: InformationTableItem[] = [
      { applyTime_vslSituation_serialNumber: '4', vslName: 'esec', pilot: 'sdc', vslNumber_voyage_mooringInTransferOut: 'sdv', status_pilotNumber_way_nearSpan: 'ad',
      tugboat_tons: 'wef', agentCodeName_dangerousVsl: 'dsc', departureTime:'sac', frontWaterline_HinderWaterline: 'wfs v', latestModifyDepartureTime_vslAge: 'svdv',
      anchorTime_anchorPosition_bowThruster:'sca', bringCable_dispatchStation: 'afb', previousPort_nextPort: 'rsav', guideBoatRemark: ' sa'
      },
      { applyTime_vslSituation_serialNumber: '5', vslName: 'esec', pilot: 'sdc', vslNumber_voyage_mooringInTransferOut: 'sdv', status_pilotNumber_way_nearSpan: 'ad',
      tugboat_tons: 'wef', agentCodeName_dangerousVsl: 'dsc', departureTime:'sac', frontWaterline_HinderWaterline: 'wfs v', latestModifyDepartureTime_vslAge: 'svdv',
      anchorTime_anchorPosition_bowThruster:'sca', bringCable_dispatchStation: 'afb', previousPort_nextPort: 'rsav', guideBoatRemark: ' sa'
      },
      { applyTime_vslSituation_serialNumber: '6', vslName: 'esec', pilot: 'sdc', vslNumber_voyage_mooringInTransferOut: 'sdv', status_pilotNumber_way_nearSpan: 'ad',
      tugboat_tons: 'wef', agentCodeName_dangerousVsl: 'dsc', departureTime:'sac', frontWaterline_HinderWaterline: 'wfs v', latestModifyDepartureTime_vslAge: 'svdv',
      anchorTime_anchorPosition_bowThruster:'sca', bringCable_dispatchStation: 'afb', previousPort_nextPort: 'rsav', guideBoatRemark: ' sa'
      },
      { applyTime_vslSituation_serialNumber: '7', vslName: 'esec', pilot: 'sdc', vslNumber_voyage_mooringInTransferOut: 'sdv', status_pilotNumber_way_nearSpan: 'ad',
      tugboat_tons: 'wef', agentCodeName_dangerousVsl: 'dsc', departureTime:'sac', frontWaterline_HinderWaterline: 'wfs v', latestModifyDepartureTime_vslAge: 'svdv',
      anchorTime_anchorPosition_bowThruster:'sca', bringCable_dispatchStation: 'afb', previousPort_nextPort: 'rsav', guideBoatRemark: ' sa'
      },
      { applyTime_vslSituation_serialNumber: '8', vslName: 'esec', pilot: 'sdc', vslNumber_voyage_mooringInTransferOut: 'sdv', status_pilotNumber_way_nearSpan: 'ad',
      tugboat_tons: 'wef', agentCodeName_dangerousVsl: 'dsc', departureTime:'sac', frontWaterline_HinderWaterline: 'wfs v', latestModifyDepartureTime_vslAge: 'svdv',
      anchorTime_anchorPosition_bowThruster:'sca', bringCable_dispatchStation: 'afb', previousPort_nextPort: 'rsav', guideBoatRemark: ' sa'
      },
      { applyTime_vslSituation_serialNumber: '9', vslName: 'esec', pilot: 'sdc', vslNumber_voyage_mooringInTransferOut: 'sdv', status_pilotNumber_way_nearSpan: 'ad',
      tugboat_tons: 'wef', agentCodeName_dangerousVsl: 'dsc', departureTime:'sac', frontWaterline_HinderWaterline: 'wfs v', latestModifyDepartureTime_vslAge: 'svdv',
      anchorTime_anchorPosition_bowThruster:'sca', bringCable_dispatchStation: 'afb', previousPort_nextPort: 'rsav', guideBoatRemark: ' sa'
      },
      { applyTime_vslSituation_serialNumber: '10', vslName: 'esec', pilot: 'sdc', vslNumber_voyage_mooringInTransferOut: 'sdv', status_pilotNumber_way_nearSpan: 'ad',
      tugboat_tons: 'wef', agentCodeName_dangerousVsl: 'dsc', departureTime:'sac', frontWaterline_HinderWaterline: 'wfs v', latestModifyDepartureTime_vslAge: 'svdv',
      anchorTime_anchorPosition_bowThruster:'sca', bringCable_dispatchStation: 'afb', previousPort_nextPort: 'rsav', guideBoatRemark: ' sa'
      },
      { applyTime_vslSituation_serialNumber: '11', vslName: 'esec', pilot: 'sdc', vslNumber_voyage_mooringInTransferOut: 'sdv', status_pilotNumber_way_nearSpan: 'ad',
      tugboat_tons: 'wef', agentCodeName_dangerousVsl: 'dsc', departureTime:'sac', frontWaterline_HinderWaterline: 'wfs v', latestModifyDepartureTime_vslAge: 'svdv',
      anchorTime_anchorPosition_bowThruster:'sca', bringCable_dispatchStation: 'afb', previousPort_nextPort: 'rsav', guideBoatRemark: ' sa'
      },
      { applyTime_vslSituation_serialNumber: '23', vslName: 'esec', pilot: 'sdc', vslNumber_voyage_mooringInTransferOut: 'sdv', status_pilotNumber_way_nearSpan: 'ad',
      tugboat_tons: 'wef', agentCodeName_dangerousVsl: 'dsc', departureTime:'sac', frontWaterline_HinderWaterline: 'wfs v', latestModifyDepartureTime_vslAge: 'svdv',
      anchorTime_anchorPosition_bowThruster:'sca', bringCable_dispatchStation: 'afb', previousPort_nextPort: 'rsav', guideBoatRemark: ' sa'
      },
      { applyTime_vslSituation_serialNumber: '24', vslName: 'esec', pilot: 'sdc', vslNumber_voyage_mooringInTransferOut: 'sdv', status_pilotNumber_way_nearSpan: 'ad',
      tugboat_tons: 'wef', agentCodeName_dangerousVsl: 'dsc', departureTime:'sac', frontWaterline_HinderWaterline: 'wfs v', latestModifyDepartureTime_vslAge: 'svdv',
      anchorTime_anchorPosition_bowThruster:'sca', bringCable_dispatchStation: 'afb', previousPort_nextPort: 'rsav', guideBoatRemark: ' sa'
      },
      { applyTime_vslSituation_serialNumber: '28', vslName: 'esec', pilot: 'sdc', vslNumber_voyage_mooringInTransferOut: 'sdv', status_pilotNumber_way_nearSpan: 'ad',
      tugboat_tons: 'wef', agentCodeName_dangerousVsl: 'dsc', departureTime:'sac', frontWaterline_HinderWaterline: 'wfs v', latestModifyDepartureTime_vslAge: 'svdv',
      anchorTime_anchorPosition_bowThruster:'sca', bringCable_dispatchStation: 'afb', previousPort_nextPort: 'rsav', guideBoatRemark: ' sa'
      },
      { applyTime_vslSituation_serialNumber: '100', vslName: 'esec', pilot: 'sdc', vslNumber_voyage_mooringInTransferOut: 'sdv', status_pilotNumber_way_nearSpan: 'ad',
      tugboat_tons: 'wef', agentCodeName_dangerousVsl: 'dsc', departureTime:'sac', frontWaterline_HinderWaterline: 'wfs v', latestModifyDepartureTime_vslAge: 'svdv',
      anchorTime_anchorPosition_bowThruster:'sca', bringCable_dispatchStation: 'afb', previousPort_nextPort: 'rsav', guideBoatRemark: ' sa'
      },
      { applyTime_vslSituation_serialNumber: '23', vslName: 'esec', pilot: 'sdc', vslNumber_voyage_mooringInTransferOut: 'sdv', status_pilotNumber_way_nearSpan: 'ad',
      tugboat_tons: 'wef', agentCodeName_dangerousVsl: 'dsc', departureTime:'sac', frontWaterline_HinderWaterline: 'wfs v', latestModifyDepartureTime_vslAge: 'svdv',
      anchorTime_anchorPosition_bowThruster:'sca', bringCable_dispatchStation: 'afb', previousPort_nextPort: 'rsav', guideBoatRemark: ' sa'
      }
    ];
			
  	return { information_table_list };
  }
  constructor() { }
}
