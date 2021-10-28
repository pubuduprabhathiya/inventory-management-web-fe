import { screen, fireEvent,render,within } from "@testing-library/react"
//import { render } from "./test.utils";
import * as reactRedux from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event'
import TemporyBorrowing from "../../screen/technical_officer/tempory_borrowing";



describe("Tempory Borrowing", () => {

      const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
    });
    
    test('store id',async () => {
       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce(null).mockReturnValueOnce({storeid:null })
        
        
         render(<BrowserRouter><TemporyBorrowing /></BrowserRouter>);
        const storeid = screen.getByTestId('storeid');
        
        expect(storeid).toBeInTheDocument();
        
    });
     test('store id error',async () => {
       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce(null).mockReturnValueOnce({storeid:true }).mockReturnValueOnce(null).mockReturnValueOnce({storeid:true })
        
        
         render(<BrowserRouter><TemporyBorrowing /></BrowserRouter>);
        const storeid = screen.getByText('invalid store id');
        
        expect(storeid).toBeInTheDocument();
        
    });
    test('user id',async () => {
       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce(null).mockReturnValueOnce({storeid:null })
        
        
         render(<BrowserRouter><TemporyBorrowing /></BrowserRouter>);
        const userid = screen.getByTestId('userid');
        
        expect(userid).toBeInTheDocument();
        
    });
    test('store id valid', async () => {
       const equ={ storeid:null,id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 }

       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
       useSelectorMock.mockReturnValueOnce(null).mockReturnValueOnce({storeid:null }).mockReturnValueOnce(equ).mockReturnValueOnce({storeid:null }).mockReturnValueOnce(equ).mockReturnValueOnce({storeid:null })
        render(<BrowserRouter><TemporyBorrowing /></BrowserRouter>);
        
        const storeid = screen.getByTestId('storeid');
        const input = await storeid.querySelector('input')
        input.focus();
        fireEvent.change(input, { target: { value: '1-1-1-1' } })
        input.blur();
        expect(dummyDispatch).toBeCalled();
        
    });

    test('store id valid 2', async () => {
       const equ={ storeid:null,id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 }

       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
       useSelectorMock.mockReturnValueOnce(null).mockReturnValueOnce({storeid:null }).mockReturnValueOnce(equ).mockReturnValueOnce({storeid:null }).mockReturnValueOnce(equ).mockReturnValueOnce({storeid:null })
        render(<BrowserRouter><TemporyBorrowing /></BrowserRouter>);
        
        const storeid = screen.getByTestId('storeid');
        const input = await storeid.querySelector('input')
        input.focus();
        fireEvent.change(input, { target: { value: '1-1-1-1' } })
        input.blur();
        const category = screen.getByTestId('category');
        const inputcat = await category.querySelector('input')
        expect(inputcat.value).toBe('category name');
        
    });

     test('reason', async () => {
       const equ={ storeid:null,id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 }

       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
       useSelectorMock.mockReturnValueOnce(null).mockReturnValueOnce({storeid:null }).mockReturnValueOnce(equ).mockReturnValueOnce({storeid:null }).mockReturnValueOnce(equ).mockReturnValueOnce({storeid:null })
        render(<BrowserRouter><TemporyBorrowing /></BrowserRouter>);
        
        const storeid = screen.getByTestId('storeid');
        const input = await storeid.querySelector('input')
        input.focus();
        fireEvent.change(input, { target: { value: '1-1-1-1' } })
        input.blur();
        const reason = screen.getByTestId('reason');
         const inputcat = await reason.querySelector('input')
         fireEvent.change(inputcat, { target: { value: 'reason' } })
        expect(inputcat.value).toBe('reason');
        
     });
    
     test('submit', async () => {
       const equ={ storeid:null,id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 }

       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
       useSelectorMock.mockReturnValueOnce(null).mockReturnValueOnce({storeid:null }).mockReturnValueOnce(equ).mockReturnValueOnce({storeid:null }).mockReturnValueOnce(equ).mockReturnValueOnce({storeid:null })
        render(<BrowserRouter><TemporyBorrowing /></BrowserRouter>);
         const userid = screen.getByTestId('userid');
         const userinput = await userid.querySelector('input')
         fireEvent.change(userinput, { target: { value: 'userid' } })

        const storeid = screen.getByTestId('storeid');
        const input = await storeid.querySelector('input')
        input.focus();
        fireEvent.change(input, { target: { value: '1-1-1-1' } })
        input.blur();
        const reason = screen.getByTestId('reason');
         const inputcat = await reason.querySelector('input')
         fireEvent.change(inputcat, { target: { value: 'reason' } })

        const Submit = screen.getByText('Submit');
         userEvent.click(Submit);
         expect(dummyDispatch).toHaveBeenCalledTimes(1);
        
     });
   test('submit reason error', async () => {
       const equ={ storeid:null,id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 }

       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
       useSelectorMock.mockReturnValueOnce(null).mockReturnValueOnce({storeid:null }).mockReturnValueOnce(equ).mockReturnValueOnce({storeid:null }).mockReturnValueOnce(equ).mockReturnValueOnce({storeid:null })
        render(<BrowserRouter><TemporyBorrowing /></BrowserRouter>);
         const userid = screen.getByTestId('userid');
         const userinput = await userid.querySelector('input')
         fireEvent.change(userinput, { target: { value: 'userid' } })

        const storeid = screen.getByTestId('storeid');
        const input = await storeid.querySelector('input')
        input.focus();
        fireEvent.change(input, { target: { value: '1-1-1-1' } })
        input.blur();
        // const reason = screen.getByTestId('reason');
        //  const inputcat = await reason.querySelector('input')
        //  fireEvent.change(inputcat, { target: { value: 'reason' } })

        const Submit = screen.getByText('Submit');
     userEvent.click(Submit);
     const ele = screen.getByText('invalid reason');
         expect(ele).toBeInTheDocument();
        
   });
  test('submit userid error', async () => {
       const equ={ storeid:null,id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 }

       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
       useSelectorMock.mockReturnValueOnce(null).mockReturnValueOnce({storeid:null }).mockReturnValueOnce(equ).mockReturnValueOnce({storeid:null }).mockReturnValueOnce(equ).mockReturnValueOnce({storeid:null })
        render(<BrowserRouter><TemporyBorrowing /></BrowserRouter>);
         const userid = screen.getByTestId('userid');
         const userinput = await userid.querySelector('input')
         //fireEvent.change(userinput, { target: { value: 'd' } })

        const storeid = screen.getByTestId('storeid');
        const input = await storeid.querySelector('input')
        input.focus();
        fireEvent.change(input, { target: { value: '1-1-1-1' } })
        input.blur();
        const reason = screen.getByTestId('reason');
         const inputcat = await reason.querySelector('input')
         fireEvent.change(inputcat, { target: { value: 'reason' } })
   // fireEvent.change(userinput, { target: { value: '' } })

    
        const Submit = screen.getByText('Submit');
     userEvent.click(Submit);
     const ele = screen.getByText('invalid store id');
         expect(ele).toBeInTheDocument();
        
  });
  
   test('toDate', async () => {
       const equ={ storeid:null,id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 }

       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
       useSelectorMock.mockReturnValueOnce(null).mockReturnValueOnce({storeid:null }).mockReturnValueOnce(equ).mockReturnValueOnce({storeid:null }).mockReturnValueOnce(equ).mockReturnValueOnce({storeid:null })
        render(<BrowserRouter><TemporyBorrowing /></BrowserRouter>);
        
        const storeid = screen.getByTestId('todate');
        const input = await storeid.querySelector('input')
        input.focus();
         var date = new Date('2021-10-25');
        fireEvent.change(input, { target: { value:date  } })
        
        expect(input.value).toBe("/25");
        
   });
  test('FromDate', async () => {
       const equ={ storeid:null,id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 }

       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
       useSelectorMock.mockReturnValueOnce(null).mockReturnValueOnce({storeid:null }).mockReturnValueOnce(equ).mockReturnValueOnce({storeid:null }).mockReturnValueOnce(equ).mockReturnValueOnce({storeid:null })
        render(<BrowserRouter><TemporyBorrowing /></BrowserRouter>);
        
        const storeid = screen.getByTestId('fromdate');
        const input = await storeid.querySelector('input')
    input.focus();
    var date = new Date('2021-10-25');
        fireEvent.change(input, { target: { value:date  } })
        
        expect(input.value).toBe("/25");
        
     });
})