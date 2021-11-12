import { render,screen,cleanup } from "@testing-library/react";
import AddTechOfficerPage from "../../../screen/ActionPage/Admin/AddTechnicalOfficerPage";
import { BrowserRouter } from "react-router-dom";

jest.mock("../../../containers/Navbar/Navbar.jsx",()=>()=> <div >Nav bar</div>);
jest.mock("../../../containers/Forms/NewTechOfficerApplication.jsx",()=>()=> <div >Application</div>);



describe("Admin add technical officer page:", () => {
    

    test("Add technical officer action page",()=>{
        render(<BrowserRouter><AddTechOfficerPage.WrappedComponent/></BrowserRouter>);
        const dashBoard = screen.getByTestId("add-technical officer-page");
        expect(dashBoard).toBeInTheDocument();
    });
    
});



