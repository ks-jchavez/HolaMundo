import { BinaryView, Chips, Label, LabelWithChange } from './components';
import { DisplayCatalog, DisplayComponentProps, DisplayElement, ElementDisplayType } from '@kleeen/types';

const displayCatalog: DisplayCatalog = {
  [ElementDisplayType.BinaryView]: BinaryView,
  [ElementDisplayType.Chips]: Chips,
  [ElementDisplayType.Label]: Label,
  [ElementDisplayType.LabelWithChange]: LabelWithChange,
  [ElementDisplayType.SparklineMaxLargest]: TODO,
  [ElementDisplayType.TrendSparkline]: TODO,
  [ElementDisplayType.TrendSparklineHighLow]: TODO,
  [ElementDisplayType.TrendSparklineVsEnd]: TODO,
  [ElementDisplayType.TrendSparklineVsStart]: TODO,
};

export function getDisplayElement(displayComponent: ElementDisplayType): DisplayElement {
  return displayCatalog[displayComponent] || Default;
}

//#region Private members
function Default({ element }: DisplayComponentProps) {
  console.info(`${element} does not exist in the display catalog`);
  return null;
}

function TODO({ element }: DisplayComponentProps) {
  console.info(`${element} TBD soon`);
  return null;
}
//#endregion
