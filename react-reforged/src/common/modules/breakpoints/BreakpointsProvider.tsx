import { BreakpointsContext } from './BreakpointsContext';

type BreakpointsProviderProps = {
  isLarge: boolean;
  children: React.ReactNode;
};
export const BreakpointsProvider: React.FC<BreakpointsProviderProps> = ({ children, isLarge }) => {
  return <BreakpointsContext.Provider value={{ isLarge }}>{children}</BreakpointsContext.Provider>;
};
