/**
 * API Error Handler Utility
 *
 * Fungsi untuk menangani error dari API calls dan mengkonversi
 * menjadi pesan error yang user-friendly dalam bahasa Indonesia.
 */

export const handleApiError = (error: any, context: string = "data"): string => {
  let errorMessage = `Terjadi kesalahan saat mengambil ${context}`;

  if (error.status === 404) {
    errorMessage = `Konten ${context} tidak ditemukan, silakan coba lagi nanti`;
  } else if (error.status >= 500) {
    errorMessage = "Terjadi masalah pada server, silakan coba lagi nanti";
  } else if (error.message && error.message.includes("timeout")) {
    errorMessage =
      "Waktu permintaan habis, periksa koneksi internet Anda dan coba lagi";
  } else if (error.message && error.message.includes("Network Error")) {
    errorMessage =
      "Tidak dapat terhubung ke server, periksa koneksi internet Anda";
  }

  console.error(`Gagal mengambil ${context}:`, error);
  return errorMessage;
};
