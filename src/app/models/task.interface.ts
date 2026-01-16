type Status = 'To Do' | 'In Progress' | "Done";

export interface Task {
    id: number;
    title: string;
    assignee: string;
    status: Status;
    description: string;
};