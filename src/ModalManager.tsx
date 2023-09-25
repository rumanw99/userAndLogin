
import { useRecoilValue } from 'recoil';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { modalState } from './recoilState';
import Step from './Step';

function ModalManager() {
  const currentStep = useRecoilValue(modalState);

  return (
    <div className="modal">
      {currentStep === 0 && <Step />}
      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && <Step2 />}
      {currentStep === 3 && <Step3 />}
    </div>
  );
}

export default ModalManager;