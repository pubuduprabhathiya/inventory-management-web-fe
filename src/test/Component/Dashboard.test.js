import { render,screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "../../component/UI/Dashboard";
import { faBell, faPen, faCalendarCheck, faBook } from '@fortawesome/free-solid-svg-icons';
import * as fontawesome from '@fortawesome/fontawesome-svg-core';
import userEvent from '@testing-library/user-event';

describe('Dashboard component',()=>{

    beforeEach(() => {
        fontawesome.library.add(faBell, faPen, faCalendarCheck, faBook)
    });

    test('renders "Actions" as a h2',()=>{
        render(<BrowserRouter><Dashboard/></BrowserRouter>);

        const actionsElement = screen.getByText('Actions');
        expect(actionsElement).toBeInTheDocument();
    });

    test('renders "Check Availability" route',()=>{
        render(<BrowserRouter><Dashboard/></BrowserRouter>)
        const bookIcon = screen.getByText('Check Availability',{exact:false});
        expect(bookIcon).toBeInTheDocument();
    });

    test('renders "Create Request" route',()=>{
        render(<BrowserRouter><Dashboard/></BrowserRouter>)
        const bookIcon = screen.getByText('Create Request',{exact:false});
        expect(bookIcon).toBeInTheDocument();
    });

    test('renders "Approve Request" route',()=>{
        render(<BrowserRouter><Dashboard/></BrowserRouter>)
        const bookIcon = screen.getByText('Approve Request',{exact:false});
        expect(bookIcon).toBeInTheDocument();
    });

    test('renders "Normal Request" once click the create request',()=>{
        render(<BrowserRouter><Dashboard/></BrowserRouter>)
        const divElement = screen.getByTestId('custom-element');
        userEvent.click(divElement);

        const outputElement = screen.getByText('Normal Borrowing',{exact:false});
        expect(outputElement).toBeInTheDocument();
    });

    test('renders "Normal Request" once click the create request',()=>{
        render(<BrowserRouter><Dashboard/></BrowserRouter>)
        const divElement = screen.getByTestId('custom-element');
        userEvent.click(divElement);

        const outputElement = screen.getByText('Temporary Borrowing',{exact:false});
        expect(outputElement).toBeInTheDocument();
    });

    

});