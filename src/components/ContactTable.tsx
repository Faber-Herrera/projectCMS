import { Contact } from '../schemas/Contact';

type Props = {
  contacts: Contact[];
  onClick: (id: string) => void;
};

function ContactTable({ contacts, onClick }: Props) {
  return (
    <table className='table table-striped table-hover'>
      <thead>
        <tr>
          <th scope='col'>Nombre</th>
          <th scope='col'>Apellido</th>
          <th scope='col'>Email</th>
          <th scope='col'>Tipo</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((c) => (
          <tr style={{ cursor: 'pointer' }} key={c.id} onClick={() => onClick(c.id)}>
            <td>{c.name}</td>
            <td>{c.lastname}</td>
            <td>{c.email}</td>
            <td>{c.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ContactTable;
