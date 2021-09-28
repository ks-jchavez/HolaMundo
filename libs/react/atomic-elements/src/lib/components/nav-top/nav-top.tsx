import './nav-top.scss';

import { AccessControl, Translate } from '@kleeen/core-react';
import { AppBar, Button, Toolbar, Typography } from './nav-top.style';
import React, { MouseEvent, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import { ConfirmationActionDialog } from '@kleeen/react/components';
import Grid from '@material-ui/core/Grid';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import { MainNavigationMenu } from './navigation-menus/main-navigation-menu';
import { NavProps } from '../../../types/types';
import Tooltip from '@material-ui/core/Tooltip';
import { UserPreferencesNavigationMenu } from './navigation-menus/user-preferences-navigation-menu';
import { roleAccessKeyTag } from '@kleeen/common/utils';
import { useNavigation } from '@kleeen/react/hooks';
import { validateOpenInNewTab } from '../../utils/navigationUtils';

interface optionNavigation {
  title: string;
  type: string;
  path: string;
  openInNewTab: boolean;
}

export const NavTop = (props: NavProps): JSX.Element => {
  const navigate = useNavigation();
  const { pathname } = useLocation();
  const menuOptions = props.menuList || [];
  const history = useHistory();

  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const [currentNavigation, setCurrentNavigation] = useState<optionNavigation>();

  function onClose(): void {
    setIsConfirmationOpen(false);
  }

  function openAnNewTab(path: string, openInNewTab: boolean, type: string, e?: MouseEvent): void {
    validateOpenInNewTab(navigate, path, e, type, history, openInNewTab);
  }

  return (
    <AppBar position="static" className="nav-top" data-testid="global-nav-menu">
      <Toolbar disableGutters className="toolbar">
        {menuOptions.length > 4 ? (
          <div>
            <MainNavigationMenu menuList={menuOptions} navigate={navigate} productName={props.productName} />
          </div>
        ) : (
          <Toolbar className="nav-top-menu" disableGutters>
            {menuOptions.map(({ title, path, type, areYouSure, openInNewTab }) => {
              const navigationTitle = roleAccessKeyTag(`navigation.${title}`);
              return (
                <AccessControl key={navigationTitle} id={navigationTitle}>
                  <Button
                    key={path}
                    color="inherit"
                    className={`menu-nav-button ${pathname === path ? 'active' : ''}`}
                    onClick={(e) => {
                      if (areYouSure) {
                        setIsConfirmationOpen(true);
                        setCurrentNavigation({ title, path, openInNewTab, type });
                      } else {
                        openAnNewTab(path, openInNewTab, type, e);
                      }
                    }}
                  >
                    <>
                      <Tooltip title={title} placement="top">
                        <span className="nav-button-text">{title}</span>
                      </Tooltip>
                      <div className="nav-circle"></div>
                    </>
                  </Button>
                </AccessControl>
              );
            })}
            {currentNavigation && (
              <ConfirmationActionDialog
                description={
                  <Translate
                    id="app.navigation.modal.description"
                    type="html"
                    values={{ productName: props.productName }}
                  />
                }
                key={`go-out-confirmation`}
                open={isConfirmationOpen}
                onAction={() => {
                  openAnNewTab(
                    currentNavigation.path,
                    currentNavigation.openInNewTab,
                    currentNavigation.type,
                  );
                }}
                onClose={onClose}
                title={
                  <Translate
                    id="app.navigation.modal.title"
                    type="html"
                    values={{ title: currentNavigation.title }}
                  />
                }
              />
            )}
          </Toolbar>
        )}
        <div className="branding">
          <Avatar alt="KS" variant="square" className="logo" src={props.logo} />
          <Grid container className="names">
            <Grid item xs={12}>
              <Typography className="company-name">{props.accountName}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className="product-name">{props.productName}</Typography>
            </Grid>
          </Grid>
        </div>

        <div className="settings">
          {Boolean(props.helpUrl) && (
            <Button
              aria-controls="simple-menu"
              color="inherit"
              className="menu-button"
              onClick={(e) => {
                e.preventDefault();
                window.open(props.helpUrl, '_blank');
              }}
            >
              <HelpOutlineOutlinedIcon className="nav-icons" />
            </Button>
          )}

          <UserPreferencesNavigationMenu
            menuList={props.accountMenuList}
            navigate={navigate}
            productName={props.productName}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavTop;
