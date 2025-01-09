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
     const handleNext = () => setStep((prev) => prev + 1 );
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
        const { name, email, country, description, websiteUrl, etsyShop, profileImage, selectedInterests, subscriptionPlan, enableNotifications } = formData;
        if (!name || !email || !description || !country) {
            toast.error("All fields are required!");
            return;
          }
          

      
        setIsUpdating(true);
        try {
           
            const updatedData: SellerData = { name, email, description, country, websiteUrl, selectedInterests, subscriptionPlan, etsyShop, profileImage, enableNotifications };
            console.log(updatedData);
          
            toast.success("Account updated successfully!");
         
        } catch (error) {
            toast.error("Failed to update account. Please try again.");
        } finally {
            setIsUpdating(false);
        }
    };


           // Finish the account setup
      


        const handleCheckboxChange = (item: string) => {
            setFormData(prevData => {
              const isSelected = prevData.selectedInterests.includes(item);
              return {
                ...prevData,
                selectedInterests: isSelected
                  ? prevData.selectedInterests.filter((interest) => interest !== item)
                  : [...prevData.selectedInterests, item],
              };
            });
          };
          
    

    // Handle form field change
    const handleFieldChange = (field: string, value: any) => {
        console.log(`${value}`);
        
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
      
        isUpdating,
        setFormData,
        handleCheckboxChange,
        handleFieldChange,
        handleImageUpload,
        handleUpdate,
    };
};