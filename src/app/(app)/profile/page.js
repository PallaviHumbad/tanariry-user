"use client";

import { useState, useEffect } from "react";
import StayInspired from "@/components/home/StayInspired";
import { useAuth } from '@/context/AuthContext';
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function ProfilePage() {
  const { user, setUser, loading: authLoading } = useAuth();
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    country: "India",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Redirect if not logged in
  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/auth/login");
    }
  }, [user, authLoading, router]);

  // Fill form with user data (addresses bhi aayenge)
  useEffect(() => {
    if (user) {
      const addresses = Array.isArray(user.addresses) ? user.addresses : [];
      const primary = addresses[0] || {};

    
    //  console.log("USER IN PROFILE:", user); // DEBUG
    //  console.log("ADDRESSES ARRAY:", addresses); // DEBUG

      setFormData({
        firstName: user.firstName || user.name?.split(" ")[0] || "",
        lastName: user.lastName || user.name?.split(" ").slice(1).join(" ") || "",
        email: user.email || "",
        phone: user.phone || "",
        address: primary.address || "",
        pincode: primary.pincode || "",
        city: primary.city || "",
        state: primary.state || "",
        country: primary.country || "India",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
      setError("New passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      const API = process.env.NEXT_PUBLIC_API_BASE_URL;
      const token = localStorage.getItem('token');

      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        addresses: [
          {
            address: formData.address,
            pincode: formData.pincode,
            city: formData.city,
            state: formData.state,
            country: formData.country,
          },
        ],
      };

      if (formData.currentPassword && formData.newPassword) {
        payload.currentPassword = formData.currentPassword;
        payload.newPassword = formData.newPassword;
      }

      const res = await fetch(`${API}/api/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Update failed");

      // Update user with fresh data
      const updatedUser = {
        ...user,
        firstName: data.customer?.firstName || formData.firstName,
        lastName: data.customer?.lastName || formData.lastName,
        email: data.customer?.email || formData.email,
        phone: data.customer?.phone || formData.phone,
        addresses: Array.isArray(data.customer?.addresses)
          ? data.customer.addresses
          : payload.addresses,
      };

      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);

      setSuccess("Profile updated successfully!");
      setTimeout(() => setSuccess(""), 3000);

      setFormData(prev => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      }));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Loader while auth loading
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin" size={32} />
      </div>
    );
  }

  if (!user) return null;

  return (
    <>
      <div className="w-full bg-background flex justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full space-y-8">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              My Account
            </h1>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl md:text-3xl mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Account Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full h-10 px-4 border border-gray-300 rounded-md bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d87f4a] transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full h-10 px-4 border border-gray-300 rounded-md bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d87f4a] transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email address <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full h-10 px-4 border border-gray-300 rounded-md bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d87f4a] transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="phone"
                    type="text"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full h-10 px-4 border border-gray-300 rounded-md bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d87f4a] transition"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="address"
                    type="text"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full h-10 px-4 border border-gray-300 rounded-md bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d87f4a] transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <input
                    name="pincode"
                    type="text"
                    placeholder="Pincode *"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full h-10 px-4 border border-gray-300 rounded-md bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d87f4a] transition"
                  />
                  <input
                    name="city"
                    type="text"
                    placeholder="City *"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full h-10 px-4 border border-gray-300 rounded-md bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d87f4a] transition"
                  />
                  <input
                    name="state"
                    type="text"
                    placeholder="State *"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full h-10 px-4 border border-gray-300 rounded-md bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d87f4a] transition"
                  />
                  <input
                    name="country"
                    type="text"
                    value={formData.country}
                    onChange={handleChange}
                    disabled
                    className="w-full h-10 px-4 border border-gray-300 rounded-md bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d87f4a] transition"
                  />
                </div>
              </div>

              <div className="h-px bg-gray-200 my-8"></div>

              {/* <h3 className="text-xl md:text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                Password change
              </h3>

              <div className="space-y-4">
                <input
                  name="currentPassword"
                  type="password"
                  placeholder="Current password (leave blank to leave unchanged)"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full h-10 px-4 border border-gray-300 rounded-md bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d87f4a] transition"
                />
                <input
                  name="newPassword"
                  type="password"
                  placeholder="New password (leave blank to leave unchanged)"
                  value={formData.newPassword}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full h-10 px-4 border border-gray-300 rounded-md bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d87f4a] transition"
                />
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm new password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full h-10 px-4 border border-gray-300 rounded-md bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d87f4a] transition"
                />
              </div> */}

              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm text-center mt-4">
                  {error}
                </div>
              )}
              {success && (
                <div className="bg-green-50 text-green-600 p-3 rounded-md text-sm text-center mt-4">
                  {success}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="bg-black text-white h-10 px-8 rounded-md font-medium hover:bg-gray-800 transition disabled:opacity-50 flex items-center gap-2 mt-6"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={16} />
                    Saving...
                  </>
                ) : (
                  "Save changes"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <StayInspired />
    </>
  );
}