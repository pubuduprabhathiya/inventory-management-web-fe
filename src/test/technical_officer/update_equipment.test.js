import { screen, fireEvent,render,waitFor } from "@testing-library/react"
//import { render } from "./test.utils";
import * as reactRedux from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event'
import UpdateEquipment from "../../screen/technical_officer/update_equipment";



describe("update equipment", () => {

      const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
    let file;
    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
         file = new File(['hello'], 'hello.png', { type: 'image/png' });
    });
    
    test('store id',async () => {
       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce(null).mockReturnValueOnce({storeid:null })
        
        
         render(<BrowserRouter><UpdateEquipment /></BrowserRouter>);
        const storeid = screen.getByTestId('storeid');
        
        expect(storeid).toBeInTheDocument();
        
    });
    test('store id vaild',async () => {
       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce(null).mockReturnValueOnce({ storeid: null }).mockReturnValueOnce({ id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 })
            .mockReturnValueOnce({ storeid: null })
        
        
         render(<BrowserRouter><UpdateEquipment /></BrowserRouter>);
        const storeid = screen.getByTestId('storeid');
         const input =await storeid.querySelector('input')
      
        
        fireEvent.change(input, { target: { value: '1-1-1-1' } });
        const Next = screen.getByText('Next');
        userEvent.click(Next);
        expect(dummyDispatch).toHaveBeenCalled()
        
    });
   
    test('store id invaild',async () => {
       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce(null).mockReturnValueOnce({ storeid: true }).mockReturnValueOnce({ id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 })
            .mockReturnValueOnce({ storeid: true })
        
        
         render(<BrowserRouter><UpdateEquipment /></BrowserRouter>);
        const storeid = screen.getByTestId('storeid');
         const input =await storeid.querySelector('input')
      
        
        fireEvent.change(input, { target: { value: '11' } });
        const Next = screen.getByText('Next');
        userEvent.click(Next);
        const error = screen.getByText('invalid store id');
        expect(error).toBeInTheDocument()
        
    });
    test('store id empty',async () => {
       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce(null).mockReturnValueOnce({ storeid: null })
        
        
         render(<BrowserRouter><UpdateEquipment /></BrowserRouter>);
        const storeid = screen.getByTestId('storeid');
         const input =await storeid.querySelector('input')
      
        
        fireEvent.change(input, { target: { value: '' } });
        const Next = screen.getByText('Next');
        userEvent.click(Next);
        const error = screen.getByText('invalid store id');
        expect(error).toBeInTheDocument()
        
    });


    test('Category',async () => {
       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        const equ = { id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 };
        useSelectorMock.mockReturnValueOnce(null).mockReturnValueOnce({ storeid: null }).mockReturnValueOnce(equ)
            .mockReturnValueOnce({ storeid: null }).mockReturnValueOnce(equ)
            .mockReturnValueOnce({ storeid: null })
        
        
         render(<BrowserRouter><UpdateEquipment /></BrowserRouter>);
        const storeid = screen.getByTestId('storeid');
         const input =await storeid.querySelector('input')
       
        fireEvent.change(input, { target: { value: '1-1-1-1' } });
        
        const Category = screen.getByTestId('Category');
         const catinput =await Category.querySelector('input')
        expect(catinput.value).toBe('category name')
        
    });
     test('Back',async () => {
       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        const equ = { id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 };
        useSelectorMock.mockReturnValueOnce(null).mockReturnValueOnce({ storeid: null }).mockReturnValueOnce(equ)
            .mockReturnValueOnce({ storeid: null }).mockReturnValueOnce(equ)
            .mockReturnValueOnce({ storeid: null }).mockReturnValueOnce(null).mockReturnValueOnce({ storeid: null }).mockReturnValueOnce(null).mockReturnValueOnce({ storeid: null })
        
        
         render(<BrowserRouter><UpdateEquipment /></BrowserRouter>);
        const storeid = screen.getByTestId('storeid');
         const input =await storeid.querySelector('input')
      
        fireEvent.change(input, { target: { value: '1-1-1-1' } });
        
        const Back = screen.getByText('Back');
         userEvent.click(Back);
         expect(Back).not.toBeInTheDocument();
        
     });
    
    test('Submit',async () => {
       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        const equ = { id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 };
        useSelectorMock.mockReturnValueOnce(null).mockReturnValueOnce({ storeid: null }).mockReturnValueOnce(equ)
            .mockReturnValueOnce({ storeid: null }).mockReturnValueOnce(equ)
            .mockReturnValueOnce({ storeid: null })
        
        
         render(<BrowserRouter><UpdateEquipment /></BrowserRouter>);
        const storeid = screen.getByTestId('storeid');
         const input =await storeid.querySelector('input')
      
        fireEvent.change(input, { target: { value: '1-1-1-1' } });
        
        const Submit = screen.getByText('Sumbit');
         userEvent.click(Submit);
         expect(dummyDispatch).toHaveBeenCalled();
        
    });

     test('Submit with image',async () => {
       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        const equ = { id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 };
        useSelectorMock.mockReturnValueOnce(null).mockReturnValueOnce({ storeid: null }).mockReturnValueOnce(equ)
            .mockReturnValueOnce({ storeid: null }).mockReturnValueOnce(equ)
            .mockReturnValueOnce({ storeid: null })
        
        
         render(<BrowserRouter><UpdateEquipment /></BrowserRouter>);
        const storeid = screen.getByTestId('storeid');
         const input =await storeid.querySelector('input')
      
        fireEvent.change(input, { target: { value: '1-1-1-1' } });
         const image = screen.getByText("Upload Image");
        const imageinput = await image.querySelector('input')
        //await fireEvent.change(imageinput, { target: { files: [file] } })

       
        const Submit = screen.getByText('Sumbit');
         userEvent.click(Submit);
         expect(dummyDispatch).toHaveBeenCalled();

        
        
        
     });
     test('change damage',async () => {
       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        const equ = { id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 };
        useSelectorMock.mockReturnValueOnce(null).mockReturnValueOnce({ storeid: null }).mockReturnValueOnce(equ)
            .mockReturnValueOnce({ storeid: null }).mockReturnValueOnce(equ)
            .mockReturnValueOnce({ storeid: null })
        
        
         render(<BrowserRouter><UpdateEquipment /></BrowserRouter>);
        const storeid = screen.getByTestId('storeid');
         const input =await storeid.querySelector('input')
      
        fireEvent.change(input, { target: { value: '1-1-1-1' } });
         const select = screen.getByTestId('damageselect');
        const damageinput =await select.querySelector('input')
        fireEvent.change(damageinput, { target: { value: 'damage' } });
         expect(damageinput.value).toBe('damage');
        
    });
 
})