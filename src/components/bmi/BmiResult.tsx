import React from "react";

interface Props {
    bmi: number;
    bmiCategory: string;
}

const BmiResult: React.FC<Props> = ({bmi, bmiCategory}) => {
    return (
        <div className="bmi-result ion-padding">
            <h2>Hasil Perhitungan BMI</h2>
            <p>BMI anda: {bmi.toFixed(1)}</p>
            <p>Kategori BMI: {bmiCategory}</p>
        </div>
    );
};
export default BmiResult;