import { screen, fireEvent,render,within } from "@testing-library/react"
//import { render } from "./test.utils";
import * as reactRedux from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event'
import AddUpdateEquipment from '../../screen/technical_officer/add_update_equipment';

import ViewTracDetails from '../../screen/technical_officer/add_update_equipment';

describe("Add Update Equipment", () => {

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
        
        
         render(<BrowserRouter><AddUpdateEquipment /></BrowserRouter>);
      const options = screen.getByText("Select one...");
    expect(options).toBeInTheDocument();
    });

    test('add',async () => {
       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce([])
        
        
        render(<BrowserRouter><AddUpdateEquipment /></BrowserRouter>);
        const select = screen.getByTestId('select');
        const input =await select.querySelector('input')
        fireEvent.change(input, { target: { value: 'Add Equipment' } });
        const element=screen.getByText('Add Equipment',{exact:false});
        expect(element).toBeInTheDocument();
        
    });
    test('update',async () => {
       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce(null).mockReturnValueOnce({storeid:null })
        
        
        render(<BrowserRouter><AddUpdateEquipment /></BrowserRouter>);
        const select = screen.getByTestId('select');
        const input =await select.querySelector('input')
        fireEvent.change(input, { target: { value: 'Update Equipment' } });
        const element=screen.getByText('QR',{exact:false});
        expect(element).toBeInTheDocument();
        
    });

     test('other',async () => {
       const dummyDispatch = jest.fn()
      //  useDispatchMock.mockReturnValue(dummyDispatch)
       // useSelectorMock.mockReturnValueOnce([])
        
        
        render(<BrowserRouter><AddUpdateEquipment /></BrowserRouter>);
        const select = screen.getByTestId('select');
        const input =await select.querySelector('input')
        fireEvent.change(input, { target: { value: 'element other' } });
       // const element=await screen.findByText(' element other',{exact:false});
       // expect(element).not.toBeInTheDocument();
         expect(input.value).not.toBe('element other');
        
    });
})