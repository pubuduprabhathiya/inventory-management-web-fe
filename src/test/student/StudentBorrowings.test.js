import { render,screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import StudentBorrowingDetails from '../../screen/studentScreen/StudentBorrowingDetails';
import { faBell, faPen, faCalendarCheck, faBook } from '@fortawesome/free-solid-svg-icons';
import * as fontawesome from '@fortawesome/fontawesome-svg-core';

describe('Student Borrowing screen test',()=>{

    beforeEach(() => {
        fontawesome.library.add(faBell, faPen, faCalendarCheck, faBook)
    });

    test('renders Borrowing history details from database',async()=>{
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            ok: true,
            json: async ()=>[{keyid: '0', date:{day:'30',month:'July'},details:{category:'Camera',labName:'Cse level1',model:'RT5667-R',storeCode:'QWERT6'}}],
        });
        render(<BrowserRouter><StudentBorrowingDetails/></BrowserRouter>);
        const listElement = await screen.findAllByRole('listitem');
        expect(listElement).not.toHaveLength(0);
    });

    
});