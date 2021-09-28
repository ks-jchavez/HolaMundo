import { AccessControlPermission, ContextMenuItem } from '@kleeen/types';

import { AccessControl } from '@kleeen/core-react';
import { MenuGroupItem } from '../contextual-menu.style';
import Tooltip from '@material-ui/core/Tooltip';
import { roleAccessKeyTag } from '@kleeen/common/utils';

export interface ContextMenuItemParams {
  index: number;
  item: ContextMenuItem;
}

export function ContextMenuItemView({ index, item }: ContextMenuItemParams) {
  const itemAccessKey = roleAccessKeyTag(item.roleAccessKey);
  return (
    <AccessControl id={itemAccessKey} key={item.key}>
      {({ permission }) => (
        <MenuGroupItem
          className={`${index % 2 ? 'odd-stripe' : 'even-stripe'}`}
          data-testid="context-menu-item"
          disabled={permission === AccessControlPermission.HIDE}
          key={item.key}
          onClick={item.handleClick(item)}
        >
          <Tooltip title={item.label} placement="top">
            <span className="menu-item-text">{item.label}</span>
          </Tooltip>
        </MenuGroupItem>
      )}
    </AccessControl>
  );
}
