import jwt from 'jsonwebtoken'
import  {jwtKey} from '../config/index.js'


export const createToken = async (payload, expiresIn = '24h') => {
    return await jwt.sign(payload,jwtKey,{ expiresIn})
}
export const verifyToken = async(token) => {
    return await jwt.verify(token,jwtKey)
} 