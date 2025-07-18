import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const MySwal = withReactContent(Swal);

function Login() {
  const handleClick = () => {
    MySwal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('User confirmed!');
      }
    });
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleClick}>Show Alert</button>
    </div>
  );
}

export default Login;
