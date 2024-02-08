import { Avatar } from "react-native-elements";
import { UserAvatarProps } from "./UserAvatar.props";

const UserAvatar = (props: UserAvatarProps) => {
  const { source, sizing, title, onPress } = props;

  return (
    <Avatar
      title={title}
      containerStyle={{ backgroundColor: "grey" }}
      source={source ? { uri: source } : undefined}
      size={sizing}
      onPress={onPress}
      rounded
    />
  );
};

export default UserAvatar;
