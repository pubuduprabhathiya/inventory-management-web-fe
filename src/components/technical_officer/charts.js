
import { useEffect, useState } from 'react';
import { Bar,Line ,Pie} from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { colors } from '../color';

const Charts = (type) => {
    const [labels, setlabels] = useState([]);
    const [datasets, setdatasets] = useState([]);
    const report = useSelector(state => state.report);
    const [charttype, setcharttype] = useState('bar')

    useEffect(() => {
        if (report.length > 0) {
            const labalst = report.map((e) => (e.date));
            const data = report[0].data.map((e, index) =>({ data:report.map((cat) => (cat.data[index].data)),label:e.cat,borderColor:colors[index]}) );
            //const data = report.map((e,index) => ({ data: e.data[1], label: e.data[0], backgroundColor:colors[index],borderColor:colors[index]}))
            console.log(data);
            setlabels(labalst);
            setdatasets(data);
        }
        else {

               const d= [ {
                    label:'3',
                data: [1, 2, 3],}]
            console.log(d);


        }
    }, [report])
    useEffect(() => {
    
    console.log(datasets,'hhh');
    }, [labels,datasets])
    
    useEffect(() => {
        setcharttype(type.type);
        console.log(type);
    }, [type])
    return (charttype==='bar'? <Bar
	data={{ labels: labels,
        datasets:datasets}}
	width={100}
	height={50}
	options={{ maintainAspectRatio: true }}
/>:charttype==='line'? <Line
	data={{ labels: labels,
        datasets:datasets}}
	width={100}
	height={50}
	options={{ maintainAspectRatio: true }}
/>: <Bar
	data={{ labels: labels,
        datasets:datasets}}
	width={100}
	height={50}
	options={{ maintainAspectRatio: true, scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }}}
/>
      
    )

};
export default Charts;