import React, { useContext, useEffect, useState } from 'react';
import { WorkflowProvider, WorkflowType, defaultWorkflowContextValues } from './useWorkflowProvider';

import { DataPoint } from '@kleeen/types';

interface MenuContextContext {
  e?: any;
  dataPoints: DataPoint[];
  widgetId?: string;
  workflowData?: WorkflowType;
}

interface MenuContextProvider {
  contextualToggle: boolean;
  context: MenuContextContext;
  openMenu: (props: MenuContextContext) => void;
  setContextualToggle: (isOpen: boolean) => void;
}

const defaultMenuContextValues: MenuContextProvider = {
  contextualToggle: false,
  context: {
    dataPoints: [],
    workflowData: defaultWorkflowContextValues,
  },
  openMenu: (props) => props,
  setContextualToggle: (isOpen) => isOpen,
};

const MenuContext = React.createContext<MenuContextProvider>(defaultMenuContextValues);

const useAttributeContextMenu = () => {
  const menuContext = useContext(MenuContext);

  return menuContext;
};

const AttributeContextMenuProvider = ({ children }) => {
  const [contextualToggle, setContextualToggle] = useState(false);
  const [context, setContext] = useState<MenuContextContext>(defaultMenuContextValues.context);

  useEffect(() => {
    if (!contextualToggle) {
      setContext(defaultMenuContextValues.context);
    }
  }, [contextualToggle]);

  return (
    <WorkflowProvider value={context.workflowData}>
      <MenuContext.Provider
        value={{
          openMenu: ({ e, ...props }) => {
            setContextualToggle(true);

            if (context) {
              setContext({
                e,
                ...props,
              });
            }
          },
          setContextualToggle,
          contextualToggle,
          context,
        }}
      >
        {children}
      </MenuContext.Provider>
    </WorkflowProvider>
  );
};

export { AttributeContextMenuProvider };
export default useAttributeContextMenu;
