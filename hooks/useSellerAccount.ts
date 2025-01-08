'use client';

import { useState } from "react";
import { toast } from "react-toastify";

// Define the SellerData type
export interface SellerData {
    name: string;
    email: string;
    phone: string;
    description: string;
    profileImage: string | null;
    websiteUrl: string | null;
    etsyShop: string | null;
    selectedInterests: any;
    enableNotifications: boolean
}

// Hook for multi-step seller account setup
export const useSellerAccountSetup = ({
    initialData,
    onUpdate,
}: {
    initialData: SellerData;
    onUpdate: (data: SellerData) => void;
}) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        country: '',
        selectedInterests: [] as string[],
        enableNotifications: false,
    });

    // Move to the next step
    const handleNext = () => setStep((prev) => prev + 1);

    // Select a field value (e.g., country)
    const handleSelect = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    // Toggle interest selection
    const handleCheckboxChange = (interest: string) => {
        setFormData((prev) => {
            const selected = prev.selectedInterests.includes(interest)
                ? prev.selectedInterests.filter((i) => i !== interest)
                : [...prev.selectedInterests, interest];
            return { ...prev, selectedInterests: selected };
        });
    };

    // Toggle notification preference
    const toggleNotifications = () => {
        setFormData((prev) => ({ ...prev, enableNotifications: !prev.enableNotifications }));
    };

    // Finish the account setup
    const handleFinish = () => {
        alert("Account setup complete");
    };

    return {
        step,
        formData,
        handleNext,
        handleSelect,
        handleCheckboxChange,
        toggleNotifications,
        handleFinish,
    };
};




// Hook for managing seller account details
export const useSellerAccountDetails = (
    initialData: SellerData,
    onUpdate: (data: SellerData) => void
) => {
    const [formData, setFormData] = useState({
        name: initialData.name || "",
        email: initialData.email || "",
        phone: initialData.phone || "",
        description: initialData.description || "",
        profileImage: initialData.profileImage || "",
        websiteUrl: initialData.websiteUrl || "",
        etsyShop: initialData.etsyShop || "",
        selectedInterests: initialData.selectedInterests || [],
        enableNotifications: initialData.enableNotifications || false,
    });

    const [isUpdating, setIsUpdating] = useState(false);

    // Handle profile image upload
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setFormData(prevData => ({
                    ...prevData,
                    profileImage: reader.result as string
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    // Update seller account details
    const handleUpdate = async () => {
        const { name, email, phone, description, websiteUrl, etsyShop, profileImage } = formData;
        if (!name || !email || !description) {
            toast.error("All fields are required!");
            return;
        }

        setIsUpdating(true);
        try {
            const updatedData: SellerData = { name, email, description, phone, websiteUrl, etsyShop, profileImage };
            onUpdate(updatedData); // Call parent-provided update function
            toast.success("Account updated successfully!");
        } catch (error) {
            toast.error("Failed to update account. Please try again.");
        } finally {
            setIsUpdating(false);
        }
    };

    // Handle form field change
    const handleFieldChange = (field: string, value: any) => {
        setFormData(prevData => ({
            ...prevData,
            [field]: value
        }));
    };

    return {
        formData,
        isUpdating,
        setFormData,
        handleFieldChange,
        handleImageUpload,
        handleUpdate,
    };
};