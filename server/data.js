
const convertNumbers = (array) => {
    return array.map((element) => {
        if (!isNaN(element)) {
            return Number(element);
        } else {
            return element;
        }
    });
};

const checkAllNumbers = (array) => {
    return array.every((element) => typeof element === "number");
};

const addArray = (array) => {
    let total = 0;
    array.forEach((elemento) => {
        total += elemento;
    });
    return total;
};

const checkArray = (array) => {
    const arr = convertNumbers(array);
    if (checkAllNumbers(arr)) {
        return addArray(arr);
    }
};

const dataValues = (data) => {
    console.log('Se estan recibiendo los datos');
    return fetch('http://localhost:4000/calc', {
        method:'POST',
        body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) =>{
        console.log(response);
        if (response.ok) {
            console.log(response.json);
          return response.json();
        } else {
        console.log(response.json);
          console.log('err');
        }
      })
      .then((response) => {
        console.log(response, "data del fetch");
        return response;
      });
  };
  
  export default dataValues;