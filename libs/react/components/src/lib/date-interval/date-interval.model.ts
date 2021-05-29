import { Moment } from 'moment';

export type DateTimeProps = Moment;

export interface DateTimeIntervalProps {
  translate: (e: string) => string;
  handleFilter?: () => void;
  handleCloseDateFilter?: () => void;
  datePickerState: {
    from: DateTimeProps;
    to: DateTimeProps;
    setFrom: (e: DateTimeProps) => void;
    setTo: (e: DateTimeProps) => void;
    setRelativeDate: (e: string) => void;
  };
}
type DateType = {
  year: number;
  month: number;
  day: number;
  hours: number;
  minutes: number;
};

export type valueType = {
  from: DateType;
  to: DateType;
};
export interface DateValueIntervalProps {
  date: DateTimeProps;
  set: (e: DateTimeProps) => void;
  label: string;
  step: number;
  props: {
    minDate?: DateTimeProps;
    maxDate?: DateTimeProps;
  };
}

export interface DateValueMapProps {
  key: number;
  val: DateValueIntervalProps;
}
