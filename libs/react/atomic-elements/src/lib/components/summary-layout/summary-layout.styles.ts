import { makeStyles } from '@material-ui/core/styles';

interface SummaryLayoutStyleProps {
  columnCount: number;
  columnGap: number;
  containerPadding: number;
  keyValuePadding: number;
  keyWidth: number;
  rowCount: number;
  valueWidth: number;
}

const summaryLayoutPadding = ({ containerPadding }: SummaryLayoutStyleProps) =>
  `var(--pm-M) ${containerPadding / 3}px`;

export const useStyles = makeStyles({
  content: {
    columnGap: (props: SummaryLayoutStyleProps) => props.columnGap,
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplateRows: (props: SummaryLayoutStyleProps) => `repeat(${props.rowCount}, auto)`,
    gridTemplateColumns: ({ keyValuePadding, keyWidth, valueWidth }: SummaryLayoutStyleProps) =>
      `repeat(auto-fill, ${keyWidth + valueWidth + keyValuePadding}px)`,
    rowGap: 'var(--pm-1XS)',
  },
  header: {
    alignItems: 'center',
    color: 'var(--on-surface-color)',
    display: 'flex',
    fontSize: 'var(--tx-1XL)',
    '& .ks-summary-panel__display-media': {
      marginRight: 'var(--pm-S)',
    },
  },
  summaryLayout: {
    padding: summaryLayoutPadding,
  },
  summaryLayoutFromButtonSummary: {
    padding: summaryLayoutPadding,
    height: 'calc(100% - var(--wh-M))',
    overflow: 'auto',
  },
});
