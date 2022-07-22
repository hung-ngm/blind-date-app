export const getAge = (birthday: Date) => {
  if (!birthday) return 0;
  return new Date().getFullYear() - birthday.getFullYear()
}