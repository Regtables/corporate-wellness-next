import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FormContextType {
  formData: { [key: string]: string };
  errors: { [key: string]: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  validateForm: () => boolean;
  setFormData: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};

interface FormProviderProps {
  children: ReactNode;
  initialState: { [key: string]: string };
}

export const FormProvider: React.FC<FormProviderProps> = ({ children, initialState }) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value && key !== 'service') {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <FormContext.Provider value={{ formData, errors, handleChange, validateForm, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};