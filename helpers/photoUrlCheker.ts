export const photoUrlCheker = (url: string) => {
  const permission: boolean = false;

  if (
    url.includes('images.pexels.com') ||
    url.includes('images.unsplash.com') ||
    url.includes('res.cloudinary.com')
  ) {
    return true;
  }

  return false;
};
