import { render,screen,cleanup } from "@testing-library/react";
import AddofficeclerkPage from "../../../screen/ActionPage/Admin/AddOfficeClerkPage";
import { BrowserRouter } from "react-router-dom";

jest.mock("../../../containers/Navbar/Navbar.jsx",()=>()=> <div >Nav bar</div>);
jest.mock("../../../containers/Forms/NewOfficeClerkApplication.jsx",()=>()=> <div >Application</div>);



describe("Admin add office clerk page:", () => {
    

    test("Add office clerk action page",()=>{
        render(<BrowserRouter><AddofficeclerkPage.WrappedComponent/></BrowserRouter>);
        const dashBoard = screen.getByTestId("add-office clerk-page");
        expect(dashBoard).toBeInTheDocument();
    });


    
});



