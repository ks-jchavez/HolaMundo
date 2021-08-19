import { getRowDisplayValue, overwriteFormat } from '@kleeen/common/utils';

import { Action } from '@kleeen/types';
import ActionsForm from '../../ActionsForm';
import ConfirmForm from '../../ConfirmForm';
import { DataViewRowProps } from './CellRenderer.model';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import { KsContextCell } from '../../../context-cell';
import React from 'react';
import { RowData } from '../../../config-table';
import { SortableHandle } from 'react-sortable-hoc';
import { TableCell } from '../../components/index';
import { useStyles } from './CellRenderer.styles';
import { validateOrderColum } from './utils';

const DragHandle = SortableHandle(({ children }) => <div>{children}</div>);

function DataViewRow({
  actions,
  attr,
  deleteContainer,
  deleteProcess,
  displayColumnAttribute,
  draggable,
  hasActions,
  idx,
  isDeletable,
  localization,
  openShowMoreModal,
  orderColumnName,
  props,
  row,
  rowData,
  toggleDelete,
  triggerCustomAction,
}: DataViewRowProps): JSX.Element {
  const classes = useStyles();

  const isFirstColumn = idx === 0;

  if (deleteContainer && deleteContainer.includes(rowData.id) && isFirstColumn) {
    const confirmMethod = () => {
      deleteProcess(rowData.id);
    };
    const rejectMethod = () => {
      toggleDelete(rowData.id);
    };

    return (
      <TableCell colSpan={props.attributes.length + 1}>
        <div className="confirm-delete-container">
          <ConfirmForm
            localization={localization}
            confirmMethod={confirmMethod}
            rejectMethod={rejectMethod}
          />
          <div className="confirm-delete-label">{localization.confirmDeleteLabel}</div>
        </div>
      </TableCell>
    );
  }

  if (deleteContainer && deleteContainer.includes(rowData.id)) {
    return null;
  }

  const rowKey = `${row.id}-${`${attr.isDisplayValue ? `displayValue::${attr.name}` : attr.name}`}`;
  const rowDisplayValue = getRowDisplayValue(rowData, displayColumnAttribute?.name);

  function Cell() {
    return (
      <KsContextCell
        attr={attr}
        cell={row}
        displayColumnAttribute={displayColumnAttribute}
        format={overwriteFormat(props?.entity?.format[attr.name], attr.format)}
        hasDisplayMedia={row.displayMedia ? true : false}
        openShowMoreModal={openShowMoreModal}
        row={rowData}
        rowDisplayValue={rowDisplayValue}
      />
    );
  }

  function DraggableColumn() {
    return (
      <DragHandle>
        <div className="draggable-container">
          <div className="draggable-column data-view">
            <DragIndicatorIcon />
          </div>
          <div className="draggable-column-number">{validateOrderColum(rowData, orderColumnName)}</div>
        </div>
      </DragHandle>
    );
  }

  if (isFirstColumn) {
    const hasBorderRight = hasActions ? 'no-border-right' : null;
    const handleCustomAction = (action: Action) => triggerCustomAction(action, rowData.id);
    const handleDelete = () => toggleDelete(rowData.id);
    const handleEdit = (): void => {
      return;
    };

    return (
      <React.Fragment key={`${row.id}-fragment`}>
        {draggable && <DraggableColumn />}
        <TableCell
          className={`${hasBorderRight} ${draggable ? 'firstColumn' : ''} ${
            row.displayMedia && classes.tableCellContainer
          }`}
          key={rowKey}
        >
          <Cell />
        </TableCell>
        {hasActions && (
          <TableCell key={`${rowKey}-actions`} className="actions-form-cell">
            <ActionsForm
              actions={actions}
              handleCustomAction={handleCustomAction}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              isDeletable={isDeletable}
              localization={localization}
              row={rowData as RowData}
            />
          </TableCell>
        )}
      </React.Fragment>
    );
  } else {
    return (
      <TableCell className={`${row.displayMedia && classes.tableCellContainer}`} key={rowKey}>
        <Cell />
      </TableCell>
    );
  }
}

export default DataViewRow;
