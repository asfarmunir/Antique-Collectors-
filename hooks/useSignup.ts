'use client';
import { useState } from "react";

const useSignup = () => {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        mobile: "",
        password: "",
        confirmPassword: "",
        terms: false,
    });
    const [errors, setErrors] = useState({});
    const [currentStep, setCurrentStep] = useState(1);
    const [otp, setOtp] = useState(["", "", "", ""]);

    const handleInputChange = (e: any) => {
        if (!e.target) {
            console.error("Event target is undefined", e);
            return;
        }
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleOtpChange = (index: number, value: string) => {
        const updatedOtp = [...otp];
        updatedOtp[index] = value.slice(0, 1);
        setOtp(updatedOtp);

        if (updatedOtp.every((digit) => digit !== "")) {
            setTimeout(() => setCurrentStep(4), 500);
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (currentStep === 2) {
            if (!formData.name || !formData.mobile || !formData.password || !formData.confirmPassword) {
                return { success: false, message: "Please fill all fields" };
            }
            if (formData.password !== formData.confirmPassword) {
                return { success: false, message: "Passwords do not match!" };
            }

            alert('account created successfully');
            setCurrentStep(3);
            console.log(`${formData.mobile}, ${formData.email}, ${formData.name}`)
            return { success: true, message: "Check your mail!" };
        } else if (currentStep === 1) {
            setCurrentStep(2);
        }
    };

    return {
        formData,
        setFormData,
        currentStep,
        setCurrentStep,
        otp,
        setOtp,
        handleInputChange,
        handleOtpChange,
        handleSubmit,
    };
};

export default useSignup;
