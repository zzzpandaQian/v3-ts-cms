/**
 * 
 * 场景：当Person为User或着Admin，但User里特有occupation属性，Admin特有role属性，如何避免person.role不报错（由于无法确定是User或着Admin所以会报错）
 * 方案1：通过断言，但是必须通过括号括起来(<Admin>person).role
 * 方案2：类型膨胀，通过is,in,tyoeif, instanceof等方法判断
 * if('role' in person)... 
 * 建议使用第一种
 */

interface User {
    name: string;
    age: number;
    occupation: string;
  }
  
  interface Admin {
    name: string;
    age: number;
    role: string;
  }
  
  export type Person = User | Admin;
  
  export const persons: Person[] = [
    {
      name: "Max Mustermann",
      age: 25,
      occupation: "Chimney sweep",
    },
    {
      name: "Jane Doe",
      age: 32,
      role: "Administrator",
    },
    {
      name: "Kate Müller",
      age: 23,
      occupation: "Astronaut",
    },
    {
      name: "Bruce Willis",
      age: 64,
      role: "World saver",
    },
  ];
  
  export function logPerson(person: Person) {
    let additionalInformation: string;
    if ((<Admin>person).role) {
      additionalInformation = (<Admin>person).role;
    } else {
      additionalInformation = (<User>person).occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
  }
  
  persons.forEach(logPerson);