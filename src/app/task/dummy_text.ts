type Status = 'To Do' | 'In Progress' | "Done";

type Task = {
    id: number;
    title: string;
    assignee: string;
    status: Status;
    description: string;
};

export const DUMMY_TASKS: Task[] = [
    {
        id: 0,
        title: 'Read Book',
        assignee: 'OL',
        status: 'To Do',
        description: 'read a book, specifically one about algorithms.'
    },
    {
        id: 1,
        title: 'write code',
        assignee: 'NB',
        status: 'Done',
        description: 'write Angular code and improve frontend skills.'
    },
    {
        id: 2,
        title: 'Find Goth GF',
        assignee: 'Stone',
        status: 'In Progress',
        description: 'find goth looking girl and beg her to be your girlfriend.'
    }
]