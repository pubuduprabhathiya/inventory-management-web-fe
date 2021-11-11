import { render,screen,cleanup } from "@testing-library/react";
import Login from "./screen/Login/Login.jsx";
import * as reactRedux from 'react-redux'
import LoginForm from "./containers/Forms/LoginForm.jsx";


describe("Admin side menu test:", () => {
    beforeEach(() => {
       
    });
    test("Admin add student button",()=>{
        render(<LoginForm/>);
        const loginPaget = screen.getByTestId("gg");
        expect(loginPaget).toBeInTheDocument();
    });
    test("Admin add lecturer button",()=>{
        render(<LoginForm/>);
        const loginPaget = screen.getByTestId("gg");
        expect(loginPaget).toBeInTheDocument();
    });

    test("Admin add office clerk button",()=>{
        render(<LoginForm/>);
        const loginPaget = screen.getByTestId("gg");
        expect(loginPaget).toBeInTheDocument();
    });
    test("Admin add technical officer button",()=>{
        render(<LoginForm/>);
        const loginPaget = screen.getByTestId("gg");
        expect(loginPaget).toBeInTheDocument();
    });
    test("Admin add student button",()=>{
        render(<LoginForm/>);
        const loginPaget = screen.getByTestId("gg");
        expect(loginPaget).toBeInTheDocument();
    });
});
