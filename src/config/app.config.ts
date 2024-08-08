const appConfig = {
  baseURL: import.meta.env.VITE_BASE_API_URL ?? '',
  contact: {
    work: {
      phone: import.meta.env.VITE_PHONE_WORK_CONTACT ?? '',
      email: import.meta.env.VITE_EMAIL_WORK_CONTACT ?? ''
    },
    career: {
      phone: import.meta.env.VITE_PHONE_CAREER_CONTACT ?? '',
      email: import.meta.env.VITE_EMAIL_CAREER_CONTACT ?? ''
    }
  }
}

export default appConfig
