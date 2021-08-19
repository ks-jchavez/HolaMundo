import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { roleAccessKeyTag } from '@kleeen/common/utils';
import { useState } from 'react';
import {
  ReportLayoutStyle,
  DataViewControlSection,
  DataViewDisplaySectionAtomic,
} from '@kleeen/react/atomic-elements';
import { viewOptions } from './settings/view-options';
import { widgets } from './settings/widgets';

function Workflow({ translate, ...props }) {
  const taskName = `myReport`;
  const [selectedViewOption, setSelectedViewOption] = useState(widgets[0]);
  const [cardsNumber, setCardsNumber] = useState(0);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const classes = ReportLayoutStyle();
  const workflowName = `My Report `;
  function handleOnTabIndexChanged(newTabIndex, option) {
    setSelectedViewOption(option);
  }

  return (
    <AccessControl id={roleAccessKeyTag(`navigation.${taskName}`)}>
      <div className={`${classes.dashboardTask} subhead-dynamic`}>
        <div className={`${classes.dashboardArea} browserArea`}>
          <div className={classes.gridPageIntro} data-testid="page-intro">
            <DataViewControlSection
              hideRefreshControl
              onTabIndexChanged={handleOnTabIndexChanged}
              selectedOption={selectedViewOption}
              setSelectedOption={setSelectedViewOption}
              taskName={taskName}
              title={workflowName}
              viewOptions={viewOptions}
            />
          </div>
          <div className={classes.dataViewDisplaySection} data-testid="content-section">
            <DataViewDisplaySectionAtomic
              widgets={widgets}
              selectedOption={selectedViewOption}
              selectedRows={selectedRows}
              setCardsNumber={setCardsNumber}
              setSelectedRows={setSelectedRows}
              taskName={taskName}
              value={selectedViewOption}
            />
          </div>
        </div>
      </div>
    </AccessControl>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(Workflow);
