import './EntityDetailsSection.scss';

import { AttributeInputEvents, useEntityDetailsEventHandler, useKleeenActions } from '@kleeen/react/hooks';
import { KsButton, KsMenuContainer } from '@kleeen/react/components';
import { ReactElement, useEffect, useState } from 'react';
import { makeStyles, styled } from '@material-ui/core';

import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { KUIConnect } from '@kleeen/core-react';
import { KsSummaryPanel } from '../summary-panel';
import MuiButton from '@material-ui/core/Button';
import MuiToolbar from '@material-ui/core/Toolbar';
import MuiTooltip from '@material-ui/core/Tooltip';
import { Slot } from '../DetailSummary/DetailSummary.model';
import { Translate } from '@kleeen/types';
import { getUpdateRequestPayload } from '../../utils';

export interface EntityDetailsSectionProps {
  displayTaskName: string;
  entityDetails: any[]; // TODO: @cafe add better types here
  isEditable: boolean;
  onChangeFilterVisible?: (isVisible: boolean) => void;
  slots?: Slot[];
  taskName: string;
  translate?: Translate;
}

// TODO: @cafe move this to a .styles file
const Paper = styled(KsMenuContainer)({
  borderRadius: 0,
});

const Button = styled(MuiButton)({
  boxShadow: 'none',
  width: 'var(--wh-1XL)',
  '&:hover': {
    boxShadow: 'none',
  },
});

const Toolbar = styled(MuiToolbar)({
  backgroundColor: 'var(--surface-color)',
  'border-radius': 'var(--pm-0)',
  display: 'flex',
  justifyContent: 'center',
});

const useStyles = makeStyles(() => ({
  drawerClose: {
    height: '100%',
    overflowX: 'hidden',
    alignItems: 'center',
    width: 'var(--wh-1XS)',
    borderRadius: 'var(--card-border-radius)',
    border: 'var(--card-border)',
  },
  iconEntity: {
    margin: 'var(--pm-4XS)',
    width: 'var(--wh-2XS)',
    backgroundColor: 'var(--secondary-color)',
    borderRadius: 'var(--wh-4XS)',
    '&.MuiSvgIcon-root': {
      color: 'var(--on-secondary-color)',
    },
    '&:hover': {
      backgroundColor: 'var(--secondary-color-variant)',
      color: 'var(--on-secondary-color-variant)',
      cursor: 'pointer',
    },
  },
}));

export function EntityDetailsSectionBase({ translate, ...props }: EntityDetailsSectionProps): ReactElement {
  const { updateRequest } = useKleeenActions(props.taskName);
  const [attributeEventList, { addEvent, clearEventList }] = useEntityDetailsEventHandler();
  const [open, setOpen] = useState(true);
  const [isEditing, setEditing] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    return clearEventList;
  }, []);

  function handleDrawerOpen(): void {
    setOpen(true);

    if (props.onChangeFilterVisible) {
      props.onChangeFilterVisible(true);
    }
  }

  function handleDrawerClose(): void {
    setOpen(false);

    if (props.onChangeFilterVisible) {
      props.onChangeFilterVisible(false);
    }
  }

  function onCancel(): void {
    // TODO: @cafe cancel or clear accumulated events
  }

  function onSave(): void {
    const payload = getUpdateRequestPayload(attributeEventList);

    updateRequest(payload);

    // Clean-up previous updates
    clearEventList();
  }

  function registerEvents(event: AttributeInputEvents): void {
    addEvent(event);
  }

  return open ? (
    <Paper className={'entity-details-section'} elevation={3}>
      <div className="paper-container">
        <div className="attributes-container">
          <div className="attributes-navigation">
            <KsButton className="attributes-navigation-left" onClick={handleDrawerClose}>
              <ArrowLeftIcon className="icon-close" />
              {translate('app.subHeader.buttonSummary.summaryDetails')}
            </KsButton>
            {props.isEditable && (
              <KsButton
                className={
                  'attributes-navigation-right ' + (isEditing ? 'attributes-navigation-edit-on' : '')
                }
                onClick={() => setEditing(!isEditing)}
              >
                {isEditing
                  ? translate('app.subHeader.container.button.editOff')
                  : translate('app.subHeader.container.button.editOn')}
              </KsButton>
            )}
          </div>
          <KsSummaryPanel
            entityDetails={props.entityDetails}
            isEditing={isEditing}
            layoutProps={{
              columnGap: 55,
              containerPadding: 32,
              keyValuePadding: 21,
              keyWidth: 144,
              valueWidth: 178,
            }}
            registerEvents={registerEvents}
            taskName={props.taskName}
          />
        </div>
        {isEditing && (
          <Toolbar>
            <Button className="primary-button" onClick={onSave}>
              {translate('app.subHeader.container.button.save')}
            </Button>
          </Toolbar>
        )}
      </div>
    </Paper>
  ) : (
    <Paper elevation={3} className={classes.drawerClose}>
      <MuiTooltip title="View your entity" placement="top">
        <EditOutlinedIcon className={classes.iconEntity} onClick={handleDrawerOpen} />
      </MuiTooltip>
    </Paper>
  );
}

export const EntityDetailsSection = KUIConnect(({ translate }) => ({ translate }))(EntityDetailsSectionBase);
