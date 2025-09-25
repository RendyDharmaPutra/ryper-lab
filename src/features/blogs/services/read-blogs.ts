import type { BlogType } from "@/types/models/blog-type";
import api from "@/lib/api";
import { handleApiError } from "@/utils/error/api-error-handler";

export const isBlogArray = (
  data: BlogType[] | { error: string }
): data is BlogType[] => {
  return Array.isArray(data);
};

export const readBlogsService = async (): Promise<
  BlogType[] | { error: string }
> => {
  try {
    const blogs = (await api.get("/blogs")).data;
    return blogs;
  } catch (error: any) {
    const errorMessage = handleApiError(error, "data blog");
    return { error: errorMessage };
  }
};
