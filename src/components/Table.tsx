import { User } from '../types/User';

type Props = {
  userList: User[];
  remove: (index: number) => void;
};

function Table({ userList, remove }: Props) {
  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          <th scope='col'>Nombre</th>
          <th scope='col'>Apellido</th>
          <th scope='col'>Email</th>
          <th scope='col'>Tipo</th>
        </tr>
      </thead>
      <tbody>
        {userList.map((user, index) => (
          <tr key={index} onClick={() => remove(index)}>
            <td>{user.name}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            <td>{user.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
