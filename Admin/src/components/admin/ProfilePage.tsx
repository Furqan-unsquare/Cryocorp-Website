import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, Mail, Calendar, Shield, Lock, Eye, EyeOff } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ProfilePage = () => {
  const { user, token, logout } = useAuth();
  const [editing, setEditing] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  useEffect(() => {
    setFormData({
      name: user?.name || "",
      email: user?.email || "",
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  }, [user]);

  const handleSave = async () => {
    if (formData.newPassword !== formData.confirmNewPassword) {
      toast({
        title: "Error",
        description: "New password and confirm password do not match",
        variant: "destructive",
      });
      return;
    }

    try {
      const authToken = token || localStorage.getItem("auth_token");
      if (!authToken) {
        toast({
          title: "Error",
          description: "No authentication token found. Please log in again.",
          variant: "destructive",
        });
        logout();
        window.location.href = "/login";
        return;
      }

      const updateData = {
        name: formData.name,
        email: formData.email,
      };
      if (formData.oldPassword && formData.newPassword) {
        updateData.oldPassword = formData.oldPassword;
        updateData.newPassword = formData.newPassword;
      }

      const response = await fetch(
        " https://api.cryocorp.in/api/admin/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify(updateData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("user_data", JSON.stringify(data.admin));
        toast({
          title: "Profile updated",
          description: "Your profile has been successfully updated.",
        });
        setEditing(false);
        setFormData((prev) => ({
          ...prev,
          oldPassword: "",
          newPassword: "",
          confirmNewPassword: "",
        }));
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to update profile",
          variant: "destructive",
        });
        if (
          data.message === "Invalid or expired token" ||
          data.message === "Admin account no longer exists"
        ) {
          logout();
          window.location.href = "/login";
        }
      }
    } catch (error) {
      console.error("Update profile error:", error);
      toast({
        title: "Error",
        description: "Failed to connect to the server. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || "",
      email: user?.email || "",
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
    setEditing(false);
  };

  const toggleShowOldPassword = () => setShowOldPassword(!showOldPassword);
  const toggleShowNewPassword = () => setShowNewPassword(!showNewPassword);
  const toggleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="p-6  mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Profile Settings</h1>
          <p className="text-gray-600">Manage your account information</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Profile Overview */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="text-lg">
                  {user?.name?.charAt(0).toUpperCase() || "A"}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{user?.name}</CardTitle>
                <CardDescription className="flex items-center mt-1">
                  <Shield className="h-4 w-4 mr-1" />
                  Administrator
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Profile Information */}
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Update your personal details here</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="pl-10"
                    disabled={!editing}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="pl-10"
                    disabled={!editing}
                  />
                </div>
              </div>
            </div>
            {editing && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="oldPassword">Old Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="oldPassword"
                      type={showOldPassword ? "text" : "password"}
                      value={formData.oldPassword}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          oldPassword: e.target.value,
                        }))
                      }
                      className="pl-10 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-1 top-1 h-7 w-7"
                      onClick={toggleShowOldPassword}
                    >
                      {showOldPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
                <div>
                  <Label htmlFor="newPassword">New Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="newPassword"
                      type={showNewPassword ? "text" : "password"}
                      value={formData.newPassword}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          newPassword: e.target.value,
                        }))
                      }
                      className="pl-10 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-1 top-1 h-7 w-7"
                      onClick={toggleShowNewPassword}
                    >
                      {showNewPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
                <div>
                  <Label htmlFor="confirmNewPassword">
                    Confirm New Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="confirmNewPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.confirmNewPassword}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          confirmNewPassword: e.target.value,
                        }))
                      }
                      className="pl-10 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-1 top-1 h-7 w-7"
                      onClick={toggleShowConfirmPassword}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            )}
            <div className="flex justify-end space-x-2 pt-4">
              {editing ? (
                <>
                  <Button variant="outline" onClick={handleCancel}>
                    Cancel
                  </Button>
                  <Button onClick={handleSave}>Save Changes</Button>
                </>
              ) : (
                <Button onClick={() => setEditing(true)}>Edit Profile</Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Account Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Account Statistics</CardTitle>
            <CardDescription>Overview of your account activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm text-blue-600 font-medium">
                    Member Since
                  </span>
                </div>
                <p className="text-lg font-semibold text-blue-900 mt-1">
                  {new Date().getFullYear()}
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm text-green-600 font-medium">
                    Role
                  </span>
                </div>
                <p className="text-lg font-semibold text-green-900 mt-1">
                  Administrator
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-purple-600 mr-2" />
                  <span className="text-sm text-purple-600 font-medium">
                    Status
                  </span>
                </div>
                <p className="text-lg font-semibold text-purple-900 mt-1">
                  Active
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
