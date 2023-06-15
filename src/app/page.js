"use client";

import { useState } from "react";
import styles from "./page.module.scss";
import dataValues from "../../server/data";

export default function Home() {
	const [array, setArray] = useState([]);
	const [inputValues, setInputValues] = useState({});
	const [currentResult, setCurrentResult] = useState(0);
	const [historicResults, setHistoricResults] = useState([]);

	const [error, setError] = useState("");
	const [inputs, setInputs] = useState([]);

	const handleChange = (index, event) => {
		const nuevosInputs = [...inputs];
		nuevosInputs[index] = event.target.value;
		setInputs(nuevosInputs);
		setArray(nuevosInputs);
		if (!Number(event.target.value)) {
			setError("ese valor no se sumará");
		} else {
			setError("");
		}
	};

	const check = (arr) => {
		let total = 0;

		for (const iterator of arr) {
			if (Number(iterator)) {
				console.log(iterator);
				total += Number(iterator);
			} else {
				setError("ese valor no se sumará");
			}
		}
		return total;
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setCurrentResult(check(array));
		setHistoricResults([...historicResults, check(array)]);
	};
	const handleReset = (event) => {
		event.preventDefault();
		setCurrentResult(0);
		setHistoricResults([]);
		setInputs([]);
		setError("");
	};
	const handleAdd = (event) => {
		event.preventDefault();
		setInputs([...inputs, ""]);
	};

	return (
		<div className={styles.superbox}>
			<h1 className={styles.superbox__h1}>full stack test</h1>
			<form action="" className={styles.superbox__h1} onSubmit={handleSubmit}>
				{inputs.map((value, index) => {
					return (
						<fieldset className={styles.superbox__form__fieldset} key={index}>
							<label htmlFor={`value ${index}`}>{`value ${index}`}</label>
							<input
								id={`value${index}`}
								placeholder={`value ${index}`}
								value={value}
								onChange={(event) => handleChange(index, event)}
							/>
						</fieldset>
					);
				})}
				<p className={styles.superbox__form__error}> {`${error}`} </p>
				<div className={styles.superbox__form__extradiv}>
					<input
						className={styles.superbox__form__submit}
						type="submit"
						value="Submit"
					/>
					<button
						type="reset"
						className={styles.superbox__form__reset}
						onClick={handleReset}
					>
						Reset
					</button>
					<button
						type="reset"
						className={styles.superbox__form__add}
						onClick={handleAdd}
					>
						Add
					</button>
				</div>
			</form>

			<div className={styles.superbox__results}>
				<h2>history results: {`${currentResult}`}</h2>
				<h2>history results: {`${historicResults}`}</h2>
			</div>
		</div>
	);
}
