import React, { Fragment } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

interface CustomStatusBarProps {
  children: React.ReactNode;
  statusBgColor?: string;
  barStyle?: 'default' | 'light-content' | 'dark-content';
  bgColor?: string;
}

export default function CustomStatusBar({
  children,
  statusBgColor = '#27364E',
  barStyle = 'light-content',
  bgColor = '#fff',
}: CustomStatusBarProps) {
  return (
    <Fragment>
      <StatusBar backgroundColor={statusBgColor} barStyle={barStyle} />
      <SafeAreaView style={{ flex: 0, backgroundColor: statusBgColor }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: bgColor }}>
        {children}
      </SafeAreaView>
    </Fragment>
  );
}
