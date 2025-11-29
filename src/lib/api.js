// src/lib/api.js — FULLY UPDATED FOR NEW BACKEND (ecom-backend-new-5v6o.onrender.com)

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_BASE) {
  throw new Error("NEXT_PUBLIC_API_BASE_URL is missing! Set it in .env.local");
}

// Generic API caller with proper error handling
const apiCall = async (endpoint, options = {}) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    clearTimeout(timeoutId);

    const text = await response.text();

    if (!response.ok) {
      if (
        text.includes("Too many") ||
        text.includes("waking up") ||
        text.includes("example")
      ) {
        throw new Error("Server is starting... Please wait 30 seconds and try again");
      }
      throw new Error(text || `HTTP ${response.status}`);
    }

    // -------- FIX: Parse array AND object JSON ----------
    if (text && (text.trim().startsWith("{") || text.trim().startsWith("["))) {
      return JSON.parse(text);
    }

    return text;

  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Request timed out. Server might be sleeping...");
    }
    throw error instanceof Error ? error : new Error("Network error");
  }
};


// === AUTH FUNCTIONS (NEW BACKEND) ===
export const loginUser = async (identifier, password) => {
  return apiCall("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({
      identifier: identifier.trim(),
      password,
    }),
  });
};

// === PRODUCTS (NEW ENDPOINTS) ===
export const fetchAllProducts = async () => {
  const res = await apiCall("/api/products/getallproducts");

  // If backend returns array (your case)
  if (Array.isArray(res)) return res;

  // If backend wraps array inside products or data
  if (Array.isArray(res?.products)) return res.products;
  if (Array.isArray(res?.data)) return res.data;

  // If nothing matches, return empty array
  return [];
};



export const fetchProduct = async (productId) => {
  if (!productId) throw new Error("Product ID is required");

  const res = await apiCall(`/api/products/getproductbyid/${productId}`);

  // YE SABSE ZAROORI LINE HAI — TERE BACKEND SE DATA.OBJECT AATA HAI
  return res?.data || res || null;
};

// === CUSTOMER PROFILE ===
export const getCustomerProfile = async (token) => {
  return apiCall("/api/customers/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateCustomerProfile = async (token, data) => {
  return apiCall("/api/customers/me", {
    method: "PUT",
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify(data),
  });
};

// Token helpers
export const getToken = () => {
  return typeof window !== "undefined" ? localStorage.getItem("token") : null;
};

export const saveToken = (token) => {
  localStorage.setItem("token", token);
};

export const removeToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export { apiCall };