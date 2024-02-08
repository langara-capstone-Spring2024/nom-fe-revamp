export interface UserAvatarProps {
  source?: string;
  sizing?: number | "small" | "medium" | "large" | "xlarge";
  title?: string;
  onPress?: () => void;
}
