import NewStudentApplication from "../../containers/Forms/NewStudentApplication";
import { render,screen,cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import {  getRequestWithHeaders} from '../../api/util';

// jest.mock('../../api/util', () => ({
//     ...(jest.requireActual('../../api/util')),
    
//     getRequestWithHeaders: jest.fn(),
//   }))
jest.mock('../../api/util', () => ({
    get: jest.fn(() => Promise.resolve({
      data: [{ "id": "12" }]
     }))
  }));
  
describe("Admin Actions:", () => {


    test("create student integration",()=>{
        
    
        render(<BrowserRouter><NewStudentApplication/></BrowserRouter>);
        const submitBtn = screen.getByText("Submit");
        

    });
    
    
});
