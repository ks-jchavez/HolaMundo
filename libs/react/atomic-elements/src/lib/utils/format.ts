import { FormatProps } from '@kleeen/types';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { path } from 'ramda';

interface GetFormat {
  attributeFormat: FormatProps;
  backendFormat: FormatProps;
}

export const getAttributeFormat = path(['value', 'format']);
export const getAttributeFormatType = path(['value', 'formatType']);
export const getAttributeTransformation = path(['value', 'transformation']);

export function getAttributeBackendFormat(name: string) {
  return path(['format', name]);
}

export function getFormat({ attributeFormat, backendFormat }: GetFormat): FormatProps {
  return isNilOrEmpty(backendFormat) ? attributeFormat : backendFormat;
}
