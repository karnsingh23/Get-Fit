import React, { useState } from "react";

const TextInput = ({
  label,
  placeholder,
  name,
  value,
  error,
  handleChange,
  textArea,
  rows,
  chipableInput,
  chipableArray,
  removeChip,
  small,
  popup,
  password,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`flex flex-col gap-1 ${small ? 'text-xs' : 'text-sm'}`}>
      <label className={`px-1 ${error ? 'text-red-500' : 'text-gray-700'}`}>
        {label}
      </label>
      <div className={`flex items-center gap-3 border rounded-lg p-4 ${error ? 'border-red-500' : 'border-gray-300'} ${popup ? 'text-gray-600' : 'text-gray-800'} ${small ? 'text-xs p-2' : 'text-sm'}`}>
        {chipableInput ? (
          <div className="flex flex-wrap gap-1">
            {chipableArray.map((chip, index) => (
              <div key={index} className="flex items-center bg-blue-200 text-blue-600 rounded-lg px-2 py-1 cursor-pointer transition duration-300 ease-in-out">
                <span>{chip}</span>
                <button onClick={() => removeChip(name, index)} className="ml-1 text-red-600">
                  &times; {/* Close icon as text */}
                </button>
              </div>
            ))}
            <input
              className={`flex-1 outline-none bg-transparent ${popup ? 'text-gray-600' : 'text-gray-800'} ${small ? 'text-xs' : 'text-sm'}`}
              placeholder={placeholder}
              name={name}
              value={value}
              onChange={handleChange}
            />
          </div>
        ) : (
          <>
            <input
              className={`flex-1 outline-none bg-transparent ${popup ? 'text-gray-600' : 'text-gray-800'} ${small ? 'text-xs' : 'text-sm'}`}
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
              type={password && !showPassword ? "password" : "text"}
              rows={textArea ? rows : undefined}
            />
            {password && (
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="ml-2">
                {showPassword ? '👁️' : '👁️‍🗨️'} {/* Show/Hide password icon */}
              </button>
            )}
          </>
        )}
      </div>
      {error && (
        <p className={`px-1 text-red-500 ${small ? 'text-xs' : 'text-sm'}`}>
          {error}
        </p>
      )}
    </div>
  );
};

export default TextInput;
