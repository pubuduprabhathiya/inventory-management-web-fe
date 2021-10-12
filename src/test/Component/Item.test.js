import { render,screen } from '@testing-library/react';
import Item from '../../component/Item/item';

describe('test Items',()=>{
    test('renders Category',()=>{
        render(<Item itemlist={[{'keyid':'0','Category.categoryName':'projector','Model.modelName':'ASDF4','id':'1234','Lab.labName':'CSE lab'}]} to='/student/createNormalRequest'/>);
        const CategoryElement = screen.getByText('Category',{exact:false});
        expect(CategoryElement).toBeInTheDocument();
    });

    test('renders Model',()=>{
        render(<Item itemlist={[{'keyid':'0','Category.categoryName':'projector','Model.modelName':'ASDF4','id':'1234','Lab.labName':'CSE lab'}]} to='/student/createNormalRequest'/>);
        const ModelElement = screen.getByText('Model',{exact:false});
        expect(ModelElement).toBeInTheDocument();
    });

    test('renders StoreCode',()=>{
        render(<Item itemlist={[{'keyid':'0','Category.categoryName':'projector','Model.modelName':'ASDF4','id':'1234','Lab.labName':'CSE lab'}]} to='/student/createNormalRequest'/>);
        const StoreCodeElement = screen.getByText('StoreCode',{exact:false});
        expect(StoreCodeElement).toBeInTheDocument();
    });

    test('renders LabName',()=>{
        render(<Item itemlist={[{'keyid':'0','Category.categoryName':'projector','Model.modelName':'ASDF4','id':'1234','Lab.labName':'CSE lab'}]} to='/student/createNormalRequest'/>);
        const LabNameElement = screen.getByText('LabName',{exact:false});
        expect(LabNameElement).toBeInTheDocument();
    });

    test('renders Unavilabel Button',()=>{
        render(<Item itemlist={[{'keyid':'0','Category.categoryName':'projector','Model.modelName':'ASDF4','id':'1234','Lab.labName':'CSE lab'}]} to='/student/createNormalRequest'/>);
        const ButtonElement = screen.getByRole('button');
        expect(ButtonElement.children[0]).toHaveTextContent('Unavailable');
    });

    test('renders Avilabel Button',()=>{
        render(<Item itemlist={[{'keyid':'0','Category.categoryName':'projector','Model.modelName':'ASDF4','id':'1234','Lab.labName':'CSE lab','availability':1}]} to='/student/createNormalRequest'/>);
        const ButtonElement = screen.getByRole('button');
        expect(ButtonElement.children[0]).toHaveTextContent('Available');
    });

});