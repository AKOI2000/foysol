import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const   ConsultationContext = createContext();


function ConsultationProvider ({children}) {
const [onClick, setOnclick] = useState(false);

return (
    <ConsultationContext.Provider value={{onClick, setOnclick}}>
        {children}
    </ConsultationContext.Provider>
)

}


function useConsultation() {
    const context = useContext(ConsultationContext);
    if (context === undefined)
        throw new Error("Consultation Context was used outside of the Consultation Provider");
      return context;
}

export {ConsultationProvider, useConsultation}
