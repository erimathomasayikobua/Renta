import React from 'react'

function PhoneInput() {
    const [countryCode, setCountryCode] = React.useState("+256");
    const [Phone, setPhone] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Full Number: ${countryCode} &{Phone}');
    }

    return (
        <form onSubmit={handleSubmit} className="phone-form">
            <label>Phone Number</label>
            <div className="phone-input">
                <select 
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    >
                        <option value="+256">UG +256(Uganda)</option>
                        <option value="+254">KE +254(Kenya)</option>
                        <option value="255">TZ +255(Tanzania)</option>
                        <option value="+211">SSD +211(South Sudan)</option>
                        <option value="+250">RW +250(Rwanda)</option>
                        <option value="+44">UK +44(UK)</option>
                        <option value="+1">USA +1(USA)</option>
                    </select>

                    <input
                    type="tel"
                    placeholder='Enter phone number'
                    value={Phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    />
            </div>
        </form>
    )
}

export default PhoneInput