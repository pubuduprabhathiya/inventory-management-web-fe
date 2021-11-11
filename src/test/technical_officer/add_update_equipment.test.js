import { screen, fireEvent, render, within } from "@testing-library/react"
//import { render } from "./test.utils";
import * as reactRedux from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event'
import AddUpdateEquipment from '../../screen/technical_officer/add_update_equipment';

import ViewTracDetails from '../../screen/technical_officer/add_update_equipment';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../../store/reducers/reducers';
import thunk from 'redux-thunk';
describe("Add Update Equipment", () => {

  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
  ));
  beforeEach(() => {
    useSelectorMock.mockClear()
    useDispatchMock.mockClear()
  });

  test('options', async () => {
    const dummyDispatch = jest.fn()
    useDispatchMock.mockReturnValue(dummyDispatch)
    useSelectorMock.mockReturnValueOnce([])


    render(<Provider store={store}><BrowserRouter><AddUpdateEquipment /></BrowserRouter></Provider>);
    const options = screen.getByText("Select type...");
    expect(options).toBeInTheDocument();
  });

  test('add', async () => {
    const dummyDispatch = jest.fn()
    useDispatchMock.mockReturnValue(dummyDispatch)
    useSelectorMock.mockReturnValueOnce({ error: null }).mockReturnValueOnce({ error: null }).mockReturnValueOnce({ error: null }).mockReturnValueOnce({ error: null }).mockReturnValueOnce({ error: null }).mockReturnValueOnce({ error: null }).mockReturnValueOnce({ error: null }).mockReturnValueOnce({ error: null }).mockReturnValueOnce({ error: null }).mockReturnValueOnce({ error: null }).mockReturnValueOnce({ error: null })


    render(<Provider store={store}><BrowserRouter><AddUpdateEquipment /></BrowserRouter></Provider>);
    const select = screen.getByTestId('select');
    const input = await select.querySelector('input')
    fireEvent.change(input, { target: { value: 'Add Equipment' } });
    const element = screen.getByText('Add Equipment', { exact: false });
    expect(element).toBeInTheDocument();

  });
  test('update', async () => {
    const dummyDispatch = jest.fn()
    useDispatchMock.mockReturnValue(dummyDispatch)
    useSelectorMock.mockReturnValueOnce({ storeid: null }).mockReturnValueOnce(null).mockReturnValueOnce({ storeid: null }).mockReturnValueOnce({ storeid: null })


    render(<Provider store={store}><BrowserRouter><AddUpdateEquipment /></BrowserRouter></Provider>);
    const select = screen.getByTestId('select');
    const input = await select.querySelector('input')
    fireEvent.change(input, { target: { value: 'Update Equipment' } });
    const element = screen.getByText('QR', { exact: false });
    expect(element).toBeInTheDocument();

  });

  test('other', async () => {
    const dummyDispatch = jest.fn()
    //  useDispatchMock.mockReturnValue(dummyDispatch)
    useSelectorMock.mockReturnValueOnce({ storeid: null })


    render(<Provider store={store}><BrowserRouter><AddUpdateEquipment /></BrowserRouter></Provider>);
    const select = screen.getByTestId('select');
    const input = await select.querySelector('input')
    fireEvent.change(input, { target: { value: 'element other' } });
    // const element=await screen.findByText(' element other',{exact:false});
    // expect(element).not.toBeInTheDocument();
    expect(input.value).not.toBe('element other');

  });
})