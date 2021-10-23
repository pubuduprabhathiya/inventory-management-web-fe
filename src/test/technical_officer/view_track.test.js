import { screen, fireEvent,render } from "@testing-library/react"
//import { render } from "./test.utils";
import ViewTrack from "../../screen/technical_officer/view_track";
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
       
        useSelectorMock.mockReturnValueOnce([{
                    categoryName: "Projecter",
                    id: 1
                }, {
                    categoryName: "camera",
                    id: 2
                }]
        ).mockReturnValueOnce([]).mockReturnValueOnce([]).mockReturnValueOnce([]).mockReturnValueOnce([]).mockReturnValueOnce([])
         useDispatchMock.mockReturnValue(dummyDispatch)
        render(<ViewTrack />);
   const autocomplete =screen.getByRole('combobox');
  
        const input =await autocomplete.querySelector('input')
       
        const btn =  await autocomplete.querySelector('button')
        userEvent.click(btn);
        fireEvent.change(input, { target: { value: 'Projecter' } })
        fireEvent.keyDown(autocomplete, { key: 'ArrowDown' })
        fireEvent.keyDown(autocomplete, { key: 'Enter' })
        
  
        
        expect(input.value).toBe('Projecter')
     
   expect(input.value).toBe('Projecter')
    });

   
});