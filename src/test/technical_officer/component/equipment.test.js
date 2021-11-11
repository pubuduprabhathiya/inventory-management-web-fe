import { render, screen } from '@testing-library/react';
import Equipment from '../../../component/technical_officer/equipment';
import * as reactRedux from 'react-redux'
import userEvent from '@testing-library/user-event';


describe('Equipment test', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
    });

    test('render equipment name', () => {

        render(<Equipment setequipment={() => { }} selectequipment={'1-1-1-1'}
            equipment={{ id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 }}
            fromDate={'2021-09-20'} toDate={'2021-09-28'} />);
        const Element = screen.getByText('category name', { exact: false });
        expect(Element).toBeInTheDocument();
    });

    test('render equipment model', () => {

        render(<Equipment setequipment={() => { }} selectequipment={'1-1-1-1'}
            equipment={{ id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 }}
            fromDate={'2021-09-20'} toDate={'2021-09-28'} />);
        const Element = screen.getByText('model name', { exact: false });
        expect(Element).toBeInTheDocument();
    });

    test('render equipment lab', () => {

        render(<Equipment setequipment={() => { }} selectequipment={'1-1-1-1'}
            equipment={{ id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab namee' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 }}
            fromDate={'2021-09-20'} toDate={'2021-09-28'} />);
        const Element = screen.getByText('lab namee', { exact: false });
        expect(Element).toBeInTheDocument();
    });

    test('render equipment id', () => {

        render(<Equipment setequipment={() => { }} selectequipment={'1-1-1-1'}
            equipment={{ id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 }}
            fromDate={'2021-09-20'} toDate={'2021-09-28'} />);
        const Element = screen.getByText('1-1-1-1', { exact: false });
        expect(Element).toBeInTheDocument();
    });
    test('render equipment availabitity', () => {

        render(<Equipment setequipment={() => { }} selectequipment={'1-1-1-1'}
            equipment={{ id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 }}
            fromDate={'2021-09-20'} toDate={'2021-09-28'} />);
        const Element = screen.getByText('Available', { exact: false });
        expect(Element).toBeInTheDocument();
    });

    test('set borrow data', async () => {
        const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce()
        render(<Equipment setequipment={() => { }} selectequipment={'1-1-1-2'}
            equipment={{ id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 }}
            fromDate={'2021-09-20'} toDate={'2021-09-28'} />);

        const equipment = screen.getByTestId('equipment');
        //var btn = screen.getByRole('button')
        userEvent.click(equipment);
        expect(dummyDispatch).toHaveBeenCalled();
    });
})