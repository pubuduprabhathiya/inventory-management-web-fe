import { render, screen, cleanup } from "@testing-library/react";
import BrokenItemCard from "../../../component/BrokenItemCard";
import ItemCard from "../../../component/ItemCard";



describe("Office Clerk Component:", () => {


    test("Broken Item card", () => {
        render(<BrokenItemCard
            key="a"
            model="a"
            category="a"
            storeCode="a"
            issue="a"
            labName="a"
            openDate="a"
            image="a"
        />);
        const dashBoard = screen.getByTestId("brokenitemcard");
        expect(dashBoard).toBeInTheDocument();
    });

    test("Check available Item card", () => {
        render(<ItemCard
            key="b"
            model="b"
            category="b"
            storeCode="b"
            labName="b"
            availability="b"
            image="b"
        />);
        const dashBoard = screen.getByTestId("checkavailableitem");
        expect(dashBoard).toBeInTheDocument();
    });



});



