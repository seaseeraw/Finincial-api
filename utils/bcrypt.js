import bcrypt from 'bcryptjs';
const saltRound = 15;
export const hashPassword = (palinPassword) =>{
    return bcrypt.hashSync(palinPassword, saltRound);
};