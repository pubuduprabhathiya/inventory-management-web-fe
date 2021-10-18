import { screen, fireEvent,render } from "@testing-library/react"
//import { render } from "./test.utils";
import * as reactRedux from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event'
import AcceptEquipment from "../../pages/technical_officer/accept_equipment";

describe('Accept Equipment', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
    });
    test('not borrow data', () => {
        const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce(
            []
        ).mockReturnValueOnce({})
        render(<AcceptEquipment /> 
        );
        expect(dummyDispatch).not.toHaveBeenCalled()
        
    });

    test('borrow data', async () => {
        const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce(
            []
        ).mockReturnValueOnce({}).mockReturnValueOnce(
            []
        ).mockReturnValueOnce({})
        render(<AcceptEquipment />
        );
        
        const Element = screen.getByTestId('storecode');
        const input = await Element.querySelector('input')
        //userEvent.type(input, '1-1-1-1');
        fireEvent.change(input, { target: { value: '1-1-1-1' } });
        expect(input.value).toBe('1-1-1-1')
        const Next = screen.getByText('Next');
        userEvent.click(Next);
        expect(dummyDispatch).toHaveBeenCalled()
    });
   
})