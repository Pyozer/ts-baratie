import cluster from 'cluster';
import { onMaster } from './master';
import { onProcess } from './process';
import { isNull } from './utils/Func';
import { ReceptionManager } from './ReceptionManager';

const [, , cookingTime, cookerNumber, stockInterval] = process.argv;

if (isNull(cookingTime, cookerNumber, stockInterval)) {
    throw 'You must provide arguments !';
}

ReceptionManager.settings = {
    cookingTime: parseInt(cookingTime),
    cookerNumber: parseInt(cookerNumber),
    stockInterval: parseInt(stockInterval)
};

if (cluster.isMaster) {
    onMaster();
} else {
    onProcess();
}