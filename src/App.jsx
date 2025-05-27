// App.jsx
import { useState } from "react";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);
      getBMICategory(bmiValue);
    } else {
      setBmi(null);
      setCategory("Enter valid weight and height");
    }
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) setCategory("Underweight 😟");
    else if (bmi < 25) setCategory("Normal weight 😊");
    else if (bmi < 30) setCategory("Overweight 😐");
    else setCategory("Obese 😟");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">BMI Calculator</h1>
        <p className=" font-semibold text-red-600">📏 1 foot = 30.48 centimeters (cm)</p>
        <div className="mb-4">
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Weight in kg"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Height in cm"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-purple-300"
          />
        </div>
        <button
          onClick={calculateBMI}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all"
        >
          Calculate BMI
        </button>

        {bmi && (
          <div className="mt-6">
            <p className="text-xl font-semibold text-gray-700">Your BMI: {bmi}</p>
            <p
              className={`mt-2 text-lg font-medium ${bmi < 18.5
                  ? "text-yellow-600"
                  : bmi < 25
                    ? "text-green-600"
                    : bmi < 30
                      ? "text-orange-500"
                      : "text-red-600"
                }`}
            >
              {category}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
