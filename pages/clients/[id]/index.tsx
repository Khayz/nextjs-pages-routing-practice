import {useRouter} from "next/router";

function ClientProjectPage() {
  const router = useRouter();

  function loadProjectTrigger() {
    // Load data...
    console.log('Loading project...');
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'charly', clientprojectid: 'projecta' }
    });
  }

  return (
    <div>
      <h1>The Project Page for a Specific Client</h1>
      <button onClick={loadProjectTrigger}>Load Project A</button>
    </div>
  );
}

export default ClientProjectPage;
