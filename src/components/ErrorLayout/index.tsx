import React from 'react';
import { Layout, Text, Button, Icon, IconProps } from '@ui-kitten/components';

import styles from './styles';

type PropTypes = {
  text: string;
  onRefresh: () => void;
};

const RefreshIcon = (props: IconProps) => <Icon {...props} name="refresh" />;

const ErrorLayout: React.FC<PropTypes> = React.memo(({ text, onRefresh }: PropTypes) => {
  return (
    <Layout style={styles.centerLayout}>
      <Text style={styles.errorText}>{text}</Text>
      <Button accessoryLeft={RefreshIcon} onPress={onRefresh}>
        Refresh
      </Button>
    </Layout>
  );
});

export default ErrorLayout;
