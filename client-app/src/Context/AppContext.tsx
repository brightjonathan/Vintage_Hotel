import React, { useContext, useState } from "react";



type ToastMessage = {
    message: string;
    type: "SUCCESS" | "ERROR";
};


type AppContext = {
    showToast: (toastMessage: ToastMessage) => void;
    //isLoggedIn: boolean;
};


const AppContext =  React.createContext<AppContext | undefined>(undefined);


export const AppContextProvider = ({children}: {children: React.ReactNode}) =>{

    const [toast, setToast] = useState<ToastMessage | undefined>(undefined);
  return (
    <AppContext.Provider
    value={{
        showToast: (toastMessage) => {
            setToast(toastMessage);
        },
    }}
    >
        {children}
    </AppContext.Provider>
  )  
}


export const useAppContext = ()=>{
    const context = useContext(AppContext);
    return context as AppContext;
};

