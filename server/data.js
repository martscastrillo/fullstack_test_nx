const dataValues = (data) => {
    console.log('Se estan recibiendo los datos');
    console.log(data);
    return (fetch('//localhost:4000/calc', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        
        return data;
      }));
  };
  
  export default dataValues;