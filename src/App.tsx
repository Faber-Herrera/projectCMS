import { useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import { User } from './types/User';

function App() {
  const [userList, setUserList] = useState<User[]>([]);

  const handleSend = (user: User) => {
    setUserList([...userList, user]);
  };

  const handleRemove = (index: number) => {
    if (index > -1) {
      const newUserList = [...userList];
      newUserList.splice(index, 1);
      setUserList(newUserList);
    }
  };

  return (
    <>
      <Form send={handleSend} />
      <Table userList={userList} remove={handleRemove} />
    </>
  );
}

export default App;
