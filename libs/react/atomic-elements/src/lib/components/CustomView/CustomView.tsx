import { makeStyles } from '@material-ui/core/styles';
import { ReactElement } from 'react';
import classnames from 'classnames';

const bem = 'ks-custom-view';

const useStyles = makeStyles({
  root: {
    marginLeft: 'var(--pm-2XL)',
    maxHeight: 'calc(var(--wh-L) - var(--pm-L))',
    width: '95%',
  },
  divContainer: {
    alignItems: 'center',
    display: 'flex',
    height: 'var(--wh-S)',
  },
});

export const CustomView = ({ widget }, ...props: any[]): ReactElement => {
  const classes = useStyles();
  const Component = widget.component;

  return (
    <Component
      {...props}
      className={classnames(bem, classes.divContainer)}
      key={widget.id}
      title={widget.title}
    />
  );
};

export default CustomView;
