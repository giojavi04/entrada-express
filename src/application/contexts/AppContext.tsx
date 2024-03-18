'use client';

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useMemo, useState } from 'react';

interface ContextProps {
  title: string;
  setTitle: (title: string) => void;
}

const AppContext = createContext<ContextProps>({
  title: '',
  setTitle: (title) => {}
});

export default function AppProvider({ children }: { readonly children: ReactNode }) {
  const [title, setTitle] = useState<string>('');
  const contextValue = useMemo(() => ({ title, setTitle }), [title, setTitle]);

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

export const useAppProvider = () => useContext(AppContext);
