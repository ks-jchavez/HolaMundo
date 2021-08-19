import './SnackBarSection.scss';

import { KsButton as Button, KsSnackbarContainer } from '@kleeen/react/components';
import { styled } from '@material-ui/core/styles';
import { useTheme } from '@kleeen/react/hooks';
import classnames from 'classnames';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import MuiDialog from '@material-ui/core/Dialog';
import MuiFormControl from '@material-ui/core/FormControl';
import MuiInputLabel from '@material-ui/core/InputLabel';
import MuiSelect from '@material-ui/core/Select';
import MuiTooltip from '@material-ui/core/Tooltip';
import MuiTypography from '@material-ui/core/Typography';
import React from 'react';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';

const bem = 'ks-snack-bar-section';

const Paper = styled(KsSnackbarContainer)({
  borderRadius: '0',
});

const TypographyBold = styled(MuiTypography)({
  fontSize: 'var(--tx-M)',
  fontWeight: 'bold',
  left: 'auto',
});

const FormControl = styled(MuiFormControl)({
  color: 'var(--alt-light-color)',
});

const InputLabel = styled(MuiInputLabel)({
  color: 'var(--secondary-color)',
  fontSize: 'var(--tx-M)',
  left: 'auto',
  '&.Mui-focused': {
    color: 'var(--secondary-color-variant)',
  },
});

const Select = styled(MuiSelect)({
  '& fieldset': {
    'border-color': 'var(--secondary-color)',
  },
  '&:hover': {
    '& fieldset.MuiOutlinedInput-notchedOutline': {
      'border-color': 'var(--secondary-color-variant)',
    },
  },
  '&.Mui-focused': {
    '& fieldset.MuiOutlinedInput-notchedOutline': {
      'border-color': 'var(--secondary-color-variant)',
    },
    '& .MuiSelect-root': {
      color: 'var(--secondary-color-variant)',
    },
  },
  '& .MuiSelect-root': {
    color: 'var(--secondary-color)',
  },
  '& svg': {
    color: 'var(--secondary-color)',
  },
});

const Dialog = styled(MuiDialog)({
  '& Button': {
    color: 'var(--secondary-color)',
    background: 'var(--transparent)',
    '&:hover': {
      background: 'var(--transparent)',
    },
  },
});

export interface SnackBarSectionProps {
  actions: Action[];
  entityActions: { [key: string]: Function };
  showSelectAndExecute?: boolean;
  selectedRows?: any[];
  entity?: string;
  showSnackBar: boolean;
  className?: string;
  setSelectedRows?: any;
}

interface DeleteDialogProps {
  entity: string;
  open: boolean;
  entityActions: { [key: string]: Function };
  selectedRows: any[];
  setSelectedRows: any;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  clearOnClose?: boolean;
  title?: string;
  description?: string;
}

interface SelectedStatsSectionProps {
  showSelectAndExecute: boolean;
  actions: Action[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Action {
  type: string;
  label?: string;
  func?: (params?: any) => any;
  disabled?: boolean;
  tooltip?: string;
}

enum ActionEnum {
  DELETE = 'DELETE',
  CUSTOM = 'CUSTOM',
}

// Select And Execute
const SelectedStatsSection1 = (props: {
  actions: Action[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <FormControl variant="outlined" className={classnames(bem, 'select-action-form')}>
        <InputLabel id="select-action-label" className={classnames(`${bem}__label`, 'select-action-label')}>
          Select Action
        </InputLabel>
        <Select
          labelId="select-action-label"
          id="select-action-label"
          className={classnames(`${bem}__action`, 'select-action')}
          label="Select Action"
        >
          <MenuItem value="delete">Delete</MenuItem>
        </Select>
        <MuiTypography
          variant="caption"
          display="block"
          className={classnames(`${bem}__action-tip`, 'action-tip')}
        >
          Select an action to bulk perform
        </MuiTypography>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        className={classnames(`${bem}__cta`, 'action-button')}
        onClick={() => {
          console.log('GO');
        }}
      >
        GO
      </Button>
    </>
  );
};

// Multi button group
const SelectedStatsSection2 = (props: {
  actions: Action[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleClickOpen = () => {
    props.setOpen(true);
  };

  return (
    <>
      {props.actions.map(({ type, label, func, disabled, tooltip = '' }, index) => {
        switch (type) {
          case ActionEnum.DELETE:
            return (
              <MuiTooltip key={`${label}-${index}`} title={tooltip} placement="top">
                <span>
                  <Button
                    className={classnames(`${bem}__cta--delete`, 'multi-button')}
                    color="primary"
                    data-kleeen-analytics-attrs={`component:ActionsSection,action:${type.toLowerCase()}`}
                    data-kleeen-analytics-name="click"
                    data-kleeen-analytics-on="click"
                    disabled={disabled}
                    key={'delete'}
                    onClick={handleClickOpen}
                    variant="contained"
                  >
                    DELETE
                  </Button>
                </span>
              </MuiTooltip>
            );
          case ActionEnum.CUSTOM:
            return (
              <MuiTooltip key={`${label}-${index}`} title={tooltip} placement="top">
                <span>
                  <Button
                    className={classnames(`${bem}__cta--custom`, 'multi-button')}
                    color="primary"
                    data-kleeen-analytics-attrs={`component:ActionsSection,action:${type.toLowerCase()}`}
                    data-kleeen-analytics-name="click"
                    data-kleeen-analytics-on="click"
                    data-testid={`${(label || '').toLowerCase()}-action`}
                    disabled={disabled}
                    key={label}
                    onClick={func}
                    variant="contained"
                  >
                    {label}
                  </Button>
                </span>
              </MuiTooltip>
            );
        }
      })}
    </>
  );
};

const SelectedStatsSection = ({ showSelectAndExecute, actions, setOpen }: SelectedStatsSectionProps) => {
  return showSelectAndExecute ? (
    <SelectedStatsSection1 actions={actions} setOpen={setOpen} />
  ) : (
    <SelectedStatsSection2 actions={actions} setOpen={setOpen} />
  );
};

export const DeleteDialog = (props: DeleteDialogProps) => {
  const { themeClass } = useTheme();
  const title = props.title || `Deleting ${props.entity}`;
  const description = props.description || `Are you sure you want to delete this ${props.entity}?`;

  const handleClose = () => {
    if (props.clearOnClose) {
      props.setSelectedRows([]);
    }
    props.setOpen(false);
  };

  const handleDelete = () => {
    props.entityActions['deleteRequest']({ id: (props.selectedRows || [])[0].id });
    props.setOpen(false);
    props.setSelectedRows([]);
  };

  return (
    <Dialog
      aria-labelledby="form-dialog-title"
      className={classnames(`${bem}__dialog`, themeClass)}
      onClose={handleClose}
      open={props.open}
    >
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          data-kleeen-analytics-attrs="component:DeleteDialog,action:cancel"
          data-kleeen-analytics-name="click"
          data-kleeen-analytics-on="click"
          data-testid="cancel-action"
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          color="primary"
          data-kleeen-analytics-attrs="component:DeleteDialog,action:delete"
          data-kleeen-analytics-name="click"
          data-kleeen-analytics-on="click"
          data-testid="delete-action"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export const SnackBarSection = (props: SnackBarSectionProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Slide in={props.showSnackBar} mountOnEnter unmountOnExit direction="up" timeout={400}>
        <Paper
          className={classnames(
            props.className,
            `${bem}__snack-bar`,
            `snack-bar ${props.showSnackBar ? 'visible' : 'hidden'}`,
          )}
        >
          <Toolbar>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={2} />
              <Grid container item xs={12} sm={8} justify="center" alignItems="center">
                {(props.selectedRows || []).length > 0 && (
                  <>
                    <TypographyBold
                      variant="button"
                      display="block"
                      className={classnames(`${bem}__snack-bar--button`, 'snackbar-text')}
                    >
                      {(props.selectedRows || []).length}
                    </TypographyBold>
                    <MuiTypography
                      variant="caption"
                      display="block"
                      className={classnames(`${bem}__snack-bar--caption`, 'snackbar-text')}
                    >
                      {props.entity} selected
                    </MuiTypography>
                  </>
                )}
                <SelectedStatsSection
                  showSelectAndExecute={props.showSelectAndExecute}
                  actions={props.actions}
                  setOpen={setOpen}
                />
              </Grid>
              <Grid container item xs={12} sm={2} justify="flex-end" alignItems="center">
                {(props.selectedRows || []).length > 0 && (
                  <Button
                    variant="contained"
                    color="primary"
                    className={classnames(`${bem}__cta--selected`, 'action-button')}
                    onClick={() => {
                      props.setSelectedRows([]);
                    }}
                  >
                    DESELECT ALL
                  </Button>
                )}
              </Grid>
            </Grid>
          </Toolbar>
        </Paper>
      </Slide>
      <DeleteDialog
        entity={props.entity}
        open={open}
        setOpen={setOpen}
        entityActions={props.entityActions}
        selectedRows={props.selectedRows || []}
        setSelectedRows={props.setSelectedRows}
      />
    </>
  );
};

export default SnackBarSection;
