// src/apiService.js

// Change this if you deploy later
const API_URL = 'https://civveo-backend.onrender.com/api'; 

export const joinWaitlist = async (email, role) => {
  try {
    const response = await fetch(`${API_URL}/join`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, role }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    throw error;
  }
};

export const getCount = async () => {
  try {
    const response = await fetch(`${API_URL}/count`);
    const data = await response.json();
    return data.count;
  } catch (error) {
    console.error("Failed to fetch count:", error);
    return 0;
  }
};