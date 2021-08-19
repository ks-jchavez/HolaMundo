import { Action, ActionType, AmendCellUpdate, Attribute } from '@kleeen/types';
import React, { useState } from 'react';

import { GridSectionProps } from '../GridSection.model';
import { KUIConnect } from '@kleeen/core-react';
import { Loader } from '../../Loader/Loader';
import Paper from '@material-ui/core/Paper';
import { VirtualizedTable } from './VirtualizedTable';
import { allComponentEnum } from './CellRenderer/CellRenderer.model';
import useFilter from '../useFilter';
import { useStyles } from './VirtualizedTable.style';

type HeaderColumns = Array<{
  attr: Attribute;
  dataKey: string;
  label: string;
  props;
}>;

function ReactVirtualizedTableComponent({
  onSortRow,
  sortable,
  orderColumnName,
  translate,
  widgetId,
  sortableColumns,
  sorting,
  order,
  orderBy,
  onSort,
  ...props
}: GridSectionProps): JSX.Element {
  const [{ rows }, handleChange] = useFilter(props.entity.data);
  const [deleteContainer, setStatusDeleteContainer] = useState([]);
  const [editingCell, setEditingCell] = useState({});
  const [remainingRows] = useState([]);
  const tableStyles = useStyles();

  const actions = props?.actions || [];
  const isDeletable = actions.some(({ type }) => type.toLowerCase() === ActionType.Delete);
  const hasActions = isDeletable || actions.length > 0;
  const localization = {
    actionsTableHeaderRow: translate('app.gridSection.actionsTableHeaderRow'),
    addButtonAriaLabel: translate('app.gridSection.addButtonAriaLabel'),
    clearSearchAriaLabel: translate('app.gridSection.clearSearchAriaLabel'),
    confirmArialLabel: translate('app.gridSection.confirmArialLabel'),
    confirmDeleteLabel: translate('app.gridSection.confirmDeleteLabel'),
    deleteButtonAriaLabel: translate('app.gridSection.deleteButtonAriaLabel'),
    editButtonAriaLabel: translate('app.gridSection.editButtonAriaLabel'),
    rejectAriaLabel: translate('app.gridSection.rejectAriaLabel'),
    searchPlaceholder: translate('app.gridSection.searchPlaceholder'),
    searchTooltip: translate('app.gridSection.searchTooltip'),
  };

  if (props.entity.isLoading) {
    return <Loader />;
  }

  const amendCellUpdate: AmendCellUpdate = (params): void => {
    if (props.onCellUpdate) {
      props.onCellUpdate(params);
    }
    setEditingCell({});
  };

  function deleteProcess(id: string): void {
    props.entityActions['deleteRequest']({ id, entityKey: props.entityName });
    toggleDelete(id);
  }

  function toggleDelete(id: string): void {
    if (deleteContainer.includes(id)) {
      setStatusDeleteContainer(deleteContainer.filter((q) => q != id));
      return;
    }
    setStatusDeleteContainer([...deleteContainer, id]);
  }

  function triggerCustomAction(action: Action, id: string): void {
    const { widget } = props;
    const dispatchCustomAction = props?.entityActions?.dispatchCustomAction || (() => ({}));
    const entityId = widget?.entityId || props.entityId;

    const dataCustomAction = {
      params: {
        baseModel: props.entityName,
        displayName: action.displayName,
        operationName: `${action.name}${entityId}`,
      },
      paramsBasedOnRoute: {
        paramsBasedOnRoute: { [props.entityName]: id },
      },
      taskName: props.taskName,
      widgetId: '',
    };

    dispatchCustomAction(dataCustomAction);
  }

  function typeOf(row): allComponentEnum {
    if (rows) {
      if (props.enableEditMode) {
        return allComponentEnum.EditDataView;
      } else {
        return allComponentEnum.DataViewRow;
      }
    } else {
      return allComponentEnum.RemainingRow;
    }
  }

  if (Array.isArray(rows) || Array.isArray(remainingRows)) {
    const rowsStableSort = rows ? rows : remainingRows;

    return (
      <Paper className={`${props.className} ${tableStyles.virtualTable}`}>
        <VirtualizedTable
          widgetId={widgetId}
          actions={actions}
          amendCellUpdate={amendCellUpdate}
          attributes={props.attributes}
          autocomplete={props.autocomplete}
          columns={headerColumns(props.attributes, props)}
          deleteContainer={deleteContainer}
          deleteProcess={props.onDeleteRow || deleteProcess}
          editingCell={editingCell}
          getMoreRows={props.getMoreRows}
          handleChange={handleChange}
          hasActions={hasActions}
          isDeletable={isDeletable}
          localization={localization}
          onAutocompleteRequest={props.onAutocompleteRequest}
          onSort={onSort}
          onSortRow={onSortRow}
          order={order}
          orderBy={orderBy}
          rowCount={rowsStableSort.length}
          rowGetter={({ index }) => (rowsStableSort.length > 0 ? rowsStableSort[index] : {})}
          setEditingCell={setEditingCell}
          sortable={sortable}
          sortableColumns={sortableColumns}
          toggleDelete={toggleDelete}
          triggerCustomAction={triggerCustomAction}
          typeOf={typeOf}
          orderColumnName={orderColumnName}
          columnWidth={props.columnWidth}
        />
      </Paper>
    );
  } else return null;
}

//#region Private Members

function headerColumns(attrs: Attribute[], props): HeaderColumns {
  const columns: HeaderColumns = [];

  attrs.forEach((attr) => {
    columns.push({
      attr,
      dataKey: attr.name,
      label: attr.label || attr.name,
      props,
    });
  });

  return columns;
}

//#endregion

const ReactVirtualizedTable = React.memo(
  KUIConnect(({ translate }) => ({ translate }))(ReactVirtualizedTableComponent),
);

export default ReactVirtualizedTable;
