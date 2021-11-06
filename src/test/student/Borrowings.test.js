import { render,screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import Borrowings from "../../component/Borrowing/Borrowing"
import { act } from 'react-dom/test-utils';
import { unmountComponentAtNode } from "react-dom";


describe('test Borrowings',()=>{
    let container= null;
    beforeEach(()=>{
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(()=>{
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    })

    test('renders no data if someone does not borrow yet',async()=>{
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            ok: true,
            json: async()=>[],
        });
        render(<Borrowings/>);
        const noDataElement = await screen.findByText('No Data', { exact: true });
        expect(noDataElement).toBeInTheDocument();
    });

    test('renders Category',async()=>{
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            ok: true,
            json: async()=>[{keyid: '0', date:{day:'30',month:'July'},details:{category:'Camera',labName:'Cse level1',model:'RT5667-R',storeCode:'QWERT6'}}],
        });
        render(<Borrowings/>);
        const categoryElement = await screen.findByText('Category',{exact:false});
        expect(categoryElement).toBeInTheDocument();
    });

    test('renders Model',async()=>{
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            ok: true,
            json: async()=>[{keyid: '0', date:{day:'30',month:'July'},details:{category:'Camera',labName:'Cse level1',model:'RT5667-R',storeCode:'QWERT6'}}],
        });
        render(<Borrowings/>);
        const modelElement = await screen.findByText('Model',{exact:false});
        expect(modelElement).toBeInTheDocument();
    });

    test('renders LabName',async()=>{
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            ok: true,
            json: async()=>[{keyid: '0', date:{day:'30',month:'July'},details:{category:'Camera',labName:'Cse level1',model:'RT5667-R',storeCode:'QWERT6'}}],
        });
        render(<Borrowings/>);
        const LabNameElement = await screen.findByText('Lab Name:',{exact:false});
        expect(LabNameElement).toBeInTheDocument();
    });

    // test("render date fetch from DB",async()=>{
    //     const fakedata = [{keyid: '0', date:{day:'30',month:'July'},details:{category:'Camera',labName:'Cse level1',model:'RT5667-R',storeCode:'QWERT6'}}];
    //     jest.spyOn(global,"fetch").mockImplementation(()=>{
    //         Promise.resolve({
    //             ok: true,
    //             json: ()=> Promise.resolve(fakedata)
    //         })
    //     });

    //     await act(async()=>{
    //         render(<Borrowings/>,container);
    //     });
    //     const date = await screen.findByText('30');
    //     expect(date).toBeInTheDocument();
    // });

    

    // test('renders month as props',()=>{
    //     render(<Borrowings itemList={[{keyid: '0', date:{day:'30',month:'July'},details:{category:'Camera',labName:'Cse level1',model:'RT5667-R',storeCode:'QWERT6'}}]}/>);
    //     const MonthElement = screen.getByText('July');
    //     expect(MonthElement).toBeInTheDocument();
    // });

    // test('renders category as props',()=>{
    //     render(<Borrowings itemList={[{keyid: '0', date:{day:'30',month:'July'},details:{category:'Camera',labName:'Cse level1',model:'RT5667-R',storeCode:'QWERT6'}}]}/>);
    //     const propCategoryElement = screen.getByText('Camera');
    //     expect(propCategoryElement).toBeInTheDocument();
    // });

    // test('renders labName as props',()=>{
    //     render(<Borrowings itemList={[{keyid: '0', date:{day:'30',month:'July'},details:{category:'Camera',labName:'Cse level1',model:'RT5667-R',storeCode:'QWERT6'}}]}/>);
    //     const propLabElement = screen.getByText('Cse level1');
    //     expect(propLabElement).toBeInTheDocument();
    // });

    // test('renders model as props',()=>{
    //     render(<Borrowings itemList={[{keyid: '0', date:{day:'30',month:'July'},details:{category:'Camera',labName:'Cse level1',model:'RT5667-R',storeCode:'QWERT6'}}]}/>);
    //     const propModelElement = screen.getByText('RT5667-R');
    //     expect(propModelElement).toBeInTheDocument();
    // });

    // test('renders storecode as props',()=>{
    //     render(<Borrowings itemList={[{keyid: '0', date:{day:'30',month:'July'},details:{category:'Camera',labName:'Cse level1',model:'RT5667-R',storeCode:'QWERT6'}}]}/>);
    //     const propStoreCodeElement = screen.getByText('QWERT6');
    //     expect(propStoreCodeElement).toBeInTheDocument();
    // });

});