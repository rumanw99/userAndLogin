import { useRecoilState } from "recoil";
import {modalState, selectedOptionState, selectedOptionState1 } from "./recoilState";
import { Button, Select } from "@chakra-ui/react";


const Step2 = () => {
  const [currentStep, setCurrentStep] = useRecoilState(modalState);

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };



  const [selectedOption, setSelectedOption] = useRecoilState(selectedOptionState);
  const [selectedOption1, setSelectedOption1] = useRecoilState(selectedOptionState1);

  // Handler to update the selected option
  const handleOptionSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  const handleOptionSelect1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption1(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen gap-5 md:gap-10 lg:gap-20" style={{ background:"#434E61"}}>
      <div
  className="bg-white flex flex-col justify-center items-center gap-5 md:gap-8 lg:gap-12 boxes"
>
      <p className="flex-shrink-0 text-434E61 text-center font-montserrat text-28 font-semibold region" >Pick your language and country/region</p>

      <div className="flex justify-center items-center flex-col gap-4">

<div className="flex justify-center items-center">
<Select  
className="selectCountry"
color={"#B3B3B3"}
fontFamily={"Montserrat"}
fontSize='14px'
fontStyle= 'normal'
fontWeight= '500'
lineHeight= 'normal'

        value={selectedOption || ''}
        onChange={handleOptionSelect}
>
  <option selected value='option1'>English (US)</option>
  <option value='option2'>Arabic (AR)</option>
  <option value='option3'>Italy (IT)</option>
</Select>
  <div className="sp"></div>
</div>
<div className="flex justify-center items-center">
<Select color={"#B3B3B3"}
fontFamily={"Montserrat"}
fontSize='14px'
fontStyle= 'normal'
fontWeight= '500'
lineHeight= 'normal' 
className="selectCountry"

        value={selectedOption1 || ''}
        onChange={handleOptionSelect1}
>
<option selected value='option1'>English (US)</option>
  <option value='option2'>Arabic (AR)</option>
  <option value='option3'>Italy (IT)</option>
</Select>
<div className="sp"></div>
</div>

      </div >


      <div className="flex justify-center items-center flex-col gap-4">
      <Button  className={`next disabled:opacity-50 ${
        !selectedOption || !selectedOption1? '' : ''
      }`}
      onClick={nextStep} isDisabled={!selectedOption || !selectedOption1} marginTop={"70px"}>NEXT</Button>
      <Button variant={"unstyled"} className="back" marginBottom={"-20px"}
      onClick={prevStep}>Back</Button>
      </div>


      <div className="flex justify-center items-center gap-3">
      <svg onClick={prevStep} style={{cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
  <circle cx="3.09242" cy="3.44325" r="2.92397" fill="#FF8C1E"/>
</svg>

<svg onClick={prevStep} style={{cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
  <circle cx="3.09242" cy="3.44325" r="2.92397" fill="#FF8C1E"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
  <circle cx="3.00233" cy="3.44325" r="2.92397" fill="#434E61"/>
</svg>

      </div>
</div>
    </div>
  );
}

export default Step2