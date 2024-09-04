import React, { createContext, useContext, useState, ReactNode } from 'react';

type ValidationRule = (value: string) => string | undefined;

interface FieldConfig {
  validationRules?: ValidationRule[];
  required?: boolean;
}

interface FormConfig {
  [key: string]: FieldConfig;
}

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
  formConfig: FormConfig;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children, initialState, formConfig }) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateField = (name: string, value: string): string | undefined => {
    const fieldConfig = formConfig[name];
    if (!fieldConfig) return undefined;

    if (fieldConfig.required && !value) {
      return `This field is required*`;
    }

    if (fieldConfig.validationRules) {
      for (const rule of fieldConfig.validationRules) {
        const error = rule(value);
        if (error) return error;
      }
    }

    return undefined;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error || '' }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    let isValid = true;

    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  return (
    <FormContext.Provider value={{ formData, errors, handleChange, validateForm, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};