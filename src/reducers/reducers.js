import { combineReducers } from 'redux';
import equipments from './technical_officer/equipments';
import borrowdata from './technical_officer/borrow_data';
import categories from './technical_officer/categories';
import models from './technical_officer/models';
import labs from './technical_officer/labs';
import equipment from './technical_officer/equipment';
import request from './technical_officer/request';
import report from './technical_officer/report';
import error from './technical_officer/errors';

const reducers = combineReducers({ equipments,borrowdata,categories ,models,labs,equipment,request,report,error})

export default reducers;