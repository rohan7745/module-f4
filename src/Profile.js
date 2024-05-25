import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (userId) {
      fetch(`https://dummyjson.com/users/${userId}`)
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(err => setError('An error occurred: ' + err.message));
    } else {
      setError('User not found');
    }
  }, []);

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default Profile;
