import Link from "next/link";

function ClientsPage () {
  const clients = [
    { id: 'charly', name: 'Charly' },
    { id: 'mich', name: 'Mich' },
  ];

  return (
      <div>
        <h1>The Clients page</h1>
        <ul>
          {clients.map(client => (
              <li key={client.id}>
                <Link href={{
                  pathname: '/clients/[id]',
                  query: { id: client.id }
                }}>{client.name}</Link>
              </li>
          ))}
        </ul>
      </div>
  )
}

export default ClientsPage
