import { render,screen,cleanup } from "@testing-library/react";
import AdminDashboard from "../../../screen/Dashboard/AdminDashboard.jsx";
import { BrowserRouter } from "react-router-dom";

jest.mock("../../../containers/Navbar/Navbar.jsx",()=>()=> <div >Moke</div>);

describe("Admin Component test:", () => {
    test("Admin dashboard",()=>{

        render(<BrowserRouter><AdminDashboard.WrappedComponent/></BrowserRouter>);
        const dashBoard = screen.getByTestId("admindashboard");
        expect(dashBoard).toBeInTheDocument();
    });

    test("Admin dashboard action buttons",()=>{
        render(<BrowserRouter><AdminDashboard.WrappedComponent/></BrowserRouter>);
        const addStudentButton = screen.getByTestId("addStudentButton");
        const addLecturerButton = screen.getByTestId("addLecturerButton");
        const addOfficeClerkButton = screen.getByTestId("addOfficeClerkButton");
        const addTechOfficerButton = screen.getByTestId("addTechOfficerButton");
        const addLabButton = screen.getByTestId("addLabButton");

        expect(addStudentButton).toBeInTheDocument();
        expect(addLecturerButton).toBeInTheDocument();
        expect(addOfficeClerkButton).toBeInTheDocument();
        expect(addTechOfficerButton).toBeInTheDocument();
        expect(addLabButton).toBeInTheDocument();
    });
  
});
