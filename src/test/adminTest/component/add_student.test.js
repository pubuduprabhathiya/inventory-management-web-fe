import { render,screen,cleanup } from "@testing-library/react";
import Login from "./screen/Login/Login.jsx";
import * as reactRedux from 'react-redux'
import LoginForm from "./containers/Forms/LoginForm.jsx";

describe("Admin add student page:", () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'mapDispatchToProps')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
    });
    test("Add student action page",()=>{
        render(<LoginForm/>);
        const loginPaget = screen.getByTestId("gg");
        expect(loginPaget).toBeInTheDocument();
    });
    test("Add student application",()=>{
        render(<LoginForm/>);
        const loginPaget = screen.getByTestId("gg");
        expect(loginPaget).toBeInTheDocument();
    });

    
});



