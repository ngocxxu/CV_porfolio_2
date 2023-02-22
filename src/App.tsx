import { useState } from 'react';
import './App.css';
import { Button } from '@mantine/core';
import { IconDatabase } from '@tabler/icons-react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='text-red-600 text-2xl'>
      <Button leftIcon={<IconDatabase />} variant='white'>
        Connect to database
      </Button>
    </div>
  );
}

export default App;
