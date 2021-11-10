import { screen, fireEvent,render,within } from "@testing-library/react"
//import { render } from "./test.utils";
import * as reactRedux from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event'
import IssueEquipment from "../../screen/technical_officer/issue_equipment";


describe("Issue Equipment", () => {

      const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
    });
    
    test('options',async () => {
       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce([])
        
        
         render(<BrowserRouter><IssueEquipment /></BrowserRouter>);
       const select = screen.getByTestId('select');
    expect(select).toBeInTheDocument();
    });

    test('tempory',async () => {
       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce(null).mockReturnValueOnce({storeid:null })
        
        
        render(<BrowserRouter><IssueEquipment /></BrowserRouter>);
        const select = screen.getByTestId('select');
        const input =await select.querySelector('input')
        fireEvent.change(input, { target: { value: 'Tempory' } });
        const element=screen.getByText('Create Tempory Borrowing',{exact:false});
        expect(element).toBeInTheDocument();
        
    });
    test('update',async () => {
       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
      useSelectorMock.mockReturnValueOnce([]).mockReturnValueOnce({Userid:null})
        
        
        render(<BrowserRouter><IssueEquipment /></BrowserRouter>);
        const select = screen.getByTestId('select');
        const input =await select.querySelector('input')
        fireEvent.change(input, { target: { value: 'Approved' } });
        const element=screen.getByText('Select Approved Borrowing',{exact:false});
        expect(element).toBeInTheDocument();
        
    });

     test('other',async () => {
       const dummyDispatch = jest.fn()
      //  useDispatchMock.mockReturnValue(dummyDispatch)
       // useSelectorMock.mockReturnValueOnce([])
        
        
        render(<BrowserRouter><IssueEquipment /></BrowserRouter>);
        const select = screen.getByTestId('select');
        const input =await select.querySelector('input')
        fireEvent.change(input, { target: { value: 'element other' } });
       // const element=await screen.findByText(' element other',{exact:false});
       // expect(element).not.toBeInTheDocument();
         expect(input.value).not.toBe('element other');
        
    });
})