import React, { ChangeEvent, ReactElement, useEffect, useRef, useState } from 'react';

import { CircularProgress } from '../circularProgress';
import { KUIConnect } from '@kleeen/core-react';
import { PlayArrow, Pause } from '@material-ui/icons';
import { RefreshControlProps } from './refreshControl.model';
import { TimeIntervals } from '@kleeen/types';
import { useStyles, usePopOverStyles } from './refreshControl.style';
import { useTheme, useUserInfo } from '@kleeen/react/hooks';
import { StorageHelper } from '@aws-amplify/core';
import {
  RefreshControlSelect,
  RefreshControlFab,
  RefreshControlListSubheader,
  RefreshControlMenuItem,
} from './refreshControl.components';

const REFRESH = 0;
const MIN_INTERVAL = 0.25;
const DEFAULT_INTERVAL = 5;

const RefreshControl = ({ onRefresh, translate, taskName }: RefreshControlProps): ReactElement => {
  const _storage = new StorageHelper().getStorage();
  const _user = useUserInfo();
  const userName = _user?.userInfo?.username;
  const keyOfLocalStorage = userName ? `current-interval-${userName}-${taskName}` : '';
  const classes = useStyles();
  const popoverClasses = usePopOverStyles();
  const { themeClass } = useTheme();
  const [percent, setPercent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isTimerPaused = useRef(false);
  const currentInterval = useRef(MIN_INTERVAL);
  const updateAt = useRef(Date.now() + currentInterval.current * 60 * 1000);
  const currentTime = useRef(Date.now() + 5 * 60 * 1000);

  const togglePause = (): void => {
    isTimerPaused.current = !isTimerPaused.current;
    setIsPaused(!isPaused);
  };

  const updateAtCurrent = () => {
    updateAt.current = Date.now() + currentInterval.current * 60 * 1000;
  };

  useEffect(() => {
    const localStorageInterval = JSON.parse(_storage.getItem(keyOfLocalStorage));
    if (localStorageInterval) {
      currentInterval.current = Number(localStorageInterval);
    } else {
      currentInterval.current = DEFAULT_INTERVAL;
    }
    updateAtCurrent();
  }, [keyOfLocalStorage]);

  const getMillisecondsRemaining = (): number => updateAt.current - currentTime.current;

  const getPercentElapsed = (interval): number =>
    100 - (getMillisecondsRemaining() / (interval * 60 * 1000)) * 100;

  const onTimeIntervalChange = (intervalInMinutes: number): void => {
    currentInterval.current = intervalInMinutes;
    _storage.setItem(keyOfLocalStorage, intervalInMinutes.toString());
    setPercent(0);
    updateAtCurrent();
  };

  const progress = (): void => {
    if (isTimerPaused.current) {
      updateAt.current = updateAt.current + 1000;
    }
    if (Date.now() >= updateAt.current) {
      updateAtCurrent();
      setPercent(100);
      setTimeout(onRefresh, 1000);
    } else {
      currentTime.current = Date.now();
      setPercent(getPercentElapsed(currentInterval.current));
    }
  };

  useEffect(() => {
    const timer = setInterval(progress, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.refreshControl}>
      <CircularProgress radius={20} stroke={3} progress={percent}>
        <RefreshControlFab
          onClick={() => {
            togglePause();
          }}
          size="small"
        >
          {isPaused ? <PlayArrow fontSize="small" /> : <Pause fontSize="small" />}
        </RefreshControlFab>
      </CircularProgress>
      <RefreshControlSelect
        disableUnderline
        displayEmpty={true}
        renderValue={() => translate('app.refreshControl.refresh')}
        value=""
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          if (event.target.value) {
            onTimeIntervalChange(parseFloat(event.target.value));
          }
        }}
        MenuProps={{
          PopoverClasses: popoverClasses,
          className: themeClass,
        }}
      >
        <RefreshControlListSubheader>
          {translate('app.refreshControl.timeIntervals')}
        </RefreshControlListSubheader>
        {TimeIntervals.map((intervalOption) => (
          <RefreshControlMenuItem key={intervalOption.value} value={intervalOption.value}>
            {intervalOption.value === currentInterval.current && <div className={classes.dot} />}
            {translate(intervalOption.translateKey)}
          </RefreshControlMenuItem>
        ))}
        <RefreshControlListSubheader>{translate('app.refreshControl.actions')}</RefreshControlListSubheader>
        <RefreshControlMenuItem onClick={() => onRefresh()} value={REFRESH}>
          {translate('app.refreshControl.refreshNow')}
        </RefreshControlMenuItem>
        <RefreshControlMenuItem
          onClick={() => {
            togglePause();
          }}
        >
          {translate(isPaused ? 'app.refreshControl.resume' : 'app.refreshControl.pause')}
        </RefreshControlMenuItem>
      </RefreshControlSelect>
    </div>
  );
};

export default KUIConnect(({ translate }) => ({ translate }))(RefreshControl);
