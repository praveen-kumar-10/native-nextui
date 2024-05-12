import React from 'react';
import { Pressable, StyleSheet, Text, type PressableProps } from 'react-native';

interface ButtonProps extends PressableProps {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <Pressable style={styles.wrapper} {...props}>
      <Text style={styles.label}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#006fee',
    borderRadius: 8,
  },
  label: {
    color: '#ffffff',
    fontSize: 20,
  },
});
