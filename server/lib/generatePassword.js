export const generatePassword= (lenght)=>{
let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0987654321#@$%*!'
console.log(str.length);
let password= ''
for(let i=0;i<=lenght;i++){
    password += str[Math.floor(Math.random()*68)]
    console.log(password)
}
    return password
}

