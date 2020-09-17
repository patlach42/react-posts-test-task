import React from 'react';
import { useHistory } from "react-router-dom";
import { useObserver, useLocalStore } from 'mobx-react'
import axios from 'axios';


function PostAddPage() {
  const history = useHistory();
  const addFormData = useLocalStore(() => ({ userId: '', title: '', body: '' }));

  function handleSubmitForm(e) {
    e.preventDefault();
    axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      {
        userId: addFormData.userId,
        title: addFormData.title,
        body: addFormData.body
      }
    ).then(()=>{
      history.push("/");
    });
  }

  return useObserver(() => (
    <form onSubmit={handleSubmitForm}>
      <input
        type="text"
        value={addFormData.userId}
        onChange={(e)=>{addFormData.userId = e.currentTarget.value}}
      />
      <input
        type="text"
        value={addFormData.title}
        onChange={(e)=>{addFormData.title = e.currentTarget.value}}
      />
      <input
        type="text"
        value={addFormData.body}
        onChange={(e)=>{addFormData.body = e.currentTarget.value}}
      />
      <button type="submit">Add</button>
    </form>
  ));
}

export default PostAddPage;
