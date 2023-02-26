import React from 'react';
import {Text, ViewStyle} from 'react-native';

interface BlogCardSubtitleTextProps {
  text: string;
  style: ViewStyle;
}

const BlogCardSubtitleText: React.FC<BlogCardSubtitleTextProps> = ({
  text,
  style,
}) => {
  const shortenText = (): string => {
    const textLengthAllowed = 150;
    return text.length > textLengthAllowed
      ? text.substring(0, textLengthAllowed).trimEnd().concat('...')
      : text;
  };
  return <Text style={style}>{shortenText()}</Text>;
};

export default BlogCardSubtitleText;
