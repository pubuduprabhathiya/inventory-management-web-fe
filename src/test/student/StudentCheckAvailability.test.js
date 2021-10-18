import { render,screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import StudentCheckAvailability from '../../screen/studentScreen/StudentCheckAvailability';
import { faBell, faPen, faCalendarCheck, faBook } from '@fortawesome/free-solid-svg-icons';
import * as fontawesome from '@fortawesome/fontawesome-svg-core';

describe('Student Check Availability screen test',()=>{
    beforeEach(() => {
        fontawesome.library.add(faBell, faPen, faCalendarCheck, faBook)
    });

    test('renders avilable and not available items from database',async ()=>{
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            ok: true,
            json: async ()=> [{keyid: '0',id:'ASDF4',imageURL:'abc.com',availability:'1',category:'projector'}],
        });
        render(<BrowserRouter><StudentCheckAvailability/></BrowserRouter>);

        const listElement = await screen.findAllByRole('listitem');
        expect(listElement).not.toHaveLength(0);
    });
    
});