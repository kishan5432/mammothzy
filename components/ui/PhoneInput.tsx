"use client";

interface PhoneInputProps {
  countryCode: string;
  onCountryCodeChange: (code: string) => void;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
}

export default function PhoneInput({
  countryCode,
  onCountryCodeChange,
  value,
  onChange,
  error,
  placeholder,
}: PhoneInputProps) {
  return (
    <div>
      <div className="flex flex-row border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-black">
        <select
          value={countryCode}
          onChange={(e) => onCountryCodeChange(e.target.value)}
          className="border-0 border-r border-gray-300 bg-white px-2 py-2 text-sm text-gray-700 cursor-pointer outline-none"
        >
          <option value="+1">🇺🇸 +1</option>
          <option value="+44">🇬🇧 +44</option>
          <option value="+91">🇮🇳 +91</option>
          <option value="+61">🇦🇺 +61</option>
          <option value="+1">🇨🇦 +1</option>
          <option value="+49">🇩🇪 +49</option>
          <option value="+33">🇫🇷 +33</option>
          <option value="+81">🇯🇵 +81</option>
          <option value="+55">🇧🇷 +55</option>
          <option value="+65">🇸🇬 +65</option>
        </select>

        <input
          type="tel"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-3 py-2 text-sm outline-none bg-white border-0"
        />
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
