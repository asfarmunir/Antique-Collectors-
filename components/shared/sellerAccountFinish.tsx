import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/Dialog";
import Button from "../ui/Button";
import { RxCross2 } from "react-icons/rx";
import Checkbox1 from "../ui/tickbox";
import { useSellerAccountDetails, SellerData } from "@/hooks/useSellerAccount";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SellerAccountFinish = ({ onClose, sellerData }: { onClose: any, sellerData: SellerData }) => {
  const { formData, setFormData, handleUpdate } = useSellerAccountDetails({ initialData: sellerData });
  const [isDialogOpen, setIsDialogOpen] = useState(true); // Manage dialog state locally
  const router = useRouter();

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    onClose(); // Notify parent component
  };


  const handleFinish = () => {
    onClose();
    toast.success("account setup completed");
    router.push('/');
};


  return (
    <div className="relative">
      <Dialog
        open={isDialogOpen}
        onOpenChange={(isOpen) => {
          if (!isOpen) handleDialogClose();
        }}
      >
        <DialogContent className="font-playfair max-h-[90vh] overflow-y-auto" customWidth="max-w-2xl md:my-4 overflow-x-auto">
          <DialogHeader className="font-playfair text-xl border-b border-[#EBE9E0] pb-2">
            <DialogTitle>
              <Button
                onClick={handleDialogClose}
                icon={<RxCross2 className="text-black" />}
                label=""
                className="bg-transparent absolute right-0 top-4"
              />
              <h1 className="font-playfair text-base uppercase text-start">Apply for seller</h1>
            </DialogTitle>
          </DialogHeader>

          <div className="px-2 md:px-6">
            <h1 className="text-3xl">Stay in the Loop</h1>
            <p className="text-xs py-2 font-sans">Never Miss a New Arrival</p>

            <div className="flex items-center gap-2 py-7">
              <Checkbox1
                name="notifications"
                checked={formData.enableNotifications}
                onChange={() =>
                  setFormData((prev: any) => ({
                    ...prev,
                    enableNotifications: !prev.enableNotifications,
                  }))
                }
              />
              <label htmlFor="notifications" className="text-[11px] uppercase font-sans tracking-wider">
                Enable email notifications to get updates on items matching your preferences.
              </label>
            </div>

            <Button
              label="Finish Setting Up My Account"
              onClick={handleFinish}
              className="uppercase w-full text-xs font-sans"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SellerAccountFinish;
