import type { BlogType } from "@/types/models/blog-type";
import api from "@/lib/api";

export const readBlogsService = async (): Promise<
  BlogType[] | { error: string }
> => {
  try {
    const blogs = (await api.get("/blogs")).data;
    return blogs;
  } catch (error: any) {
    let errorMessage = "Terjadi kesalahan saat mengambil data blog";

    if (error.status === 404) {
      errorMessage = "Konten blog tidak ditemukan, silakan coba lagi nanti";
    } else if (error.status >= 500) {
      errorMessage = "Terjadi masalah pada server, silakan coba lagi nanti";
    } else if (error.message && error.message.includes("timeout")) {
      errorMessage =
        "Waktu permintaan habis, periksa koneksi internet Anda dan coba lagi";
    } else if (error.message && error.message.includes("Network Error")) {
      errorMessage =
        "Tidak dapat terhubung ke server, periksa koneksi internet Anda";
    }

    console.error("Gagal mengambil data blog:", error);
    return { error: errorMessage };
  }
};
