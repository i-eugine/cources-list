import { useContext } from 'react';

import { BreakpointsContext } from './BreakpointsContext';

export const useBreakpoints = () => useContext(BreakpointsContext);
