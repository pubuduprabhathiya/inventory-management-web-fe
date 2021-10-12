import { render,screen } from "@testing-library/react"
import NormalCheckout from "../../component/UI/NormalCheckout"

describe('Normal Checkout testing',()=>{
    test('Category label testing',async()=>{
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            ok: true,
            json: async()=> [],
        });
        render(<NormalCheckout type='student' key='st'/>);
        const categoryLabel = await screen.findByText('Category',{exact:false});
        expect(categoryLabel).toBeInTheDocument();
    });

    test('Model label testing',async()=>{
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            ok: true,
            json: async()=> [],
        });
        render(<NormalCheckout/>);
        const modelLabel = await screen.findByText('Model',{exact:false});
        expect(modelLabel).toBeInTheDocument();
    });

    test('Lab Name label testing',async()=>{
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            ok: true,
            json: async()=> [],
        });
        render(<NormalCheckout/>);
        const labNameLabel = await screen.findByText('Lab Name',{exact:false});
        expect(labNameLabel).toBeInTheDocument();
    });

    test('From Date label testing',async()=>{
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            ok: true,
            json: async()=> [],
        });
        render(<NormalCheckout/>);
        const fromDateLabel = await screen.findByText('From Date',{exact:false});
        expect(fromDateLabel).toBeInTheDocument();
    });

    test('To Date label testing',async()=>{
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            ok: true,
            json: async()=> [],
        });
        render(<NormalCheckout/>);
        const toDateLabel = await screen.findByText('To Date',{exact:false});
        expect(toDateLabel).toBeInTheDocument();
    });
});