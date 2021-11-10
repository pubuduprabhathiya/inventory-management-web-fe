import { useEffect } from "react";


const Barcode = ({ barcodedownload,setbarcodedownload }) => {
    useEffect(() => {
        if (barcodedownload) {
            downloadBarcode();
        }
    }, [barcodedownload])

     const downloadBarcode = () => {
        
            const canvas = document.getElementById("barcode");
         
            const pngUrl = canvas
                .toDataURL("image/png")
                .replace("image/png", "image/octet-stream");
            let downloadLink = document.createElement("a");
            downloadLink.href = pngUrl;
            downloadLink.download = "barcode.png";
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
         setbarcodedownload(false);
            

       

    };
    return (
         <canvas style={{display:'none'}} id="barcode"></canvas>
    )

}
export default Barcode;