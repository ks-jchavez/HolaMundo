import {
  ContextMenuClickHandler,
  ContextMenuSectionItem,
  ContextMenuSectionProps,
} from '../../context-menu.model';
import { GetInvestigationItemsProps, InvestigationItem, getInvestigationItems } from './investigation-items';
import {
  INVESTIGATION_URL_PARAM,
  getEncodedInvestigationCard,
  getInitialInvestigationCards,
  getInvestigationCardByDataPoint,
  resolveInvestigationCardWidget,
} from '@kleeen/investigations';
import { useEffect, useState } from 'react';
import { useIsInvestigation, useKleeenActions, useUrlQueryParams } from '@kleeen/react/hooks';

import { ContextMenuItemView } from '../context-menu-item';
import { ContextMenuSection } from './../context-menu-section';
import { KsManagedModulePaths } from '@kleeen/types';
import { LibraryWidget } from '@kleeen/widgets';
import { Translate } from '@kleeen/core-react';
import { isNilOrEmpty } from '@kleeen/common/utils';

const DISABLE_INVESTIGATION = true;

export function KsContextMenuInvestigationSection({
  dataPoints,
  dataPointsToShow,
  handleClose,
  widgetId,
}: ContextMenuSectionProps) {
  const isInvestigationPage = useIsInvestigation();
  const [investigationSections, setInvestigationSections] = useState<ContextMenuSectionItem[]>([]);
  const { addWidget } = useKleeenActions('ksInvestigation');
  const { paramsBasedOnRoute } = useUrlQueryParams();

  useEffect(() => {
    if (isNilOrEmpty(dataPointsToShow) || DISABLE_INVESTIGATION) {
      return;
    }

    if (isInvestigationPage) {
      const tempInvestigationSections = dataPointsToShow.reduce(
        (acc: ContextMenuSectionItem[], dataPoint, dataPointIndex) => {
          const investigationItems = getInsideInvestigationItems({
            dataPoint,
            dataPoints,
            paramsBasedOnRoute,
          });

          if (isNilOrEmpty(investigationItems)) {
            return acc;
          }

          const investigationSection: ContextMenuSectionItem = {
            key: `investigation-inside-label-${dataPointIndex}`,
            label: (
              <Translate
                id="app.contextMenu.investigation.label"
                type="html"
                values={{
                  entity: dataPoint.attribute.name,
                }}
              />
            ),
            menuItems: investigationItems.map((item, itemIndex) => {
              return {
                handleClick: getInsideClickHandler({
                  addWidget,
                  handleClose,
                  item,
                }),
                key: `investigation-inside-${itemIndex}`,
                label: item.label,
                roleAccessKey: `investigation.inside`,
              };
            }),
          };

          acc.push(investigationSection);

          return acc;
        },
        [],
      );

      setInvestigationSections(tempInvestigationSections);

      return;
    }

    const tempInvestigationSections = dataPointsToShow.reduce(
      (acc: ContextMenuSectionItem[], dataPoint, dataPointIndex) => {
        const investigationItems = getOutsideInvestigationItems({
          dataPoint,
          dataPoints,
          paramsBasedOnRoute,
        });

        if (isNilOrEmpty(investigationItems)) {
          return acc;
        }

        const investigationSection: ContextMenuSectionItem = {
          key: `investigation-outside-label-${dataPointIndex}`,
          label: (
            <Translate
              id="app.contextMenu.investigation.label"
              type="html"
              values={{
                entity: dataPoint.attribute.name,
              }}
            />
          ),
          menuItems: investigationItems.map((item, itemIndex) => {
            return {
              handleClick: getOutsideClickHandler({
                handleClose,
                item,
                widgetId,
              }),
              key: `investigation-outside-${itemIndex}`,
              label: item.label,
              roleAccessKey: `investigation.outside`,
            };
          }),
        };

        acc.push(investigationSection);

        return acc;
      },
      [],
    );

    setInvestigationSections(tempInvestigationSections);
  }, [dataPointsToShow?.length, isInvestigationPage]);

  return (
    <>
      {investigationSections.map((section) => {
        const { key, menuItems } = section;

        return (
          <ContextMenuSection key={key} section={section}>
            {menuItems.map((item, index) => (
              <ContextMenuItemView key={item.key} index={index} item={item} />
            ))}
          </ContextMenuSection>
        );
      })}
    </>
  );
}

//#region Private Members
interface InsideInvestigationItemClickHandler extends ContextMenuClickHandler<InvestigationItem> {
  addWidget: (widget: LibraryWidget) => void;
}

function getInsideClickHandler({ addWidget, handleClose, item }: InsideInvestigationItemClickHandler) {
  return () => () => {
    const { investigationDataPoint, investigationFilters } = item;
    const investigationCard = getInvestigationCardByDataPoint({
      dataPoint: investigationDataPoint,
      inheritedFilters: investigationFilters,
    });

    const resolvedCard = resolveInvestigationCardWidget(investigationCard);

    if (!isNilOrEmpty(resolvedCard)) {
      const resolvedCardNew = { ...resolvedCard, isNewWidget: true };
      addWidget(resolvedCardNew);
    }

    handleClose();
  };
}

function getInsideInvestigationItems(props: GetInvestigationItemsProps): InvestigationItem[] {
  const investigationItems = getInvestigationItems({
    ...props,
    translationProps: {
      filtered: 'app.contextMenu.investigation.inside.filtered',
      noFiltered: 'app.contextMenu.investigation.inside.noFiltered',
    },
  });

  return investigationItems;
}

interface OutsideInvestigationItemClickHandler extends ContextMenuClickHandler<InvestigationItem> {
  widgetId?: string;
}

function getOutsideClickHandler({ handleClose, item, widgetId }: OutsideInvestigationItemClickHandler) {
  return () => () => {
    const { investigationFilters, investigationDataPoint, pageFilters } = item;
    const initialInvestigationCard = getInitialInvestigationCards({
      investigationDataPoint,
      investigationFilters,
      originWidgetId: widgetId,
      pageFilters,
    });
    const encodedInvestigationCard = getEncodedInvestigationCard(initialInvestigationCard);
    const investigateURL = `${KsManagedModulePaths.Investigate}?${INVESTIGATION_URL_PARAM}=${encodedInvestigationCard}`;

    window.open(investigateURL);
    handleClose();
  };
}

function getOutsideInvestigationItems(props: GetInvestigationItemsProps): InvestigationItem[] {
  const investigationItems = getInvestigationItems({
    ...props,
    translationProps: {
      filtered: 'app.contextMenu.investigation.outside.filtered',
      noFiltered: 'app.contextMenu.investigation.outside.noFiltered',
    },
  });

  return investigationItems;
}
//#endregion
