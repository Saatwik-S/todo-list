import React from 'react'
import TodoInput from './TodoInput'
import TaskDisplay from './TaskDisplay'
import Footer from './Footer'
import Header from './Header'

export default function Todo (): JSX.Element {
  const [tasks, setTasks] = React.useState<string[]>([])

  const handleTaskChangeAction = (changeType: string, task: string): void => {
    if (changeType === 'add') {
      setTasks([...tasks, task])
    } else if (changeType === 'delete') {
      setTasks(tasks.filter((t) => t !== task))
    }
  }

  return (
        <div className='main-body'>
            <Header />
            <div className='todo'>
            <TodoInput handleTaskChangeAction={handleTaskChangeAction} />
            <TaskDisplay
                handleTaskChangeAction={handleTaskChangeAction}
                tasks={tasks}
            />
            </div>
            <Footer />

        </div>
  )
}
