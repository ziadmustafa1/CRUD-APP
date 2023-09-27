import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { insertPost } from '../state/postSlice'

const AddPost = () => {
  const [title, setTitle] = useState('')
  const [description, setdescription] = useState('')
  const dispatch = useDispatch()

  const fromHandle = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 500)
    dispatch(insertPost({id, title, description}))
  }
  return (
    <Form onSubmit={fromHandle}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label> title </Form.Label>
        <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label> description </Form.Label>
        <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setdescription(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type='submit'> submit </Button>
    </Form>
  )
}

export default AddPost
