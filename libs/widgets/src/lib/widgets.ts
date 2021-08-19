import { LibraryWidget, WidgetByEntityBaseParam, WidgetsByEntity } from './types';
import { widgets, widgetsByEntity } from './data';

import { Widget } from '@kleeen/types';
import { isNilOrEmpty } from '@kleeen/common/utils';

const decoratedWidgetsByEntity = getDecoratedWidgetsByEntity();

export function entityHasWidgets({ entityId, scope }: WidgetByEntityBaseParam): boolean {
  return (
    !isNilOrEmpty(decoratedWidgetsByEntity[entityId]) &&
    !isNilOrEmpty(decoratedWidgetsByEntity[entityId][scope])
  );
}

export function getWidgetsByEntity({ entityId, scope }: WidgetByEntityBaseParam): LibraryWidget[] {
  return decoratedWidgetsByEntity[entityId][scope];
}

export function getWidgetsByView(): Widget[] {
  return [];
}

//#region Private Members
function getDecoratedWidgetsByEntity(): WidgetsByEntity {
  return Object.keys(widgetsByEntity).reduce((acc: WidgetsByEntity, strKey) => {
    const key = parseInt(strKey);
    const widgetByEntity = widgetsByEntity[key];
    acc[key] = {
      single: widgetByEntity?.single?.map((id) => widgets[id]) || [],
      collection: widgetByEntity?.collection?.map((id) => widgets[id]) || [],
    };
    return acc;
  }, {});
}
//#endregion
