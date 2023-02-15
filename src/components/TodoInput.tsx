import React from 'react'

interface TodoInputProps {
  handleTaskChangeAction: (changeType: string, task: string) => void
}

export default function TodoInput ({ handleTaskChangeAction }: TodoInputProps): JSX.Element {
  const [input, setInput] = React.useState<string>('')
  const handleInputChange = (e: any): void => {
    setInput(e.target.value)
  }
  const handleAddTodo = (): void => {
    if (input.length > 0) {
      handleTaskChangeAction('add', input)
      setInput('')
    }
  }

  return (<div className='input-div'>
    <input value={input} onChange={handleInputChange} type="text" />
    <button onClick={handleAddTodo} >ADD</button>
    </div>)
}
