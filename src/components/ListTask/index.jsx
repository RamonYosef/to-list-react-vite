import { useState } from 'react'
import PropTypes from 'prop-types'

import style from './ListTask.module.scss'
import Modal from 'react-bootstrap/Modal'
import { Btn } from '../Btn'
import { InputTask, TextareaTask } from '../Input'

const ListTask = ({ task, deleteTask, setTask }) => {
  const [show, setShow] = useState(false)
  const [value, setValue] = useState({})
  const [newIndex, setIndex] = useState(0)
 

  function handleChange(e) {
    const valueInput = e.target.value

    setValue({
      ...value,
      [e.target.name]: valueInput,
    })
  }

  console.log('VALUE', value)

  const handleEditTask = (e) => {
    e.preventDefault()
    const edit = [...task]
    edit.splice(newIndex, 1, value)
    setTask(edit)
    console.log(newIndex)

    

    setShow(false)
  }

  

  return (
    <>
 
      <ul className={style.list}>
        {task.map((item, index) => (
          <li key={index} className={style.itens_task}>
            <span>
              <strong>Nome: </strong> {item.nome} <br />
              <strong>Descrição: </strong> {item.desc} <br />
              <br />
              <Btn className={style.btn_del} onClick={() => deleteTask(index)}>
                Delete
              </Btn>
              <Btn
                className={style.btn_edit}
                onClick={() => {
                  setShow(true)
                  setValue(item)
                  setIndex(index)
                }}
              >
                Edita
              </Btn>
              <Btn className={style.btn_check}>Concluida</Btn>
            </span>
          </li>
        ))}
      </ul>
      

      <div className={style.box_edit}>
        <Modal show={show} className={style.modal_edit}>
          <Modal.Body>
            <form className={style.task_form} onSubmit={handleEditTask}>
              <h1 className={style.title}>EDIT-LIST</h1>
              <InputTask
                type="text"
                placeholder="Nome"
                className={style.input_task}
                defaultValue={value.nome}
                name="nome"
                onChange={(e) => {
                  handleChange(e)
                }}
              />
              <TextareaTask
                placeholder="Descrição"
                className={style.input_task}
                defaultValue={value.desc}
                name="desc"
                onChange={(e) => {
                  handleChange(e)
                }}
              ></TextareaTask>
              <Btn className={style.btn_enviar}>EDITA</Btn>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  )
}

ListTask.propTypes = {
  task: PropTypes.array.isRequired,
  deleteTask: PropTypes.func,
  setTask: PropTypes.func,
}

export default ListTask
