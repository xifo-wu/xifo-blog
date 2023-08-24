import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
  return <div className="relative h-full p-4 overflow-y-auto bg-white rounded-lg w-hull page-container">{children}</div>;
};

export default PageContainer;
