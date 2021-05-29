import { makeStyles } from '@material-ui/core/styles';

interface SummaryPanelStyleProps {
  columnCount: number;
  columnGap: number;
  containerPadding: number;
  keyValuePadding: number;
  keyWidth: number;
  rowCount: number;
  valueWidth: number;
}

export const useStyles = makeStyles({
  content: {
    columnGap: (props: SummaryPanelStyleProps) => props.columnGap,
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplateRows: (props: SummaryPanelStyleProps) => `repeat(${props.rowCount}, auto)`,
    gridTemplateColumns: ({ keyValuePadding, keyWidth, valueWidth }: SummaryPanelStyleProps) =>
      `repeat(auto-fill, ${keyWidth + valueWidth + keyValuePadding}px)`,
    marginTop: 'var(--pm-1XL)',
    rowGap: 'var(--pm-1XS)',
  },
  header: {
    color: 'var(--on-surface-color)',
    display: 'flex',
    alignItems: 'center',
    fontSize: 'var(--tx-1XL)',
    '& .ks-summary-panel__display-media': {
      marginRight: 'var(--pm-S)',
    },
  },
  key: {
    color: 'hsla(var(--on-surface-color-hsl), 0.7)',
    fontSize: 'var(--tx-M)',
    fontWeight: 200,
    lineHeight: 'var(--tx-L)',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: ({ keyWidth }: SummaryPanelStyleProps) => keyWidth,
  },
  value: {
    fontSize: 'var(--tx-M)',
    lineHeight: 'var(--tx-L)',
    width: ({ valueWidth }: SummaryPanelStyleProps) => valueWidth,
  },
  summaryKeyValue: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
  summaryPanel: {
    padding: ({ containerPadding }: SummaryPanelStyleProps) => `var(--pm-M) ${containerPadding / 2}px`,
  },
});
