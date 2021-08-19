import { AttributeInputEvents } from '@kleeen/react/hooks';
import { ReactNode } from 'react';
import { Widget } from '@kleeen/types';

interface CardWidgetProps {
  children: ReactNode;
  disabled?: boolean;
  disableHeightCalculation?: boolean;
  hideTitle?: boolean;
  icon: boolean;
  selectedViz?: number;
  title: string | JSX.Element;
  widgetSelector?: null | JSX.Element;
}

interface CardTitleProps {
  icon: boolean;
  title: string | JSX.Element | null | undefined;
}

type GridJustification =
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

enum CardSectionLayout {
  Masonry = 'masonry', // Dashboard grid (default)
  SingleColumn = 'single-column', // Config (not used yet)
  SingleWideColumn = 'single-wide-column', // Report
}

interface CardSectionProps {
  cardSectionLayout?: CardSectionLayout;
  children?: ReactNode;
  containerId?: string;
  fullWidth?: boolean;
  hideSaveAndClose?: boolean;
  hideTOC?: boolean;
  justifyContent?: GridJustification;
  onInputChange?: (hasChanged: boolean) => void;
  registerEvents?: (event: AttributeInputEvents) => void;
  skipAccessControlCheck?: boolean;
  taskName?: string;
  widgets?: Widget[];
}

interface RenderChildrenProps {
  cardSectionLayout?: CardSectionLayout;
  children?: ReactNode;
  hideSaveAndClose?: boolean;
  onInputChange?: (hasChanged: boolean) => void;
  registerEvents?: (event: AttributeInputEvents) => void;
  taskName: string;
  widgets?: Widget[];
  widgetsRefs?: any;
}

interface RenderWidgetProps {
  disableHeightCalculation?: boolean;
  hideSaveAndClose?: boolean;
  onInputChange?: (hasChanged: boolean) => void;
  preferredWidget: string;
  registerEvents?: (event: AttributeInputEvents) => void;
  taskName: string;
  widget: Widget;
}

export {
  CardSectionLayout,
  CardSectionProps,
  CardTitleProps,
  CardWidgetProps,
  RenderChildrenProps,
  RenderWidgetProps,
};
