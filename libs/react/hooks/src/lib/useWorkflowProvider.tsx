import { createContext, useContext } from 'react';

import { ReactElement } from '@kleeen/types';

export interface WorkflowType {
  entity: string;
  hasFilters: boolean;
  taskName: string;
  workflowId: string;
}

export const defaultWorkflowContextValues: WorkflowType = {
  entity: null,
  hasFilters: false,
  taskName: null,
  workflowId: null,
};

export const WorkflowContext = createContext<WorkflowType>(defaultWorkflowContextValues);

export function useWorkflowContext() {
  const workflowContext = useContext(WorkflowContext);
  return workflowContext;
}

export function WorkflowProvider({ children, value }: { children: ReactElement; value: WorkflowType }) {
  const workflowProps = value;

  return <WorkflowContext.Provider value={workflowProps}>{children}</WorkflowContext.Provider>;
}
