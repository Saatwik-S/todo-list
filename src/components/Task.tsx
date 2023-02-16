import React from 'react'
interface TaskProps {
  task: string
  handleTaskChangeAction: (changeType: string, task: string) => void
}

export default function Task ({
  task,
  handleTaskChangeAction
}: TaskProps): JSX.Element {
  const handleDeleteTask = (): void => {
    handleTaskChangeAction('delete', task)
  }

  return (
        <div className='todo-item'>
            <p>{task}</p>
            <button onClick={handleDeleteTask}>DELETE</button>
        </div>
  )
}
