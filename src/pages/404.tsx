import React from 'react';
import styles from '@/styles/Error.module.css';
import { errorSvg } from '@/components/ui/error';

interface IErrorPageProps {
  message?: string;
}

class ErrorPage extends React.Component<IErrorPageProps> {
  render() {
    const { message } = this.props;
    return (
      <main className={styles.error_page}>
        {errorSvg}
        <h3>{message || 'Page not found: Error 404'}</h3>
      </main>
    );
  }
}

export default ErrorPage;
