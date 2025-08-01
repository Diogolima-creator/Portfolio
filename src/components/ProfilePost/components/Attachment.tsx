import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'styled-components';

const AttachmentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 10px 0;
  padding: 8px 12px;
  background: var(--roxo);
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  max-width: fit-content;
  align-self: flex-end;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;

const AttachmentText = styled.p`
  color: white;
  font-weight: 700;
  font-size: 15px;
  margin:0;
`;

interface AttachmentProps {
  text: string;
  url: string;
}

export const Attachment = ({ text, url }: AttachmentProps) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = url;
    link.download = text.replace(/\s+/g, '_') + '.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AttachmentContainer onClick={handleDownload}>
      <FontAwesomeIcon icon={faDownload} style={{ color: 'white', fontSize: '16px' }} />
      <AttachmentText>{text}</AttachmentText>
    </AttachmentContainer>
  );
}; 