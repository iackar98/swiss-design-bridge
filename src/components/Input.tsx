import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = ({
  label,
  error,
  helperText,
  className,
  ...props
}: InputProps) => {
  
  // Švicarska preciznost: stanja polja definirana kroz klase
  const baseInputStyles = "w-full px-4 py-2.5 rounded-lg border-2 transition-all duration-200 outline-none text-base";
  
  const stateStyles = error 
    ? "border-red-500 focus:border-red-600 bg-red-50" 
    : "border-slate-200 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100 bg-white";

  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label className="text-sm font-semibold text-slate-700 ml-1">
          {label}
        </label>
      )}
      
      <input
        className={`${baseInputStyles} ${stateStyles}`}
        {...props}
      />
      
      {error ? (
        <span className="text-xs text-red-600 font-medium ml-1">{error}</span>
      ) : helperText ? (
        <span className="text-xs text-slate-500 ml-1">{helperText}</span>
      ) : null}
    </div>
  );
};