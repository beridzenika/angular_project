type Status = 'To Do' | 'In Progress' | "Done";

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