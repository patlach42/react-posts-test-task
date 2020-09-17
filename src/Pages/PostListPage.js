import React, {useEffect, useCallback} from 'react';
import { Link } from "react-router-dom";
import { useObserver, useLocalStore } from 'mobx-react'
import axios from 'axios';


function PostListPage() {
  const postsTable = useLocalStore(() => ({ data: [] }));
  const getData = useCallback(
    () => {
      axios.get('https://jsonplaceholder.typicode.com/posts').then((r)=>{
        postsTable.data = r.data;
      });
    }, [postsTable]
  );
  useEffect(()=>{
    getData();
  }, [getData]);

  return useObserver(() => (
    <>
      <Link to="/add">Add new post</Link>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {postsTable.data.map((item)=>(
            <tr key={item.id}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  ));
}

export default PostListPage;
