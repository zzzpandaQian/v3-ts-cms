// 但所传参数的值与对应的类型所含有的属性不同时，可以通过Partial<User>的方式，本质是给User的属性加上了？可选
// 或者直接用 | 来新增参数类型例如：arg1: User | {age: number}，但是只有在特定条件下才能使用

interface User {
    type: "user";
    name: string;
    age: number;
    occupation: string;
  }
  
  interface Admin {
    type: "admin";
    name: string;
    age: number;
    role: string;
  }
  
  export type Person = User | Admin;
  
  export const persons: Person[] = [
    {
      type: "user",
      name: "Max Mustermann",
      age: 25,
      occupation: "Chimney sweep",
    },
    {
      type: "admin",
      name: "Jane Doe",
      age: 32,
      role: "Administrator",
    },
    {
      type: "user",
      name: "Kate Müller",
      age: 23,
      occupation: "Astronaut",
    },
    {
      type: "admin",
      name: "Bruce Willis",
      age: 64,
      role: "World saver",
    },
    {
      type: "user",
      name: "Wilson",
      age: 23,
      occupation: "Ball",
    },
    {
      type: "admin",
      name: "Agent Smith",
      age: 23,
      role: "Administrator",
    },
  ];
  
  export const isAdmin = (person: Person): person is Admin =>
    person.type === "admin";
  export const isUser = (person: Person): person is User =>
    person.type === "user";
  
  export function logPerson(person: Person) {
    let additionalInformation = "";
    if (isAdmin(person)) {
      additionalInformation = person.role;
    }
    if (isUser(person)) {
      additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
  }

  export function filterUsers(persons: Person[], criteria: Partial<User>): User[] {
      // 或者如下
//   export function filterUsers(persons: Person[], criteria: User|{age: number}): User[] {
    return persons.filter(isUser).filter((user) => {
      const criteriaKeys = Object.keys(criteria) as (keyof User)[];
      return criteriaKeys.filter((fieldName) => {
        return user[fieldName] === criteria[fieldName];
      });
    });
  }
  
  console.log("Users of age 23:");
  
  filterUsers(persons, {
    age: 23,
  }).forEach(logPerson);