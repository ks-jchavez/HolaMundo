export interface AttributeInputEvents {
  id?: string;
  onSave: () => any;
  onCancel: () => void;
}

let configInputEventList: AttributeInputEvents[] = [];

export const useEntityDetailsEventHandler = (): [
  AttributeInputEvents[],
  {
    addEvent: (event: AttributeInputEvents) => void;
    clearEventList: () => void;
  },
] => {
  return [
    configInputEventList,
    {
      addEvent: (event: AttributeInputEvents) => {
        if (Object.prototype.hasOwnProperty.call(event, 'id')) {
          configInputEventList = configInputEventList.filter(
            (currentEvent) => !currentEvent.id || currentEvent.id !== event.id,
          );
        }
        configInputEventList.push(event);
      },
      clearEventList: () => {
        configInputEventList = [];
      },
    },
  ];
};
