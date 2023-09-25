import { useRecoilState, useRecoilValue } from "recoil";
import { isDecibelButtonEnabled, modalState, selectedImagesState } from "./recoilState";
import { Button } from "@chakra-ui/react";
import { images } from "./image";
import {useState} from 'react';
import SuccessDialog from "./SuccessDialog";
const Step3 = () => {

  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [currentStep, setCurrentStep] = useRecoilState(modalState);

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const [selectedImages, setSelectedImages] = useRecoilState(selectedImagesState);
  const decibelButtonEnabled = useRecoilValue(isDecibelButtonEnabled);

  const toggleImageSelection = (image: string) => {
    if (selectedImages.includes(image)) {
      setSelectedImages(selectedImages.filter((img) => img !== image));
    } else {
      setSelectedImages([...selectedImages, image]);
    }
  };
  
 

  const finish = () => {
   
    setShowSuccessDialog(true);
  };
  const closeSuccessDialog = () => {
    setShowSuccessDialog(false);
  };


  let buttonText = 'Pick 3 itmes';
  if (selectedImages.length >= 1) {
    buttonText = 'Pick 2 more';
  }
  if(selectedImages.length >= 2){
    buttonText = 'Pick 1 more';
  }
  if(selectedImages.length >= 3){
    buttonText = 'Submit';
  }

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen gap-5 md:gap-10 lg:gap-20 boxing" style={{ background:"#434E61"}}>

      <div
  className="bg-white flex flex-col justify-center items-center gap-5 md:gap-8 lg:gap-3"
  style={{borderRadius:'8px' , width: '612.087px' , height: '550.087px'}}
>


<p className="flex-shrink-0 text-434E61 text-center font-montserrat text-28 md:text-24 sm:text-20 font-semibold in">Tell us what you’re interested in</p>
    
   


<div className="flex flex-wrap justify-center items-center gap-4 sm:gap-4 ccc">
        {images.map((image) => (
          <div key={image}
          className={`cursor-pointer ${selectedImages.includes(image) ? "boxImage" : ''}`}
          >
            <img
              src={image}
              alt="Gallery Item"
              
              onClick={() => toggleImageSelection(image)}
              style={{ borderRadius: '8px', maxWidth: '100%' }}
            />
          </div>
        ))}
      </div>


      <Button 
      className={`finish disabled:opacity-50 ${
        !decibelButtonEnabled ? '' : ''
      }`}
isDisabled={!decibelButtonEnabled}
      onClick={finish}>{buttonText}</Button>
      <SuccessDialog isOpen={showSuccessDialog} onClose={closeSuccessDialog} />
      <Button
     className="back"
      
      onClick={prevStep}>Back</Button>

<div className="flex justify-center items-center gap-2">
      <svg onClick={prevStep} style={{cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
  <circle cx="3.09242" cy="3.44325" r="2.92397" fill="#FF8C1E"/>
</svg>

<svg onClick={prevStep} style={{cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
  <circle cx="3.09242" cy="3.44325" r="2.92397" fill="#FF8C1E"/>
</svg>

<svg style={{cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
  <circle cx="3.09242" cy="3.44325" r="2.92397" fill="#FF8C1E"/>
</svg>

      </div>
</div>
    </div>
  );
}

export default Step3