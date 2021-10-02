

import { InsertDriveFile } from '@mui/icons-material';
import { Button, Fab, Icon } from '@mui/material';
import * as FileSaver from 'file-saver';

import * as XLSX from 'xlsx';



export const Excel = ({csvData,type}) => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

    const fileExtension = '.xlsx';



    const exportToCSV = (csvData) => {
        var report = [];
        for (var i = 0; i < csvData.length; i++) {
            var temp = {date: csvData[i]['date']};
            for (var j = 0; j < csvData[i]['data'].length; j++) {
                temp[csvData[i]['data'][j]['cat']] = csvData[i]['data'][j]['data'];
            };
            
            
            report = [...report, temp];
            
        }
        
        console.log(csvData);


        const ws = XLSX.utils.json_to_sheet(report);

        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        console.log(ws);
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

        const data = new Blob([excelBuffer], {type: fileType});

        FileSaver.saveAs(data, `${type} Report ${new Date().toString()}` + fileExtension);

    }



    return (
        <Fab color='primary'  onClick={(e) => exportToCSV(csvData) }>
            <InsertDriveFile/>
            
        </Fab>
    )

}