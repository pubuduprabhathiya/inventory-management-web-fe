import { screen, fireEvent,render } from "@testing-library/react"
//import { render } from "./test.utils";
import * as reactRedux from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event'
import AcceptEquipment from "../../pages/technical_officer/accept_equipment";
import AddEquipment from "../../pages/technical_officer/add_equipmet";

describe('Add Equipment', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
    });

    test('category', async() => {
        const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce(
            []
        ).mockReturnValueOnce([{ labName: 'lab name' ,id:1}])
            .mockReturnValueOnce([])
            .mockReturnValueOnce([{
                    categoryName: "Projecter",
                    id: 1
                }, {
                    categoryName: "camera",
                    id: 2
                }]).mockReturnValueOnce([{
                    categoryName: "Projecter",
                    id: 1
                }, {
                    categoryName: "camera",
                    id: 2
                }]).mockReturnValueOnce([{ modelName: 'model name' ,id:1}])
        render(<AddEquipment /> );
        const autocomplete =screen.getByTestId('category');
   const input =await autocomplete.querySelector('input')

   autocomplete.focus()
   // assign value to input field
    userEvent.type(input, 'Projecter');
     
   expect(input.value).toBe('Projecter')
        
    });

   
   
})