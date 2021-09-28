import { Maybe, Widget, WorkflowFilter } from '@kleeen/types';
import { getIsFilterAvailable, getWorkflowFilterName, isNotNilOrEmpty } from '@kleeen/common/utils';
import { useEffect, useState } from 'react';
import { useKleeenContext, useWorkflowContext } from '@kleeen/react/hooks';

import { pathOr } from 'ramda';

export function useWorkflowFilters(): { filters: WorkflowFilter[]; hasFilters: boolean } {
  const { hasFilters, taskName, workflowId } = useWorkflowContext();
  const taskContext = useKleeenContext<Maybe<{ widgets: Widget[] }>>(taskName);
  const [filters, setFilters] = useState<WorkflowFilter[]>([]);

  useEffect(() => {
    if (isNotNilOrEmpty(taskContext?.widgets)) {
      const workflowFilters: WorkflowFilter[] = pathOr(
        [],
        [getWorkflowFilterName(workflowId), 'data', 'filters'],
        taskContext?.widgets,
      );
      setFilters(workflowFilters);
    }
  }, [hasFilters, workflowId, taskContext]);

  return { filters, hasFilters };
}

export function useAvailableFiltersByWorkflow<T>(
  attributes: T[],
  filterNamePath: string[] = ['name'],
): { availableFilters: T[]; isFilterAvailable: boolean } {
  const { filters, hasFilters } = useWorkflowFilters();

  if (!hasFilters) return { availableFilters: [], isFilterAvailable: false };

  const availableFilters = attributes.filter((attribute) =>
    getIsFilterAvailable({ filters, filterName: pathOr('', filterNamePath, attribute) }),
  );

  const isFilterAvailable = availableFilters.length > 0;

  return { availableFilters, isFilterAvailable };
}
