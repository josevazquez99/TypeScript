interface user{
    name:string;
    age:number;
    occupation:string
};
export const users: user[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: user) {
    console.log(` - ${user.name}, ${user.age}, ${user.occupation}`);
}

console.log('Users:');
users.forEach(logPerson);


