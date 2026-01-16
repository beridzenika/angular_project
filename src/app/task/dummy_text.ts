import { Task } from "../models/task.interface"
export const DUMMY_TASKS: Task[] = [
    {
        id: 0,
        title: 'Read a book',
        assignee: 'OL',
        status: 'To Do',
        description: 'read a book, specifically one about algorithms.'
    },
    {
        id: 1,
        title: 'Write code',
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
    },
    {
        id: 3,
        title: 'Make CogFly mechanism',
        assignee: 'NB',
        status: 'In Progress',
        description: 'make the working mechanism for cogfly wings/elytra in Autodesk.'
    }
]