import { RegisterFormData } from "./Pages/Register";
import { toast } from "react-toastify";


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";


//REGISTRATION FUNC...
export const register_api = async(formData: RegisterFormData) =>{
  const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    toast.error(responseBody.message);
  };

};



