import { ReminderTypes, Situation, ReminderTag } from "./dueDateProperties";

export type DueDate = {
  count: string;
  situation: Situation;
  tag: ReminderTag;
  type: ReminderTypes
};
