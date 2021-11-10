import { render, screen } from '@testing-library/react';
import * as reactRedux from 'react-redux'
import Header from '../../../component/technical_officer/header';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../../../store/reducers/reducers';
import thunk from 'redux-thunk';
describe("Header", () => {
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
      const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
   const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
   const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
));
    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
    });

     test('header test',async () => {
       const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce({store:{}});
         render( <Provider store={store}><BrowserRouter><Header/></BrowserRouter></Provider>);
      
      const Element = screen.getByText('View Track Of equipment', { exact: false });
        expect(Element).toBeInTheDocument();
     });
   
})