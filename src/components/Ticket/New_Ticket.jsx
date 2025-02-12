import React, { useState } from "react";
import { Upload, Download, Tag } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ticketTemplate from "./New_Ticket.png"; // Ensure this path is correct

const Ticket = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    branch: "",
    registrationNumber: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [ticketPreview, setTicketPreview] = useState(null);

  const handleInputChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setSelectedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const createTicketImage = async () => {
    return new Promise((resolve) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = ticketTemplate;
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        ctx.fillStyle = "#fff";
        ctx.textAlign = "center";
        ctx.font = "bold 40px Inter, sans-serif";
        ctx.fillText(formData.userName, canvas.width / 2, 300);
        ctx.font = "24px Inter, sans-serif";
        ctx.fillText(formData.userEmail, canvas.width / 2, 350);
        ctx.fillText(`Branch: ${formData.branch}`, canvas.width / 2, 400);
        ctx.fillText(`Reg No: ${formData.registrationNumber}`, canvas.width / 2, 450);

        if (selectedImage) {
          const profileImg = new Image();
          profileImg.src = selectedImage;
          profileImg.onload = () => {
            ctx.save();
            ctx.beginPath();
            ctx.arc(150, 150, 50, 0, Math.PI * 2);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(profileImg, 100, 100, 100, 100);
            ctx.restore();
            resolve(canvas.toDataURL("image/png"));
          };
        } else {
          resolve(canvas.toDataURL("image/png"));
        }
      };
    });
  };

  const handleGenerateTicket = async () => {
    if (!formData.userName || !formData.userEmail || !formData.branch || !formData.registrationNumber) {
      alert("Please fill in all fields.");
      return;
    }
    const ticketDataUrl = await createTicketImage();
    setTicketPreview(ticketDataUrl);
    setShowPreview(true);
  };

  const handleDownloadTicket = () => {
    const link = document.createElement("a");
    link.href = ticketPreview;
    link.download = `${formData.userName}_Eterno_Horizon_Ticket.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl font-bold text-center">
            <Tag className="w-6 h-6" />
            Eterno Horizon Ticket 2025
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Label htmlFor="userName">Full Name</Label>
            <Input id="userName" value={formData.userName} onChange={handleInputChange("userName")} />
            <Label htmlFor="userEmail">Email</Label>
            <Input id="userEmail" type="email" value={formData.userEmail} onChange={handleInputChange("userEmail")} />
            <Label htmlFor="branch">Branch</Label>
            <Input id="branch" value={formData.branch} onChange={handleInputChange("branch")} />
            <Label htmlFor="registrationNumber">Registration Number</Label>
            <Input id="registrationNumber" value={formData.registrationNumber} onChange={handleInputChange("registrationNumber")} />
            <Label>Profile Picture</Label>
            <Input type="file" accept="image/*" onChange={handleProfileImageChange} />
          </div>
          <Button onClick={handleGenerateTicket}>
            <Upload className="w-4 h-4 mr-2" /> Generate Ticket
          </Button>
        </CardContent>
      </Card>

      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ticket Preview</DialogTitle>
          </DialogHeader>
          {ticketPreview && <img src={ticketPreview} alt="Ticket Preview" className="w-full" />}
          <DialogFooter>
            <Button onClick={handleDownloadTicket}>
              <Download className="w-4 h-4 mr-2" /> Download Ticket
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Ticket;
