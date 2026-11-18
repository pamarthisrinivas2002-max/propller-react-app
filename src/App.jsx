
import { useState } from 'react'
import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material'

import {
  validateEmail,
  validatePassword,
} from './utils/validation'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [success, setSuccess] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    const emailMessage = validateEmail(email)
    const passwordMessage = validatePassword(password)

    setEmailError(emailMessage)
    setPasswordError(passwordMessage)
    setSuccess(false)

    if (!emailMessage && !passwordMessage) {
      setSuccess(true)
    }
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, p: 4, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create an Account
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          Enter your email and password to register.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            margin="normal"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
              setSuccess(false)
            }}
            error={Boolean(emailError)}
            helperText={emailError}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value)
              setSuccess(false)
            }}
            error={Boolean(passwordError)}
            helperText={passwordError}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
          >
            Register
          </Button>

          {success && (
            <Alert severity="success" sx={{ mt: 2 }}>
              Your details have passed validation!
            </Alert>
          )}
        </Box>
      </Box>
    </Container>
  )
}

export default App
