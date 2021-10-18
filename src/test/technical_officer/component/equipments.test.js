import { render, screen } from '@testing-library/react';
import * as reactRedux from 'react-redux'
import Equipments from '../../../components/technical_officer/equipments';

describe("equipments", () => {

      const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
    });

     test('Equipments',async () => {
       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce([{ id: '1-1-1-1', imageURL: '', Laboratory: { labName: 'lab name' }, model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 }])
         render(<Equipments fromDate={new Date()} toDate={ new Date()}/>);
      
     const listElement = await screen.findAllByTestId('equipment');
    expect(listElement).not.toHaveLength(0);
     });
    
    test('Equipment length 0',async () => {
       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce([])
         render(<Equipments fromDate={new Date()} toDate={ new Date()}/>);
      
     const listElement = screen.queryAllByTestId('equipment');
    expect(listElement).toHaveLength(0);
    });
})