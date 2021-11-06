import { render, screen } from '@testing-library/react';
import * as reactRedux from 'react-redux'
import Header from '../../../component/technical_officer/header';



describe("Header", () => {

     

     test('View Track Of equipment',async () => {
      
         render(<Header/>);
      
      const Element = screen.getByText('View Track Of equipment', { exact: false });
        expect(Element).toBeInTheDocument();
     });
   
})