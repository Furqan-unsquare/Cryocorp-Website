import { useCallback, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Blog } from "@/types/blog";

const useBlogs = () => {
  const { token, logout } = useAuth();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getBlogs = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(" https://api.cryocorp.in/api/blogs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...(token
            ? {
                Authorization: `Bearer ${
                  token || localStorage.getItem("auth_token")
                }`,
              }
            : {}),
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        if (
          errorData.message === "Invalid or expired token" ||
          errorData.message === "Admin account no longer exists"
        ) {
          logout();
          window.location.href = "/login";
        }
        throw new Error(
          errorData.message ||
            `Failed to fetch blogs (Status: ${response.status})`
        );
      }

      const data: Blog[] = await response.json();
      setBlogs(data);
      return data;
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  }, [token, logout]);

  const getBlogById = async (id: string): Promise<Blog | null> => {
    try {
      const res = await fetch(` https://api.cryocorp.in/api/blogs/${id}`);
      if (!res.ok) throw new Error("Blog not found");
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching blog by ID:", error);
      return null;
    }
  };

  const createBlog = useCallback(
    async (data: Omit<Blog, "id" | "author" | "createdAt" | "updatedAt">) => {
      try {
        const response = await fetch(" https://api.cryocorp.in/api/blogs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${
              token || localStorage.getItem("auth_token")
            }`,
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          if (
            errorData.message === "Invalid or expired token" ||
            errorData.message === "Admin account no longer exists"
          ) {
            logout();
            window.location.href = "/login";
          }
          throw new Error(
            errorData.message ||
              `Failed to create blog (Status: ${response.status})`
          );
        }

        const result = await response.json();
        setBlogs((prev) => [...prev, result.blog]);
        return result;
      } catch (error: any) {
        throw new Error(error.message || "Failed to create blog");
      }
    },
    [token, logout]
  );

  const updateBlog = useCallback(
    async ({ id, ...data }: Partial<Blog> & { id: string }) => {
      try {
        const response = await fetch(
          ` https://api.cryocorp.in/api/blogs/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${
                token || localStorage.getItem("auth_token")
              }`,
            },
            body: JSON.stringify(data),
          }
        );

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          if (
            errorData.message === "Invalid or expired token" ||
            errorData.message === "Admin account no longer exists"
          ) {
            logout();
            window.location.href = "/login";
          }
          throw new Error(
            errorData.message ||
              `Failed to update blog (Status: ${response.status})`
          );
        }

        const result = await response.json();
        setBlogs((prev) =>
          prev.map((blog) => (blog.id === id ? result.blog : blog))
        );
        return result;
      } catch (error: any) {
        throw new Error(error.message || "Failed to update blog");
      }
    },
    [token, logout]
  );

  const deleteBlog = useCallback(
    async (id: string) => {
      try {
        const response = await fetch(
          ` https://api.cryocorp.in/api/blogs/${id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${
                token || localStorage.getItem("auth_token")
              }`,
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          if (
            errorData.message === "Invalid or expired token" ||
            errorData.message === "Admin account no longer exists"
          ) {
            logout();
            window.location.href = "/login";
          }
          throw new Error(
            errorData.message ||
              `Failed to delete blog (Status: ${response.status})`
          );
        }

        setBlogs((prev) => prev.filter((blog) => blog.id !== id));
        return await response.json();
      } catch (error: any) {
        throw new Error(error.message || "Failed to delete blog");
      }
    },
    [token, logout]
  );

  return {
    blogs,
    loading,
    getBlogs,
    createBlog,
    updateBlog,
    deleteBlog,
    getBlogById,
  };
};

export default useBlogs;
