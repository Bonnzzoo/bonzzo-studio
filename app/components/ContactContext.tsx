"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import ContactModal from "./ContactModal";

interface ContactContextType {
    openContact: () => void;
}

const ContactContext = createContext<ContactContextType>({ openContact: () => {} });

export function useContact() {
    return useContext(ContactContext);
}

export function ContactProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const openContact = useCallback(() => setIsOpen(true), []);
    const closeContact = useCallback(() => setIsOpen(false), []);

    return (
        <ContactContext.Provider value={{ openContact }}>
            {children}
            <ContactModal isOpen={isOpen} onClose={closeContact} />
        </ContactContext.Provider>
    );
}
