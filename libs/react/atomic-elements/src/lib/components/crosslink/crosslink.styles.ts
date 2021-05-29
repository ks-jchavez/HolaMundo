import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  crosslink: {
    width: '100%',
  },
  hasCrosslink: {
    color: 'var(--secondary-color)',
    cursor: 'pointer',
    fontWeight: 700,
  },
}));
