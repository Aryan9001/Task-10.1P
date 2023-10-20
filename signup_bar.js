import React, { useState } from 'react';
import { Container, Input, Button } from 'semantic-ui-react';

const SignupBar = () => {

const [mail,setMail] = useState('');

  const subscription = async () => {
    try {
      const response = await fetch('http://localhost:5000/subscription', { 
        method: 'POST',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded', 
        },
        body: `email=${encodeURIComponent(mail)}`,
      });

      if (response.status === 200) {
        alert('Email sent successfully');
      } else {
        alert('Error sending email');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };



  return (
    <Container fluid style={{ backgroundColor: '#f0f0f0', padding: '10px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0' }}>
      <p style={{ marginRight: '10px', marginLeft: '115px', fontWeight: 'bold', fontSize: '18px' }}>Sign up for our daily insider</p>
      <Input placeholder="Enter your email"  value = {mail} onChange = {(e) =>setMail(e.target.value)} style={{ width: '1050px', marginRight: '10px' }} />
      <Button onClick={subscription} primary style={{ marginLeft: '-10px' }}>
        Subscribe
      </Button>
    </Container>
  );
};

export default SignupBar;
