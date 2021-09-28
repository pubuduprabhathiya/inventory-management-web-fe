import Moment from 'moment';

export async function getCheckAvailability(){
    const response = await fetch(`http://localhost:5000/checkAvaiability`);
    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || 'Could not fetch data');
    }
    const details = [];
    for(const key in data){
        const newObj = {
            keyid:key,
            ...data[key],
        };
        details.push(newObj);
    }
    return details;
}

export async function getBorrowingHistory(){
    const response = await fetch('http://localhost:5000/borrow');
    const data = await response.json();
    if(!response.ok){
        throw new Error(data.message || 'Could not fetch data');
    }
    const details = [];
    const months = ['JAN','FEB','March','April','May','June','July','Aug','Sep','Oct','Nov','Des'];
    for(const key in data){
        const newObj = {
            keyid:key,
            date:{
                month:months[parseInt(Moment(data[key]['purchesedDate']).format('MM'),10)-1],
                day: Moment(data[key]['purchesedDate']).format('DD'),
            },
            details:{
                category: data[key]['Category.categoryName'],
                model: data[key]['Model.modelName'],
                storeCode: data[key]['id'],
                labName: data[key]['Lab.labName']
            }
        };
        details.push(newObj);
    }
    return details;
}

export async function getCategories(){
    const response = await fetch(`http://localhost:5000/category`);
    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || 'Could not fetch');
    }
    const categoryList = [''];
    for(const key in data){
        const category = data[key]['categoryName'];
        categoryList.push(category);
    }
    return categoryList;
}

export async function getAvailableItems(category){
    const response = await fetch(`http://localhost:5000/ava`);
    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || 'Could not fetch');
    }
    
    return data;
}



// export async function sendCategory(categoryData){
//     const response = await fetch(`http://localhost:5000/models`,{
//         method:'POST',
//         body: JSON.stringify({user:categoryData}),
//         headers:{
//             'Content-Type': 'application/json'
//         },
//     });
//     const data = await response.json();
//     if(!response.ok){
//         throw new Error(data.message||'Could not fetch');
//     }
//     return data;
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export async function getPendingRequests(){
    const response = await fetch(`http://localhost:5000/pending`);
    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || 'Could not fetch');
    }
    const pendingList = [];
    for(const key in data){
        const newObj = {
            keyid: key,
            storeCode: data[key]['equipmentId'],
            requestDate: data[key]['requestDate'],
            returnDate: data[key]['returnDate'],
            studentId: data[key]['RequestBorrowing.studentId'],
            requestId: data[key]['id'],
        }
        pendingList.push(newObj);
    }
    return pendingList;
}

export async function getPendingDetails(id){
    const response = await fetch(`http://localhost:5000/requestDetail/${id}`);
    const data = await response.json();

    console.log(response);

    if(!response.ok){
        throw new Error(data.message || 'Could not fetch');
    }
    const pendingList = [];
    for(const key in data){
        const newObj = {
            keyid: key,
            storeCode: data[key]['id'],
            requestDate: data[key]['Requests.requestDate'],
            returnDate: data[key]['Requests.returnDate'],
            studentId: data[key]['Requests.RequestBorrowing.studentId'],
            reason: data[key]['Requests.reason'],
            category: data[key]['Category.categoryName'],
            model: data[key]['Model.modelName'],
            labName: data[key]['Lab.labName'],
        }
        pendingList.push(newObj);
    }
    return pendingList;
}

export async function approvePending(id){
    const response = await fetch(`http://localhost:5000/approve/${id}`,{
        method:'POST',
        //body: JSON.stringify({user:id}),
        headers:{
            'Content-Type': 'application/json'
        },
    });
    const data = await response.json();
    if(!response.ok){
        throw new Error(data.message||'Could not fetch');
    }
    return data;
}

export async function rejectPending(id){
    const response = await fetch(`http://localhost:5000/reject/${id}`,{
        method:'POST',
        //body: JSON.stringify({user:id}),
        headers:{
            'Content-Type': 'application/json'
        },
    });
    const data = await response.json();
    if(!response.ok){
        throw new Error(data.message||'Could not fetch');
    }
    return data;
}



