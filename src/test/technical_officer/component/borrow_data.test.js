import { render, screen } from '@testing-library/react';
import BorrowData from '../../../components/technical_officer/borrow_data';


describe('BorrowData Test', () => {

   
  test('renders BorrowData type tempory',()=>{
         render(<BorrowData data={{
             type: "temporary", status: 'open', LecturerBorrowings: [],
             TemporyBorrowings: [{ student: { lastName: 'last', firstName: 'first', department: 'dep' } }],
             dueDate: new Date(),
             returnDate: null,
             fromDate:new Date()
         }} />);
        const Element = screen.getByText('temporary',{exact:false});
        expect(Element).toBeInTheDocument();
 });
        test('renders BorrowData name',()=>{
         render(<BorrowData data={{
             type: "temporary", status: 'open', LecturerBorrowings: [],
             TemporyBorrowings: [{ student: { lastName: 'last', firstName: 'first', department: 'dep' } }],
             dueDate: new Date(),
             returnDate: null,
             fromDate:new Date()
         }} />);
        const Element = screen.getByText('first last',{exact:false});
        expect(Element).toBeInTheDocument();
        });
        test('renders BorrowData department',()=>{
         render(<BorrowData data={{
             type: "temporary", status: 'open', LecturerBorrowings: [],
             TemporyBorrowings: [{ student: { lastName: 'last', firstName: 'first', department: 'dep' } }],
             dueDate: new Date(),
             returnDate: null,
             fromDate:new Date()
         }} />);
        const Element = screen.getByText('dep',{exact:false});
        expect(Element).toBeInTheDocument();
        });

         test('renders BorrowData status',()=>{
         render(<BorrowData data={{
             type: "temporary", status: 'open', LecturerBorrowings: [],
             TemporyBorrowings: [{ student: { lastName: 'last', firstName: 'first', department: 'dep' } }],
             dueDate: '2021-09-30',
             returnDate: null,
             fromDate:'2021-09-25'
         }} />);
        const Element = screen.getByText('open',{exact:false});
        expect(Element).toBeInTheDocument();
         });
        
        test('renders BorrowData fromdate',()=>{
         render(<BorrowData data={{
             type: "temporary", status: 'open', LecturerBorrowings: [],
             TemporyBorrowings: [{ student: { lastName: 'last', firstName: 'first', department: 'dep' } }],
              dueDate: '2021-09-30',
             returnDate: null,
             fromDate:'2021-09-25'
         }} />);
        const Element = screen.getByText('From Date: 2021-09-25',{exact:false});
        expect(Element).toBeInTheDocument();
        });
    
        test('renders BorrowData duedate',()=>{
         render(<BorrowData data={{
             type: "temporary", status: 'open', LecturerBorrowings: [],
             TemporyBorrowings: [{ student: { lastName: 'last', firstName: 'first', department: 'dep' } }],
              dueDate: '2021-09-30',
             returnDate: null,
             fromDate:'2021-09-25'
         }} />);
        const Element = screen.getByText('Due Date: 2021-09-30',{exact:false});
        expect(Element).toBeInTheDocument();
        });
    
        test('renders BorrowData returnDate state open',()=>{
         render(<BorrowData data={{
             type: "temporary", status: 'open', LecturerBorrowings: [],
             TemporyBorrowings: [{ student: { lastName: 'last', firstName: 'first', department: 'dep' } }],
              dueDate: '2021-09-30',
             returnDate: null,
             fromDate:'2021-09-25'
         }} />);
        const Element = screen.getByText('Return Date: -',{exact:false});
        expect(Element).toBeInTheDocument();
        });
    
    test('renders BorrowData returnDate state close',()=>{
         render(<BorrowData data={{
             type: "temporary", status: 'open', LecturerBorrowings: [],
             TemporyBorrowings: [{ student: { lastName: 'last', firstName: 'first', department: 'dep' } }],
              dueDate: '2021-09-30',
             returnDate: '2021-09-28',
             fromDate:'2021-09-25'
         }} />);
        const Element = screen.getByText('Return Date: 2021-09-28',{exact:false});
        expect(Element).toBeInTheDocument();
        });
        test('renders BorrowData type lecture',()=>{
         render(<BorrowData data={{
             type: "lecture", status: 'open',
             LecturerBorrowings:[{ lecturer: { lastName: 'last', firstName: 'first', department: 'dep' } }],
             TemporyBorrowings: [],
             dueDate: new Date(),
             returnDate: null,
             fromDate:new Date()
         }} />);
        const Element = screen.getByText('lecture',{exact:false});
        expect(Element).toBeInTheDocument();
     });
   
    
    
    
});