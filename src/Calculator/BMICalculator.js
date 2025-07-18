import React, { useState } from "react";

const BMICalculator = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState("");

    const calculateBMI = () => {
        if (!weight || !height) return;

        const heightInMeters = height / 100;
        const bmiValue = weight / (heightInMeters * heightInMeters);
        setBmi(bmiValue.toFixed(2));

        if (bmiValue < 18.5) setCategory("Underweight");
        else if (bmiValue < 24.9) setCategory("Normal");
        else if (bmiValue < 29.9) setCategory("Overweight");
        else setCategory("Obese");
    };

    const resetForm = () => {
        setWeight("");
        setHeight("");
        setBmi(null);
        setCategory("");
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>BMI Calculator</h2>
            <input
                type="number"
                placeholder="Weight (kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                style={styles.input}
            />
            <input
                type="number"
                placeholder="Height (cm)"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                style={styles.input}
            />
            <div style={styles.buttonContainer}>
                <button onClick={calculateBMI} style={styles.buttonPrimary}>
                    Calculate
                </button>
                <button onClick={resetForm} style={styles.buttonSecondary}>
                    Reset
                </button>
            </div>
            {bmi && (
                <div style={styles.resultBox}>
                    <p style={styles.resultText}>Your BMI: <strong>{bmi}</strong></p>
                    <p style={styles.resultText}>Category: <strong>{category}</strong></p>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "400px",
        margin: "50px auto",
        padding: "30px",
        borderRadius: "10px",
        backgroundColor: "#fff",
        boxShadow: "0 0 15px rgba(0,0,0,0.1)",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
    },
    title: {
        fontSize: "24px",
        marginBottom: "20px",
        color: "#333",
    },
    input: {
        width: "100%",
        padding: "12px",
        margin: "8px 0",
        borderRadius: "6px",
        border: "1px solid #ccc",
        fontSize: "16px",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "10px",
    },
    buttonPrimary: {
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
    },
    buttonSecondary: {
        padding: "10px 20px",
        backgroundColor: "#e0e0e0",
        color: "#333",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
    },
    resultBox: {
        marginTop: "20px",
    },
    resultText: {
        fontSize: "18px",
        color: "#444",
    },
};

export default BMICalculator;
