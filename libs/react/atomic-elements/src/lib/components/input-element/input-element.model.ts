import { Attribute, ElementComponents } from '@kleeen/types';

import { AttributeInputEvents } from '@kleeen/react/hooks';
import { Key } from 'react';

export interface InputElementProps {
  attributes: Attribute[];
  elements: ElementComponents;
  params: any; // TODO: @cafe add types here
  registerEvents: (event: AttributeInputEvents) => void;
  taskName: string;
  widgetId: Key;
}
