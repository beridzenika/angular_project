type Status = 'To Do' | 'In Progress' | "Done";

type Task = {
    id: number;
    title: string;
    assignee: string;
    status: Status;
};

export const DUMMY_TASKS: Task[] = [
    {
        id: 0,
        title: 'Read Book',
        assignee: 'OL',
        status: 'To Do'
    },
    {
        id: 1,
        title: 'write code',
        assignee: 'NB',
        status: 'Done'
    },
    {
        id: 2,
        title: 'Find Goth GF',
        assignee: 'Stone',
        status: 'In Progress'
    }
]