import { screen, fireEvent,render,waitFor } from "@testing-library/react"
//import { render } from "./test.utils";
import * as reactRedux from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event'
import AcceptEquipment from "../../screen/technical_officer/accept_equipment";
import AddEquipment from "../../screen/technical_officer/add_equipmet";

describe('Add Equipment', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
    let file;
    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
        file = new File(['hello'], 'hello.png', { type: 'image/png' });

    });

    test('category', async() => {
      const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce([{
                    categoryName: "Projecter",
                    id: 1
                }, {
                    categoryName: "camera",
                    id: 2
            }]).mockReturnValueOnce([]).mockReturnValueOnce([{labName:"lab",id:1}]).mockReturnValueOnce(null).mockReturnValueOnce([{modelName:"model",id:1}])
        render(<BrowserRouter><AddEquipment /></BrowserRouter>);
        const autocomplete =screen.getByTestId('category');
        const input =await autocomplete.querySelector('input')
       
        const btn =  await autocomplete.querySelector('button')
        userEvent.click(btn);
        fireEvent.change(input, { target: { value: 'Projecter' } })
        fireEvent.keyDown(autocomplete, { key: 'ArrowDown' })
        fireEvent.keyDown(autocomplete, { key: 'Enter' })
        
  
        
        expect(input.value).toBe('Projecter')
        
        
    });
     test('Add category', async() => {
      const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce([{
                    categoryName: "Projecter",
                    id: 1
                }, {
                    categoryName: "camera",
                    id: 2
            }]).mockReturnValueOnce([]).mockReturnValueOnce([{labName:"lab",id:1}]).mockReturnValueOnce(null).mockReturnValueOnce([{modelName:"model",id:1}])
        render(<BrowserRouter><AddEquipment /></BrowserRouter>);
         const Submit = screen.getByText('Add Category');
         userEvent.click(Submit);
        const category =screen.getByTestId('addcategory');
  
        
         expect(category).toBeInTheDocument();
        
        
     });
     
    test('model', async() => {
      const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce([{
                    categoryName: "Projecter",
                    id: 1
                }, {
                    categoryName: "camera",
                    id: 2
            }]).mockReturnValueOnce([]).mockReturnValueOnce([{labName:"lab",id:1}]).mockReturnValueOnce(null).mockReturnValueOnce([{modelName:"model",id:1}])
        render(<BrowserRouter><AddEquipment /></BrowserRouter>);
        const autocomplete =screen.getByTestId('category');
        const input =await autocomplete.querySelector('input')
       
        const btn =  await autocomplete.querySelector('button')
        userEvent.click(btn);
        fireEvent.change(input, { target: { value: 'Projecter' } })
        fireEvent.keyDown(autocomplete, { key: 'ArrowDown' })
        fireEvent.keyDown(autocomplete, { key: 'Enter' })
        
        
        const modelautocomplete = screen.getByTestId('model');
        const inputmodel = await modelautocomplete.querySelector('input')
        const btnmodel =  await modelautocomplete.querySelector('button')
        userEvent.click(btnmodel);
        fireEvent.change(inputmodel, { target: { value: 'model' } })
        fireEvent.keyDown(modelautocomplete, { key: 'ArrowDown' })
        fireEvent.keyDown(modelautocomplete, { key: 'Enter' })
        expect(inputmodel.value).toBe('model')
        
        
    });

    test('lab', async() => {
      const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce([{
                    categoryName: "Projecter",
                    id: 1
                }, {
                    categoryName: "camera",
                    id: 2
            }]).mockReturnValueOnce([]).mockReturnValueOnce([{labName:"lab",id:1}]).mockReturnValueOnce(null).mockReturnValueOnce([{modelName:"model",id:1}])
        render(<BrowserRouter><AddEquipment /></BrowserRouter>);
        const autocomplete =screen.getByTestId('lab');
        const input =await autocomplete.querySelector('input')
       
        const btn =  await autocomplete.querySelector('button')
        userEvent.click(btn);
        fireEvent.change(input, { target: { value: 'lab' } })
        fireEvent.keyDown(autocomplete, { key: 'ArrowDown' })
        fireEvent.keyDown(autocomplete, { key: 'Enter' })
        
  
        
        expect(input.value).toBe('lab')
        
        
    });
    test('submit', async() => {
      const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        const cat = [{
            categoryName: "Projecter",
            id: 1
        }, {
            categoryName: "camera",
            id: 2
            }];
        const model = [{ modelName: "model", id: 1 }]
        const lab = [{ labName: "lab", id: 1 }];
        const equ={ id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 }
        useSelectorMock.mockReturnValueOnce(cat).mockReturnValueOnce([]).mockReturnValueOnce(lab).mockReturnValueOnce(equ).mockReturnValueOnce(cat).mockReturnValueOnce(model).mockReturnValueOnce(lab)
            .mockReturnValueOnce(equ)
            
        render(<BrowserRouter><AddEquipment /></BrowserRouter>);
        const category =screen.getByTestId('category');
        var input =await category.querySelector('input')
       
        var btn =  await category.querySelector('button')
        userEvent.click(btn);
        fireEvent.change(input, { target: { value: 'Projecter' } })
        fireEvent.keyDown(category, { key: 'ArrowDown' })
        fireEvent.keyDown(category, { key: 'Enter' })
        
        const labele =screen.getByTestId('lab');
        input =await labele.querySelector('input')
       
        btn =  await labele.querySelector('button')
        userEvent.click(btn);
        fireEvent.change(input, { target: { value: 'lab' } })
        fireEvent.keyDown(labele, { key: 'ArrowDown' })
        fireEvent.keyDown(labele, { key: 'Enter' })
  
        const modelautocomplete = screen.getByTestId('model');
        const inputmodel = await modelautocomplete.querySelector('input')
        const btnmodel =  await modelautocomplete.querySelector('button')
        userEvent.click(btnmodel);
        fireEvent.change(inputmodel, { target: { value: 'model' } })
        fireEvent.keyDown(modelautocomplete, { key: 'ArrowDown' })
        fireEvent.keyDown(modelautocomplete, { key: 'Enter' })

        const image = screen.getByText("Upload Image");
        const imageinput = await image.querySelector('input')
        //await fireEvent.change(imageinput, { target: { files: [file] } })

         await waitFor(() =>
             fireEvent.change(imageinput, {
          
          target: { files: [file] },
          
             })
        );
        
        const Submit = screen.getByText('Submit');
         userEvent.click(Submit);
        expect(dummyDispatch).toHaveBeenCalled()
        
        
    });
   test('category error', async() => {
      const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce([{
                    categoryName: "Projecter",
                    id: 1
                }, {
                    categoryName: "camera",
                    id: 2
            }]).mockReturnValueOnce([]).mockReturnValueOnce([{ labName: "lab", id: 1 }]).mockReturnValueOnce(null).mockReturnValueOnce([{ modelName: "model", id: 1 }])
            .mockReturnValueOnce({ id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 })
        render(<BrowserRouter><AddEquipment /></BrowserRouter>);
        
        
        const Submit = screen.getByText('Submit');
       userEvent.click(Submit);
       const error = screen.getByText('Plese Select category');
        expect(error).toBeInTheDocument()
        
        
   });
    test('model error', async () => {
        const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce([{
            categoryName: "Projecter",
            id: 1
        }, {
            categoryName: "camera",
            id: 2
        }]).mockReturnValueOnce([]).mockReturnValueOnce([{ labName: "lab", id: 1 }]).mockReturnValueOnce(null).mockReturnValueOnce([{ modelName: "model", id: 1 }])
            .mockReturnValueOnce({ id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 })
        render(<BrowserRouter><AddEquipment /></BrowserRouter>);
        const Submit = screen.getByText('Submit');
        const category = screen.getByTestId('category');
        var input = await category.querySelector('input')
       
        var btn = await category.querySelector('button')
        userEvent.click(btn);
        await waitFor(() => fireEvent.change(input, { target: { value: 'Projecter' } }))
        fireEvent.keyDown(category, { key: 'ArrowDown' })
         expect(input.value).toBe('Projecter')
        fireEvent.keyDown(category, { key: 'Enter' })
       
       userEvent.click(Submit);
       const error = screen.getByText('Plese Select Model');
        expect(error).toBeInTheDocument()
        
        
    });

    test('lab error', async() => {
      const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        useSelectorMock.mockReturnValueOnce([{
                    categoryName: "Projecter",
                    id: 1
                }, {
                    categoryName: "camera",
                    id: 2
            }]).mockReturnValueOnce([]).mockReturnValueOnce([{ labName: "lab", id: 1 }]).mockReturnValueOnce(null).mockReturnValueOnce([{ modelName: "model", id: 1 }])
            .mockReturnValueOnce({ id: '1-1-1-1', imageURL: '', Lab: { labName: 'lab name' }, Model: { modelName: 'model name' }, Category: { categoryName: 'category name' }, availability: 1 })
        render(<BrowserRouter><AddEquipment /></BrowserRouter>);
        
        const category =screen.getByTestId('category');
        var input =await category.querySelector('input')
       
        var btn =  await category.querySelector('button')
        userEvent.click(btn);
        fireEvent.change(input, { target: { value: 'Projecter' } })
        fireEvent.keyDown(category, { key: 'ArrowDown' })
        fireEvent.keyDown(category, { key: 'Enter' })
        const Submit = screen.getByText('Submit');
       userEvent.click(Submit);
       const error = screen.getByText('Plese Select lab');
        expect(error).toBeInTheDocument()
        
        
    });

    
})