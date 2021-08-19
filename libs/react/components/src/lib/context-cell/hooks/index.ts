import { useEffect, useState } from 'react';

import { AggregationType } from '@kleeen/types';
import { ClickableChipsCellProps } from '../components/clickable-chips/clickable-chips-cell.model';
import { isLinkFilterableByEntityType } from '@kleeen/react/hooks';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { isSingleCardinalityTransformation } from '@kleeen/frontend/utils';
import { path } from 'ramda';

type UseIsAttributeClickable = Pick<
  ClickableChipsCellProps,
  'attribute' | 'cellEntityType' | 'isIdTemporary'
> & {
  transformationKeyToUse?: string;
};

const DEFAULT_TRANSFORMATION_KEY_TO_USE = 'aggregation';

export function useIsAttributeClickable(props: UseIsAttributeClickable): boolean {
  const [isClickable, setIsClickable] = useState<boolean>(false);

  const { attribute, transformationKeyToUse = DEFAULT_TRANSFORMATION_KEY_TO_USE } = props;

  useEffect(() => {
    if (isNilOrEmpty(attribute)) return;

    const attributeTransformation = path<AggregationType>([transformationKeyToUse], attribute);

    if (isNilOrEmpty(attributeTransformation)) return;

    const hasCrosslinking = checkIfAttributeHasCrosslinking(props);
    const isASingleCardinalityTransformation = isSingleCardinalityTransformation(attributeTransformation);

    setIsClickable(hasCrosslinking && isASingleCardinalityTransformation);
  }, [attribute]);

  return isClickable;
}

//#region Private members
function checkIfAttributeHasCrosslinking({
  attribute,
  cellEntityType,
  isIdTemporary,
}: UseIsAttributeClickable): boolean {
  const { crossLinking } = attribute;

  // *We need this for CrossLinking support
  const filteredCrossLinks = isNilOrEmpty(cellEntityType)
    ? [...crossLinking]
    : crossLinking.filter((link) => isLinkFilterableByEntityType(cellEntityType, link));

  return !isIdTemporary && !isNilOrEmpty(crossLinking) && !isNilOrEmpty(filteredCrossLinks);
}
//#endregion
