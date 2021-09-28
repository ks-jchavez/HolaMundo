import { ContextMenuSection } from '@kleeen/types';
import { ContextMenuSectionProps } from '../context-menu.model';
import { KsContextMenuCrossLinkSection } from './crosslink';
import { KsContextMenuFilterSection } from './filters';
import { KsContextMenuInvestigationSection } from './investigation';
import { KsContextMenuPreviewSection } from './preview';

export const contextMenuComponentBySection: {
  [key in ContextMenuSection]?: (props: ContextMenuSectionProps) => JSX.Element;
} = {
  [ContextMenuSection.CrossLink]: KsContextMenuCrossLinkSection,
  [ContextMenuSection.Filter]: KsContextMenuFilterSection,
  [ContextMenuSection.Investigation]: KsContextMenuInvestigationSection,
  [ContextMenuSection.Preview]: KsContextMenuPreviewSection,
};
