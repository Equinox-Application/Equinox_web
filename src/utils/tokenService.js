const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

/**
 * Generate a revlu group token with group UUID, user UUID, and timestamps
 * @returns {Promise<{token: string, groupName: string, groupId: string, userId: string, iat: number, exp: number}>}
 */
export async function generateRevluGroupToken() {
  try {
    const authToken = localStorage.getItem('token');
    if (!authToken) {
      throw new Error('No authentication token found');
    }

    const response = await fetch(`${API_BASE_URL}/groups/token/revlu-group`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error generating revlu group token:', error);
    throw error;
  }
}
