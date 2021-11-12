import { render,screen,cleanup } from "@testing-library/react";
import OfficeClerkDashboard from "../../../screen/Dashboard/OfficeClerkDashboard";
import { BrowserRouter } from "react-router-dom";

jest.mock("../../../containers/Navbar/Navbar.jsx",()=>()=> <div >Moke</div>);

describe("Office Clerk Component test:", () => {
    test("Office Clerk dashboard page",()=>{

        render(<BrowserRouter><OfficeClerkDashboard.WrappedComponent/></BrowserRouter>);
        const dashBoard = screen.getByTestId("officeclerkdashboard");
        expect(dashBoard).toBeInTheDocument();
    });

    test("Office clerk action buttons",()=>{
        render(<BrowserRouter><AdminDashboard.WrappedComponent/></BrowserRouter>);
        const viewNewDamage = screen.getByTestId("addnewdamage");
        const viewUnderDamage = screen.getByTestId("markrepair");
        const viewRepairHistroy = screen.getByTestId("repairhistrory");
        const viewAvailability = screen.getByTestId("checkavailability");
  

        expect(viewNewDamage).toBeInTheDocument();
        expect(viewUnderDamage).toBeInTheDocument();
        expect(viewRepairHistroy).toBeInTheDocument();
        expect(viewAvailability).toBeInTheDocument();
   
    });
  
});
