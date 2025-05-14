
import { ReactNode } from 'react';

interface ContactItemProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

const ContactItem = ({ icon, title, children }: ContactItemProps) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-iberico-100 p-3 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium text-iberico-800">{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default ContactItem;
