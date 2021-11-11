import { screen, fireEvent, render } from "@testing-library/react"
//import { render } from "./test.utils";
import ViewTrack from "../../screen/technical_officer/view_track";
import * as reactRedux from 'react-redux'
//import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../../store/reducers/reducers';
import thunk from 'redux-thunk';
import { BrowserRouter } from "react-router-dom";
describe('View Track tes', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
    });
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducers, composeEnhancers(
        applyMiddleware(thunk)
    ));
    test('category', async () => {
        const dummyDispatch = jest.fn()

        useSelectorMock.mockReturnValueOnce({ storeid: null, error: null, Userid: null }).mockReturnValueOnce([{
            categoryName: "Projecter",
            id: 1
        }, {
            categoryName: "camera",
            id: 2
        }]
        ).mockReturnValueOnce({ storeid: null, error: null, Userid: null }).mockReturnValueOnce([]).mockReturnValueOnce([]).mockReturnValueOnce([]).mockReturnValueOnce([]).mockReturnValueOnce([])
        useDispatchMock.mockReturnValue(dummyDispatch)
        render(<Provider store={store}><BrowserRouter><ViewTrack /></BrowserRouter></Provider>);
        const autocomplete = screen.getByRole('combobox');

        const input = await autocomplete.querySelector('input')

        const btn = await autocomplete.querySelector('button')
        userEvent.click(btn);
        fireEvent.change(input, { target: { value: 'Projecter' } })
        fireEvent.keyDown(autocomplete, { key: 'ArrowDown' })
        fireEvent.keyDown(autocomplete, { key: 'Enter' })



        expect(input.value).toBe('Projecter')

        expect(input.value).toBe('Projecter')
    });


});