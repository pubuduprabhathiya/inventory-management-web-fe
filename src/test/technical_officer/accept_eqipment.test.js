import { screen, fireEvent,render } from "@testing-library/react"
//import { render } from "./test.utils";
import * as reactRedux from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event'
import AcceptEquipment from "../../screen/technical_officer/accept_equipment";

var data=[{
            Equipment: { id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 },
    type: "lecture", TemoryBorrowings: [{ student: { lastName: 'last', firstName: 'first', department: 'dep' } }]
    , LecturerBorrowings: [{ lecturer: { lastName: 'last', firstName: 'first', department: 'dep' } }]
}]
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

//    test('qr', async () => {
//       const dummyDispatch = jest.fn()
//         useDispatchMock.mockReturnValue(dummyDispatch)
//         useSelectorMock.mockReturnValueOnce(
//             []
//         ).mockReturnValueOnce({}).mockReturnValueOnce(
//             []
//         ).mockReturnValueOnce({})
//         render(<BrowserRouter><AcceptEquipment /></BrowserRouter>
//         );
        
        
        
//         //userEvent.type(input, '1-1-1-1');
//        const Next = screen.getByText('Bar code');
//        userEvent.click(Next);
//        const Element = screen.getByTestId('scanner');
        
//         expect(Element).toBeInTheDocument()
//    });
    test('store code wrong', async () => {
      const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce(
            []
        ).mockReturnValueOnce({storeid:true}).mockReturnValueOnce([]).mockReturnValueOnce({storeid:true})
        render(<AcceptEquipment />
        );
        
        const Element = screen.getByTestId('storecode');
        const input = await Element.querySelector('input')
        //userEvent.type(input, '1-1-1-1');
        fireEvent.change(input, { target: { value: '' } });
        expect(input.value).toBe('')
        const Next = screen.getByText('Next');
        userEvent.click(Next);
        const error = screen.getByText('invalid store id');
        expect(error).toBeInTheDocument()
    });
    test('store code correct', async () => {
      const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce(
            data
        ).mockReturnValueOnce({}).mockReturnValueOnce(data).mockReturnValueOnce({}).mockReturnValueOnce({})
        render(<AcceptEquipment />
        );
        const Submit = screen.getByText('Submit');
        expect(Submit).toBeInTheDocument()
    });
     test('lecturer borrowing', async () => {
      const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce(
            data
        ).mockReturnValueOnce({}).mockReturnValueOnce([{
            Equipment: { id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 },
        type:"lecture",TemoryBorrowings: [{ student: { lastName: 'last', firstName: 'first', department: 'dep' } }],LecturerBorrowings:[{ lecturer: { lastName: 'last', firstName: 'first', department: 'dep' } }]}]).mockReturnValueOnce({}).mockReturnValueOnce({})
        render(<AcceptEquipment />
        );
         const Model = screen.getByTestId('model');
         const input = await Model.querySelector('input')
        expect(input.value).toBe('model name')
     });
    test('tempory borrowing', async () => {
      const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce(
            data
        ).mockReturnValueOnce({}).mockReturnValueOnce([{
            Equipment: { id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 },
        type:"temporary",TemoryBorrowings: [{ student: { lastName: 'last', firstName: 'first', department: 'dep' } }],LecturerBorrowings:[{ lecturer: { lastName: 'last', firstName: 'first', department: 'dep' } }]}]).mockReturnValueOnce({}).mockReturnValueOnce({})
        render(<AcceptEquipment />
        );
         const Model = screen.getByTestId('model');
         const input = await Model.querySelector('input')
        expect(input.value).toBe('model name')
    });
    test('normal borrowing', async () => {
    
      const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce(
            data
        ).mockReturnValueOnce({}).mockReturnValueOnce([{
            Equipment: { id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 },
        type:"normal",RequestBorrowings: [{ student: { lastName: 'last', firstName: 'first', department: 'dep' } }],LecturerBorrowings:[{ lecturer: { lastName: 'last', firstName: 'first', department: 'dep' } }]}]).mockReturnValueOnce({}).mockReturnValueOnce({})
        render(<AcceptEquipment />
        );

         const Model = screen.getByTestId('model');
         const input = await Model.querySelector('input')
        expect(input.value).toBe('model name')
    });

     test('damage change', async () => {
    
      const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce(
            data
        ).mockReturnValueOnce({storeid: null}).mockReturnValueOnce(data)
        .mockReturnValueOnce({storeid: null}).mockReturnValueOnce({storeid: null}).mockReturnValueOnce(data)
        .mockReturnValueOnce({storeid: null}).mockReturnValueOnce({storeid: null}).mockReturnValueOnce({storeid: null}).mockReturnValueOnce({storeid: null})
            
        render(<AcceptEquipment />
        );

        const select = screen.getByTestId('selectdamage');
        const input =await select.querySelector('input')
        await fireEvent.change(input, { target: { value: 'damage' } });
        expect(input.value).toBe('notdamage')
    });
    test('Submit', async () => {
    
      const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce(
            data
        ).mockReturnValueOnce({}).mockReturnValueOnce([{
            Equipment: { id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 },
        type:"normal",RequestBorrowings: [{ student: { lastName: 'last', firstName: 'first', department: 'dep' } }],LecturerBorrowings:[{ lecturer: { lastName: 'last', firstName: 'first', department: 'dep' } }]}]).mockReturnValueOnce({}).mockReturnValueOnce({})
        render(<AcceptEquipment />
        );

         const Submit = screen.getByText('Submit');
         userEvent.click(Submit);
        expect(dummyDispatch).toHaveBeenCalled()
    });
    
     test('back btn', async () => {
      const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce(
            data
        ).mockReturnValueOnce({}).mockReturnValueOnce(data).mockReturnValueOnce({}).mockReturnValueOnce({}).mockReturnValueOnce([]).mockReturnValueOnce({}).mockReturnValueOnce({})
        render(<AcceptEquipment />
        );
         const back = screen.getByText('Back');
         userEvent.click(back);
        expect(back).not.toBeInTheDocument()
    });
})