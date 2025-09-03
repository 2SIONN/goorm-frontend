export const validateRegister = (values) => {
  const errors = {}

  if (!values.email.trim()) {
    errors.email = '이메일을 입력해주세요.'
  }

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
    errors.email = '올바른 이메일 주소를 입력해주세요.'
  }

  if (!values.password) {
    errors.password = '비밀번호를 입력해주세요.'
  }

  if (!values.confirm) {
    errors.confirm = '비밀번호 확인을 입력해주세요.'
  }

  if (values.password !== values.confirm) {
    errors.confirm = '비밀번호가 일치하지 않습니다.'
  }

  return errors
}

export const validateEditForm = (values) => {
  const errors = {}

  if (!values.userName.trim()) {
    errors.userName = '이름을 입력해주세요.'
  }

  if (values.password && !values.currentPassword.trim()) {
    errors.currentPassword = '현재 비밀번호를 입력해주세요.'
  }

  if (values.password && !values.password.trim()) {
    errors.password = '새 비밀번호를 입력해주세요.'
  }

  if (values.password && !values.confirmPassword.trim()) {
    errors.confirmPassword = '비밀번호 확인을 입력해주세요.'
  }

  if (values.password && values.password !== values.confirmPassword) {
    errors.confirmPassword = '비밀번호가 일치하지 않습니다.'
  }

  return errors
}
