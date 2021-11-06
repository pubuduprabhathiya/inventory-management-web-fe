import { screen, fireEvent,render,within } from "@testing-library/react"
//import { render } from "./test.utils";
import * as reactRedux from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event'
import NormalBorrowing from "../../screen/technical_officer/normal_borrowing";



describe("Normal Borrowing", () => {

      const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
    });
    
    test('store id',async () => {
       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce([]).mockReturnValueOnce({Userid:null})
        
        
         render(<BrowserRouter><NormalBorrowing /></BrowserRouter>);
        const select = screen.getByTestId('userid');
        
        expect(select).toBeInTheDocument();
        
    });

 test('store id valid',async () => {
       const dummyDispatch = jest.fn()
     useDispatchMock.mockReturnValue(dummyDispatch)
     const req={
         Equipment: { id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 }
         ,returnDate:new Date(),requestDate:new Date()}
     useSelectorMock.mockReturnValueOnce(req).mockReturnValueOnce(req).mockReturnValueOnce(req).mockReturnValueOnce({Userid:null}).mockReturnValueOnce(req).mockReturnValueOnce(req)
        
        
         render(<NormalBorrowing />);
     const Submit = screen.getByText('Submit');
     expect(Submit).toBeInTheDocument();
     
        
 });
    
    test('Next',async () => {
       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce([]).mockReturnValueOnce({Userid:null}).mockReturnValueOnce({Userid:null}).mockReturnValueOnce([]).mockReturnValueOnce([])
        
        
         render(<BrowserRouter><NormalBorrowing /></BrowserRouter>);
        
         const Next = screen.getByText('Next');
         userEvent.click(Next);
        expect(dummyDispatch).toHaveBeenCalled()
        
    });
    test('Submit',async () => {
       const dummyDispatch = jest.fn()
     useDispatchMock.mockReturnValue(dummyDispatch)
     const req={
         Equipment: { id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 }
         ,returnDate:new Date(),requestDate:new Date()}
     useSelectorMock.mockReturnValueOnce(req).mockReturnValueOnce(req).mockReturnValueOnce(req).mockReturnValueOnce({Userid:null}).mockReturnValueOnce(req).mockReturnValueOnce(req).mockReturnValueOnce(req).mockReturnValueOnce({Userid:null}).mockReturnValueOnce(req)
        
        
         render(<NormalBorrowing />);
      const Submit = screen.getByText('Submit');
         userEvent.click(Submit);
        expect(dummyDispatch).toHaveBeenCalled()
     
        
    });
     test('not Submit',async () => {
       const dummyDispatch = jest.fn()
     useDispatchMock.mockReturnValue(dummyDispatch)
     const req={
         Equipment: { id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 }
         ,returnDate:new Date(),requestDate:new Date()}
     useSelectorMock.mockReturnValueOnce(req).mockReturnValueOnce(req).mockReturnValueOnce(req).mockReturnValueOnce({Userid:null}).mockReturnValueOnce(req)
        
        
         render(<NormalBorrowing />);
      const Submit = screen.getByText('Submit');
         //userEvent.click(Submit);
        expect(dummyDispatch).not.toHaveBeenCalled()
     
        
     });
     test('Back',async () => {
       const dummyDispatch = jest.fn()
     useDispatchMock.mockReturnValue(dummyDispatch)
     const req={
         Equipment: { id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 }
         ,returnDate:new Date(),requestDate:new Date()}
         useSelectorMock.mockReturnValueOnce(req).mockReturnValueOnce(req).mockReturnValueOnce(req).mockReturnValueOnce(req).mockReturnValueOnce({Userid:null}).mockReturnValueOnce({Userid:null}).mockReturnValueOnce(req)
        
        
         render(<NormalBorrowing />);
      const Back = screen.getByText('Back');
         userEvent.click(Back);
        expect(Back).not.toBeInTheDocument()
     
        
    });
   
})