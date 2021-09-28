import { Filters, InvestigationCard, InvestigationDataPoint, InvestigationMetadata } from '@kleeen/types';

export interface GetInitialInvestigationProps {
  investigationFilters: Filters;
  investigationDataPoint: InvestigationDataPoint;
  originWidgetId: string;
  pageFilters: Filters;
  user?: string;
}

export function getInitialInvestigationCards({
  investigationDataPoint,
  investigationFilters,
  originWidgetId,
  pageFilters,
  user,
}: GetInitialInvestigationProps): InvestigationCard {
  const metadata: InvestigationMetadata = {
    createdAt: new Date().toISOString(),
    user,
  };

  const result: InvestigationCard = {
    followUpCards: [],
    metadata,
    filters: pageFilters,
    widgetId: originWidgetId,
  };

  const firstInvestigationCard = {
    dataPoint: investigationDataPoint,
    metadata,
    filters: { ...pageFilters, ...investigationFilters },
  };

  result.followUpCards.push(firstInvestigationCard);

  return result;
}

export interface GetInvestigationCardProps {
  inheritedFilters: Filters;
  dataPoint: InvestigationDataPoint;
  user?: string;
}

export function getInvestigationCardByDataPoint({
  dataPoint,
  inheritedFilters,
  user,
}: GetInvestigationCardProps): InvestigationCard {
  return {
    metadata: {
      createdAt: new Date().toISOString(),
      user,
    },
    dataPoint,
    filters: inheritedFilters,
    followUpCards: [],
  };
}
