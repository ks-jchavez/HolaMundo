import './DetailSummary.scss';

import {
  ActionList,
  ActionsProps,
  DeleteDialogProps,
  DetailSummaryProps,
  Slot,
  SlotsProps,
} from './DetailSummary.model';
import { Container, Dialog, Typography } from './DetailSummary.styles';
import { KsButton, KsMenuItem } from '@kleeen/react/components';
import { MouseEvent, ReactElement, useRef, useState } from 'react';
import { useGetDisplayValue, useKleeenActions, useTheme, useUrlQueryParams } from '@kleeen/react/hooks';

import { ActionType } from '@kleeen/types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DisplayValueTitle } from '../display-value-title';
import Grow from '@material-ui/core/Grow';
import MenuList from '@material-ui/core/MenuList';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { SummarySlot } from '../Widgets';
import camelcase from 'lodash.camelcase';
import classnames from 'classnames';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { pathOr } from 'ramda';
import { useHistory } from 'react-router-dom';

const bem = 'ks-detail-summary';

export function DetailSummary(props: DetailSummaryProps): ReactElement {
  const { safeDeleteRequest } = useKleeenActions(props.taskName);
  const [open, setOpen] = useState(false);
  const formatType = pathOr('', ['slots', 1, 'params', 'value', 'formatType'], props);
  const { displayValue, format } = useGetDisplayValue(props);

  return (
    <>
      <Container className={classnames(bem, 'detail-summary')} maxWidth="xl">
        <div className={classnames(`${bem}__header`, 'detail-summary-header')}>
          <Typography variant="h2" component="h1">
            <DisplayValueTitle formatType={formatType} displayValue={displayValue} format={format} /> |{' '}
            {props.taskTitle}
          </Typography>
          <ActionListSection actions={props.actions} openDeleteDialog={setOpen} />
        </div>
        <SlotSection slots={props.slots?.[0]} taskName={props.taskName} />
      </Container>
      <DeleteDialog
        deleteAction={safeDeleteRequest}
        entity={props.objectValue}
        open={open}
        setOpen={setOpen}
        taskName={props.taskName}
      />
    </>
  );
}

function ActionListSection({ actions, openDeleteDialog }: ActionsProps): ReactElement | null {
  const mainAction = useRef<HTMLButtonElement>(null);
  const [openActions, setOpenActions] = useState(false);

  const handleClose = (event: MouseEvent<EventTarget>): void => {
    if (mainAction.current && mainAction.current.contains(event.target as HTMLElement)) {
      return;
    } else {
      setOpenActions(false);
    }
  };

  const handleToggle = (): void => {
    setOpenActions(!openActions);
  };

  if (isNilOrEmpty(actions)) {
    return null;
  }

  return (
    <div className={classnames(`${bem}__actions`, 'action-section')}>
      <KsButton className="btn-actions" onClick={handleToggle} ref={mainAction} variant="contained">
        <MoreHorizIcon fontSize="large" />
      </KsButton>
      <ActionSection
        actions={actions}
        anchorEl={mainAction.current}
        handleClose={handleClose}
        open={openActions}
        openDeleteDialog={openDeleteDialog}
        setOpen={setOpenActions}
      />
    </div>
  );
}

function ActionSection({ actions, anchorEl, handleClose, open, openDeleteDialog }: ActionList): ReactElement {
  const handleDelete = (): void => {
    openDeleteDialog(true);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Popper open={open} anchorEl={anchorEl} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper variant="outlined" square>
              <MenuList>
                {actions.map(({ displayName, name, type }) => {
                  const actionType = type.toLowerCase();

                  switch (actionType) {
                    case ActionType.Delete:
                      return (
                        <KsMenuItem
                          className={classnames(`${bem}__menu-item`, 'menu-item')}
                          key={name}
                          onClick={handleDelete}
                        >
                          {displayName}
                        </KsMenuItem>
                      );
                  }
                })}
              </MenuList>
            </Paper>
          </Grow>
        )}
      </Popper>
    </ClickAwayListener>
  );
}

function DeleteDialog(props: DeleteDialogProps): ReactElement {
  const history = useHistory();
  const { paramsBasedOnRoute } = useUrlQueryParams();
  const { themeClass } = useTheme();

  function handleClose(): void {
    props.setOpen(false);
  }

  function handleDelete(): void {
    props.deleteAction({
      entity: props.taskName,
      goBack: history.goBack,
      id: paramsBasedOnRoute[camelcase(props.entity)],
    });
    props.setOpen(false);
  }

  return (
    <Dialog
      aria-labelledby="form-dialog-title"
      className={themeClass}
      onClose={handleClose}
      open={props.open}
    >
      <DialogTitle id="form-dialog-title">Deleting {props.entity}</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure you want to delete this {props.entity}?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <KsButton onClick={handleClose} color="primary">
          Cancel
        </KsButton>
        <KsButton onClick={handleDelete} color="primary">
          Delete
        </KsButton>
      </DialogActions>
    </Dialog>
  );
}

function SlotSection(props: SlotsProps): ReactElement {
  return (
    <div className={classnames(`${bem}__slots`, 'slot-section')}>
      {props.slots.map((slot: Slot) => (
        <SummarySlot
          attributes={slot.attributes}
          key={slot.id}
          params={slot.params}
          taskName={props.taskName}
          widgetId={slot.id}
        />
      ))}
    </div>
  );
}

export default DetailSummary;
