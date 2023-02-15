import React from 'react'
import Task from './Task'

interface TaskDisplayProps {
  tasks: string[]
  handleTaskChangeAction: (changeType: string, task: string) => void
}

export default function TaskDisplay ({
  tasks,
  handleTaskChangeAction
}: TaskDisplayProps): JSX.Element {
  return (
        <div className='todo-box'>
            <ul>
                {tasks.map((task) => (

                        <Task
                            key={Math.random()}
                            handleTaskChangeAction={handleTaskChangeAction}
                            task={task}
                        />

                ))}
            </ul>
        </div>
  )
}
