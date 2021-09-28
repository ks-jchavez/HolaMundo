import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  widgetHeader: {
    border: 'var(--card-header-border)',
    borderWidth: 'var(--card-header-border-width)',
    color: 'var(--h3-title-color)',
  },
  widgetHeaderTitle: {
    marginLeft: 0,
  },
}));
