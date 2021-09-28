import './DataViewControlSection.scss';

import {
  ActionDialogs,
  ActionsSection,
  AddDialogPayload,
  KsAutoRefreshControl,
  RefreshControl,
} from '@kleeen/react/components';
import { Container, Title, Typography } from './DataViewControlSection.styles';
import { DataViewControlSectionProps, UseActionsProps } from './DataViewControlSection.model';
import { HeaderTitle, HeaderTitleEllipsis } from '../HeaderTitle';
import { ReactElement, useState } from 'react';
import { useGetDisplayValue, useKleeenActions } from '@kleeen/react/hooks';

import { Action } from '@kleeen/types';
import Grid from '@material-ui/core/Grid';
import MuiTooltip from '@material-ui/core/Tooltip';
import { ViewSwitcher } from './view-switcher';
import classnames from 'classnames';
import { isAddAction } from '@kleeen/render-utils';
import { isNilOrEmpty } from '@kleeen/common/utils';

const bem = 'ks-data-view-control-section';

export function DataViewControlSection(props: DataViewControlSectionProps): ReactElement {
  const {
    actions,
    currentView,
    entityActions,
    objectValue,
    results,
    setCurrentView,
    taskName,
    title,
    viewOptions = [],
  } = props;
  if (isNilOrEmpty(taskName)) {
    throw new Error(`Value cannot be null. Parameter name: taskName`);
  }
  const { refreshPage } = useKleeenActions(taskName);

  const {
    dispatchAction,
    getAddActions,
    handleIsConfirmationOpenChange,
    handleIsCustomOpenChange,
    setIsCustomOpen,
    setIsConfirmationOpen,
    isConfirmationOpen,
    isCustomOpen,
  } = useActionsState({ entityActions, currentView, actions }); // TODO review how can we use useKsActionsManager here
  const { displayValue, format } = useGetDisplayValue({ objectValue, taskName });
  const addActions = getAddActions();
  const entityName = isNilOrEmpty(currentView?.entityName) ? props.entity : currentView.entityName;

  function handleClick(action: Action): void {
    if (action?.component) {
      setIsCustomOpen(true);
    } else if (action?.areYouSure) {
      setIsConfirmationOpen(true);
    }
  }

  return (
    <>
      <Container className={classnames(bem, 'dataview-control-section')} maxWidth="xl">
        <Grid alignItems="center" className={classnames(`${bem}__container`, 'main-container')} container>
          {/**TODO KSE3-4140 implement ks title here**/}
          <Grid
            className={classnames(`${bem}__typography`, 'typography-ellipsis')}
            container
            direction="column"
          >
            <MuiTooltip
              title={
                <HeaderTitle displayValue={displayValue} format={format} title={title} subTitle={results} />
              }
              placement="top-start"
            >
              <Title>
                <Typography variant="h2" component="h1">
                  <HeaderTitleEllipsis
                    displayValue={displayValue}
                    format={format}
                    subTitle={results}
                    title={title}
                  />
                </Typography>
              </Title>
            </MuiTooltip>
            {results != null && (
              <Typography className={classnames(`${bem}__results`, 'results')}>
                <>{results} Results</>
              </Typography>
            )}
          </Grid>
        </Grid>
        {viewOptions.length > 1 && (
          <Grid
            alignItems="center"
            className={classnames(`${bem}__options`, 'options')}
            container
            data-testid="view-switcher"
          >
            <ViewSwitcher
              currentView={currentView}
              setCurrentView={setCurrentView}
              showDropDown={props.showDropDown}
              taskName={taskName}
              viewOptions={viewOptions}
            />
          </Grid>
        )}
        <Grid alignItems="center" className="actions" container data-testid="page-actions">
          {!props.hideRefreshControl && (
            <>
              <RefreshControl onRefresh={refreshPage} taskName={taskName} />
              <KsAutoRefreshControl taskName={taskName} onRefresh={refreshPage} />
            </>
          )}
          <ActionsSection actions={addActions} entity={entityName} handleAddClick={handleClick} />
        </Grid>
      </Container>
      {addActions.map((action) => (
        <ActionDialogs
          action={action}
          attributes={props.attributes}
          dispatchAction={dispatchAction}
          entity={entityName}
          isConfirmationOpen={isConfirmationOpen}
          isCustomOpen={isCustomOpen}
          key={`${action.name}-dialogs`}
          onIsConfirmationOpenChange={handleIsConfirmationOpenChange}
          onIsCustomOpenChange={handleIsCustomOpenChange}
          parent={props.parent}
          taskName={taskName}
        />
      ))}
    </>
  );
}

function useActionsState({ entityActions, currentView, actions }: UseActionsProps) {
  const [actionPayload, setActionPayload] = useState({});
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isCustomOpen, setIsCustomOpen] = useState(false);

  function dispatchAction({ action, payload }: { action: Action; payload: AddDialogPayload }): void {
    const isCustomDialogOpen = isCustomOpen;
    const needsConfirmation = action?.areYouSure;

    if (isCustomDialogOpen && needsConfirmation) {
      setActionPayload(payload);
      setIsConfirmationOpen(true);
    } else {
      entityActions.addRequest(payload || actionPayload);
    }
  }

  function getAddActions(): Action[] {
    const localActions = isNilOrEmpty(currentView?.actions) ? actions : currentView.actions;
    return (localActions || []).filter(isAddAction);
  }

  function handleIsConfirmationOpenChange(): void {
    setIsConfirmationOpen(!isConfirmationOpen);
  }

  function handleIsCustomOpenChange(): void {
    setIsCustomOpen(!isCustomOpen);
  }

  return {
    dispatchAction,
    getAddActions,
    handleIsConfirmationOpenChange,
    handleIsCustomOpenChange,
    isConfirmationOpen,
    isCustomOpen,
    setIsConfirmationOpen,
    setIsCustomOpen,
  };
}

export default DataViewControlSection;
