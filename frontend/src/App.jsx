import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';


function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/message')
      .then(res => res.json())
      .then(data => setMessage(data.text));
  }, [message,setMessage]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{message}</h1>
      <p className='text-purple-900'>Deployment successful</p>
      
      <Outlet/>
      
    </div>
  );
}

export default App;
