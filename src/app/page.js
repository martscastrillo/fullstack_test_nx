"use client";

import { useState } from "react";
import styles from "./page.module.scss";

export default function Home() {
	const [dataArray, setDataArray] = useState([]);
	const [inputValues, setInputValues] = useState({});
let result = 0;

const convertirNumeros = (array) => {
  const newArray = array.map((element) => {
    if (!isNaN(element)) {
      return Number(element);
    } else {
      return element;
    }
  });
  console.log('eee');
  console.log(newArray);
  return newArray;
}
const checkAllNumbers = (array) => {
  if(convertirNumeros(array)){
  
    return array.every((element) => typeof element === 'number');
  }
  
}
const addArray = (array) => {
  if(checkAllNumbers(array)){
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  }
 


}
	const handleChange = (event) => {
		const { name, value } = event.target;
		setInputValues((prevInputValues) => ({
			...prevInputValues,
			[name]: value,
		}));
	};

  result = addArray(dataArray);
	const handleSubmit = (event) => {
		event.preventDefault();
		const valuesArray = Object.values(inputValues);
		setDataArray((prevDataArray) => [...prevDataArray, ...valuesArray]);
    console.log(dataArray);
    result = addArray(dataArray);
    setInputValues({});
	};
	const handleReset = (event) => {
		event.preventDefault();
		setDataArray([]);
		setInputValues({});
	};





	return (
		<div className={styles.superbox}>
			<h1 className={styles.superbox__h1}>full stack test</h1>
			<form action="" className={styles.superbox__h1} onSubmit={handleSubmit}>
      <fieldset className={styles.superbox__form__fieldset}>
					<label htmlFor="value1">value 1</label>
					<input
						id="value1"
						placeholder="value 1"
						name="input1"
						value={inputValues.input1 || ""}
						onChange={handleChange}
					/>
				</fieldset>
        <fieldset className={styles.superbox__form__fieldset}>
					<label htmlFor="value2">value 2</label>
					<input
						id="value2"
						placeholder="value 2"
						name="input2"
						value={inputValues.input2 || ""}
						onChange={handleChange}
					/>
				</fieldset>
        <fieldset className={styles.superbox__form__fieldset}>
					<label htmlFor="value3">value 3</label>
					<input
						type="text"
						id="value3"
						placeholder="value 3"
						name="input3"
						value={inputValues.input3 || ""}
						onChange={handleChange}
					/>
				</fieldset>
        <fieldset className={styles.superbox__form__fieldset}>
					<label htmlFor="">value 4</label>
					<input
						type="text"
						placeholder="value 4"
						id="value4"
						name="input4"
						value={inputValues.input4 || ""}
						onChange={handleChange}
					/>
				</fieldset>
				<div 	className={styles.superbox__form__extradiv}>
					<input
						className={styles.superbox__form__submit}
						type="submit"
						value="Submit"
					/>
					<button
						type="reset"
            className={styles.superbox__form__submit}
						onClick={handleReset}
					>
						Reset
					</button>
				</div>
			</form>

			<div className={styles.superbox__results}>
				<h2>history results: {result}</h2>				
			</div>
		</div>
	);
}
