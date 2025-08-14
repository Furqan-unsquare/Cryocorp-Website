
export interface Blog {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  coverImage?: string; // Base64 encoded image
  slug: string;
  createdAt: string;
  updatedAt: string;
  published: boolean;
  tags: string[];
}

export interface CreateBlogRequest {
  title: string;
  content: string;
  excerpt: string;
  coverImage?: string;
  tags: string[];
  published: boolean;
}

export interface UpdateBlogRequest extends Partial<CreateBlogRequest> {
  id: string;
}
