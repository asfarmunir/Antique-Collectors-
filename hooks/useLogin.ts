'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


export const useLogin=()=>{
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();



    const handleEmailSubmit=(e: React.FormEvent)=>{
        e.preventDefault();

        if(email.trim() !==""){
            setStep(2);
        }else{
            toast.error("Please enter a valid email.");
        }
    };



    const handlePasswordSubmit = (e: React.FormEvent)=>{
        e.preventDefault();
        if (!email || !password) {
            toast.error('Please fill all fields');
          }
          if (email && password) {
            toast.success('Successfully logged in!');
            alert(`Login Successful!\nEmail: ${email}\nPassword: ${password}`);
            router.push('/');
          
          } else {
            toast.error("Authentication failed. Please check your credentials.");
          }
    };


    const handleGoogleSignIn = () => {
        // Placeholder for Google sign-in logic
        alert("Google sign-in clicked");
      };
    
      const handleAppleSignIn = () => {
        // Placeholder for Apple sign-in logic
        alert("Apple sign-in clicked");
      };



      return {
        step,
        email,
        password,
        setEmail,
        setPassword,
        handleEmailSubmit,
        handlePasswordSubmit,
        handleGoogleSignIn,
        handleAppleSignIn,
      };
}