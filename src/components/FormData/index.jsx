import { useState } from 'react'
import PropTypes from 'prop-types'
import style from './FormData.module.scss'
import { InputTask, TextareaTask } from '../Input'
import { Btn } from '../Btn'

const FormData = ({ onAddTask }) => {
  const [nome, setNome] = useState('')
  const [desc, setDesc] = useState('')
  const [index, setIndex] = useState(0)
  const data = { index: index, nome: nome, desc: desc, check: false }


  const onSubmitForm = (e) => {
    e.preventDefault()
    onAddTask(data)
    setIndex(index + 1)
  }

  return (
    <div className={style.wrapper}>
      <form onSubmit={onSubmitForm} className={style.task_form}>
        <h1 className={style.title}>TO-LIST</h1>
        <InputTask
          type="text"
          placeholder="Nome"
          className={style.input_task}
          onChange={(e) => {
            setNome(e.target.value)
          }}
          required
        />
        <TextareaTask
          placeholder="Descrição"
          className={style.input_task}
          onChange={(e) => {
            setDesc(e.target.value)
          }}
        ></TextareaTask>
        <Btn className={style.btn_enviar}>ENVIAR</Btn>
      </form>
    </div>
  )
}

FormData.propTypes = {
  onAddTask: PropTypes.func.isRequired,
}
export { FormData }
export default FormData
