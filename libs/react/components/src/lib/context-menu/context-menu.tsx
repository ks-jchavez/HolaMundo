import { ContextMenuProps, ContextMenuSectionItem, FormattedContextDataPoint } from './context-menu.model';
import { Menu, MenuTitle } from './contextual-menu.style';
import { ReactNode, useEffect, useRef, useState } from 'react';
import {
  useCrossLinkingSections,
  useDataPointsWithFormattedValue,
  useFilterSections,
  usePreviewSections,
} from './hooks';
import { useHoverIntent, useTheme } from '@kleeen/react/hooks';

import { AggregationType } from '@kleeen/types';
import { ContextMenuItemView } from './context-menu-item';
import { ContextMenuSection } from './context-menu-section';
import { DEFAULT_TRANSFORMATION_KEY_TO_USE } from './utils';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { isSingleCardinalityTransformation } from '@kleeen/frontend/utils';
import { path } from 'ramda';

export function KsContextMenu({ anchorEl, autoClose, dataPoints, handleClose }: ContextMenuProps) {
  const formattedDataPoints = useDataPointsWithFormattedValue({ dataPoints });
  const { ref } = useHoverIntent<HTMLUListElement>({
    delayOnEnter: 0,
    onMouseEnterFn: clearTimeOut,
    onMouseLeaveFn: handleClose,
  });
  const timerRef = useRef(null);
  const [dataPointsToShow, setDataPointsToShow] = useState<FormattedContextDataPoint[]>([]);
  const [menuSections, setMenuSections] = useState<ContextMenuSectionItem[]>([]);
  const [menuTitle, setMenuTitle] = useState<ReactNode>();
  const { themeClass } = useTheme();

  const crossLinkSection = useCrossLinkingSections({ dataPointsToShow, handleClose });
  const filterSections = useFilterSections({ dataPointsToShow, handleClose });
  const previewSections = usePreviewSections({
    dataPoints: formattedDataPoints,
    dataPointsToShow,
    handleClose,
  });

  useEffect(() => {
    if (autoClose) {
      timerRef.current = setTimeout(() => {
        handleClose();
      }, 2000);

      return () => {
        clearTimeout(timerRef.current);
      };
    }
  }, []);

  useEffect(() => {
    if (isNilOrEmpty(dataPoints)) {
      setDataPointsToShow([]);
      return;
    }

    const tempFilteredDataPoints = formattedDataPoints
      .filter(({ ignoreInContextMenu = false }) => !ignoreInContextMenu)
      .sort((a, b) => {
        const aCardinalityWeight = Number(
          isSingleCardinalityTransformation(a.attribute.aggregation as AggregationType),
        );
        const bCardinalityWeight = Number(
          isSingleCardinalityTransformation(b.attribute.aggregation as AggregationType),
        );
        return bCardinalityWeight - aCardinalityWeight;
      });

    setDataPointsToShow(tempFilteredDataPoints);
  }, [formattedDataPoints?.length]);

  useEffect(() => {
    if (isNilOrEmpty(dataPointsToShow)) {
      return;
    }

    const [firstDataPoint] = dataPointsToShow;
    // TODO @cafe THIS MUST BE REMOVED ONCE WE GET RID OF THE AGGREGATION VS TRANSFORMATION DILEMMA.
    const { transformationKeyToUse = DEFAULT_TRANSFORMATION_KEY_TO_USE } = firstDataPoint;
    const attributeTransformation = path<AggregationType>([transformationKeyToUse], firstDataPoint.attribute);
    const isSingleCardinality = isSingleCardinalityTransformation(attributeTransformation);

    const menuTitle = `${firstDataPoint.formattedValue} ${
      !isSingleCardinality ? firstDataPoint.attribute.name : ''
    }`;
    setMenuTitle(menuTitle);
  }, [dataPointsToShow?.length]);

  useEffect(() => {
    const sectionItems = [];

    if (!isNilOrEmpty(crossLinkSection)) {
      sectionItems.push(...crossLinkSection);
    }

    if (!isNilOrEmpty(filterSections)) {
      sectionItems.push(...filterSections);
    }

    if (!isNilOrEmpty(previewSections)) {
      sectionItems.push(...previewSections);
    }

    setMenuSections(sectionItems);
  }, [crossLinkSection?.length, filterSections?.length, previewSections?.length]);

  function clearTimeOut() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }

  if (isNilOrEmpty(menuSections)) return null;

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'center',
        vertical: 'center',
      }}
      className={themeClass}
      getContentAnchorEl={null}
      id="context-menu"
      onClose={handleClose}
      open={Boolean(anchorEl)}
      MenuListProps={{ ref }}
    >
      <MenuTitle>{menuTitle}</MenuTitle>
      {menuSections.map((section) => {
        const { menuItems } = section;

        return (
          <ContextMenuSection section={section}>
            {menuItems.map((item, index) => {
              return <ContextMenuItemView index={index} item={item} />;
            })}
          </ContextMenuSection>
        );
      })}
    </Menu>
  );
}
