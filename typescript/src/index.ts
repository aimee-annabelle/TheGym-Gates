// typescript gate index file
interface returnObj {
    x: boolean 
    y: string
}
// const setRange = (range: [boolean,string]): returnObj => {
//     const x = range[0];
//     const y = range[1];

//     return {x, y}
//   };
  
//   setRange([true, "10"]);

function setRange<T extends [boolean,string]>(range:T):{x:boolean,y:string} {
    const x = range[0];
    const y = range[1];
    return {x,y}
}

setRange([true, "10"]);