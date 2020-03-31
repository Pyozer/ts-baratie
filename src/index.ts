import { onMaster } from './master';
import { onProcess } from './process';
import cluster from 'cluster';

const [, , cookingTime, cookerNumber, stockInterval] = process.argv;

// if (isNull(cookingTime, cookerNumber, stockInterval)) {
//     throw 'You must provide arguments !';
// }

if (cluster.isMaster) {
    onMaster(parseInt(cookingTime), parseInt(cookerNumber), parseInt(stockInterval));


    // console.log(`I have ${numberCPUs} CPUs availables`);

    // const processesMap: Record<number, string> = {};

    // for (let i = 0; i < numberCPUs; i++) {
    //     const myId = (i + 1).toString().padStart(2, '0');
    //     const kitchen = cluster.fork({ kitchenId: myId });

    //     processesMap[kitchen.id] = myId;

    //     kitchen.on('message', (payload) => {
    //         console.log(`Message from kitchen -->> ${processesMap[kitchen.id]}`);
    //         console.log(`I receive payload: ${JSON.stringify(payload)}`);

    //         if (payload.status === 'OVERLOAD') {
    //             // factory.createKitchen();
    //         }
    //     });
    // }
} else {
    onProcess();
    // console.log(`[${process.env.kitchenId}] I am the kitchen ${process.pid}`);
    // if (process.env.kitchenId === '01') {
    //     setInterval(() => {
    //         process.send({ status: 'OVERLOAD' });
    //     }, 2000);
    // }
}