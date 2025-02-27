import React from "react";

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = React.useState("");
  const [age, setAge] = React.useState(null);
  const [error, setError] = React.useState(null);

  const calculateAge = () => {
    if (!birthDate) {
      setError("Please enter a birthdate");
      setAge(null);
      return;
    }
    const today = new Date();
    const birth = new Date(birthDate);

    //Check if birthdate is in the future
    if (birth > today) {
      setError("Birthdate cannot be in the future");
      setAge(null);
      return;
    }
    setError("");

    //calculate age
    let ageYears = today.getFullYear() - birth.getFullYear();
    let ageMonths = today.getMonth() - birth.getMonth();
    let ageDays = today.getDate() - birth.getDate();

    // Adjust if birth month/day is after current month/day
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--;
      ageMonths += 12;
    }

    // Adjust for negative days
    if (ageDays < 0) {
      const prevMonthDate = new Date(today.getFullYear(), today.getMonth(), 0);
      ageDays += prevMonthDate.getDate();
      ageMonths--;
    }

    setAge({ years: ageYears, months: ageMonths, days: ageDays });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-full max-w-md mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center text-indigo-600">
          Age Calculator
        </h1>
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Enter your birth date
          </label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
          />
          {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
        </div>
        <button
          onClick={calculateAge}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 mb-6"
        >
          Calculate Age
        </button>{" "}
        {age && (
          <div className="bg-indigo-50 rounded-lg p-4 text-center">
            <h2 className="text-xl font-bold mb-2 text-indigo-600">Your Age</h2>
            <div className=" flex justify-center space-x-4">
              {" "}
              <div className="bg-white rounded-lg shadow-md p-3 w-24">
                <div className="text-2xl font-bold text-indigo-600">
                  {age.years}
                </div>
                <div className="text-gray-600">Years</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-3 w-24">
                <div className="text-2xl font-bold text-indigo-600">
                  {age.months}
                </div>
                <div className="text-gray-600">Months</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-3 w-24">
                <div className="text-2xl font-bold text-indigo-600">
                  {age.days}
                </div>
                <div className="text-gray-600">Days</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgeCalculator;
