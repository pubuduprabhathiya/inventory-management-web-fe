import { render,screen } from "@testing-library/react"
import Request from "../../component/Request/Request";
import { faBell, faPen, faCalendarCheck, faBook } from '@fortawesome/free-solid-svg-icons';
import * as fontawesome from '@fortawesome/fontawesome-svg-core';

describe('Approve Request testing',()=>{

    beforeEach(() => {
        fontawesome.library.add(faBell, faPen, faCalendarCheck, faBook)
    });

    test('render Student id',async()=>{
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            ok: true,
            json: async ()=>[],
        });
        render(<Request/>);
        const id = await screen.findByText('No Data');
        expect(id).toBeInTheDocument();
    });

    test('render Student id',async()=>{
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            ok: true,
            json: async ()=>[{keyid:'0',requestDate:"2021-10-02T00:00:00.000Z",requestId:'3',returnDate:"2021-10-04T00:00:00.000Z",storeCode:'',studentId:'180244B'}],
        });
        render(<Request/>);
        const id = await screen.findByText('Student Id:');
        expect(id).toBeInTheDocument();
    });

    test('render StoreCode',async()=>{
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            ok: true,
            json: async ()=>[{keyid:'0',requestDate:"2021-10-02T00:00:00.000Z",requestId:'3',returnDate:"2021-10-04T00:00:00.000Z",storeCode:'',studentId:'180244B'}],
        });
        render(<Request/>);
        const id = await screen.findByText('StoreCode:');
        expect(id).toBeInTheDocument();
    });

    test('render Request Date',async()=>{
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            ok: true,
            json: async ()=>[{keyid:'0',requestDate:"2021-10-02T00:00:00.000Z",requestId:'3',returnDate:"2021-10-04T00:00:00.000Z",storeCode:'',studentId:'180244B'}],
        });
        render(<Request/>);
        const id = await screen.findByText('Request Date:');
        expect(id).toBeInTheDocument();
    });
})