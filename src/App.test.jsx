
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('Registration form integration tests', () => {
  test('displays the registration form', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /create an account/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /register/i })
    ).toBeInTheDocument()
  })

  test('shows an error for invalid email and password', () => {
    render(<App />)

    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: 'hello' },
    })

    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'hello' },
    })

    fireEvent.click(screen.getByRole('button', { name: /register/i }))

    expect(
      screen.getByText('Please enter a valid email address')
    ).toBeInTheDocument()

    expect(
      screen.getByText('Password must be at least 8 characters')
    ).toBeInTheDocument()
  })

  test('shows a success message for valid details', () => {
    render(<App />)

    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: 'hello@gmail.com' },
    })

    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'Hello123!' },
    })

    fireEvent.click(screen.getByRole('button', { name: /register/i }))

    expect(
      screen.getByText('Your details have passed validation!')
    ).toBeInTheDocument()
  })
})
