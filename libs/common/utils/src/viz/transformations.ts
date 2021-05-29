import { AggregationType as Transformation } from '@kleeen/types';

const TransformationsToSingleRecord = [
  Transformation.Latest,
  Transformation.Max,
  Transformation.Min,
  Transformation.Oldest,
  Transformation.SelfSingle,
];

export function isTransformationARecord(transformation: Transformation): boolean {
  return TransformationsToSingleRecord.includes(transformation);
}
