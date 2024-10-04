const target = {
    name: "John",
    age: 30,
  };
  
  const handler = {
    get: (obj, prop) => {
      if (prop in obj) {
        console.log(`Getting property: ${prop}`);
        return Reflect.get(obj, prop);
      } else {
        return `Property ${prop} not found`;
      }
    },
    set: (obj, prop, value) => {
      console.log(`Setting property: ${prop} to ${value}`);
      return Reflect.set(obj, prop, value);
    }
  };
  
  const proxy = new Proxy(target, handler);
  
  console.log(proxy.name); 
  proxy.age = 25;
  console.log(proxy.age);
  console.log(proxy.gender); 