import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const countries = ['Select Country', 'USA', 'UK', 'India']; // Example countries
const cities = ['Select City', 'New York', 'London', 'Mumbai']; // Example cities

const Form = () => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        phone: '',
        country: '',
        city: '',
        panNo: '',
        aadharNo: '',
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key] && key !== 'password') {
                newErrors[key] = 'Required';
            }
        });
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            setSubmitted(true);
            // Here you would typically submit the form data to your backend
            // For now, let's just navigate to a success page with form data
            history.push('/success', { formData });
        }
    };

    return (
        <div>
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                    {errors.firstName && <span>{errors.firstName}</span>}
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                    {errors.lastName && <span>{errors.lastName}</span>}
                </div>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} />
                    {errors.username && <span>{errors.username}</span>}
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <div>
                    <label>Phone No.</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                    {errors.phone && <span>{errors.phone}</span>}
                </div>
                <div>
                    <label>Country</label>
                    <select name="country" value={formData.country} onChange={handleChange}>
                        {countries.map((country) => (
                            <option key={country} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                    {errors.country && <span>{errors.country}</span>}
                </div>
                <div>
                    <label>City</label>
                    <select name="city" value={formData.city} onChange={handleChange}>
                        {cities.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                    {errors.city && <span>{errors.city}</span>}
                </div>
                <div>
                    <label>PAN No.</label>
                    <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} />
                    {errors.panNo && <span>{errors.panNo}</span>}
                </div>
                <div>
                    <label>Aadhar No.</label>
                    <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} />
                    {errors.aadharNo && <span>{errors.aadharNo}</span>}
                </div>
                <button type="submit" disabled={submitted}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
