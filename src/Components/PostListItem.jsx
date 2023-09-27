/* eslint-disable array-callback-return */
import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

const PostListItem = ({data ,deleteRecord}) => {

  const deleteHandler = (item) => {
    if (window.confirm(`Do you really want to delete ${item.title}?`)) {
      deleteRecord(item.id)
    }    
    }
  
  const records = data.map((el , idx) => {
    <tr key={el.id}>
                <td>#{++idx}</td>
                <td>{el.title}</td>
                <td>
                  <ButtonGroup aria-label="Basic example">
                    <Button variant="success">Edit</Button>
                    <Button variant="danger" onClick={() => deleteHandler(el)}>
                      Delete
                      </Button>
                  </ButtonGroup>
                </td>
              </tr>
  })
  return (
    <div>
        {records}
    </div>
  )
}

export default PostListItem
