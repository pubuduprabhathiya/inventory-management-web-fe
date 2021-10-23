import { render, screen } from '@testing-library/react';
import * as reactRedux from 'react-redux'

import ViewTracDetails from '../../../component/technical_officer/view_track_details';

describe("View Track Details", () => {

      const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
    });

     test('Equipments',async () => {
       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce([{
             type: "temporary", status: 'open', LecturerBorrowings: [],
             TemoryBorrowings: [{ student: { lastName: 'last', firstName: 'first', department: 'dep' } }],
              dueDate: '2021-09-30',
             returnDate: '2021-09-28',
             fromDate:'2021-09-25'
         }])
         render(<ViewTracDetails/>);
      
     const listElement = await screen.findAllByTestId('borrowdata');
    expect(listElement).not.toHaveLength(0);
     });
    
    test('Equipment length 0',async () => {
       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce([])
         render(<ViewTracDetails/>);
      
     const listElement = screen.queryAllByTestId('borrowdata');
    expect(listElement).toHaveLength(0);
    });
})