import React, {useCallback} from 'react';
import { useHistory } from "react-router-dom";
import { useObserver, useLocalStore } from 'mobx-react'
import axios from 'axios';


function PostAddPage() {
  const history = useHistory();
  const addFormData = useLocalStore(() => ({ userId: '', title: '', body: '' }));

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
          userId: addFormData.userId,
          title: addFormData.title,
          body: addFormData.body
        }
      ).then(() => {
        history.push("/");
      });
    }, [history, addFormData]
  );

  const handleUserIdInputChange = useCallback(
    (e) => {
      addFormData.userId = e.currentTarget.value
    }, [addFormData]
  );

  const handleBodyInputChange = useCallback(
    (e) => {
      addFormData.body = e.currentTarget.value
    }, [addFormData]
  );

  const handleTitleInputChange = useCallback(
    (e) => {
      addFormData.title = e.currentTarget.value
    }, [addFormData]
  );

  return useObserver(() => (
    <form onSubmit={handleSubmitForm}>
      <label htmlFor="userId">
        user id
      </label>
      <br/>
      <input
        type="text"
        id='userId'
        value={addFormData.userId}
        onChange={handleUserIdInputChange}
      />
      <br/>
      <label htmlFor="userId">
        title
      </label>
      <br/>
      <input
        type="text"
        id='title'
        value={addFormData.title}
        onChange={handleBodyInputChange}
      />
      <br/>
      <label htmlFor="userId">
        body
      </label>
      <br/>
      <input
        type="text"
        id='body'
        value={addFormData.body}
        onChange={handleTitleInputChange}
      />
      <br/>
      <button type="submit">Add</button>
      <button onClick={(e)=>{e.preventDefault(); history.push("/");}}>Cancel</button>
    </form>
  ));
}

export default PostAddPage;
