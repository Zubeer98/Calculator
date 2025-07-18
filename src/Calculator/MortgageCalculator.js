import React, { useState } from "react";

const MortgageCalculator = () => {
    const [loanAmount, setLoanAmount] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [loanTerm, setLoanTerm] = useState("");
    const [monthlyPayment, setMonthlyPayment] = useState(null);

    const calculateMortgage = () => {
        if (!loanAmount || !interestRate || !loanTerm) return;

        const principal = parseFloat(loanAmount);
        const annualInterest = parseFloat(interestRate) / 100;
        const numberOfPayments = parseInt(loanTerm) * 12;
        const monthlyInterest = annualInterest / 12;

        const payment =
            (principal * monthlyInterest) /
            (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));

        setMonthlyPayment(payment.toFixed(2));
    };

    const reset = () => {
        setLoanAmount("");
        setInterestRate("");
        setLoanTerm("");
        setMonthlyPayment(null);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Mortgage Calculator</h2>
            <input
                type="number"
                placeholder="Loan Amount (₹)"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                style={styles.input}
            />
            <input
                type="number"
                placeholder="Annual Interest Rate (%)"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                style={styles.input}
            />
            <input
                type="number"
                placeholder="Loan Term (Years)"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                style={styles.input}
            />
            <div style={styles.buttonGroup}>
                <button onClick={calculateMortgage} style={styles.buttonPrimary}>
                    Calculate
                </button>
                <button onClick={reset} style={styles.buttonSecondary}>
                    Reset
                </button>
            </div>
            {monthlyPayment && (
                <div style={styles.resultBox}>
                    <p style={styles.resultText}>
                        Estimated Monthly Payment: <strong>₹{monthlyPayment}</strong>
                    </p>
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
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 0 15px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
    },
    title: {
        fontSize: "24px",
        marginBottom: "20px",
        color: "#333",
    },
    input: {
        width: "100%",
        padding: "12px",
        margin: "10px 0",
        borderRadius: "6px",
        border: "1px solid #ccc",
        fontSize: "16px",
    },
    buttonGroup: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "15px",
    },
    buttonPrimary: {
        flex: 1,
        marginRight: "10px",
        padding: "10px",
        backgroundColor: "#28a745",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
    },
    buttonSecondary: {
        flex: 1,
        padding: "10px",
        backgroundColor: "#f0f0f0",
        color: "#333",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
    },
    resultBox: {
        marginTop: "25px",
        padding: "15px",
        backgroundColor: "#f9f9f9",
        borderRadius: "6px",
    },
    resultText: {
        fontSize: "18px",
        color: "#444",
    },
};

export default MortgageCalculator;
