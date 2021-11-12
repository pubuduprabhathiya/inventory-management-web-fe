import { render,screen,cleanup } from "@testing-library/react";
import AddStudentPage from "../../../screen/ActionPage/Admin/AddStudentPage.jsx";
import { BrowserRouter } from "react-router-dom";

jest.mock("../../../containers/Navbar/Navbar.jsx",()=>()=> <div >Nav bar</div>);
jest.mock("../../../containers/Forms/NewStudentApplication.jsx",()=>()=> <div >Application</div>);



describe("Admin add student page:", () => {
    

    test("Add Student action page",()=>{
        render(<BrowserRouter><AddStudentPage.WrappedComponent/></BrowserRouter>);
        const dashBoard = screen.getByTestId("add-student-page");
        expect(dashBoard).toBeInTheDocument();
    });


    
});



