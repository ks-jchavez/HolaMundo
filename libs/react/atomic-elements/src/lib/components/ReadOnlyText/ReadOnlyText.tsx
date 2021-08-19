import './ReadOnlyText.scss';

import { DataProps } from '../../../types';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { Loader } from '@kleeen/react/components';
import { pathOr } from 'ramda';
import classnames from 'classnames';
import React, { ReactElement } from 'react';

const bem = 'ks-read-only-text';

interface ReadOnlyTextProps {
  context: any;
  fullscreen?: boolean;
}

export const ReadOnlyText = (props: ReadOnlyTextProps): ReactElement => {
  const { fullscreen } = props;
  const isLoading = pathOr(true, ['context', 'isLoading']);
  const data: DataProps[] = pathOr([], ['context', 'data'], props);
  const resultsByTransformation = isNilOrEmpty(data) ? [] : data;
  const result = pathOr('', [0, 'results'], resultsByTransformation);

  if (isLoading(props)) {
    return <Loader />;
  }

  return <div className={classnames(bem, 'read-only-text', { fullscreen })}>{result}</div>;
};

export default React.memo(ReadOnlyText);
