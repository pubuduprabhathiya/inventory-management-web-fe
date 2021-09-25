import axios from 'axios';

const url = 'http://localhost:5000/technicalofficer';


export const findIteamsByCatogary = (category) => axios.get(`${url}/categories/${category.id}`);
// {
    
//     return (
//         category?
//         [{store_code: "1234-234-355",
//           isAvailable: true,
//           catogary: category,
//           model: 'Nikon',
//           lab: 'level2'},{store_code: "1234-234-356",
//           isAvailable: true,
//           catogary: category,
//           model: 'Nikon',
//           lab: 'level2'}]:[]
//     );
// }

export const getBorrowData = (store_code, fromDate, toDate) =>axios.post(`${url}/borrowdata/`,{store_code, fromDate, toDate});
// {
    
//     return (
//         store_code?
//         [{
//             type: "Lecture",
//         toDate: toDate,
//         fromDate: fromDate,
//         name: "pubba pubba "+store_code,
//         index: "180240J",
//         id: '23456'
//         },{
//             type: "Lecture",
//         toDate: toDate,
//         fromDate: fromDate,
//         name: "pubba "+store_code,
//         index: "180240J",
//         id: '23457'
//             }
//         ,{
//             type: "Lecture",
//         toDate: toDate,
//         fromDate: fromDate,
//         name: "pubba pubba pubba pubba"+store_code,
//         index: "180240J",
//         id: '23473'
//         }]:[]
//     )
// }
export const getCategories = () => axios.get(`${url}/categories`)
export const getModels = (category) =>axios.get(`${url}/models/${category.id}`);
// {
//     console.log(category);
//     if (category !=null) {
//         return (['ca', 'quary' + ' 1', 'm' + ' 2'])
//     }
//     else {
//         return([])
//     }
// }
export const getLabs = () => axios.get(`${url}/labs`);
// {
//     return(['lab 1','lab','bb 2'])
// }

export const addEquipment = (category, model, lab) =>axios.post(`${url}/addequipment/`,{category, model, lab});
// {
//     return({store_code: '124-134-3424',
//           isAvailable: true,
//           catogary: category,
//           model: model,
//           lab: lab})
// }
export const getEquipmentByStoreCode = (storecode) =>axios.get(`${url}/equipment/${storecode}`);
// {

//      return(storecode!==''?{store_code: storecode,
//           isAvailable: true,
//           catogary: "category",
//           model: 'Nikon',
//           lab: 'level2'}:null)
// }
export const updateEquipment = (store_code, status) =>axios.post(`${url}/updateequipment/`,{store_code, status});
// {
    
// }
export const getlastBorrowData = (storecode) =>axios.get(`${url}/borrowdata/${storecode}`);
// {
//     console.log(storecode.length);
//      return (
//         storecode.length>0?
//         [{
//             type: "Lecture",
//             requestid:'12345',
//             iteam:{store_code: '124-134-3424',
//           isAvailable: true,
//           catogary: 'category 1',
//           model: 'model 1',
//           lab: 'lab 1'},
//         toDate: new Date(),
//         fromDate: new Date(),
//         name: "pubba pubba "+storecode,
//         index: "180240J",
//         id: '23456'
//         }]:[])
// }
export const acceptEquipment = (id, status) =>axios.post(`${url}/acceptEquipment/`,{id, status});
// {
//     return ('hi');
// }
export const getRequestData = (id) => {

    return ( id.length>0?[{user: {name: "pubba pubba ",
        index: id},
        reqdate: new Date(),
        status: "Approved",
        iteam:{store_code: '124-134-3424',
          isAvailable: true,
          catogary: 'category 1',
          model: 'model 1',
          lab: 'lab 1'},
        id: '123467',
         toDate: new Date(),
        fromDate: new Date(),
        lecture:  {name: "pubba pubba ",
        index: "180240J"}}]:[])
}
export const normalIssueEquipment = (id) => {
    return ('hi');
}
export const temporyIssueEquipment = (userid, storeid, fromdate, todate,reason) =>axios.post(`${url}/temporyborrowing/`,{userid, storeid, fromdate, todate,reason});
// {
//     return ('hi');
// }
export const getReport = (fromdate, toDate, categories) => {
   
    const lis = [{x:'1/2',data:['cat 1',[3,4,1]]},{x:'2/2',data:['cat 2',[2,4,5]]},{x:'3/2',data:['cat 3',[6,4,1]]}];
    const fd = fromdate.getDate();
    const td = toDate.getDate();

    var list = [{date:'1/2' ,data:[{cat:'cat1',data:1},{cat:'cat2',data:2},{cat:'cat3',data:3},{cat:'cat4',data:1}]},{date:'1/2' ,data:[{cat:'cat1',data:1},{cat:'cat2',data:2},{cat:'cat3',data:3},{cat:'cat4',data:1}]}];

    //list.map((date)=>[date,categories.map()]);

    return (list)
}