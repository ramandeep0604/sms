import bcrypt from 'bcrypt';


const data=[{
    name:"Raman",
    email:"raman@gmail.com",
    password:await bcrypt.hash('raman18113114',15)
},
]
console.log(data);

