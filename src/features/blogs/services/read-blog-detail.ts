import api from "@/lib/api";
import type { BlogType } from "@/types/models/blog-type";
import { handleApiError } from "@/utils/error/api-error-handler";

export const isBlogType = (
  data: BlogType | { error: string }
): data is BlogType => {
  return !("error" in data);
};

export const readBlogDetailService = async (
  id: string
): Promise<BlogType | { error: string }> => {
  try {
    const blog = (await api.get(`/blogs/${id}`)).data;

    return blog;
  } catch (error: any) {
    const errorMessage = handleApiError(error, "blog");
    return { error: errorMessage };
  }
};
