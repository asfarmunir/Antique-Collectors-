import { useState, useEffect } from "react";
import { Seller, SellerDetails } from "@/type/types";



export const useSellers = ()=>{
    const [sellers, setSellers] = useState<Seller[]>();
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchSellers = async () => {
          try {
            const response = await fetch("/api/sellers");
            setSellers(response.data);
          } catch (err) {
            setError("Failed to fetch sellers.");
          }}

          fetchSellers();
        },[]);



        return {sellers, error};

}


export const useSellerDetails = (sellerId: string) => {
    const [sellerDetails, setSellerDetails] = useState<SellerDetails | null>(null);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchSellerDetails = async () => {
        try {
          const response = await fetch(`/api/sellers/${sellerId}`);
          setSellerDetails(response.data);
        } catch (err) {
          setError("Failed to fetch seller details.");
        }
      };
  
      if (sellerId) {
        fetchSellerDetails();
      }
    }, [sellerId]);
  
    return { sellerDetails, error };
  }; 