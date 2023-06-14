"use client";

import { useState } from 'react';
import styles from "./page.module.scss";
import dataValues from '../../server/data';

export default function Home() {
	const [dataArray, setDataArray] = useState([]);
	const [inputValues, setInputValues] = useState({});
	const [result, setResult] = useState(0);


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
	

	const handleChange = (event) => {
		const { name, value } = event.target;
		setInputValues((prevInputValues) => ({
			...prevInputValues,
			[name]: value,
		}));
	};


	const handleSubmit = (event) => {
		event.preventDefault();
		const valuesArray = Object.values(inputValues);
		setDataArray((prevDataArray) => [...prevDataArray, ...valuesArray]);
		setResult(checkArray(dataArray));
		setInputValues({});
		dataValues(dataArray).then((data) => {
			console.log(dataArray);
			
			console.log(convertNumbers(dataArray));
		  });
		
		
		
	};
	const handleReset = (event) => {
		event.preventDefault();
		setDataArray([]);
		setResult(0);
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
				<div className={styles.superbox__form__extradiv}>
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
				<h2>history results: {`${result}`}</h2>
			
			</div>
		</div>
	);
}
