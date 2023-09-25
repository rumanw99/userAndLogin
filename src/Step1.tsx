import { useRecoilState, useRecoilValue } from "recoil";
import { inputValueState, isButtonDisabledSelector, modalState } from "./recoilState";
import { Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

const Step1 = () => {
  const [currentStep, setCurrentStep] = useRecoilState(modalState);
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  
  const [inputValue, setInputValue] = useRecoilState(inputValueState);
  const isButtonDisabled = useRecoilValue(isButtonDisabledSelector);

  // Event handler to update input value
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };




  return (
    <div className="bg-white flex justify-center items-center flex-col gap-10">


<div className="flex justify-center items-center flex-col gap-2 mt-20">
<div className="w-32 h-32 bg-434E61 rounded-8 flex justify-center items-center boxA">
  <p className="w-31.336 h-59.191 flex-shrink-0 text-white text-5xl font-bold">
    A
  </p>
</div>
<p className="flex-shrink-0 text-gray-300 text-shadow-md font-poppins text-sm font-medium ema"

>
  alice@wonderland.space
</p>
</div>


<div className="flex justify-center items-center flex-col gap-2 w-80">
<p className="text-giki-blue font-poppins text-28 font-semibold welcome">
  Welcome to Giki
</p>


<div>
<InputGroup >
      <InputLeftElement
      
        pointerEvents="none"
        children={<svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
        <path d="M4.76073 11.4686L1.01904 11.846L1.5811 8.28899L6.35858 3.11004L7.62722 1.8414C8.11701 1.35161 8.91192 1.35161 9.40974 1.8414L10.7828 3.21443C11.2886 3.72028 11.2886 4.53927 10.7828 5.04512L4.76073 11.4686Z" stroke="#B3B3B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.36947 6.03271L6.59131 3.24652" stroke="#B3B3B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>} // Replace this with your desired icon component
      className="inputIcon"
      />
      <Input  type="text" placeholder="Alice" className="inputText"
      _placeholder={{ color: "#FF8C1E" , textAlign:"center",
      fontFamily: 'Roboto',
      fontSize: '28px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
      
    }}
    
    value={inputValue}
        onChange={handleInputChange}
      />
    </InputGroup>
</div>

<p className="w-314 text-gray-700 text-center font-poppins text-sm font-medium leading-5 fo">
  Your answers to the next few questions will help us find the right communities for you
</p>
</div>




      <div>
      <Button isDisabled={isButtonDisabled} className={`next disabled:opacity-50 ${
        isButtonDisabled? '' : ''
      }`} onClick={nextStep}>NEXT</Button>
      </div>


      <div className="flex justify-center items-center gap-2 mt-10">
      <svg onClick={prevStep} style={{cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
  <circle cx="3.09242" cy="3.44325" r="2.92397" fill="#FF8C1E"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
  <circle cx="3.00233" cy="3.44325" r="2.92397" fill="#434E61"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
  <circle cx="3.00233" cy="3.44325" r="2.92397" fill="#434E61"/>
</svg>

      </div>
    </div>
  );
}

export default Step1;