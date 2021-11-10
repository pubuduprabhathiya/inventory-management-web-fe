
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { Bar,Line ,Pie} from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { colors } from '../color';
import { Excel } from './excel';

const Charts = (type) => {
    const [labels, setlabels] = useState([]);
    const [datasets, setdatasets] = useState([]);
    const report = useSelector(state => state.report);
    const [charttype, setcharttype] = useState('bar')
    const [reporttype, setreporttype] = useState('usage');

    useEffect(() => {
        if (report.length > 0) {
            const labalst = report.map((e) => (e.date));
            const data = report[0].data.map((e, index) =>({ data:report.map((cat) => (cat.data[index].data)),label:e.cat, backgroundColor:colors[index],borderColor:colors[index]}) );
            //const data = report.map((e,index) => ({ data: e.data[1], label: e.data[0], backgroundColor:colors[index],borderColor:colors[index]}))
         
            setlabels(labalst);
            setdatasets(data);
        }
         
    }, [report])
    
    
    useEffect(() => {
        setcharttype(type.type);
        setreporttype(type.reportType);
     
    }, [type])
    return (
         <Box  sx={{ display: 'flex', width: 1000,flexDirection:'column'}}>
            <Box>
               {labels!==[]?<Excel csvData={report} type={reporttype}  ></Excel>:<Box/>}
            </Box>
            
        {charttype === 'bar' ? <Bar
	data={{ labels: labels,
                    datasets: datasets
                }}
                data-testid="bar"
	width={100}
	height={75}
	options={{ maintainAspectRatio: true }}
/>:charttype==='line'? <Line
	data={{ labels: labels,
                        datasets: datasets
                    }}
                    data-testid="line"
	width={100}
	height={75}
	options={{ maintainAspectRatio: true }}
/>: <Bar
	data={{ labels: labels,
                            datasets: datasets
                        }}
                        data-testid="stacked"
	width={100}
	height={75}
	options={{ maintainAspectRatio: true, scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }}}
/>}
      </Box>
    )

};
export default Charts;