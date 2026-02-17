export type Status = 'To Do' | 'In Progress' | "Done";

export interface Task {
    id: number;
    title: string;
    assignee: string;
    status: Status;
};

export interface TaskDetail extends Task{
    description: string;
    due: string;
}

export const STATUS_ICON_MAP: Record<Status, string> = {
  'To Do': 'assets/icons/todo.png',
  'In Progress': 'assets/icons/progress.png',
  'Done': 'assets/icons/done.png'
};