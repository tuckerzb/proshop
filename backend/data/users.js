import bcryptjs from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'zbtucker@gmail.com',
        password: bcryptjs.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        password: bcryptjs.hashSync('123456', 10),
    },
    {
        name: 'Jane Doe',
        email: 'janedoe@gmail.com',
        password: bcryptjs.hashSync('123456', 10),
    }
]

export default users;