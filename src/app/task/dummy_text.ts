import { Task } from "../models/task.interface"
export const DUMMY_TASKS: Task[] = [
    {
        id: 0,
        title: 'Read a book',
        assignee: 'OL',
        status: 'To Do',
    },
    {
        id: 1,
        title: 'Write code',
        assignee: 'NB',
        status: 'Done',
    },
    {
        id: 2,
        title: 'Find Goth GF',
        assignee: 'Stone',
        status: 'In Progress',
    },
    {
        id: 3,
        title: 'Make CogFly mechanism',
        assignee: 'NB',
        status: 'In Progress',
    }
]