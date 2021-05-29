import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  displayMedia: {
    marginRight: 'var(--pm-3XS)',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));
