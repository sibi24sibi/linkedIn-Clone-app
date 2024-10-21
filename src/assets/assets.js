import linkedinSmallLogo from "./images/logo.png";
import linkedinBigLogo from "./images/LinkedIn-Logo.png";
import defaultProfile from "./images/image.jpg";
import defaultCoverImage from "./images/cover2.webp";
import errorImg from '../assets/images/Likedin-error-image.png'
import NoPost from '../assets/images/Screenshot 2024-10-14 221043.png'

// Function to format the timestamp
export const formatTimestamp = (timestamp) => {
  const now = new Date();
  const timeDiff = now - timestamp.toDate(); // Convert Firestore timestamp to JavaScript Date

  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  if (minutes < 60) return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  if (hours < 24) return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  return `${days} day${days !== 1 ? "s" : ""} ago`;
};

// Named exports
export {
  linkedinSmallLogo,
  linkedinBigLogo,
  defaultProfile,
  defaultCoverImage,
  errorImg,
  NoPost
};
