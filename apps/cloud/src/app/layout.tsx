import 'react-reflex/styles.css';

import { AppModule, NavPosition, Translate } from '@kleeen/types';
import { PreviewCloseButton, useStyles } from './previewPanel.styles';
import { ReflexContainer, ReflexElement, ReflexHandle, ReflexSplitter } from 'react-reflex';
import { useKleeenRouting, usePreviewPanel } from '@kleeen/react/hooks';

import { CardSection } from '@kleeen/react/atomic-elements';
import { KUIConnect } from '@kleeen/core-react';
import { NavigationTask } from './modules/generated/components';
import { Typography } from '@material-ui/core';
import classnames from 'classnames';
import { isReactNativeInfusion } from '@kleeen/common/utils';
import settings from './settings/app.json';

const bem = 'ks-layout';
const isNavTop = settings.layout.position === NavPosition.top;
const modifier = isNavTop ? 'top' : 'side container-nav-left';
const applyInfusion = isReactNativeInfusion();

type LayoutBaseProps = {
  modules: AppModule[];
  translate: Translate;
};

function LayoutBase({ modules, translate }: LayoutBaseProps) {
  const { isPreviewOpen, previewWidgets, previewTitle } = usePreviewPanel();
  const styles = useStyles();

  const mainNavSection = !applyInfusion ? (
    <section className={classnames(`${bem}__navigation`)}>
      <NavigationTask />
    </section>
  ) : null;

  return (
    <div className={classnames(bem, `${bem}--${modifier}`, 'content-layout')}>
      {mainNavSection}
      <ReflexContainer className={classnames(`${bem}__preview-container`, 'layout')} orientation="horizontal">
        <ReflexElement minSize={288}>{<Content modules={modules} />}</ReflexElement>
        {isPreviewOpen && <ReflexSplitter className={styles.previewSplitter} />}
        {isPreviewOpen && (
          <ReflexElement minSize={42}>
            <ReflexHandle>
              <div className={classnames(`${bem}__handle-container`, styles.previewHeader)}>
                <Typography className={styles.previewTitle}>{previewTitle}</Typography>
                <CloseButton translate={translate} />
                <div className={styles.previewHandler}>::::::</div>
              </div>
            </ReflexHandle>
            <div className={styles.previewContent}>
              <CardSection
                justifyContent="center"
                key="preview-card-section"
                taskName="previewPanel"
                widgets={previewWidgets}
              />
            </div>
          </ReflexElement>
        )}
      </ReflexContainer>
    </div>
  );
}

const Layout = KUIConnect(({ translate }) => ({ translate }))(LayoutBase);

export default Layout;

//#region Private members
type CloseButtonProps = {
  translate: Translate;
};

function CloseButton({ translate }: CloseButtonProps) {
  const previewContext = usePreviewPanel();
  const styles = useStyles();

  function closePreview() {
    previewContext.closePreviewPanel();
  }

  return (
    <div className={styles.previewCloseButtonContainer}>
      <PreviewCloseButton variant="outlined" onClick={closePreview}>
        {translate('app.previewLayout.closeButton')}
      </PreviewCloseButton>
    </div>
  );
}

type ContentProps = {
  modules: AppModule[];
};

function Content({ modules }: ContentProps) {
  const KsRouter = useKleeenRouting(modules, [], settings.defaultHomePage);

  return (
    <main
      className={classnames(`${bem}__content`, 'main-layout', {
        [NavPosition.top]: isNavTop,
        [NavPosition.left]: !isNavTop,
      })}
    >
      {KsRouter}
    </main>
  );
}
//#endregion
