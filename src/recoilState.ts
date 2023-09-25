import { atom, selector } from 'recoil';

export const modalState = atom({
  key: 'modalState',
  default: 0 , // Start at step 1
});

// Recoil atom to store the input value
export const inputValueState = atom({
  key: 'inputValueState',
  default: '',
});

// Recoil selector to determine whether the button should be disabled
export const isButtonDisabledSelector = selector({
  key: 'isButtonDisabledSelector',
  get: ({ get }) => {
    const inputValue = get(inputValueState);
    return inputValue === '';
  },
});

export const selectedOptionState = atom<string | null>({
  key: 'selectedOptionState',
  default: null,
});
export const selectedOptionState1 = atom<string | null>({
  key: 'selectedOptionState1',
  default: null,
});

export const selectedImagesState = atom<string[]>({
  key: 'selectedImages',
  default: [],
});

export const isDecibelButtonEnabled = selector<boolean>({
  key: 'isDecibelButtonEnabled',
  get: ({ get }) => {
    const selectedImages = get(selectedImagesState);
    return selectedImages.length >= 3;
  },
});