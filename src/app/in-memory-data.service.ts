import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PilotStatusTableItem } from './pilot-status-table/pilot-status-table-datasource';
import { InformationTableItem } from './information-table/information-table-datasource';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  
  createDb() {
  	const pilot_status_list: PilotStatusTableItem[] = [
			{ pilot_id: 1, name: 'Hydrogen', ship_id: '061646', status: '待命中', night_shift: '1', break: '掛牌', leave: '請假'},
			{ pilot_id: 2, name: 'Helium', ship_id: '257385', status: '工作中', night_shift: '2', break: '掛牌', leave: '請假'},
			{ pilot_id: 3, name: 'Lithium', ship_id: '285953', status: '工作中', night_shift: '1', break: '掛牌', leave: '請假'},
			{ pilot_id: 4, name: 'Beryllium', ship_id: '893635', status: '請假中', night_shift: '1', break: '掛牌', leave: '請假'},
			{ pilot_id: 5, name: 'Boron', ship_id: '104853', status: '掛牌', night_shift: '1', break: '掛牌', leave: '請假'},
			{ pilot_id: 6, name: 'Carbon', ship_id: '594732', status: '已簽船', night_shift: '0', break: '掛牌', leave: '請假'},
			{ pilot_id: 7, name: 'Nitrogen', ship_id: '503827', status: '休假', night_shift: '1', break: '掛牌', leave: '請假'},
			{ pilot_id: 8, name: 'Oxygen', ship_id: '038598', status: '請假有代班', night_shift: '0', break: '掛牌', leave: '請假'},
			{ pilot_id: 9, name: 'Fluorine', ship_id: '019372', status: '請假無代班', night_shift: '0', break: '掛牌', leave: '請假'},
			{ pilot_id: 10, name: 'Neon', ship_id: '772847', status: '待命中', night_shift: '1', break: '掛牌', leave: '請假'},
			{ pilot_id: 11, name: 'Sodium', ship_id: '598273', status: '待命中', night_shift: '2', break: '掛牌', leave: '請假'},
			{ pilot_id: 12, name: 'Magnesium', ship_id: '345232', status: '工作中', night_shift: '0', break: '掛牌', leave: '請假'},
			{ pilot_id: 13, name: 'Aluminum', ship_id: '093726', status: '請假有代班', night_shift: '0', break: '掛牌', leave: '請假'},
			{ pilot_id: 14, name: 'Silicon', ship_id: '947262', status: '休假', night_shift: '1', break: '掛牌', leave: '請假'},
			{ pilot_id: 15, name: 'Phosphorus', ship_id: '947262', status: '掛牌', night_shift: '2', break: '掛牌', leave: '請假'},
			{ pilot_id: 16, name: 'Sulfur', ship_id: '993716', status: '工作中', night_shift: '0', break: '掛牌', leave: '請假'},
			{ pilot_id: 17, name: 'Chlorine', ship_id: '502827', status: '待命中', night_shift: '2', break: '掛牌', leave: '請假'},
			{ pilot_id: 18, name: 'Argon', ship_id: '384726', status: '掛牌', night_shift: '1', break: '掛牌', leave: '請假'},
			{ pilot_id: 19, name: 'Potassium', ship_id: '592777', status: '工作中', night_shift: '0', break: '掛牌', leave: '請假'},
			{ pilot_id: 20, name: 'Calcium', ship_id: '088323', status: '待命中', night_shift: '0', break: '掛牌', leave: '請假'}
		];
		
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
		
		return { pilot_status_list, information_table_list };
  }
  constructor() { }
}
