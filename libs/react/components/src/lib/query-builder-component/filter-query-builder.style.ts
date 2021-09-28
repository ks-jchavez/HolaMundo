import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  filterSelectionContainer: {
    padding: 'var(--pm-S)',
  },
  row: {
    display: 'flex',
    color: 'var(--on-surface-color)',
    alignItems: 'center',
    height: 'var(--wh-1XS)',
    width: '100%',
  },
  option: {
    width: '30%',
    minWidth: 'var(--wh-1XL)',
    padding: '0 10px 0 0',
    border: 'none',
  },
  comparator: {
    width: '30%',
    padding: '0 10px 0 0',
    '& .MuiFormControl-root': {
      width: '100% !important',
      '& .MuiButtonBase-root.MuiButton-root': {
        width: '100% !important',
      },
    },
  },
  where: {
    paddingRight: 'var(--pm-3XS)',
    width: '33%',
    maxWidth: 'var(--wh-2XL)',
    padding: '0 10px 0 0',
    minWidth: 'var(--wh-1XL)',
  },
  menu: {
    '& .MuiAutocomplete-groupLabel': {
      backgroundColor: 'var(--nav-top-bg-color)',
      color: 'var(--on-nav-top-bg-color)',
      fontSize: 'var(--tx-S)',
      fontWeight: 'bold',
      lineHeight: 'var(--tx-S)',
      padding: 'var(--pm-5XS) var(--pm-1XS) var(--pm-6XS)',
    },
    '& .MuiAutocomplete-option': {
      '&:hover': {
        backgroundColor: 'var(--secondary-color-variant)',
        color: 'var(--on-secondary-color-variant)',
      },
      padding: 'var(--pm-4XS) var(--pm-1XS)',
      fontSize: 'var(--tx-M)',
    },
  },
  removeButton: {
    width: 'var(--wh-3XS)',
    height: 'var(--wh-3XS)',
    color: 'var(--on-surface-color)',
  },
  actionButton: {
    background: 'transparent',
    boxShadow: 'none',
    color: 'var(--secondary-color)',
    '&:hover': {
      background: 'transparent',
      color: 'var(--secondary-color-variant)',
    },
    fontWeight: 600,
    marginTop: 'var(--pm-1XS)',
  },
  noFilters: {
    color: 'var(--h3-title-color)',
    marginLeft: 'var(--pm-1XS)',
    marginTop: 'var(--pm-M)',
  },
  actions: {
    justifyContent: 'space-between',
    display: 'flex',
    width: '100%',
  },
});
