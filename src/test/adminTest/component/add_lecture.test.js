import { render,screen,cleanup } from "@testing-library/react";
import AddLecturer from "../../../screen/ActionPage/Admin/AddLecturePage";
import { BrowserRouter } from "react-router-dom";

jest.mock("../../../containers/Navbar/Navbar.jsx",()=>()=> <div >Nav bar</div>);
jest.mock("../../../containers/Forms/NewLectureApplication.jsx.jsx",()=>()=> <div >Application</div>);



describe("Admin add lecturer page:", () => {
    

    test("Add lecturer action page",()=>{
        render(<BrowserRouter><AddLecturer.WrappedComponent/></BrowserRouter>);
        const actionPage = screen.getByTestId("add-lecturer-page");
        expect(actionPage).toBeInTheDocument();
    });


    
});



