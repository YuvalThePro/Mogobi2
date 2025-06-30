import bcrypt from 'bcrypt';


const SALT = 10;

export const hashPassword =  async (password) => {
  return await  bcrypt.hash(password,SALT)
}

export const verifyPassword = async (password,hashedPassword) => {
    return await bcrypt.compare(password,hashedPassword)
}