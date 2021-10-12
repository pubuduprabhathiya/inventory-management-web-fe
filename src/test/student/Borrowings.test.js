import { render,screen } from "@testing-library/react"
import Borrowings from "../../component/Borrowing/Borrowing"

describe('test Borrowings',()=>{
    test('renders Category',()=>{
        render(<Borrowings itemList={[{keyid: '0', date:{day:'30',month:'July'},details:{category:'Camera',labName:'Cse level1',model:'RT5667-R',storeCode:'QWERT6'}}]}/>);
        const CategoryElement = screen.getByText('Category',{exact:false});
        expect(CategoryElement).toBeInTheDocument();
    });

    test('renders Model',()=>{
        render(<Borrowings itemList={[{keyid: '0', date:{day:'30',month:'July'},details:{category:'Camera',labName:'Cse level1',model:'RT5667-R',storeCode:'QWERT6'}}]}/>);
        const ModelElement = screen.getByText('Model',{exact:false});
        expect(ModelElement).toBeInTheDocument();
    });

    test('renders Model',()=>{
        render(<Borrowings itemList={[{keyid: '0', date:{day:'30',month:'July'},details:{category:'Camera',labName:'Cse level1',model:'RT5667-R',storeCode:'QWERT6'}}]}/>);
        const StoreCodeElement = screen.getByText('Store Code',{exact:false});
        expect(StoreCodeElement).toBeInTheDocument();
    });

    test('renders LabName',()=>{
        render(<Borrowings itemList={[{keyid: '0', date:{day:'30',month:'July'},details:{category:'Camera',labName:'Cse level1',model:'RT5667-R',storeCode:'QWERT6'}}]}/>);
        const LabNameElement = screen.getByText('Lab Name:',{exact:false});
        expect(LabNameElement).toBeInTheDocument();
    });

    test('renders day as props',()=>{
        render(<Borrowings itemList={[{keyid: '0', date:{day:'30',month:'July'},details:{category:'Camera',labName:'Cse level1',model:'RT5667-R',storeCode:'QWERT6'}}]}/>);
        const DayElement = screen.getByText('30');
        expect(DayElement).toBeInTheDocument();
    });

    test('renders month as props',()=>{
        render(<Borrowings itemList={[{keyid: '0', date:{day:'30',month:'July'},details:{category:'Camera',labName:'Cse level1',model:'RT5667-R',storeCode:'QWERT6'}}]}/>);
        const MonthElement = screen.getByText('July');
        expect(MonthElement).toBeInTheDocument();
    });

    test('renders category as props',()=>{
        render(<Borrowings itemList={[{keyid: '0', date:{day:'30',month:'July'},details:{category:'Camera',labName:'Cse level1',model:'RT5667-R',storeCode:'QWERT6'}}]}/>);
        const propCategoryElement = screen.getByText('Camera');
        expect(propCategoryElement).toBeInTheDocument();
    });

    test('renders labName as props',()=>{
        render(<Borrowings itemList={[{keyid: '0', date:{day:'30',month:'July'},details:{category:'Camera',labName:'Cse level1',model:'RT5667-R',storeCode:'QWERT6'}}]}/>);
        const propLabElement = screen.getByText('Cse level1');
        expect(propLabElement).toBeInTheDocument();
    });

    test('renders model as props',()=>{
        render(<Borrowings itemList={[{keyid: '0', date:{day:'30',month:'July'},details:{category:'Camera',labName:'Cse level1',model:'RT5667-R',storeCode:'QWERT6'}}]}/>);
        const propModelElement = screen.getByText('RT5667-R');
        expect(propModelElement).toBeInTheDocument();
    });

    test('renders storecode as props',()=>{
        render(<Borrowings itemList={[{keyid: '0', date:{day:'30',month:'July'},details:{category:'Camera',labName:'Cse level1',model:'RT5667-R',storeCode:'QWERT6'}}]}/>);
        const propStoreCodeElement = screen.getByText('QWERT6');
        expect(propStoreCodeElement).toBeInTheDocument();
    });

});