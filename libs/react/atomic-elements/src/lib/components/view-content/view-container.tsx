import { KsViewContainerProps } from './view-content.model';
import { useGetNavigationStyle } from '@kleeen/react/hooks';
import { useStyles } from './view-container.style';
import classnames from 'classnames';
import React, { useEffect, useState } from 'react';

const bem = 'ks-data-display-section';

export const KsViewContainer = (props: KsViewContainerProps) => {
  const [withoutSubHeader, setWithoutSubHeader] = useState(false);

  useEffect(() => {
    const subHeader = document.getElementById('sub-header-element-id');
    const { isNavLeft } = useGetNavigationStyle();
    if (!subHeader && isNavLeft) {
      setWithoutSubHeader(true);
    }
  }, []);

  const classes = useStyles({ withoutSubHeader });
  return <div className={classnames(bem, classes.dataViewDisplaySection)}>{props.children}</div>;
};
