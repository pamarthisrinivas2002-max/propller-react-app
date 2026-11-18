
import { validateEmail, validatePassword } from './validation'

describe('Email validation', () => {
  test('accepts a valid email', () => {
    expect(validateEmail('hello@gmail.com')).toBe('')
  })

  test('rejects an invalid email', () => {
    expect(validateEmail('hello')).toBe(
      'Please enter a valid email address'
    )
  })

  test('rejects an empty email', () => {
    expect(validateEmail('')).toBe('Email is required')
  })
})

describe('Password validation', () => {
  test('accepts a valid password', () => {
    expect(validatePassword('Hello123!')).toBe('')
  })

  test('rejects a short password', () => {
    expect(validatePassword('Hi1!')).toBe(
      'Password must be at least 8 characters'
    )
  })

  test('rejects an empty password', () => {
    expect(validatePassword('')).toBe('Password is required')
  })

  test('requires an uppercase letter', () => {
    expect(validatePassword('hello123!')).toBe(
      'Password must contain an uppercase letter'
    )
  })
})
