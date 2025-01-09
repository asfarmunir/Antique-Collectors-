'use client';

import { useState } from "react";
import { toast } from "react-toastify";

export interface SellerData {
    name: string;
    email: string;
    description: string;
    profileImage: string | null;
    websiteUrl: string | null;
    etsyShop: string | null;
    country: string;
    selectedInterests: [];
    enableNotifications: boolean;
    subscriptionPlan: string | null; // Add this field
}




// Hook for managing seller account details
export const useSellerAccountDetails = (initialData: SellerData,) => {

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: initialData.name || "",
        email: initialData.email || "",
        country: initialData.country || "",
        description: initialData.description || "",
        profileImage: initialData.profileImage || "",
        websiteUrl: initialData.websiteUrl || "",
        etsyShop: initialData.etsyShop || "",
        selectedInterests: initialData.selectedInterests || [],
        enableNotifications: initialData.enableNotifications || false,
        subscriptionPlan: initialData.subscriptionPlan || null, // Initialize subscription plan
    });

    const [isUpdating, setIsUpdating] = useState(false);


     // Move to the next step
     const handleNext = () => setStep((prev) => prev + 1);
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

      // Method to update the subscription plan
      const updateSubscriptionPlan = (plan: string) => {
        setFormData((prev) => ({ ...prev, subscriptionPlan: plan }));
        toast.success(`Subscription plan updated to ${plan}`);
    };



       // Finish the account setup
       const handleFinish = () => {
        alert("Account setup complete");
    };

      // Select a field value (e.g., country)
      const handleSelect = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };


    
    // Toggle notification preference
    const toggleNotifications = () => {
        setFormData((prev) => ({ ...prev, enableNotifications: !prev.enableNotifications }));
    };

    // Update seller account details
    const handleUpdate = async () => {
        const { name, email, country, description, websiteUrl, etsyShop, profileImage, selectedInterests, subscriptionPlan } = formData;
        if (!name || !email || !description) {
            toast.error("All fields are required!");
            return;
        }

        handleNext();
        setIsUpdating(true);
        try {
           
            const updatedData: SellerData = { name, email, description, country, websiteUrl, selectedInterests, subscriptionPlan, etsyShop, profileImage };
            console.log(updatedData);
          
            toast.success("Account updated successfully!");
          
        } catch (error) {
            toast.error("Failed to update account. Please try again.");
        } finally {
            setIsUpdating(false);
        }
    };


    const handleCheckboxChange = (item: string) => {
        setFormData(prevData => {
            const isSelected = prevData.selectedInterests.includes(item);
            console.log(item);
            return {
                ...prevData,
                selectedInterests: isSelected
                    ? prevData.selectedInterests.filter((interest) => interest !== item)  // Deselect if already selected
                    : [...prevData.selectedInterests, item] // Select if not already selected
            };
        });
    };
    

    // Handle form field change
    const handleFieldChange = (field: string, value: any) => {
        
        setFormData(prevData => ({
            ...prevData,
            [field]: value

            
        }));
    };

    return {
        step,
        setStep,
        formData,
        handleNext,
        handleSelect,
        toggleNotifications,
        updateSubscriptionPlan,
        isUpdating,
        handleFinish,
        setFormData,
        handleCheckboxChange,
        handleFieldChange,
        handleImageUpload,
        handleUpdate,
    };
};