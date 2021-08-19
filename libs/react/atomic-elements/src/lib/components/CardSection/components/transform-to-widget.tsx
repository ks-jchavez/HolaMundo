/* eslint-disable complexity */
import {
  AreaWidget,
  BubbleChartWidget,
  ColumnBarWidget,
  ConfigInputWidget,
  ConfigTableWidget,
  CustomActionWidget,
  CustomWidget,
  DonutVariantWidget,
  DonutWidget,
  GaugeWidget,
  LineWidget,
  PieWidget,
  PolarAreaWidget,
  PositiveNegativeAreaWidget,
  RankedListWidget,
  ReadOnlyTextWidget,
  ScatterWidget,
  SingleBarHighlightMaxWidget,
  StepLineWidget,
  SummaryStatisticsWidget,
  TableWidget,
} from '../../Widgets';
import { ReactElement, useState } from 'react';
import { Widget, WidgetTypes } from '@kleeen/types';

import { AttributeInputEvents } from '@kleeen/react/hooks';
import CardWidget from '../CardWidget';
import GridAreaSection from '../../GridAreaSection/GridAreaSection';
import { RenderWidgetProps } from '../CardWidget.model';
import { VisualizationSelector } from '../../VisualizationSelector/VisualizationSelector';
import WaterfallWidget from '../../Widgets/WaterfallWidget/WaterfallWidget';
import { isNilOrEmpty } from '@kleeen/common/utils';

export function TransformToWidgetComponent({
  CardWidgetElement = CardWidget,
  disableHeightCalculation = false,
  hideSaveAndClose,
  onInputChange,
  registerEvents,
  taskName,
  widget,
}: {
  CardWidgetElement?: any;
  disableHeightCalculation?: boolean;
  hideSaveAndClose?: boolean;
  onInputChange?: (hasChanged: boolean) => void;
  registerEvents?: (event: AttributeInputEvents) => void;
  taskName: string;
  widget: Widget;
}): ReactElement {
  const { viableSolutions } = widget;
  const hasViableSolutions = !isNilOrEmpty(viableSolutions);
  const [preferredWidgetIndex, setPreferredWidgetIndex] = useState(0);

  function getChartTypeToRender(): WidgetTypes {
    if (
      hasViableSolutions &&
      preferredWidgetIndex < viableSolutions.length &&
      viableSolutions[preferredWidgetIndex]
    ) {
      return viableSolutions[preferredWidgetIndex];
    }
    return widget.chartType;
  }

  return widget.chartType === WidgetTypes.CUSTOM ? (
    renderWidget({
      disableHeightCalculation,
      onInputChange,
      preferredWidget: getChartTypeToRender(),
      registerEvents,
      taskName,
      widget,
    })
  ) : (
    <CardWidgetElement
      disableHeightCalculation={disableHeightCalculation}
      icon={false}
      selectedViz={preferredWidgetIndex}
      title={widget.title}
      widgetSelector={
        hasViableSolutions ? (
          <VisualizationSelector
            items={viableSolutions}
            onItemPress={setPreferredWidgetIndex}
            preferredWidgetIndex={preferredWidgetIndex}
          />
        ) : null
      }
    >
      {renderWidget({
        hideSaveAndClose,
        onInputChange,
        preferredWidget: getChartTypeToRender(),
        registerEvents,
        taskName,
        widget,
        disableHeightCalculation,
      })}
    </CardWidgetElement>
  );
}

//#region Private members
function renderWidget({
  disableHeightCalculation,
  hideSaveAndClose,
  onInputChange,
  preferredWidget,
  registerEvents,
  taskName,
  widget,
}: RenderWidgetProps): ReactElement {
  const { statisticalType } = widget;

  switch (preferredWidget) {
    case WidgetTypes.AREA_GRADIENT:
    case WidgetTypes.AREA_MACRO_MICRO:
    case WidgetTypes.AREA_MASTER_DETAIL:
    case WidgetTypes.AREA:
      return (
        <AreaWidget
          chartType={preferredWidget}
          params={widget.params}
          taskName={taskName}
          widgetId={widget.id}
        />
      );

    case WidgetTypes.BUBBLE_CHART:
      return (
        <BubbleChartWidget
          attributes={widget.attributes}
          disableHeightCalculation={disableHeightCalculation}
          params={widget.params}
          taskName={taskName}
          widgetId={widget.id}
        />
      );

    case WidgetTypes.COLUMN_BAR_DOUBLE_BAR:
    case WidgetTypes.COLUMN_BAR_MACRO_MICRO:
    case WidgetTypes.COLUMN_BAR_SEGMENTED:
    case WidgetTypes.COLUMN_BAR:
      return (
        <ColumnBarWidget
          attributes={widget.attributes}
          chartType={preferredWidget}
          params={widget.params}
          taskName={taskName}
          widgetId={widget.id}
        />
      );

    case WidgetTypes.CONFIG_INPUT_FIELD_USER_DEFINED:
      return (
        <ConfigInputWidget
          attributes={widget.attributes}
          hideSaveAndClose={hideSaveAndClose}
          icon={false}
          onInputChange={onInputChange}
          params={widget.params}
          registerEvents={registerEvents}
          statisticalType={statisticalType}
          taskName={taskName}
          title={widget.title}
          widgetId={widget.id}
        />
      );
    case WidgetTypes.CONFIG_TABLE:
      return (
        <ConfigTableWidget
          actions={widget.actions}
          attributes={widget.attributes}
          onInputChange={onInputChange}
          params={widget.params}
          registerEvents={registerEvents}
          taskName={taskName}
          widgetId={widget.id}
        />
      );

    case WidgetTypes.CUSTOM: {
      return (
        <CustomWidget
          disableHeightCalculation={disableHeightCalculation}
          widget={widget}
          onInputChange={onInputChange}
          registerEvents={registerEvents}
        />
      );
    }

    case WidgetTypes.CUSTOM_ACTION:
      return (
        <CustomActionWidget
          actions={widget.actions}
          params={widget.params}
          taskName={taskName}
          widgetId={widget.id}
        />
      );

    case WidgetTypes.DONUT:
      return (
        <DonutWidget
          attributes={widget.attributes}
          params={widget.params}
          taskName={taskName}
          widgetId={widget.id}
        />
      );

    case WidgetTypes.DONUT_VARIANT:
      return (
        <DonutVariantWidget
          attributes={widget.attributes}
          params={widget.params}
          taskName={taskName}
          widgetId={widget.id}
        />
      );

    case WidgetTypes.GAUGE_SEVERITY_LEVEL:
    case WidgetTypes.GAUGE_SEVERITY_SCORE:
    case WidgetTypes.GAUGE:
      return <GaugeWidget params={widget.params} taskName={taskName} widgetId={widget.id} />;

    case WidgetTypes.LINE:
      return <LineWidget params={widget.params} taskName={taskName} widgetId={widget.id} />;

    case WidgetTypes.PIE:
      return (
        <PieWidget
          attributes={widget.attributes}
          params={widget.params}
          taskName={taskName}
          widgetId={widget.id}
        />
      );

    case WidgetTypes.POLAR_AREA:
      return (
        <PolarAreaWidget
          attributes={widget.attributes}
          params={widget.params}
          taskName={taskName}
          widgetId={widget.id}
        />
      );

    case WidgetTypes.POSITIVE_NEGATIVE_AREA:
      return <PositiveNegativeAreaWidget params={widget.params} taskName={taskName} widgetId={widget.id} />;

    case WidgetTypes.READ_ONLY_TEXT:
      return <ReadOnlyTextWidget params={widget.params} taskName={taskName} widgetId={widget.id} />;

    case WidgetTypes.SCATTER:
      return <ScatterWidget params={widget.params} taskName={taskName} widgetId={widget.id} />;

    case WidgetTypes.SIMPLE_LIST_RANKED:
      return (
        <RankedListWidget
          attributes={widget.attributes}
          params={widget.params}
          taskName={taskName}
          widgetId={widget.id}
        />
      );

    /** TODO: Add subtype as in COLUMN_BAR */
    case WidgetTypes.SINGLE_BAR_HIGHLIGHT_MAX:
      return (
        <SingleBarHighlightMaxWidget
          attributes={widget.attributes}
          chartType={WidgetTypes.SINGLE_BAR_HIGHLIGHT_MAX}
          params={widget.params}
          taskName={taskName}
          widgetId={widget.id}
        />
      );

    case WidgetTypes.STEP_LINE:
      return <StepLineWidget params={widget.params} taskName={taskName} widgetId={widget.id} />;

    case WidgetTypes.SUMMARY_STATISTICS:
      return (
        <SummaryStatisticsWidget
          attributes={widget.attributes}
          params={widget.params}
          taskName={taskName}
          widgetId={widget.id}
        />
      );

    case WidgetTypes.SIMPLE_LIST:
      return (
        <TableWidget
          attributes={widget.attributes}
          params={widget.params}
          taskName={taskName}
          widgetId={widget.id}
        />
      );

    case WidgetTypes.TABLE:
      return (
        <div className="report-table-height">
          <GridAreaSection
            className="report-table-height"
            columnWidth={100}
            entityId={widget.attributes[0].id as string}
            entityName={widget.params.baseModel}
            key={`data-view-display-section-grid-area-section-${widget.id}`}
            selectedRows={[]}
            setSelectedRows={() => ({})}
            sortableColumns={true}
            taskName={taskName}
            widget={widget}
          />
        </div>
      );

    case WidgetTypes.WATERFALL:
      return <WaterfallWidget params={widget.params} taskName={taskName} widgetId={widget.id} />;
  }
}
//#endregion
