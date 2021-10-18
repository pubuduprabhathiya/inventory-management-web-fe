import { screen, fireEvent,render } from "@testing-library/react"
//import { render } from "./test.utils";
import ViewTrack from "../../pages/technical_officer/view_track";
import * as reactRedux from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event'

describe('View Track tes', () => {
      const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
    });

    test('category',async () => {
       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce([{
                    categoryName: "Projecter",
                    id: 1
                }, {
                    categoryName: "camera",
                    id: 2
                }]
        ).mockReturnValueOnce([]).mockReturnValueOnce([])
        render(<ViewTrack />);
   const autocomplete =screen.getByRole('combobox');
   const input =await autocomplete.querySelector('input')

   autocomplete.focus()
   // assign value to input field
    userEvent.type(input, 'Projecter');
     
   expect(input.value).toBe('Projecter')
    });

   
});